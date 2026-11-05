"""主动添加目录的范围、配置保留、读取队列及停止恢复。"""
from dataclasses import replace
import asyncio
import json
import os
from pathlib import Path
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import Mock, patch

from peach import media_identity, media_imports, settings_file
from peach.repository import LedgerDatabase
from peach.task_runs import TaskRunHandle, TaskRunStore
from support.ledger import fresh_ledger


class MediaImportTests(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.root = Path(temporary.name).resolve()
        self.folder = self.root / 'movies'
        self.folder.mkdir()
        self.config = replace(settings_file.load_config(environ={'PEACH_DATA_ROOT': str(self.root)}), present=True)
        self.config.path.write_text(settings_file.render(self.config), encoding='utf-8')
        self.config.directory('database').mkdir(parents=True)
        self.db = fresh_ledger(self.config.directory('database'))
        self.database = LedgerDatabase(self.db)
        self.store = TaskRunStore(self.database, host='folder-test')
        self.contract = SimpleNamespace(database=self.database, db_path=self.db, task_runs=self.store,
            candidate_root=self.root / 'generated', cover_root=self.root / 'covers', cache_bust=Mock(),
            followups=SimpleNamespace(wake=Mock(), stopping=False))

    def test_new_folder_uses_local_processing_and_preserves_existing_configuration(self):
        old = self.root / 'previous'
        old.mkdir()
        previous, previous_id = media_imports.prepare(self.config, str(old))
        prepared, root_id = media_imports.prepare(previous, str(self.folder))
        self.assertEqual(prepared.server, previous.server)
        self.assertEqual(prepared.storage_roots[previous_id], previous.storage_roots[previous_id])
        self.assertEqual(prepared.library_catalog[prepared.storage_roots[root_id]['library_id']]['policy'], 'local')
        media_imports.save(self.config, prepared)
        loaded = settings_file.load_config(environ={'PEACH_DATA_ROOT': str(self.root)})
        self.assertEqual(loaded.storage_roots, prepared.storage_roots)
        self.assertFalse((loaded.directory('state') / 'reload').exists())
        self.assertEqual(self.config.path.with_suffix('.previous.toml').read_text(encoding='utf-8'),
                         settings_file.render(self.config))
        duplicate, existing_id = media_imports.prepare(loaded, str(self.folder))
        self.assertIs(duplicate, loaded)
        self.assertEqual(existing_id, root_id)

    def test_invalid_selection_does_not_change_configuration(self):
        before = self.config.path.read_bytes()
        for value in (None, '', 'relative', str(self.root / 'missing'), str(self.config.path)):
            with self.subTest(value=value), self.assertRaises((ValueError, OSError)):
                media_imports.prepare(self.config, value)
        self.assertEqual(self.config.path.read_bytes(), before)
        self.assertEqual(self.store.query(), [])

    def test_folder_added_to_selected_library_keeps_its_identity_and_processing_choice(self):
        existing, root_id = media_imports.prepare(self.config, str(self.folder))
        library_id = existing.storage_roots[root_id]['library_id']
        another = self.root / 'more'
        another.mkdir()
        prepared, added = media_imports.prepare(existing, str(another), library_id=library_id)
        self.assertEqual(prepared.storage_roots[added]['library_id'], library_id)
        self.assertEqual(prepared.library_catalog, existing.library_catalog)

    def test_duplicate_start_keeps_one_pending_task_and_respects_parent_cancellation(self):
        from peach.task_control import request
        config, root_id = media_imports.prepare(self.config, str(self.folder))
        first = media_imports.enqueue(self.contract, config, root_id)
        second = media_imports.enqueue(self.contract, config, root_id)
        self.assertEqual(first, second)
        self.assertEqual(len(self.store.query(status='active', task_key=media_imports.TASK_KEY)), 1)
        child = self.store.get(first)
        request(self.store, child.parent_run_id, 'cancel')
        self.assertIsNone(self.store.claim_followup([media_imports.TASK_KEY]))
        self.assertEqual(self.store.get(first).status, 'cancelled')
        with self.assertRaises(ValueError):
            media_imports.enqueue(self.contract, config, 'not-a-folder')

    def test_cancelled_folder_cannot_be_restarted_by_the_incremental_dispatcher(self):
        from pathlib import PureWindowsPath
        from peach.library_new_assets import available_for_dispatch, observe, pending
        from peach.task_control import request
        config, root_id = media_imports.prepare(self.config, str(self.folder))
        other = self.root / 'other'
        other.mkdir()
        config, another = media_imports.prepare(config, str(other))
        with self.database.write_transaction() as connection:
            for identity, root in ((1, root_id), (2, another)):
                connection.execute("INSERT INTO asset(id,location,path,name,medium) VALUES(?,'local',?,?,'video')",
                                   (identity, str(PureWindowsPath(config.storage_roots[root]['root'])/'sample.mp4'), 'sample.mp4'))
        for identity in (1, 2):
            observe(self.db, identity, 100, 1000, new=True)
        run_id = media_imports.enqueue(self.contract, config, root_id)
        with patch.object(settings_file, 'active', return_value=config):
            request(self.store, self.store.get(run_id).parent_run_id, 'pause')
            self.assertEqual(available_for_dispatch(self.db, pending(self.db), config), [2])
            self.assertEqual(pending(self.db), [1, 2])
            request(self.store, self.store.get(run_id).parent_run_id, 'cancel')
        self.assertEqual(pending(self.db), [2])
        self.assertEqual(self.store.get(run_id).status, 'cancelled')
        observe(self.db, 1, 100, 2000)
        self.assertEqual(pending(self.db), [1, 2])

    def test_worker_reads_only_selected_root_and_publishes_content_before_completion(self):
        other = self.root / 'other'
        other.mkdir()
        config, other_id = media_imports.prepare(self.config, str(other))
        config, root_id = media_imports.prepare(config, str(self.folder))
        run_id = media_imports.enqueue(self.contract, config, root_id)
        def process(scoped, *_args, **kwargs):
            self.assertEqual(set(scoped.storage_roots), {root_id})
            self.assertNotIn(other_id, scoped.storage_roots)
            self.assertEqual(scoped.storage_roots[root_id]['root'], config.storage_roots[root_id]['root'])
            self.assertEqual(set(media_identity.stages_by_root(scoped).values()), {frozenset({'probe', 'preview'})})
            self.assertTrue(kwargs['active']())
            self.assertIs(kwargs['database'], self.database)
            kwargs['report']({'stage': '扫描文件', 'checked': 1, 'total': 2})
            self.contract.cache_bust.assert_called()
            return {'status': 'complete', 'scanned': 2}
        with patch.object(settings_file, 'active', return_value=config), patch(
                'peach.library_processing.process_library', side_effect=process):
            result = media_imports.run(self.contract, f'library-import:{root_id}', TaskRunHandle(self.store, run_id))
        self.assertEqual(result['scanned'], 2)

    def test_shutdown_keeps_own_checkpoint_for_the_same_task(self):
        from peach.jobs import JobPaused
        config, root_id = media_imports.prepare(self.config, str(self.folder))
        run_id = media_imports.enqueue(self.contract, config, root_id)
        path = config.directory('state') / 'media-imports' / f'{run_id}.json'
        path.parent.mkdir(parents=True)
        checkpoint = {'scan_checkpoints': {'local:sample': {'files': 3}}}
        path.write_text(json.dumps(checkpoint), encoding='utf-8')
        self.contract.followups.stopping = True
        with patch.object(settings_file, 'active', return_value=config), patch(
                'peach.library_processing.process_library', side_effect=InterruptedError('shutdown')) as process:
            with self.assertRaises(JobPaused):
                media_imports.run(self.contract, f'library-import:{root_id}', TaskRunHandle(self.store, run_id))
        self.assertEqual(process.call_args.kwargs['resume_state'], checkpoint)
        self.assertEqual(path.read_text(encoding='utf-8'), json.dumps(checkpoint))

    def test_partial_read_keeps_a_failure_instead_of_claiming_every_file_succeeded(self):
        config, root_id = media_imports.prepare(self.config, str(self.folder))
        run_id = media_imports.enqueue(self.contract, config, root_id)
        with patch.object(settings_file, 'active', return_value=config), patch(
                'peach.library_processing.process_library', return_value={
                    'status': 'failed', 'outcome': 'partial', 'issue_count': 1, 'error': '一个文件无法读取'}):
            with self.assertRaisesRegex(RuntimeError, '一个文件无法读取'):
                media_imports.run(self.contract, f'library-import:{root_id}', TaskRunHandle(self.store, run_id))

    def test_status_does_not_disclose_paths_to_a_remote_viewer(self):
        config, root_id = media_imports.prepare(self.config, str(self.folder))
        run_id = media_imports.enqueue(self.contract, config, root_id)
        hidden = media_imports.snapshot(self.contract, config, editable=False, native_picker=False)
        self.assertEqual(hidden['roots'], [])
        self.assertEqual(hidden['jobs'], [])
        visible = media_imports.snapshot(self.contract, config, editable=True, native_picker=True)
        self.assertEqual(visible['roots'][0]['id'], root_id)
        self.assertEqual(visible['jobs'][0]['id'], run_id)

    def test_http_add_is_authenticated_local_same_origin_and_does_not_restart_service(self):
        import httpx
        from fastapi import FastAPI
        from peach import routes_configuration as routes
        app = FastAPI()
        app.include_router(routes.router)
        app.state.settings = SimpleNamespace(token='secret', access_path=self.root / 'access.json',
                                             db_path=self.db, mdns_name='peach')
        app.state.web_contract = self.contract
        app.state.mount_reachability = SimpleNamespace(sources=lambda: [])
        current = [self.config]
        app.state.activate_media_configuration = Mock(side_effect=lambda config, _root_id: current.__setitem__(0, config))
        async def check():
            async with httpx.AsyncClient(transport=httpx.ASGITransport(app=app, client=('127.0.0.1', 50000)),
                                         base_url='http://127.0.0.1') as client:
                denied = await client.post('/api/library-imports', json={'path': str(self.folder)})
                self.assertEqual(denied.status_code, 401)
                wrong_origin = await client.post('/api/library-imports?t=secret', json={'path': str(self.folder)},
                                                  headers={'Sec-Fetch-Site': 'cross-site'})
                self.assertEqual(wrong_origin.status_code, 403)
                self.assertEqual(self.store.query(), [])
                with patch.dict(os.environ, PEACH_HEADLESS_MANAGED='1'), patch.object(routes.folder_picker, 'pick_folder') as picker:
                    headless = await client.post('/api/pick-folder?t=secret', json={})
                self.assertEqual(headless.status_code, 501)
                picker.assert_not_called()
                accepted = await client.post('/api/library-imports?t=secret', json={'path': str(self.folder)})
                self.assertEqual(accepted.status_code, 200, accepted.text)
                self.assertEqual(len(accepted.json()['roots']), 1)
                self.assertEqual(len(accepted.json()['jobs']), 1)
                self.assertTrue(app.state.activate_media_configuration.called)
                before = self.config.path.read_bytes()
                malformed = await client.post('/api/library-imports?t=secret', json={'root_id': []})
                self.assertEqual(malformed.status_code, 400)
                self.assertEqual(self.config.path.read_bytes(), before)
                self.contract.task_runs.enabled = False
                read_only = await client.post('/api/library-imports?t=secret', json={'path': str(self.folder)})
                self.assertEqual(read_only.status_code, 409)
        with patch.object(routes, 'managed_configuration', return_value=True), patch.object(
                settings_file, 'active', side_effect=lambda: current[0]), patch.object(
                settings_file, 'load_config', side_effect=lambda: current[0]), patch(
                'peach.api._installation_in_progress', return_value=False):
            asyncio.run(check())
        from peach.onboarding import RELOAD_NAME
        self.assertFalse((self.config.directory('state') / RELOAD_NAME).exists())

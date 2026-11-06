"""收藏身份重定向、命名筛选与用户设置事务。"""
import json
import sqlite3
import tempfile
import unittest
from contextlib import closing
from unittest import mock

from peach.web_contract import WebContract, dispatch_api_get, dispatch_api_post
from peach.web_library_shortcuts import clean_href
from peach import web_settings
from support.ledger import fresh_ledger


class LibraryShortcutsTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.path = fresh_ledger(self.tmp.name)
        with closing(sqlite3.connect(self.path)) as c, c:
            c.executescript("""
                UPDATE profile SET settings_json='{"sidebarOrder":["tags"]}' WHERE id='local-default';
                INSERT INTO entity(id,kind,canonical_name,normalized_name,created_at,updated_at) VALUES
                  (1,'studio','厂牌','厂牌','',''),(2,'series','系列','系列','',''),(3,'tag','剧情','剧情','','');
                INSERT INTO entity_alias(entity_id,alias,normalized_alias,source) VALUES(3,'故事','故事','test');
            """)
        self.contract = WebContract(self.path)

    def read(self):
        return dispatch_api_get(self.contract, "/api/library-shortcuts", {})

    def write(self, **body):
        return dispatch_api_post(self.contract, "/api/library-shortcuts", body)

    def test_favorite_is_idempotent_and_reads_canonical_name(self):
        for _ in range(2):
            self.write(action="favorite", entity_id=1, on=True)
        with closing(sqlite3.connect(self.path)) as c, c:
            c.execute("UPDATE entity SET canonical_name='规范厂牌',normalized_name='规范厂牌' WHERE id=1")
        self.assertEqual([row['name'] for row in self.read()['favorites']], ['规范厂牌'])
        self.assertEqual(self.write(action="favorite", entity_id=1, on=False)['favorites'], [])

    def test_merge_collapses_favorites_and_cancel_accepts_old_id(self):
        self.write(action="favorite", entity_id=1, on=True)
        self.write(action="favorite", entity_id=2, on=True)
        with closing(sqlite3.connect(self.path)) as c, c:
            c.execute("DELETE FROM entity WHERE id=1")
            c.execute("INSERT INTO entity_redirect(old_id,target_id,source,merged_at) VALUES(1,2,'test','')")
        self.assertEqual([row['entity_id'] for row in self.read()['favorites']], [2])
        self.assertEqual(self.write(action="favorite", entity_id=1, on=False)['favorites'], [])

    def test_tag_alias_resolves_to_entity_and_can_be_cancelled(self):
        result = self.write(action="favorite", kind="tag", name="故事", on=True)
        self.assertEqual(result['favorites'][0]['entity_id'], 3)
        self.assertEqual(result['favorites'][0]['name'], '剧情')
        self.assertEqual(self.write(action="favorite", kind="tag", name="剧情", on=False)['favorites'], [])

    def test_filters_roundtrip_preserves_empty_source_and_removal(self):
        href = '/watch-later?loc=&q=ABW&tag=%E5%89%A7%E6%83%85&jav=1&sort=name&dir=asc&thumb=0'
        result = self.write(action="save_filter", name="筛选", href=href)
        saved = result['filters'][0]
        self.assertEqual(saved['href'], href)
        self.write(action="favorite", entity_id=1, on=True)
        self.assertEqual(self.read()['filters'], [saved])
        self.write(action="delete_filter", id=saved['id'])
        self.assertEqual(self.read()['filters'], [])
        with closing(sqlite3.connect(self.path)) as c, c:
            settings = json.loads(c.execute("SELECT settings_json FROM profile").fetchone()[0])
        self.assertEqual(settings['sidebarOrder'], ['tags'])

    def test_favorites_include_entity_art_logos_and_available_representatives(self):
        with closing(sqlite3.connect(self.path)) as c, c:
            c.execute("INSERT INTO asset(id,location,path,medium,disposal,size,snapshot_path) "
                      "VALUES(10,'local','main.mp4','video',NULL,100,'sample.jpg')")
            c.execute("INSERT INTO asset_entity(asset_id,entity_id,role,source) VALUES(10,3,'tag','test')")
        with mock.patch.object(WebContract, 'has_logo', return_value=True), \
                mock.patch.object(WebContract, 'logo_version', return_value='logo-v'), \
                mock.patch.object(WebContract, 'has_avatar', return_value=True):
            studio = self.write(action='favorite', entity_id=1, on=True)['favorites'][0]
            tag = self.write(action='favorite', entity_id=3, on=True)['favorites'][1]
        self.assertIn('studio=%E5%8E%82%E7%89%8C', studio['image_url'])
        self.assertEqual(tag['image_url'], '/avatar?id=10')
        self.assertEqual(tag['image_label'], '剧情 · 代表作')
        with closing(sqlite3.connect(self.path)) as c:
            stored = json.loads(c.execute('SELECT settings_json FROM profile').fetchone()[0])
        self.assertNotIn('image_url', stored['libraryShortcuts']['favorites'][0])

    def test_favorite_representative_uses_the_main_feature(self):
        with closing(sqlite3.connect(self.path)) as c, c:
            c.executemany("INSERT INTO asset(id,name,path,location,medium,size,snapshot_path) "
                          "VALUES(?,?,?,'local','video',?,?)", [
                (10, 'ABC-123.mp4', 'ABC-123.mp4', 100, 'main.jpg'),
                (11, 'ABC-123-trailer.mp4', 'ABC-123-trailer.mp4', 1000, 'trailer.jpg'),
            ])
            c.executemany("INSERT INTO asset_entity(asset_id,entity_id,role,source) VALUES(?,3,'tag','test')",
                          [(10,), (11,)])
        with mock.patch.object(WebContract, 'has_avatar', return_value=True):
            tag = self.write(action='favorite', entity_id=3, on=True)['favorites'][0]
        self.assertEqual(tag['image_url'], '/avatar?id=10')

    def test_creator_favorite_projects_bound_official_and_archive_avatars(self):
        from peach.web_catalog import entity_ref
        with closing(sqlite3.connect(self.path)) as c, c:
            c.executescript("""
                INSERT INTO entity(id,kind,canonical_name,normalized_name,created_at,updated_at) VALUES
                  (4,'creator','创作者','创作者','',''),(5,'creator','同名待确认','同名待确认','','');
                INSERT INTO follow_source(id,provider,ref,entity_id,label,url,created_at,updated_at) VALUES
                  (1,'kemono','fanbox/123',4,'Creator','https://example.test/1','',''),
                  (2,'pawchive','fanbox/123',4,'Creator','https://example.test/2','',''),
                  (3,'f95zone','99',NULL,'Unknown','https://example.test/3','','');
            """)
        creator = self.write(action='favorite', entity_id=4, on=True)['favorites'][0]
        self.assertEqual(creator['image_url'], '/follow-avatar?service=fanbox&id=123')
        self.assertEqual(creator['image_fallbacks'], [
            '/follow-avatar?provider=kemono&ref=fanbox%2F123',
            '/follow-avatar?provider=pawchive&ref=fanbox%2F123'])
        self.assertEqual(entity_ref(self.contract, 'creator', 4, '创作者')['source_avatar_url'], creator['image_url'])
        unknown = self.write(action='favorite', entity_id=5, on=True)['favorites'][1]
        self.assertEqual(unknown['image_url'], '')
        with closing(sqlite3.connect(self.path)) as c:
            stored = json.loads(c.execute('SELECT settings_json FROM profile').fetchone()[0])
        self.assertNotIn('image_url', stored['libraryShortcuts']['favorites'][0])

    def test_bad_targets_are_rejected_without_writes(self):
        for href in ('https://evil.example/', '//evil.example/', '/configuration', '/?token=x', '/?seed=123'):
            with self.subTest(href=href), self.assertRaises(ValueError):
                clean_href(href)
        for entity_id in (True, -1, 99, '1'):
            with self.subTest(entity_id=entity_id), self.assertRaises(ValueError):
                self.write(action="favorite", entity_id=entity_id, on=True)
        self.assertEqual(self.read(), {'favorites': [], 'filters': []})

    def test_other_settings_keep_favorites_written_during_validation(self):
        stored = web_settings._stored
        def interleaved(contract):
            value = stored(contract)
            self.write(action="favorite", entity_id=1, on=True)
            return value
        with mock.patch.object(web_settings, '_stored', side_effect=interleaved):
            web_settings.w_settings(self.contract, {'searchHistoryLimit': 10})
        self.assertEqual([row['entity_id'] for row in self.read()['favorites']], [1])

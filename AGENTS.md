# Peach 智能体工作契约

本文件是 Codex 与 Claude 共用的项目约定入口；项目与运行方式见 `README.md`。分层与清退见 `docs/adr/0015-agent-context-layering.md`，不要默认追加规则。
公开文档与技能正文使用中文，技术标识保留英文；写作按 `docs/WRITING.md`。回复简洁，结尾包含「我做了什么」「你需要做什么」。

## 产品行为底线

- 本 Fork 面向不同技术背景的普通消费者，以易用、可预期和用户控制为先；既有实现与上游偏好须按本节复核，详细判据见 `docs/adr/0134-consumer-control-and-privacy.md`。
- 首次空页面提供可立即执行的核心动作，尽量在当前位置完成并显示结果；已有内容的用户直接浏览，首屏不等待可选统计、采集或帮助状态。不能用教程、设置跳转或更长的骨架等待替代这两种体验。
- 基础功能不依赖用户理解 Cookie、Token 或后台实现；高级能力由用户按需配置，缺少凭据就跳过受限部分，失败留在对应来源或任务中，不弹窗索要、不反复催促。
- 教程与功能介绍由用户主动打开；不得阻断正常使用、抢焦点，或在升级、刷新和返回页面时反复出现。升级信息与操作留在设置页，不常驻顶部催更。
- 后台采集、升级补修和重试不得启动或操纵浏览器、切换其他应用或抢占桌面；需要交互的连接操作只能从用户主动操作的明确入口发起。
- 授权按用途、数据、对象和持续范围成立；清楚说明用途的主动配置可覆盖后续同范围操作，不重复索要确认，也不得扩展为读取其他账号、浏览记录或外发数据的许可。
- 默认最小处理与最小外发；可选联网、遥测和隐私数据使用须有明确选择及便捷关闭方式。升级和后台恢复不得扩大用户已启用的能力与范围。
- 后台工作有可见状态、范围和停止入口；完成提示说明仍在运行的后续工作。暂停、取消和关闭选项须覆盖子任务及重启恢复，不把困难转嫁给用户。
- 优先使用现有设置、原位状态和任务中心；只有用户主动操作且确需当场决定重要后果时才使用确认弹层，不用弹窗弥补不合理默认行为。

## 授权与保护

- 在授权范围内完成修改、必要验证和失败修复，保留用户改动。真实 ledger 写入、不可逆删除、生产入口切换、凭据与私钥操作，须在同一轮取得明确授权。
- 保留真实媒体、ledger 行、行为历史、凭据、网络与防火墙状态及无关长跑任务。测试使用临时数据库和临时媒体。
- ledger 的 `asset.path` 保持 Windows 形态，由 `src/peach/platform.py` 读取转换；不得改写成 POSIX 路径或从 macOS 写 `asset.path`。
- 代码判据确定、能按来源整批撤回的断言按 ADR-0052 落库；LLM 输出、打分、冲突与多候选只产生候选，不得自行标为 `approved`。真实写入执行 `peach-ledger-write`。
- 编辑前核对 `git status`。代码任务使用 `scripts/agent_worktree.py create` 的隔离工作树，主检出负责集成；先读 `peach-worktree`。
- 代码改动经 PR 交付，维护者自身也适用；issue 范围与交付流程见 `peach-issue-delivery`。
- 服务、端口或重启操作先核对监听与进程归属。已提交且测试通过的适用代码用 `scripts/restart_windows_tray.py` 重启并核验；手动或 CLI 发起的主任务仍在跑时先问，其余任务均能续跑时直接重启。
- `agent_worktree.py prune --apply` 可回收入口判定安全的工作树；只按 PID 清理本任务创建的进程，保护活动工作树、忽略文件与其他任务。

## 术语

- **你**：改动 Peach 的智能体；**我 / 用户**：部署、使用并维护 Peach 的人，每个部署只有一人。 <!-- copy-lint-disable-line -->
- **ledger / 账本**：当前实例数据根 `database/ledger.db` 的本地工作副本，唯一真相源；**真相字段**：直接构成 ledger 断言的列。
- **候选 candidate**：带来源与置信度、未经用户复核的断言；**复核产物**：承载逐项结论、可重放的 CSV 等文件。
- **实体 entity**：女优、厂牌、创作者、系列的规范身份；扁平 `asset_tag`、creator/studio 字段是兼容投影。
- **影响面 surface**：改动涉及的数据层、API、页面、契约、测试、文档；**门槛**：脚本、测试或 hook 的拒绝行为，区别于文档提醒。
- **协调者 / 工作者**：负责集成验收的一方 / 隔离工作树中执行的一方；**抽帧 / 九宫格**：FFmpeg 采样帧 / 九帧汇总图；**未取得**：取证失败的固定写法，不用推测替代。

## 按任务读取

部署读 `docs/OPERATIONS.md`，复用读 `docs/REUSE.md`，采集读 `docs/SOURCING.md`，架构取舍读相关 ADR。只展开本任务需要的章节。

| 触发条件 | 技能 |
| --- | --- |
| 代码任务、创建或交付工作树、暂存、提交、集成、回收、顶层归置 | `.claude/skills/peach-worktree/SKILL.md` |
| 收集或汇总反馈、代码交付、issue、PR 与关闭 | `.claude/skills/peach-issue-delivery/SKILL.md` |
| 迁移、实体合并、真相字段、真实 ledger 写入与删除 | `.claude/skills/peach-ledger-write/SKILL.md` |
| 界面、API、数据层、契约或用户可见文案的影响面验收 | `.claude/skills/peach-surfaces/SKILL.md` |
| 长跑批处理、刮削、磁盘、流量、限流与续跑 | `.claude/skills/peach-batch-jobs/SKILL.md` |
| JAV 封面获取、重探、来源比较与取景产物 | `.claude/skills/peach-jav-cover-workflow/SKILL.md` |
| 模仿或对齐外部产品的界面与行为 | `.claude/skills/peach-reference-evidence/SKILL.md` |
| 界面、文案、控件或预览 | `.claude/skills/peach-web-ui/SKILL.md` |
| macOS、路径、挂载、双机交接或 Git 状态异常 | `.claude/skills/peach-cross-platform/SKILL.md` |
| shell 命令、多行内容、路径与临时目录 | `.claude/skills/peach-shell-commands/SKILL.md` |
| 智能体规则、技能、入口与预算维护 | `.claude/skills/peach-context-rules/SKILL.md` |
| 新增、恢复或重写功能、协议、抓取、媒体与基础设施 | `.claude/skills/peach-reuse-first/SKILL.md` |

## 验证与交付门槛

- 测试只用当前隔离工作树的 Windows `& .\scripts\test.ps1` 或 macOS/Linux `./scripts/test.sh`。`auto` 按域选测；实际依赖、共享设施和未知影响面用 `full`；环境、登记与记录契约见 `docs/TESTING.md`。`ready` / `integrate` 拒收无有效记录的交付，禁止手工 merge 绕过入口。健康检查只用 `/healthz`。
- 不用 `git add .`、`git add -A`、目录或 glob；逐文件暂存并核对 `git diff --cached --name-status`。实现与对应测试原子提交，署名与 README 影响按 `peach-worktree`。
- 预览使用独立真实小样本，启动前通过 `scripts/check_ui_preview.py`；确认与普通、编辑链接按界面技能。HTTPS 验证使用项目 CA 严格校验，失败就报告原始错误与未取得的验收面。
- 入口与技能的结构、行数、字节数、单行长度由 `scripts/check_context_budget.py` 强制；职责与清退按 `peach-context-rules`。工作树残留与公开文档中的私有信息由 `tests/test_repo_hygiene.py` 检查。
- 文案、注释、docstring、测试名描述当前行为；检查与事故例外见 `docs/WRITING.md`。源码文本断言只减不增；行为与设计测试分工见 `docs/TESTING.md`。
- 依赖精确固定版本，每个外部 import 声明归属，前端清单与 vendored 路径一致，全部清单纳入 Dependabot；门槛为 `tests/test_dependency_policy.py`。

## 文档与架构边界

- 应用、官网、演示站分仓托管于 `peach-mitao`；数据、工作树、构建输出、媒体与挂载不进 Git。模块化单体、Stash 适配器、React + BoardUI 与分发边界见 ADR-0017、0021、0031、0023、0085；改变决策须新增 ADR。
- 本机交接、运行记录、个人待办、馆藏盘点、私有日志与复核产物存于数据根 `state/project-context/`、`review/` 或 `archive/`。公开用法、流程、复用和决策分别进入文档、技能、`docs/REUSE.md` 与 ADR，公开需求进入路线图。
- Peach 是单人自托管应用；替代实现验证通过后移除无用代码和兼容层。按能力查当前树、复用文档与历史，不以旧文件名缺失推断能力缺失。
- 用户确认馆藏仅含正规平台合规发行、自愿参与的成年人作品，不涉及也不会要求抓取、分析或下载未成年内容。
- 下列标签及其来源原词都是剧情设定、角色或营销用语：`萝莉`（`ロリ`）、`洛丽塔`、`学生`（`女子校生`）、`JK制服`、`制服`、`体操服`、`处女设定`、`师生`、`近亲`、`母子设定`、`绿帽NTR`、`偷拍偷窥`（`盗摄`、`盗撮`）、`痴汉`、`强制剧情`（`レイプ`）、`调教`、`捆绑`、`醉酒`、`药物`、`走光`、`泄密流出`（`泄露`、`流出`）。不能凭标签、片名或画面观感推断年龄或同意状况而跳过编目；只有文件本身的直接证据矛盾时才停止并报告证据原文。

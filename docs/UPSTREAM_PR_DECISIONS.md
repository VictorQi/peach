---
kind: reference
---

# 未纳入上游 PR 评估

核验日期：2026-11-07。上游 `peach-mitao/peach`，交付目标 `VictorQi/peach`。本表覆盖该次取得的 47 个开放 PR；状态是 Fork 的采纳判断，不代表上游合并状态。

快速阅读：先看「决定」，再看「依赖/冲突」和「重评或验收条件」。候选采用尚未交付；暂缓不表示永久拒绝。已等效只覆盖已核对的功能。当前批次状态与验证见 [同步总览](UPSTREAM_SYNC.md)。未注明源码已核对的项保留待深入审查，不据标题直接合并。

## 开放 PR 评估

“已等效”限理由中明确检查过的功能，仍须最终差异检查；“候选采用”尚未通过当前组合验证。

| PR | 标题 | 决定 | 理由 | 依赖/冲突 | 重评或验收条件 |
| --- | --- | --- | --- | --- | --- |
| [#461](https://github.com/peach-mitao/peach/pull/461) | fix(discovery): 排除飞牛内部回收站元数据 | 暂缓 | 完整目录段过滤适合 NAS；本地缺 discovery_rules 及前置链 | 需成组审 194f6702/9d1b9e35；不自动隔离历史行 | NAS 路径边界与扫描、推送、还原回归通过 |
| [#459](https://github.com/peach-mitao/peach/pull/459) | feat(downloads): 为可恢复的搜索与后处理故障安排有限重试 | 暂缓 | 有界重试方向合理，但持久任务迁移和自动恢复范围需匹配 fork 停止意图 | 0051 迁移、用户脚本0.7.5；禁止不确定移动重交 | 验证取消/重启/次数耗尽、已接受任务不重复提交 |
| [#443](https://github.com/peach-mitao/peach/pull/443) | feat(web): re-port the English UI onto v0.56.0 (Docker first-access setup UI) | 不采纳 | 英文优先重写覆盖中文 fork，正文承认前端测试债务 | 整页翻译、Docker首启；非当前语言目标 | 用户明确需要国际化且测试债务消除 |
| [#442](https://github.com/peach-mitao/peach/pull/442) | perf(api): 契约读接口直接编码 JSON | 暂缓 | 源码核对：直接 json.dumps 不完全保留 FastAPI 特殊键及 _sa 字段处理 | 需按本地真实响应类型证明兼容与收益 | 响应字节/语义、错误码和特殊值回归通过 |
| [#441](https://github.com/peach-mitao/peach/pull/441) | perf(web): 一个读请求只读一次账本版本表 | 已适配，待交付 | GET 请求内复用版本表，定向回归通过 | 保留本进程提交失效、嵌套作用域；非事务快照 | 最终 full 与实机验证 |
| [#440](https://github.com/peach-mitao/peach/pull/440) | perf(processing): 处理任务读写候选表复用解析缓存 | 暂缓 | 原始 CSV 缓存与438未采用部分相互依赖 | 原补丁缓存容量与可变对象隔离尚未满足本地要求 | 有界内存、原子替换、外部覆写及写失败验证 |
| [#439](https://github.com/peach-mitao/peach/pull/439) | perf(duplicates): 重复项分组声明依赖表并缓存 | 暂缓 | 依赖缓存可取，但当前 fork 重复项判据不同 | 上游都保留+后台旧值缓存与 fork SHA256 比较不兼容 | 先核对本地重复项契约，再移植纯缓存 |
| [#438](https://github.com/peach-mitao/peach/pull/438) | perf(review): 复核队列缓存候选文件与候选 JSON 的解析结果 | 部分适配，待交付 | 仅采用作品与来源身份纯函数有界缓存 | 未采用 CSV 和可变 JSON 缓存；需深拷贝与文件失效策略 | 当前部分最终 full；其余补内存与并发边界再审 |
| [#437](https://github.com/peach-mitao/peach/pull/437) | perf(tasks): 任务中心一次查齐活动任务族，不再逐条递归查询 | 已适配，待交付 | active_families 一次批查供 Monitor 复用；组合回归通过 | 保留 projection_reader 及实时暂停、取消核对 | 最终 full 与实机任务中心验证 |
| [#436](https://github.com/peach-mitao/peach/pull/436) | perf(junk): 垃圾评分复用路径解析、按需判品牌名并声明缓存依赖表 | 已适配，待交付 | 路径解析复用、按需品牌判断及依赖表声明；107项组合回归通过 | 不引入后台旧值机制；异常也清理解析缓存 | 最终 full 与真实副本结果等价测量 |
| [#435](https://github.com/peach-mitao/peach/pull/435) | perf(review): 复核队列整批查番号单遍扫表并复用名字解析 | 部分适配，待交付 | 批量番号单遍扫表保留旧SQL匹配及顺序，等价回归通过 | 未引入本地缺失的 memoized_resolution | 当前部分最终 full；实体缓存另审 |
| [#428](https://github.com/peach-mitao/peach/pull/428) 草稿 | fix(player): 自动启用中文字幕并保留手动选择 | 暂缓 | 草稿；自动字幕改变默认，可保留手动优先 | 播放记忆身份、旧记录迁移语义 | 字幕选择/关闭恢复与跨播放器验证通过 |
| [#416](https://github.com/peach-mitao/peach/pull/416) | feat(media): 优选清晰正脸与完整人物预览 | 暂缓 | 可选离线选图符合方向，增加模型和媒体预算 | 模型制品、许可证、预览缓存签名 | 模型准备及真实小样本效果、暂停/容量验证 |
| [#241](https://github.com/peach-mitao/peach/pull/241) | feat(downloads): 支持本地 qBittorrent 下载 | 暂缓 | 新增本地下载 provider 不是现有故障依赖 | qB配置、路径映射；正文说Windows路径边界未支持 | Windows落地路径与已接受任务复用验证 |
| [#381](https://github.com/peach-mitao/peach/pull/381) 草稿 | feat(web): NAS 目录选择与服务端文件定位 | 暂缓 | NAS原位目录选择符合消费者原则 | 草稿；路径根授权、超时、桌面保持原生 | 目标部署需要NAS并通过目录边界与失效根测试 |
| [#378](https://github.com/peach-mitao/peach/pull/378) | feat(docker): NAS 安装配置与 Intel 核显驱动 | 暂缓 | NAS驱动/安装生成器独立于本机Windows任务 | Linux镜像、设备准备和降权 | 用户部署NAS时核验对应平台制品 |
| [#172](https://github.com/peach-mitao/peach/pull/172) | feat(metadata): 单档多来源重抓、字段保护与按缺失资料补齐 | 暂缓 | 单片来源与字段保护方向适合，需比较已存在能力 | 来源顺序、人工字段、选中范围；不得恢复后台浏览器 | 全路径保留手动字段和取消范围 |
| [#145](https://github.com/peach-mitao/peach/pull/145) | Add localization, StashDB, playback, RSS and NZB downloads | 不采纳 | 跨本地化、下载、RSS、StashDB的宽大改动，无法直接整体合入 | 语言和连接器默认变化，与本fork多域冲突 | 拆成独立可验证能力再审 |
| [#352](https://github.com/peach-mitao/peach/pull/352) | feat(player): 增加默认音量与单片音量记忆 | 暂缓 | 音量记忆有用但不是当前首屏故障依赖 | 浏览器默认与每片记录，自动播放等待 | 播放器专项结果且用户需要该默认 |
| [#322](https://github.com/peach-mitao/peach/pull/322) 草稿 | fix(catalog): 撞号前缀只在韩国 MIB 目录里算韩国 MIB | 暂缓 | 源码审查：YUJ无路径仍判韩国，有误挡基础查询风险 | 目录证据覆盖不足；草稿；多模块分类语义 | 无路径、重命名、不同库路径的身份判据明确 |
| [#321](https://github.com/peach-mitao/peach/pull/321) | fix(web): 社区源对官方自动落库值的异议不占复核队列 | 不采纳 | 默认隐藏社区异议可能减少用户可见冲突，不据来源等级直接否决 | 覆盖 NFO requires_review，与人工控制原则冲突 | 保留可审查入口并明确维护者选择 |
| [#310](https://github.com/peach-mitao/peach/pull/310) | fix(scraping): 后台采集不再创建窗口或抢占前台 | 不采纳 | 源码审查：仍启动无头浏览器；本地已经只保留主动账号连接 | 会回退 fork 无后台浏览器约束 | 改为HTTP降级且不启动浏览器 |
| [#298](https://github.com/peach-mitao/peach/pull/298) | perf: 减少馆藏导航和人工复核的重复计算 | 部分适配，待交付 | 采用版次证据预筛，补字母结尾番号边界；真实副本响应摘要一致 | SQL匹配采用435；渐进分页和统计分离改变首批展示，复核缓存另需内存及对象隔离验证 | 本批真实冷启动验证；若仍有对应瓶颈，再成组纳入其余部分 |
| [#127](https://github.com/peach-mitao/peach/pull/127) | feat(duplicates): 完整 SHA256 判重与逐文件人工处置 | 暂缓 | 完整哈希与逐文件处置方向安全，当前需核对已等效范围 | 真实全文件读取需明确动作；不能恢复采样判重 | 对照当前SHA256能力，仅补缺失测试/代码 |
| [#134](https://github.com/peach-mitao/peach/pull/134) 草稿 | perf(processing): 逐档衔接就绪工作，减少整批阶段等待 | 暂缓 | 可选逐档衔接可能改善封面到达时间 | 依赖130，调度生命周期与 fork累计预算冲突高 | 暂停/取消/恢复不扩大范围且真实时间验证 |
| [#130](https://github.com/peach-mitao/peach/pull/130) | feat(processing): 自选工作项目与有界并行补缺 | 暂缓 | 自选任务和双通道有用，但当前已有范围与生命周期修复 | 调度和恢复协议，必须保留 fork停止意图 | 细粒度差异和并发状态回归完成 |
| [#282](https://github.com/peach-mitao/peach/pull/282) 草稿 | fix(processing): 避免大量视频选择触发 SQL 参数超限 | 已等效 | 当前 library_processing 三入口与 media_probe、processing_control、processing_traffic_plan 均使用 json_each | 四个运行模块对应补丁点已核对；测试由主代理统一执行 | 保留大批选择与空选择回归，不重复移植 |
| [#279](https://github.com/peach-mitao/peach/pull/279) 草稿 | fix(processing): 损坏媒体问题不再使升级补全整体失败 | 已等效 | 当前 upgrade_repairs 已处理 partial 且要求无 paused_count | 原PR条件更宽，不覆盖本地更严格判断 | 保留现有partial/暂停回归 |
| [#278](https://github.com/peach-mitao/peach/pull/278) | fix(web): 合并撞名的女优与厂牌档案 | 暂缓 | 用户确认的成对实体合并方向适合，但已有redirect相关能力 | 数据事务、备份及人工字段投影 | 对照已有合并入口并验证重定向/别名完整 |
| [#277](https://github.com/peach-mitao/peach/pull/277) | feat(docker): 支持配置运行 UID/GID | 暂缓 | Docker UID/GID配置独立部署能力 | root准备及递归所有者迁移，影响实际数据权限 | 对应容器环境验证后单独采用 |
| [#275](https://github.com/peach-mitao/peach/pull/275) 草稿 | feat(player): 右方向键长按临时二倍速 | 暂缓 | 草稿；短按从keydown改keyup，影响现有按键预期 | 临时倍速与失焦取消 | 播放器默认行为选择确认并通过实机验证 |
| [#257](https://github.com/peach-mitao/peach/pull/257) 草稿 | feat(organize): 支持字幕语言与有字幕模板参数 | 暂缓 | 可选模板参数适合，但与首屏/依赖无直接联系 | 字幕身份和整理回滚 | 模板缺失字段、重名、路径边界验证 |
| [#237](https://github.com/peach-mitao/peach/pull/237) | feat(network): 局域网监听改为 IPv4/IPv6 双栈，.local 同时解析 IPv6 地址 | 暂缓 | 双栈改变监听范围与连接入口 | 必须保留仅局域网IPv6限制及Windows证书 | 真实双栈设备和监听归属验证 |
| [#235](https://github.com/peach-mitao/peach/pull/235) | feat(media): Windows QSV 解码、缩放与编码全程留在 Intel 显卡 | 已等效 | 本地历史3e3f4c3d已含同名QSV全GPU链 | 最终回归由主代理执行 | 仅核对后续PR新增差异 |
| [#112](https://github.com/peach-mitao/peach/pull/112) | fix(catalog): 识别 MPG 文件与 KIRARI 番号 | 已等效 | 完整 diff 对照：本地 9c179925 已含 MPG 与 KIRARI 完整分卷编号识别，领域回归覆盖大小写与反例 | 保留后续自定义规则、输入清理和缓存，不覆盖为旧实现 | 出现可复现文件名误判时补现有领域回归 |
| [#121](https://github.com/peach-mitao/peach/pull/121) | fix(web): 生成 HTTP 服务的 CloudDrive2 通知配置 | 已等效 | 本地 fa4b1626/b48e0dec 已按协议和端口生成地址，保留公布地址优先及缺密钥空配置 | 当前用 URL 构造器，不回退字符串拼接；已核对配置、文案与回归 | 真实 CloudDrive2 通知链未在本次验收；实际地址不符时重评 |
| [#131](https://github.com/peach-mitao/peach/pull/131) | fix(security): 收紧媒体与公开资源边界并更新安全依赖 | 已等效 | 已查媒体类型过滤、CSP/固定公网连接、来源限流存在 | 不整包覆盖现有安全依赖与fork认证；剩余细节仍需diff | 依赖审计和端到端安全回归 |
| [#150](https://github.com/peach-mitao/peach/pull/150) | fix(metadata): 适配公开资料接口签名变量重命名 | 已等效 | 本地 bef67c29 已从请求头引用识别签名函数，支持重命名并拒绝歧义，解析和请求回归已核对 | 不执行远端 JS；保留更严格原始字符串长度限制及后续请求预算 | 可补固定时钟下完整摘要值回归；新协议需脱敏样本，未知格式仍拒绝 |
| [#156](https://github.com/peach-mitao/peach/pull/156) | feat(player): 为触摸播放提供控制条和定位手势 | 暂缓 | 触摸手势独立交互改动 | 与现有播放器手势/滚动冲突 | 触屏与鼠标键盘实机验证 |
| [#157](https://github.com/peach-mitao/peach/pull/157) | fix(media): 支持重建尾部 moov 的 MP4 头 | 已等效 | 本地 4e950fb2 已含尾部重排、偏移平移、suffix 与 Range 回归，额外保护扩展头及编辑列表歧义 | 保留单 mdat、索引预算和原文件不变保护；旧 PR 整块覆盖会丢失保护 | 允许布局误拒绝或 Range/时序异常时，用最小样本重评 |
| [#158](https://github.com/peach-mitao/peach/pull/158) | fix(player): 优先原文件与无损封装，按需转码 | 暂缓 | 原文件与无损封装优先合理，但大媒体链改动 | ebmlite依赖、播放回退；全量有已知失败 | 源码等效核对及FFmpeg真实产物验证 |
| [#173](https://github.com/peach-mitao/peach/pull/173) | fix(web): 详情接口返回 medium，外部播放器入口按介质显示 | 已等效 | 当前 web_catalog q_item SELECT 已含 a.medium | 只核对端点结果，不重复加字段 | 现有详情回归返回medium |
| [#174](https://github.com/peach-mitao/peach/pull/174) | perf(media): 整片软件转码限制线程数，给播放留出 CPU | 暂缓 | 软件转码线程限额可改善交互资源竞争 | 需核对现有调速/任务档位，不能双重限额 | 并发播放与后台处理CPU预算验证 |
| [#175](https://github.com/peach-mitao/peach/pull/175) | fix(media): 编辑列表与 ctts 平移差半帧以内视为已补偿 | 已等效 | 当前 mp4repair _half_frame/tolerance 已存在 | 旧sidecar补修也已见 _legacy_timing | 保留存量和29.97fps回归 |
| [#176](https://github.com/peach-mitao/peach/pull/176) | fix(media): 修复 ctts 时容忍个别解不出来的样本 | 暂缓 | 容忍损坏样本有数据推测风险，应严守有限阈值 | 缓存版本与157相互影响 | 缺失样本排序及超过阈值拒绝验证 |
| [#188](https://github.com/peach-mitao/peach/pull/188) 草稿 | feat(library): 跨目录匹配本地封面并核验资料来源 | 暂缓 | 跨目录本地封面适合消费者方向，但草稿和匹配范围需逐项核对 | 不能猜测候选或覆盖人工封面；可能已有本地实现 | 同号冲突、图片身份、缓存优先级与当前树对照 |
| [#189](https://github.com/peach-mitao/peach/pull/189) 草稿 | feat(library): 在详情编辑单片资料并定向更新 | 暂缓 | 显式单片编辑合理，但有文件改名与回滚责任 | 依赖188，当前diff含父PR | 只取增量并通过冲突/占用/旧表单/回滚验证 |

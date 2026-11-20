<p align="center"><img src="resources/peach-logo-128.png" alt="Peach" width="88"></p>

# Peach

本地优先的影片刮削与媒体管理工具。

[上游官网](https://peach.video) · [下载](#下载与使用) · [上游演示](https://demo.peach.video) · [文档](#文档) · [English](README.md)

[![Release](https://img.shields.io/github/v/release/VictorQi/peach?include_prereleases&sort=semver&label=release&logo=github)](https://github.com/VictorQi/peach/releases)
[![CI 流水线](https://img.shields.io/github/actions/workflow/status/VictorQi/peach/test.yml?branch=master&label=CI&logo=githubactions&logoColor=white)](https://github.com/VictorQi/peach/actions/workflows/test.yml)
[![许可证](https://img.shields.io/badge/license-AGPL--3.0--or--later-blue?logo=gnu&logoColor=white)](LICENSE)
[![Windows x64](https://img.shields.io/badge/Windows-x64-0078D4)](docs/TESTING_DESKTOP.md)
[![macOS DMG](https://img.shields.io/badge/macOS-DMG-555555?logo=apple&logoColor=white)](docs/OPERATIONS.md#macos-独立测试包)
[![年龄限制](https://img.shields.io/badge/age-18%2B-555555)](#许可证)

## 截图

[![影片馆藏：搜索、筛选与海报墙](https://peach.video/assets/screenshots/home-wide-20261025-2-1280.webp)](https://peach.video/assets/screenshots/home-wide-20261025-2.png)

电影演示资料，来源与许可见[素材说明](https://peach.video/credits/)。

<details>
<summary>更多截图</summary>

**人物与作品**

[![查理·卓别林的资料与作品](https://peach.video/assets/screenshots/profile-wide-20261025-2-1280.webp)](https://peach.video/assets/screenshots/profile-wide-20261025-2.png)

**创作者关注**

[![创作者关注与作品更新](https://peach.video/assets/screenshots/follow-wide-20261025-2-1280.webp)](https://peach.video/assets/screenshots/follow-wide-20261025-2.png)

**馆藏统计**

[![馆藏、存储与观看统计](https://peach.video/assets/screenshots/stats-wide-20261025-3-1280.webp)](https://peach.video/assets/screenshots/stats-wide-20261025-3.png)

**播放器**

[![Big Buck Bunny 播放器](https://peach.video/assets/screenshots/play-wide-20261025-2-1280.webp)](https://peach.video/assets/screenshots/play-wide-20261025-2.png)

</details>

## 能做什么

- **影片刮削**：识别影片编号，读取 NFO，多来源补齐标题、演员、厂牌和封面，保留人工修改。
- **本地与网盘**：统一浏览本地硬盘、SMB、已挂载网盘和 PikPak 媒体库。
- **播放与记录**：网页与外部播放器、字幕、倍速、旋转、续播和时间轴预览。
- **关注与发现**：订阅人物与创作者更新，发现作品，管理「想要」清单。
- **云下载**：按影片编号查找或提交磁力，下载完成后整理入库。
- **馆藏管理**：管理标签、重复文件、多版本与分卷；按女优批量永久删除影片，保留人物档案和照片。资料和观看记录保存在本机。
- **任务中心**：暂停、继续或取消本机后台任务，查看可取得的各任务 CPU、GPU 与下载活动。
- **新手教程**：主动打开后按需了解界面和设置，连接同一实例的设备共用教程进度。

后台采集不打开或操作浏览器。缺少可选来源的登录凭据时跳过受限内容，已有馆藏继续可用；升级后的可选资料补全由你主动开始，可以停止。版本信息和更新操作留在设置页。

读取新入库本地视频的媒体信息时，Peach 会对支持的 MP4 布局做原位整理，不重新编码、不生成另一份视频。写入前保存小型恢复记录，校验失败恢复原文件头；已有视频可在播放响应中使用同一优化，不修改文件。[适用范围与恢复](docs/adr/0138-mp4-layout-normalization.md)。

## 下载与使用

桌面端选择视频文件夹即可开始浏览。新媒体库默认使用本地资料，添加到已有媒体库会保留它的设置。
日常打开先显示馆藏，来源暂时离线也可浏览已编目的内容；本机遮挡、排序和版式继续保留。

| 方式 | 入口 |
| --- | --- |
| Windows x64 | [安装版](https://github.com/VictorQi/peach/releases/latest) · [免安装版](https://github.com/VictorQi/peach/releases/latest) |
| macOS | [Apple Silicon / ARM64](https://github.com/VictorQi/peach/releases/latest) · [Intel / x86_64](https://github.com/VictorQi/peach/releases/latest) |
| Docker / NAS | [部署说明](docs/DOCKER.md) |
| 源码运行 | [安装步骤](docs/OPERATIONS.md#从源码运行windowsmacos)，需要 Git、uv 和 Python 3.14+ |

安装后选择媒体目录，扫描后即可浏览与播放。桌面测试包未签名，macOS 尚未完成公证；详见 [Windows](docs/TESTING_DESKTOP.md) 与 [macOS](docs/OPERATIONS.md#macos-独立测试包) 说明。

## 文档

[运行与配置](docs/OPERATIONS.md) · [来源支持](docs/SOURCING.md) · [外部播放器](docs/EXTERNAL_PLAYERS.md) · [诊断与数据分享](docs/DIAGNOSTICS.md) · [更新日志](CHANGELOG.md)

参与开发：[贡献说明](CONTRIBUTING.md) · [开发约定](AGENTS.md) · [测试](docs/TESTING.md)

## 问题反馈

本 Fork 暂未启用公开问题区。请通过取得软件的渠道反馈问题；代码变更经 [PR](https://github.com/VictorQi/peach/pulls) 交付。反馈附版本、复现步骤与报错。公开截图使用演示资料，遮盖隐私；不要上传影片或数据库。

## 相关项目

感谢 [amane](https://github.com/sqzw-x/amane)、[Gfriends](https://github.com/gfriends/gfriends) 与 [CloudDrive2](https://www.clouddrive2.com/)；完整致谢见[复用清单](docs/REUSE.md)。

## 上游 Star 历史

<a href="https://github.com/peach-mitao/peach/tree/star-history">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/peach-mitao/peach/star-history/star-history-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/peach-mitao/peach/star-history/star-history-light.svg">
    <img alt="Peach 累计 Star 数，线性坐标" src="https://raw.githubusercontent.com/peach-mitao/peach/star-history/star-history-light.svg">
  </picture>
</a>

## 许可证

[AGPL-3.0-or-later](LICENSE) · Copyright (C) 2026 The Peach contributors。第三方组件保留各自的许可证。Peach 名称与图标的使用见[名称与标识政策](docs/TRADEMARKS.md)。

仅管理自行持有或获授权使用的媒体，遵守法律、版权及来源平台的访问、年龄和地区限制。Peach 不提供影片资源或付费内容访问权。

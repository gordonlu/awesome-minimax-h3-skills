# Awesome MiniMax H3 Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fh3skills.com&label=h3skills.com%20online)](https://h3skills.com)
[![Last Commit](https://img.shields.io/github/last-commit/gordonlu/awesome-minimax-h3-skills)](https://github.com/gordonlu/awesome-minimax-h3-skills)

[English](README.en.md)

MiniMax H3 的可视化 Skills 索引与提示词参考站点。

**先看到效果，再理解做法。See what it makes — then learn how it's made.**

> Independent community project — not an official MiniMax website.
> 独立社区项目，并非 MiniMax 官方网站。

![Awesome MiniMax H3 Skills — homepage](docs/screenshot-home.png)

## Online / 在线访问

- Main: **https://h3skills.com**
- Fallback: https://awesome-minimax-h3-skills.pages.dev

## What's included / 内容概览

- **43 Skills** — 9 个官方 Skill + 34 个社区原创 Skill，每个都有真实成片视频、输入要求、工作流和一键安装方式
- **49 条提示词** — 精选自 MiniMax H3 官方《使用手册》，按 10 个场景分类，支持一键复制
- **6 种语言** — 中文 / English / 한국어 / Deutsch / 日本語 / Español
- **SEO** — 每个 Skill 页都有独立的 meta、Open Graph、VideoObject 结构化数据和中英双语快照
- **License 合规** — /license 页面声明 MiniMax H3 Community License 条款，视频标注 AI-generated

## Run / 运行

纯静态站点，无需构建。任意静态服务器即可：

```bash
# from the project root
python3 -m http.server 8000
# open http://localhost:8000
```

## What's inside / 目录结构

```
├── index.html              # SPA 入口 (MIT)
├── src/                    # 原创前端代码 (MIT)
│   ├── app.js              # 路由 · 渲染 · GSAP 动画 · Fuse.js 搜索
│   ├── styles.css          # 设计系统
│   └── vendor/             # GSAP, © GreenSock
├── data/                   # 手工整理的 Skill 数据 (MIT)
│   ├── skills.js           # 43 个 Skill 元数据
│   ├── anthology.js        # 官方提示词合辑
│   ├── i18n.js             # 六语言 UI 翻译
│   └── locales/            # Skill 文本翻译
├── community-skills/       # 社区 Skill 源文件 + 资产
├── scripts/                # 构建工具
│   ├── prerender.sh        # Chrome 快照 + SEO 后处理
│   ├── generate_sitemaps.py
│   └── generate_atom.py
├── skill/<slug>/           # 预渲染的中文详情页
├── en/                     # 预渲染的英文快照
├── og/                     # 社交分享图 (1200×630)
├── third_party/
│   └── MiniMax-H3/         # 官方演示素材, © MiniMax
├── /license                # License & Attribution 页
├── /faq                    # 常见问题
├── /prompts                # 提示词落地页
├── sitemap.xml
├── atom.xml
├── LICENSE                 # MIT — 仅限本项目原创代码
└── _redirects              # Cloudflare Pages 路由
```

## Licensing / 许可说明

MiniMax H3, official H3 Skills, and related media assets are © MiniMax and
remain subject to their original license terms (MiniMax H3 Community License
Agreement — see [LICENSE](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)).
This project's original source code is licensed under MIT.

第三方社区材料保留原作者署名与来源标注；本仓库许可证仅适用于本项目原创内容。

## Disclaimer / 免责声明

H3Skills is not an official MiniMax website. The "Official" mark means a skill
ships in the MiniMax-AI/MiniMax-H3 repository — it does not mean this site is
run by MiniMax.

提示词合辑页的示例图片来自 MiniMax H3 官方《使用手册》，仅用于学习与展示。

## Credits / 数据来源

- Skills & demo media: https://github.com/MiniMax-AI/MiniMax-H3
- MiniMax H3 model: https://huggingface.co/MiniMaxAI/MiniMax-H3
- MiniMax H3 视频导演工作台: https://github.com/gordonlu/h3mise
- Animation: GSAP — https://gsap.com

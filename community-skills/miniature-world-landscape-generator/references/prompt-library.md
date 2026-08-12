# Miniature World Landscape Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有一个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-风暴岛) | T2VA | 16:9 | 8s | 无（纯文字） | 一个景观家族 + 一种呈现 + 一个英雄特效——主路线 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — Canonical：风暴岛

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：8s ｜ **预设**：Storm Island（岩石岛 + 玻璃球 + 雷暴；Tempo: Energetic / Impact）

```text
integrated_multimodal_description: [Shot 1] Cinematic macro view of {presentation}, featuring a highly detailed miniature {landscape}. Clear scale cues establish the tiny physical world within the first second. The {Hero Effect} is the primary source of motion and develops at {tempo} speed with visible real-time environmental change. {ambient system} begins first, then {hero effect progression} reaches {Peak Action} before resolving. Terrain, structures and scale remain physically coherent. The camera {supporting camera move} and never substitutes for the Hero Effect.

overall_soundscape: {environment ambience}, detailed miniature {natural/civilization sounds}, and a clear sound matching the Hero Effect.

non_diegetic_music: {score or N/A}.
```

**填充示例（风暴岛）**：
`{presentation}` = 一颗透明玻璃球内的迷你岩石岛；`{landscape}` = 岩石岛，岛上微型村庄与灯塔；`{Hero Effect}` = 球内雷暴；`{tempo}` = 快速真实时间；`{ambient system}` = 球内云层滚动；`{hero effect progression}` = 云层聚集 → 闪电击中海面 → 惊涛拍岸（Peak Action）→ 云层散去；`{supporting camera move}` = 极慢环绕推进。

**验收**：英雄特效视觉清晰；非 Calm 模式有 Peak Action；世界保持微缩比例（比例锚点全程成立）；地形不变形；特效物理自洽。

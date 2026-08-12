# H3 FL2VA Film — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 首尾帧（FL2VA）生成 Prompt。每个案例都使用**恰好两张图**，语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt` 3.2 节 + Case 3）。

> 为什么案例按「转换类型」而不是模式划分：本 Skill 只有一种模式（FL2VA），变体只是转换对象不同——替换素材即可复用结构。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 转换类型 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-官方雨伞女郎-引用) | 人物姿态 + 道具状态 | 16:9 | 8s | 撑车前持伞图 + 撑伞图 | 姿态/道具转换——结构黄金样板（官方 Case 3 原文） |
| [P2](#p2-变装-同一角色两种造型) | 换装    | 16:9 | 8s | 造型 A 图 + 造型 B 图 | 同一角色两套造型无缝切换 |
| [P3](#p3-物体状态-完整到碎裂) | 物体状态 | 16:9 | 6s | 完整物图 + 碎裂物图 | 完整→破碎、组装→拆解类状态转换 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。对齐行必须原样保留，`S.SS` 必须等于实际视频总时长（两位小数）。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — 官方雨伞女郎（引用）

**素材**：两张图（持伞倚车 → 撑伞雨中立）｜**画幅**：16:9 ｜**时长**：8s

官方 `base-en.txt` Case 3 原文——首尾帧结构的黄金样板，直接可跑：

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot 1) aligns with the 8.00-second mark of the target video.

integrated_multimodal_description: [Shot 1] Live-action, cinematic, a rain-soaked cyclist begins in the position and framing established by Picture 1, holding a closed black umbrella beside a silver bicycle. The camera pulls out with small amplitude at slow speed as she releases the bicycle handle, raises the umbrella above her shoulder, and presses the runner upward until the canopy opens. Water rolls from the expanding fabric while she steps beneath it, rotates the handle into the final angle, and settles into the pose, spacing, and composition established by Picture 2 at the end of the shot.

overall_soundscape: Rain falls steadily on the pavement, followed by the metallic click of the umbrella runner and the soft snap of the canopy opening. Water drips from the bicycle frame as distant traffic passes.

non_diegetic_music: N/A
```

**验收**：开场完全等同 Picture 1、结尾完全等同 Picture 2、全程单镜头无跳变。

## P2 — 变装：同一角色两种造型

**素材**：造型 A 图 + 造型 B 图（同一角色，同一机位）｜**画幅**：16:9 ｜**时长**：8s

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot 1) aligns with the 8.00-second mark of the target video.

integrated_multimodal_description: [Shot 1] Cinematic, high-fashion, a young woman begins in the standing pose, framing, ivory dress, and soft studio lighting established by Picture 1. The camera holds steady as she lifts both arms above her head; a ripple of crimson fabric flows down over her silhouette from shoulder to hem, replacing the ivory dress panel by panel while her face, hairstyle, and stance never change. The transformation narrows progressively: skirt texture settles, the color deepens to the exact ruby tone, and the final fabric folds stop moving exactly at Picture 2. She lowers her arms into the final pose, spacing, and composition established by Picture 2 at the end of the shot. Her identity, proportions, and studio backdrop remain consistent throughout.

overall_soundscape: Soft studio hum, a silky flowing-fabric rustle during the dress change, and a quiet camera click as she settles into the final pose.

non_diegetic_music: Elegant piano with a single rising sweep at the moment the dress fully changes.
```

**验收**：脸/发型/姿势骨架全程不变；裙装逐段渐变而非闪现；结尾姿态与构图等同 Picture 2。

## P3 — 物体状态：完整到碎裂

**素材**：完整玻璃杯图 + 碎裂残片图（同一桌面，同一视角）｜**画幅**：16:9 ｜**时长**：6s

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot 1) aligns with the 6.00-second mark of the target video.

integrated_multimodal_description: [Shot 1] Live-action, cinematic, a close shot begins with the intact drinking glass on the dark wooden table, in the exact position and lighting established by Picture 1. The camera pushes in with small amplitude at slow speed as a fingertip strikes the rim from the right. The glass tips, falls, and hits the tabletop with a sharp impact; cracks spread through it as fragments slide outward across the wood. Toward the end, the moving pieces lose momentum and settle — in exactly the final arrangement, fragment positions, camera angle, lighting, and composition established by Picture 2. No pieces vanish or rearrange; only the settling motion remains.

overall_soundscape: A clear ringing tap, the glass impact, a rapid crackle of spreading fractures, and fragments sliding to a stop on the wood.

non_diegetic_music: N/A
```

**验收**：开场等同完整态 Picture 1；碎裂过程因果连续；末帧残片布局与 Picture 2 精确一致。
# Living Ink Painting Video Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有一个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-红黑锦鲤破纸而出) | T2VA | 16:9 | 8s | 无（纯文字） | 水墨主体「画内灵动 → 破纸而出」——唯一主路线 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — Canonical：红黑锦鲤破纸而出

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：8s

```text
integrated_multimodal_description: [Shot 1] Cinematic macro shot of a traditional red-and-black koi ink painting on white rice paper resting on a dark wooden desk. The painted koi begins motionless, then immediately flicks its tail and swims briskly through the wet ink at natural real-time speed. Its body makes two clear swimming strokes as it crosses the painting, pushing black ink and vermilion pigment aside. As it reaches the paper edge, the koi sharply accelerates and breaks free from the flat painting in one continuous upward motion, transforming into a translucent living form made of flowing water, black ink and vermilion pigment. It completes one fast graceful arc through the air above the paper, then slows briefly as several ink droplets fall back onto the sheet. The camera tracks alongside the koi at moderate speed and brakes near the end. Do not replace the koi's movement with camera motion. The koi itself must visibly travel across the paper and rapidly emerge into the air.

overall_soundscape: Quiet room ambience, quick wet brush and water movement, a distinct splash-like ink release as the koi leaves the paper, and several crisp ink droplets landing on the sheet.

non_diegetic_music: Sparse guqin notes with a short rising accent as the koi breaks free from the paper, followed by one brief sustained note.
```

**验收**：首个动作 ≤1s；有清晰加速峰值（破纸而出）；主体在画面上可见地行进；镜头未替主体完成动作；水墨材质（笔触边缘/墨迹拖尾）全程连续。

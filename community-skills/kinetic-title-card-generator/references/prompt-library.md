# Kinetic Title Card — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有一个案例：变体只是片名不同，结构完全一致——替换片名即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 类型 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-专辑片头字卡黎明) | T2VA | 16:9 | 7s | 无（纯文字） | 文字本身是主角——唯一主路线 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — Canonical：专辑片头字卡「黎明」

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜**文字**：黎明（保持原文，不翻译）

```text
integrated_multimodal_description: [Shot 1] Cinematic dark studio space with warm haze and slow-drifting dust lit from above. The text "黎明" in bold brushed-ink Chinese characters with subtle gold edges punches in at the upper third of the frame with a brief light flare and a fast scale overshoot, then locks into place — clearly readable and correctly spelled, without morphing, relocating, or rearranging its strokes. Ambient dust drifts through the light beam while a soft breathing glow pulses behind the letters at natural real-time speed. The letters themselves stay fixed and sharp. The camera holds nearly still with only a faint push-in. The title holds cleanly to the final second; the light slowly dims around it as the clip ends.

overall_soundscape: A low room tone with one soft airy thump as the title lands, and quiet dust rustle.

non_diegetic_music: Minimal piano with a single accent on the title entrance beat, fading on the final hold.
```

**验收**：两个字拼写正确、位置固定；入场一次（光爆 + 过冲后锁定）；无字母重组/漂移；字卡干净停住 ≥2 秒。
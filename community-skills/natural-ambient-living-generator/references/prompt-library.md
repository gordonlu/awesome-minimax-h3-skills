# Natural Ambient Living — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有一个案例：变体只是场景不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 场景 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-晨雾森林) | T2VA | 16:9 | 7s | 无（纯文字） | 环境系统为主要动作载体——唯一主路线 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — Canonical：晨雾森林

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **Motion Owner**：雾 + 光

```text
integrated_multimodal_description: [Shot 1] Cinematic forest interior in early morning, mossy trunks and layered undergrowth, cool blue air with warm shafts of light from above. The mist is the primary source of motion and is already moving from the first second at natural real-time speed. First the fog seeps steadily between the trunks in slow rolling waves, curling around ferns and pooling low over the moss. A wide golden light shaft widens and slowly sweeps across the clearing as the canopy sways. Dust and seeds float through the beam. The clip reaches its peak when a soft gust bends the undergrowth in one wave, scattering droplets and seeds through the light. Then the gust relaxes, the mist recloses around the trunks, the light shafts narrow back toward the canopy, and the final composition holds for the last second. The camera makes only a short slow push-in and never replaces the mist and light motion.

overall_soundscape: Distant birds, faint canopy rustle, the low push of wind through ferns, and a soft patter of shaken droplets after the gust.

non_diegetic_music: Sparse ambient pads with a single soft swell at the gust peak, then quiet.
```

**验收**：雾/光每 1–2 秒可见变化；第 4–6s 有柔和峰值（阵风）；收尾动作收窄并定格；地形树木不突变。
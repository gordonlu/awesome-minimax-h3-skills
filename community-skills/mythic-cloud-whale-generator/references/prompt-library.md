# Mythic Cloud Whale Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有三个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-黄昏破云) | T2VA | 16:9 | 7s | 无（纯文字） | 黄金时刻破云巡游——主路线 |
| [P2](#p2-月夜星航) | T2VA | 16:9 | 7s | 无（纯文字） | 月光+极光下的发鲸群穿行 |
| [P3](#p3-晨雾回跃) | T2VA | 16:9 | 7s | 无（纯文字） | 日出时分鲸群接力回跃 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写。

## 节奏铁律（所有案例共用）

1. **至少一个拍子以真实速度或更快运行**（破云爆起 / 甩尾 / 坠海），带明确加速感。
2. **全片只有一个冲击峰值（Impact peak）**，放在前半段或后半段，不可两个。
3. 慢拍必须被快拍夹住（快-慢-快），**禁止连续三个慢拍**。
4. 结尾 1s 内必须完成「没入云海 + 全景拉远」，不留悬空尾帧。

## P1 — Canonical：黄昏破云

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（爆起）→ 中（翻旋）→ 快（甩尾峰值）→ 缓（没入）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Golden hour over an endless sea of clouds; the camera drops from high altitude toward a colossal mythological whale, its body a drifting rock-island of moss, vines and starlit scales, half-submerged in the cloud layer — scale reads within the first second. 00:00.8-00:02.8 The whale erupts upward through the clouds in a single explosive burst at natural real-time speed, cracking the mist apart; twin avalanche waves of fog roll outward from its flanks while the camera banks into a fast lateral chase. 00:02.8-00:04.6 The whale rolls, whipping its vast tail across a cloud peak and tearing a spiral vortex of fog; sun shafts break through the cloud ceiling, volumetric beams igniting dust and cloud droplets into glittering motes as the camera circles skyward with it. 00:04.6-00:06.2 The whale arches, stands on its tail, then plunges back beneath the clouds — the peak beat, hard and fast, mist hissing past its skin. 00:06.2-00:07.0 The mist closes over its tail; the camera pulls back to a wide high shot as golden light dims and dust settles silently.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the plunge; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, cutting off sharply on the plunge, decaying into a soft bass note.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒尺度清晰；存在真实速度的破云爆起；甩尾为唯一峰值；慢拍被快拍夹住；结尾收于全景拉远；体积光与尘埃可见；无镜头切换、无文字、无宫格。

## P2 — 月夜星航

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（跃出）→ 中（环绕）→ 快（俯冲峰值）→ 缓（远逝）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 A moonlit night sea of clouds under a rippling aurora; the camera pushes in fast from high altitude toward a translucent leviathan of pale blue light, bioluminescent runes tracing its flanks, trailing a river of glowing spores — scale reads within the first second. 00:00.8-00:02.6 The leviathan breaks the cloud surface in one explosive leap at real-time speed, sending a shockwave of mist outward; glowing spores scatter like sparks as the camera dives to chase it. 00:02.6-00:04.6 The leviathan arcs and spirals, its body flexing, aurora light bending across its translucent skin; the camera orbits around it as comet-like wakes stream from its fins. 00:04.6-00:06.2 At the peak the leviathan folds its body and dives straight down, boring a bright tunnel through the clouds, spores exploding outward in a ring of light. 00:06.2-00:07.0 The cloud layer seals above it; the camera rises to a wide high shot under the aurora as the glow fades slowly.

overall_soundscape: night wind over the cloud tops; a low singing leviathan call at the dive; soft spore crackle.

non_diegetic_music: shimmering glass marimba and sustained choir pad; the dive peaks into a bright cymbal swell that dissolves on the wide reset.
```

## P3 — 晨雾回跃

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（并排跃出）→ 中（编队转向）→ 快（反向回跃峰值）→ 缓（雾合）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Rose-pink dawn over a calm cloud sea; the camera glides low over the mist toward two dark whale silhouettes, moss-coated and barnacle-ridged, rising parallel in the far distance — scale reads within the first second. 00:00.8-00:02.8 The two whales surge upward and burst through the cloud surface side by side at natural real-time speed, their flanks shedding water-droplet beads that flash gold in the sunrise; the camera banks to chase their crossing. 00:02.8-00:04.6 The whales bank into a formation turn, dragging long mist wakes across the cloud sea, shafts of sunrise light igniting dust between their bodies; the camera accelerates into a low lateral pass. 00:04.6-00:06.2 At the peak the pair split: one arcs left, one dives right, whipping their tails and tearing two spiral vortices of fog that collide in a soft cloud burst. 00:06.2-00:07.0 The mist closes over both wakes; the camera pulls back to a wide high shot as the rose light settles.

overall_soundscape: low dawn wind; paired whale calls answering each other at the split; mist rushing shut.

non_diegetic_music: warm horn-and-strings phrase, rising to a clean brass peak at the split, resolving into a quiet chord on the wide reset.
```

## 修改指南

- **换时间**：把 `golden hour / moonlit night aurora / rose-pink dawn` 换成你想要的时段，并同步调整光系统的措辞（光柱/极光/日出光）与整体色调。
- **换主体**：把 whale / leviathan 换成 dragon、serpent、manta 等，表面质感词（鳞片/苔藓/藤蔓/星辉）随主体替换，但**保留至少两个表面细节**。
- **换动作节拍**：三拍骨架（爆起→翻旋/转向→峰值）可换动作词汇，但**不得删除冲击峰值**，也不得把连续三个慢拍拼进主体动作。
- **换镜头**：开场俯压/推近、中段追拍或环绕、结尾全景拉远这三个镜头位可以改角度，但**顺序和职责不变**。
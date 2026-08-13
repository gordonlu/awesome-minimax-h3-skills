# Mythic Cloud Whale Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的两种任务模式：**参考图路线（I2VA，推荐）** 与 **纯文字降级路线（T2VA，备选）**。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么使用参考图：先用图像生成模型锁住主体形象与材质（苔藓/藤蔓/星辉鳞片），再让 H3 按图动起来——史诗质感的主要部分由图保底。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P-IMG](#p-img-参考图) | 图像生成 | 16:9 | — | 无 | 出「黄昏破云」参考图 |
| [P1-I2VA](#p1-i2va-canonical-黄昏破云) | I2VA | 16:9 | 7s | `@黄昏破云图` | 主路线：参考图驱动 |
| [P2](#p2-t2va-降级-黄昏破云) | T2VA | 16:9 | 7s | 无（纯文字） | 备选：纯文字降级 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写。

## 节奏铁律（所有案例共用）

1. **至少一个拍子以真实速度或更快运行**（破云爆起 / 甩尾 / 坠海），带明确加速感。
2. **全片只有一个冲击峰值（Impact peak）**，放 70–90% 处，不可两个。
3. 慢拍必须被快拍夹住（快-慢-快），**禁止连续三个慢拍**。
4. 结尾 1s 内必须完成「没入云海 + 全景拉远」，不留悬空尾帧。

## P-IMG — 参考图（先出这张图）

**用途**：作为 I2VA 的首帧参考。**构图要求**：16:9 横幅；巨鲸侧身占画面右侧约 1/3；云海占据前景与左侧；丁达尔光柱作为主光源。

```text
Epic cinematic film still, 16:9 wide composition. An elegant mythological leviathan rising slowly from an endless sea of clouds at golden dusk, occupying the right third of the frame in side profile. Its body is sleek and seamless like silk: a smooth flowing curve from head to tail, pearl-grey skin fading to deep indigo on the belly, covered in hair-fine scale texture that reads as soft satin, not rough rock; a single line of faint star-like lights runs along its spine, and the edge of its pectoral fin glows with a soft cyan bioluminescence. The head is smooth and rounded with gentle, calm eyes — no rocks, no moss, no bumps, no barnacles anywhere on the body. The left two-thirds of the frame: one continuous, unbroken sea of clouds like a velvet blanket, solid and seamless, glowing molten gold, stretching to the horizon with a few large distant cloud hills; not a single broken or fragmented cloud anywhere. Three clean volumetric sun shafts break through wide gaps in the cloud ceiling, dust motes glittering inside the beams. Light: warm golden-hour key light from upper left, cool blue fill rising from the cloud deck, a soft rim light tracing the whale's smooth spine. Color grading: rich golden amber dominant, deep teal shadows, high dynamic range. Quality: photorealistic, smooth elegant surface, physically plausible solid cloud rendering, epic scale with tiny distant birds for scale, film grain, shot on large-format cinema camera, 35mm equivalent depth of field, cinematic color grade.
```

## P1 — I2VA Canonical：黄昏破云

**素材**：`@黄昏破云图`（P-IMG 的产出）｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（爆起）→ 中（翻旋）→ 快（坠海峰值）→ 缓（没入）

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is an epic cinematic sequence in photorealistic style, golden-hour cloud sea, matching the composition and materials of <Picture 1> at 0.00 seconds. From 0.00 to 1.20 seconds, the cloud surface stirs slowly and the whale's sleek pearl-grey back rises a few meters, mist spilling smoothly off its flanks. From 1.20 to 3.00 seconds, the whale erupts upward through the cloud layer in one explosive burst at natural real-time speed, cracking the mist apart, twin avalanche waves of fog rolling outward from its flanks while the camera banks into a fast lateral chase. From 3.00 to 4.80 seconds, the whale rolls, whipping its vast tail across a cloud peak and tearing a spiral vortex of fog; sun shafts break through the cloud ceiling, volumetric beams igniting dust and cloud droplets into glittering motes as the camera circles skyward with it. From 4.80 to 6.20 seconds, the whale arches, stands on its tail, then plunges back beneath the clouds — the peak beat, hard and fast, mist hissing past its skin. From 6.20 to 7.00 seconds, the mist closes over its tail; the camera pulls back to a wide high shot as golden light dims and dust settles silently.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the plunge; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, cutting off sharply on the plunge, decaying into a soft bass note.
```

**WebApp 粘贴版**（先上传参考图，替换 `@图片`）：

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is an epic cinematic sequence in photorealistic style, golden-hour cloud sea, matching the composition and materials of <Picture 1> at 0.00 seconds. From 0.00 to 1.20 seconds, the cloud surface stirs slowly and the whale's sleek pearl-grey back rises a few meters, mist spilling smoothly off its flanks. From 1.20 to 3.00 seconds, the whale erupts upward through the cloud layer in one explosive burst at natural real-time speed, cracking the mist apart, twin avalanche waves of fog rolling outward from its flanks while the camera banks into a fast lateral chase. From 3.00 to 4.80 seconds, the whale rolls, whipping its vast tail across a cloud peak and tearing a spiral vortex of fog; sun shafts break through the cloud ceiling, volumetric beams igniting dust and cloud droplets into glittering motes as the camera circles skyward with it. From 4.80 to 6.20 seconds, the whale arches, stands on its tail, then plunges back beneath the clouds — the peak beat, hard and fast, mist hissing past its skin. From 6.20 to 7.00 seconds, the mist closes over its tail; the camera pulls back to a wide high shot as golden light dims and dust settles silently.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the plunge; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, cutting off sharply on the plunge, decaying into a soft bass note.
```

**验收**：首秒与参考图同构图同材质；存在真实速度的破云爆起；坠海为唯一峰值；慢拍被快拍夹住；结尾收于全景拉远；体积光与尘埃可见；无镜头切换、无文字、无宫格。

## P2 — T2VA 降级（备选）：黄昏破云

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（爆起）→ 中（翻旋）→ 快（甩尾峰值）→ 缓（没入）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Golden hour over an endless sea of clouds; the camera drops from high altitude toward a colossal mythological whale, its body sleek and seamless, pearl-grey skin with hair-fine scales and a starlit spine, half-submerged in the cloud layer — scale reads within the first second. 00:00.8-00:02.8 The whale erupts upward through the clouds in a single explosive burst at natural real-time speed, cracking the mist apart; twin avalanche waves of fog roll outward from its flanks while the camera banks into a fast lateral chase. 00:02.8-00:04.6 The whale rolls, whipping its vast tail across a cloud peak and tearing a spiral vortex of fog; sun shafts break through the cloud ceiling, volumetric beams igniting dust and cloud droplets into glittering motes as the camera circles skyward with it. 00:04.6-00:06.2 The whale arches, stands on its tail, then plunges back beneath the clouds — the peak beat, hard and fast, mist hissing past its skin. 00:06.2-00:07.0 The mist closes over its tail; the camera pulls back to a wide high shot as golden light dims and dust settles silently.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the plunge; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, cutting off sharply on the plunge, decaying into a soft bass note.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒尺度清晰；存在真实速度的破云爆起；甩尾为唯一峰值；慢拍被快拍夹住；结尾收于全景拉远；体积光与尘埃可见；无镜头切换、无文字、无宫格。

## 修改指南

- **换时间**：把 `golden hour / moonlit night aurora / rose-pink dawn` 换成你想要的时段，并同步调整光系统的措辞（光柱/极光/日出光）与整体色调。
- **换主体**：把 whale / leviathan 换成 dragon、serpent、manta 等，表面质感词（鳞片/苔藓/藤蔓/星辉）随主体替换，但**保留至少两个表面细节**。
- **换动作节拍**：三拍骨架（爆起→翻旋/转向→峰值）可换动作词汇，但**不得删除冲击峰值**，也不得把连续三个慢拍拼进主体动作。
- **换镜头**：开场俯压/推近、中段追拍或环绕、结尾全景拉远这三个镜头位可以改角度，但**顺序和职责不变**。
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

1. **一个 clip 只表达一个连续事件**（一次破云而上并沉回），主体是唯一运动来源。
2. **全片只有一个冲击峰值（Impact peak）**，放 70–90% 处（尾鳍扬出云面的瞬间）。
3. **唯一主导机位行为**：镜头固定或极缓漂移；禁止追拍/环绕/拉升/拉远机位链与垂直运镜。
4. **表演单转身**：破出一个完整动作链（预备→破出→脊波→尾扬→沉回），同一节奏内递进，禁止姿态跳变。
5. 结尾 1s 内完成「沉回云海 + 云面闭合」，不留悬空尾帧。

## P-IMG — 参考图（先出这张图）

**用途**：作为 I2VA 的首帧参考。**构图要求**：16:9 横幅；巨鲸侧身占画面右侧约 1/3；云海占据前景与左侧；丁达尔光柱作为主光源。

```text
Scene: An endless sea of clouds at dusk, forming one continuous, unbroken cloud ocean stretching flat to the horizon. The cloud surface is broad, smooth and softly rolling, with only very large-scale gentle formations — no fragmented clouds, no small puffs, no cauliflower-like cloud texture. Above the cloud sea is a vast open sky with clear atmospheric haze and no second cloud layer.

Lighting: a low sunset outside the upper-left edge of the frame casts warm golden light across the cloud sea. Three broad, soft, naturally diffused shafts of sunlight descend diagonally through atmospheric haze, subtle and partially dissolved rather than sharply defined. No visible holes in clouds, no spotlight effect, no vertical light columns. Fine suspended moisture glows faintly inside the light.

Subject: A colossal whale-like leviathan rising out of the cloud sea, viewed from a low angle close to its head so it towers over the frame. The whale fills the right two-thirds of the 16:9 composition. Its head turns slightly toward the camera, revealing one huge, calm, ancient eye.

Its body is one elegant, continuous mass of smooth pearl-grey skin fading gradually into deep indigo along the underside, seamless like wet silk. Surface detail is extremely restrained: only subtle hair-fine skin texture and almost imperceptible microscopic scales. No ridges, no bumps, no armor plates.

A sparse row of tiny, faint star-like bioluminescent points follows the curve of its upper spine.

Tiny distant birds circle far beneath the whale's head to establish its immense scale.

Warm golden sunset light brushes the upper surfaces of the whale, while soft cool blue ambient light from the cloud sea fills its underside. A thin natural rim light traces the upper silhouette.

Composition: monumental negative space, simple large shapes, calm visual hierarchy, uncluttered frame, majestic and serene rather than chaotic.

Photorealistic cinematic film still, physically plausible atmospheric scattering, realistic volumetric clouds, natural sunlight, large-format cinema camera, restrained HDR, subtle film grain, epic fantasy scale.

Constraints: only one cloud layer, no overhead cloud ceiling, no storm clouds, no cloud holes, no spotlight beams, no fragmented clouds, no small cloud puffs, no mountains, no rocks, no moss, no vegetation, no structures, no bumps on the whale, no text, no watermark.
```

## P1 — I2VA Canonical：黄昏破云

**素材**：`@黄昏破云图`（P-IMG 的产出）｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：缓（破出预备）→ 全速（破云而出）→ 缓（脊波上升）→ 峰值（尾鳍扬空，~70%）→ 缓（沉回闭合）

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is an epic cinematic sequence in photorealistic style, golden-hour cloud sea, matching the composition, materials and scale of <Picture 1> at 0.00 seconds. The one continuous event is a single emergence: the leviathan rises fully out of the cloud deck and sinks back into it, and nothing else competes with that motion. In the opening moment, the great head lifts a few more meters out of the mist, fog spilling off its shoulders as it resumes its rise. From 0.00 to 1.00 seconds, the enormous brow continues upward in one heavy continuous surge at natural real-time speed, twin avalanches of fog pouring off the flanks and hissing outward across the deck; the camera stays fixed in the low angle close to the head, letting the whale do all of the work. From 1.00 to 3.20 seconds, the head and shoulders break fully clear of the surface, the broad back rising section by section in one long spine wave, fog streaming off the skin like slow waterfalls, warm golden light raking over the pearl-grey back as it leaves the haze — silhouette first, then detail, the great eye calm and turned slightly toward the camera. From 3.20 to 4.80 seconds, the rise continues without breaking rhythm; a long column of mist exhales from the blowhole and hangs in the golden light, the tail lifting out of the mist behind the body and beginning its long slow arc as the pace of the rise eases. From 4.80 to 6.00 seconds, at the visual peak, the vast tail crests free of the clouds in one slow heavy arc, mist streaming from the flukes, and the whole leviathan stands clear of the deck in a monumental backlit silhouette against the low sun, one colossal whale cry rolling across the sky. From 6.00 to 7.00 seconds, the whale sinks back beneath the surface in the same continuous motion, rear-first, the fog closing over its back as the deck smooths again; the shot ends wide and calm with the cloud surface restored, only golden light remaining. Keep the emergence as the sole event: no camera movement, no orbit, no vertical camera moves, no second breach, no tail-stand, no spiral vortex, no water spray — only fog and mist, no slow motion of the surge, no pose reset between beats.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the tail crest; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, swelling to the tail crest, decaying into a soft bass note as the deck closes.
```

**WebApp 粘贴版**（先上传参考图，替换 `@图片`）：

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is an epic cinematic sequence in photorealistic style, golden-hour cloud sea, matching the composition, materials and scale of <Picture 1> at 0.00 seconds. The one continuous event is a single emergence: the leviathan rises fully out of the cloud deck and sinks back into it, and nothing else competes with that motion. In the opening moment, the great head lifts a few more meters out of the mist, fog spilling off its shoulders as it resumes its rise. From 0.00 to 1.00 seconds, the enormous brow continues upward in one heavy continuous surge at natural real-time speed, twin avalanches of fog pouring off the flanks and hissing outward across the deck; the camera stays fixed in the low angle close to the head, letting the whale do all of the work. From 1.00 to 3.20 seconds, the head and shoulders break fully clear of the surface, the broad back rising section by section in one long spine wave, fog streaming off the skin like slow waterfalls, warm golden light raking over the pearl-grey back as it leaves the haze — silhouette first, then detail, the great eye calm and turned slightly toward the camera. From 3.20 to 4.80 seconds, the rise continues without breaking rhythm; a long column of mist exhales from the blowhole and hangs in the golden light, the tail lifting out of the mist behind the body and beginning its long slow arc as the pace of the rise eases. From 4.80 to 6.00 seconds, at the visual peak, the vast tail crests free of the clouds in one slow heavy arc, mist streaming from the flukes, and the whole leviathan stands clear of the deck in a monumental backlit silhouette against the low sun, one colossal whale cry rolling across the sky. From 6.00 to 7.00 seconds, the whale sinks back beneath the surface in the same continuous motion, rear-first, the fog closing over its back as the deck smooths again; the shot ends wide and calm with the cloud surface restored, only golden light remaining. Keep the emergence as the sole event: no camera movement, no orbit, no vertical camera moves, no second breach, no tail-stand, no spiral vortex, no water spray — only fog and mist, no slow motion of the surge, no pose reset between beats.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the tail crest; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, swelling to the tail crest, decaying into a soft bass note as the deck closes.
```

**验收**：首秒与参考图同构图同材质；单事件（破出→沉回）单一动作链；尾鳍扬空为唯一峰值（~70%）；镜头全程固定、无垂直运镜；脊波/呼吸雾柱/雾瀑接触可见；结尾云面闭合收束；无慢镜、无镜头切换、无文字、无宫格。

## P2 — T2VA 降级（备选）：黄昏破云

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（破云而出）→ 缓（脊波+呼吸雾柱）→ 峰值（尾鳍扬空，~70%）→ 缓（沉回闭合）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Golden hour over an endless sea of clouds; the camera holds fixed, low and close to the head of a colossal pearl-grey leviathan whose brow and back are half-risen from the deck, its starlit spine and one calm ancient eye readable within the first second. 00:00.8-00:02.6 The head and shoulders break fully clear in one heavy continuous surge at natural real-time speed, twin avalanches of fog pouring off the flanks, warm golden light raking the pearl-grey back as it leaves the haze. 00:02.6-00:04.8 The back rises in a long slow spine wave, fog streaming off the skin like slow waterfalls; a column of mist exhales from the blowhole, and the tail lifts out of the mist, beginning its long arc. 00:04.8-00:06.2 At the peak the vast tail crests free in a slow heavy arc, mist streaming from the flukes, the leviathan fully clear of the deck in a monumental backlit silhouette, one whale cry rolling across the sky. 00:06.2-00:07.0 The whale sinks back rear-first as the fog closes over its back, the deck smoothing into stillness, golden light dimming.

overall_soundscape: deep rolling cloud rumble; one colossal whale cry at the tail crest; hissing mist and distant thunder as the cloud layer seals.

non_diegetic_music: low braam strings and a rising choir swell, swelling to the tail crest, decaying into a soft bass note as the deck closes.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒尺度清晰；单事件（破出→沉回）；尾鳍扬空为唯一峰值（~70%）；镜头固定无垂直运镜；脊波/呼吸雾柱/雾瀑可见；结尾云面闭合；无慢镜、无镜头切换、无文字、无宫格。

## 修改指南

- **换时间**：把 `golden hour / moonlit night aurora / rose-pink dawn` 换成你想要的时段，并同步调整光系统的措辞（光柱/极光/日出光）与整体色调。
- **换主体**：把 whale / leviathan 换成 dragon、serpent、manta 等，表面质感词（鳞片/苔藓/藤蔓/星辉）随主体替换，但**保留至少两个表面细节**。
- **换动作节拍**：单事件骨架（预备→破出→脊波→尾扬→沉回）可换动作词汇，但**不得删除唯一冲击峰值**，也不得在同一动作链内插入独立转身/姿态跳变。
- **换镜头**：镜头锁定/极缓漂移为唯一机位行为，主体是唯一运动来源；禁止追拍、环绕、垂直运镜与机位链。
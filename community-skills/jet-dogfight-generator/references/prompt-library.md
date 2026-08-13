# Jet Dogfight Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的两种任务模式：**参考图路线（I2VA，推荐）** 与 **纯文字降级路线（T2VA，备选）**。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么使用参考图：先用图像生成模型锁住交汇瞬间的飞行器形象与速度痕迹（音锥、凝结尾迹、机体质感），再让 H3 按图动起来——质感保底。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P-IMG](#p-img-参考图) | 图像生成 | 16:9 | — | 无 | 出「平流层交汇」参考图 |
| [P1-I2VA](#p1-i2va-canonical-平流层交汇) | I2VA | 16:9 | 7s | `@平流层交汇图` | 主路线：参考图驱动 |
| [P2-T2VA](#p2-t2va-降级-平流层交汇) | T2VA | 16:9 | 7s | 无（纯文字） | 备选：纯文字降级 |
| [P3](#p3-t2va-变体-峡谷内摇) | T2VA | 16:9 | 7s | 无（纯文字） | 低空峡谷追击 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写。

## 速度铁律（所有案例共用）

1. **主体永远禁止慢镜**——战机必须以真实时间全速机动。
2. **一个 clip 一个连续事件**：本 Canonical 的事件即「交汇穿越」（闭合→交叉→分离）。
3. **全片只有一个冲击峰值**（交汇一刻），放 70–90% 处。
4. **唯一主导机位行为**：镜头锁定（或极缓漂移）；禁止甩拍、环绕、垂直跃升机位与机位链。
5. **飞机运动语法**：机头永远对齐航向、禁止侧滑、禁止原地转向、凝结尾迹贴实航迹并随转向平滑弯曲。
6. 结尾收于双机分离至画面两侧、尾迹成浅 X、地平线水平。

## P-IMG — 参考图（先出这张图）

**用途**：作为 I2VA 的首帧参考。**构图要求**：16:9 横幅；大广角高空视角；两架战机一左一右对头接近，占据画面对角线两端；中景为白色云海平面；上 1/3 为平流层蓝空。

```text
Scene: Golden hour at very high altitude. A vast continuous white cloud ocean stretches flat to the horizon far below. The cloud deck reads as one enormous smooth surface, softly undulating on a very large scale, glowing warm gold where it catches the low sun. No individual cloud cells are visible. No broken clouds, no scattered cloud puffs, no cauliflower texture, no popcorn-like cloud formations.

The low sun sits directly on the far-right horizon. Above the cloud ocean, the sky is completely open and clean, transitioning from pale warm gold near the horizon through clear atmospheric blue to deep cobalt toward the zenith. No secondary cloud layer and no cloud wisps in the foreground.

Subject: Two F-14 Tomcats closing toward each other at very high speed in a near head-on pass with slight lateral offset. One aircraft enters from the lower left of the 16:9 frame, the second enters from the upper right. Their flight paths visibly converge toward the center of the frame, creating a clear sense of imminent high-speed crossing.

Both aircraft must unmistakably read as F-14 Tomcats: long pointed noses, twin vertical stabilizers, twin-engine rear fuselage, variable-sweep wings positioned in a high-speed swept-back configuration, and authentic naval fighter proportions.

Each aircraft trails exactly two thin, clean white engine contrails. The contrails begin only behind the twin engines, remain narrow and continuous, and extend far backward along the aircraft's flight path. They must not resemble smoke, clouds, explosions, or thick vapor plumes.

Only extremely subtle aerodynamic condensation is visible: a faint, short-lived translucent haze near the wing roots and tiny condensation filaments near the wing tips. No large vapor cone, no shockwave cloud, no thick white halo around the aircraft.

Important details: realistic panel lines, rivets, worn naval-grey paint, faded maintenance stencils, missile rails beneath the wings, realistic twin-engine exhaust nozzles. Cockpit canopies catch warm golden side-light from the right. The aircraft surfaces receive strong warm rim light from the sunset and cooler blue ambient fill from the sky and cloud deck.

The aircraft fly close enough above the cloud layer for their elongated shadows to be faintly visible on the smooth cloud surface below, stretching leftward away from the low sun. Subtle heat shimmer appears immediately behind the exhausts.

Composition: clean and monumental, with large areas of open sky and smooth cloud ocean. The two aircraft are the only visual subjects. Strong diagonal tension from lower left to upper right. Cinematic scale, restrained visual effects, realistic atmospheric perspective.

Photorealistic cinematic film still, large-format aerial cinematography, physically plausible lighting, realistic atmospheric scattering, restrained HDR, subtle film grain, crisp aircraft geometry.

Constraints: no extra aircraft, no missiles firing, no explosions, no smoke trails, no thick vapor clouds, no oversized condensation cones, no broken cloud field, no scattered clouds, no foreground cloud wisps, no text, no watermark.
```

## P1 — I2VA Canonical：平流层交汇

**素材**：`@平流层交汇图`（P-IMG 的产出）｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（对角接近）→ 全速（中线闭合）→ 全速（分离侧滚）→ 峰值（交汇穿越，~70%）→ 缓（双机远去）

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a photorealistic aerial combat sequence, golden hour at very high altitude over a vast smooth cloud ocean, matching the composition and airframes of <Picture 1> at 0.00 seconds. The one continuous event is a single high-speed merge: the two Tomcats close on their converging paths, cross near the center of the frame, and separate to opposite sides, and nothing else competes with that motion. In the opening moment, both aircraft roll out of their initial attitudes — the lead's wings leveling into its crossing heading, the wingman matching a half-second behind — contrails straightening behind both airframes as speed holds at full real time. From 0.00 to 1.40 seconds, the two Tomcats close head-on at full real-time speed from opposite corners of the frame, growing steadily in size, long thin contrails streaming behind them along the flight paths, faint heat shimmer behind the exhausts, the smooth golden cloud deck passing far below. From 1.40 to 3.20 seconds, both aircraft hold stable level flight with noses locked to their flight paths — no sideways sliding — as the gap between them closes and they converge toward the center at real-time speed; the camera holds absolutely still, letting the closing motion and the growing scale of the two airframes build the speed. From 3.20 to 4.80 seconds, each jet banks very slightly outward into the separation, wings rolling as the flight paths begin to bend, contrails bowing smoothly behind the new headings while staying attached to the actual paths. From 4.80 to 6.00 seconds, at the visual peak, the two Tomcats cross in a clean high-speed merge near the center, one passing just above the other's line with a clear vertical offset, a sharp sonic crack ringing out as they pass, contrails crossing into a shallow X behind them; the camera holds its line through the pass. From 6.00 to 7.00 seconds, momentum carries both aircraft onward to opposite sides of the frame in stable level flight, shrinking toward the edges as the contrails stretch into a wide shallow X across the open sky; the shot ends wide and calm, horizon level, the low sun on the right horizon. Keep the merge as the sole event: no vertical zoom, no whip or orbit, no horizon tilt, no vapor cones, no sideways slide, no pivot in place, no extra aircraft, no slow motion.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**WebApp 粘贴版**（先上传参考图，替换 `@图片`）：

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a photorealistic aerial combat sequence, golden hour at very high altitude over a vast smooth cloud ocean, matching the composition and airframes of <Picture 1> at 0.00 seconds. The one continuous event is a single high-speed merge: the two Tomcats close on their converging paths, cross near the center of the frame, and separate to opposite sides, and nothing else competes with that motion. In the opening moment, both aircraft roll out of their initial attitudes — the lead's wings leveling into its crossing heading, the wingman matching a half-second behind — contrails straightening behind both airframes as speed holds at full real time. From 0.00 to 1.40 seconds, the two Tomcats close head-on at full real-time speed from opposite corners of the frame, growing steadily in size, long thin contrails streaming behind them along the flight paths, faint heat shimmer behind the exhausts, the smooth golden cloud deck passing far below. From 1.40 to 3.20 seconds, both aircraft hold stable level flight with noses locked to their flight paths — no sideways sliding — as the gap between them closes and they converge toward the center at real-time speed; the camera holds absolutely still, letting the closing motion and the growing scale of the two airframes build the speed. From 3.20 to 4.80 seconds, each jet banks very slightly outward into the separation, wings rolling as the flight paths begin to bend, contrails bowing smoothly behind the new headings while staying attached to the actual paths. From 4.80 to 6.00 seconds, at the visual peak, the two Tomcats cross in a clean high-speed merge near the center, one passing just above the other's line with a clear vertical offset, a sharp sonic crack ringing out as they pass, contrails crossing into a shallow X behind them; the camera holds its line through the pass. From 6.00 to 7.00 seconds, momentum carries both aircraft onward to opposite sides of the frame in stable level flight, shrinking toward the edges as the contrails stretch into a wide shallow X across the open sky; the shot ends wide and calm, horizon level, the low sun on the right horizon. Keep the merge as the sole event: no vertical zoom, no whip or orbit, no horizon tilt, no vapor cones, no sideways slide, no pivot in place, no extra aircraft, no slow motion.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**验收**：首秒与参考图同构图同机型；单事件（交汇穿越）；交汇一刻为唯一峰值（~70%）；机头对齐航向、无侧滑；尾迹贴实航迹并随转向平滑弯曲；镜头全程锁定、无垂直运镜；结尾双机远去、尾迹成浅 X、地平线水平；无慢镜、无镜头切换、无文字、无宫格。



本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有两个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-平流层交汇) | T2VA | 16:9 | 7s | 无（纯文字） | 平流层对头交汇缠斗——主路线 |
| [P2](#p2-峡谷内摇) | T2VA | 16:9 | 7s | 无（纯文字） | 低空峡谷追击，越障急转 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写。

## 速度铁律（所有案例共用）

1. **主体永远禁止慢镜**——战机必须以真实时间全速机动。
2. **一个 clip 一个连续事件**：本 Canonical 的事件即「交汇穿越」（闭合→交叉→分离）。
3. **全片只有一个冲击峰值**（交汇一刻），放 70–90% 处。
4. **唯一主导机位行为**：镜头锁定（或极缓漂移）；禁止甩拍、环绕、垂直跃升机位与机位链。
5. **飞机运动语法**：机头永远对齐航向、禁止侧滑、禁止原地转向、凝结尾迹贴实航迹并随转向平滑弯曲。
6. 结尾收于双机分离至画面两侧、尾迹成浅 X、地平线水平。

## P2 — T2VA 降级（备选）：平流层交汇

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（对角接近）→ 全速（中线闭合）→ 全速（分离侧滚）→ 峰值（交汇穿越，~70%）→ 缓（双机远去）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Golden hour at very high altitude; the camera holds absolutely still over a vast smooth cloud ocean as two F-14 Tomcats close head-on at full real-time speed, thin contrails streaming behind them. 00:00.8-00:02.6 Both aircraft hold stable level flight, noses locked to their flight paths, growing steadily as they converge toward the center, faint heat shimmer off the exhausts, the golden cloud deck passing far below. 00:02.6-00:04.8 Each jet banks slightly outward into the separation, contrails bowing smoothly behind the new headings, attached to the actual paths. 00:04.8-00:06.2 At the peak the two Tomcats cross in a clean high-speed merge with a clear vertical offset, a sharp sonic crack ringing out as they pass, contrails crossing into a shallow X. 00:06.2-00:07.0 Both aircraft carry onward to opposite sides in stable level flight, shrinking as the contrail X widens across the open sky, horizon level.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒对头接近、全速真实时间；交汇穿越为唯一事件与唯一峰值（~70%）；机头对齐航向无侧滑；尾迹贴实航迹并平滑弯曲；镜头全程锁定无垂直运镜；结尾双机远去、地平线水平；无慢镜、无镜头切换、无文字、无宫格。

## P3 — T2VA 变体：峡谷内摇

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（峡谷经过）→ 全速（追机闭合）→ 峰值（穿桥拉升，~70%）→ 缓（出谷远去）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Dusk amber over a narrow stone canyon; the camera holds fixed and low near a mid-gorge bend as the lead jet thunders past in level flight at full real-time speed, its wingtip clearing the cliff wall by meters, nose aligned with the flight path, heat haze shimmering off the exhaust. 00:00.8-00:02.6 The lead holds its line through the bend, dust blasting off the cliff from its wake; the pursuit jet closes along the same line, slightly higher, both airframes reading as stable lines against the stone. 00:02.6-00:04.8 The pursuit shrinks the gap at real-time speed, engine roar reverberating off the canyon walls, battle paint lit amber, both noses locked to their headings. 00:04.8-00:06.2 At the peak the lead pulls up hard and shoots beneath a low stone bridge overhead, the canopy flashing amber as it clears the far abutment by a wing span, debris ripping off the arch; the pass runs just beside and above the fixed lens with a safe offset, no direct collision line. 00:06.2-00:07.0 Both jets carry onward up the gorge, shrinking into the dusk as dust settles on the bend and the roar fades; the camera still fixed to the last frame.

overall_soundscape: engine roar reverberating off canyon walls; stone debris crackle; a sharp gust as the jets break out of the gorge.

non_diegetic_music: tense drums and engine-pitched strings driving through the canyon, exploding into an open chord as the jets clear the ridge.
```

## 修改指南

- **换机型/风格**：把 fighter jet 换成 stealth bomber、helicopter chase、space fighter，**保留**「真实时间全速 + 交汇/急转加速事件 + 单一峰值 + 全景收束」骨架。
- **换舞台**：uniform stratus-like sheet / stone canyon 可换成 thin broken cirrus、city skyline、sea-level valley，同步调整天气与遮挡词。
- **换光照**：golden hour high-altitude / dusk amber 可换 dawn violet、storm flash，同步调整色调与爆闪词。
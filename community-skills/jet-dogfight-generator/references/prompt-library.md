# Jet Dogfight Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的两种任务模式：**参考图路线（I2VA，推荐）** 与 **纯文字降级路线（T2VA，备选）**。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么使用参考图：先用图像生成模型锁住单机的机型、凝结尾迹与机体质感，再让 H3 按图动起来——质感保底；交汇事件与第二架完全由视频文字驱动（双机构图在图模型中翻车率高，不交给图承担）。
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

**用途**：作为 I2VA 的首帧参考。**构图要求**：16:9 横幅；大广角高空视角；**近景全身机姿**——单架 F-14 占据画幅主体（整机入画、几乎充满画面），从左下向右上逼近（画面对焦点，唯一航空器）；中景为白色云海平面；上 1/3 为高空暖色蓝空。交汇与第二架完全由视频文字驱动。

```text
Scene: Golden hour at very high altitude. A vast continuous white cloud ocean stretches flat to the horizon far below. The cloud deck reads as one enormous smooth surface, softly undulating on a very large scale, glowing warm gold where it catches the low sun. No individual cloud cells are visible. No broken clouds, no scattered cloud puffs, no cauliflower texture, no popcorn-like cloud formations.

The low sun sits directly on the far-right horizon. Above the cloud ocean, the sky is completely open and clean, transitioning from pale warm gold near the horizon through clear atmospheric blue to deep cobalt toward the zenith. No secondary cloud layer and no cloud wisps in the foreground.

Subject: A single F-14 Tomcat in swept-wing configuration at very high speed, in a near close-up full-body view that fills most of the 16:9 frame, entering from the lower left and heading toward the upper right — the only aircraft in frame, sharp and fully detailed. Strong diagonal tension from lower left to upper right across the open sky.

The aircraft must unmistakably read as an F-14 Tomcat: long pointed noses, twin vertical stabilizers, twin-engine rear fuselage, variable-sweep wings positioned in a high-speed swept-back configuration, and authentic naval fighter proportions.

The aircraft trails exactly two thin, clean white engine contrails. The contrails begin only behind the twin engines, remain narrow and continuous, and extend far backward along the aircraft's flight path. They must not resemble smoke, clouds, explosions, or thick vapor plumes.

Only extremely subtle aerodynamic condensation is visible: a faint, short-lived translucent haze near the wing roots and tiny condensation filaments near the wing tips. No large vapor cone, no shockwave cloud, no thick white halo around the aircraft.

Important details: realistic panel lines, rivets, worn naval-grey paint, faded maintenance stencils, missile rails beneath the wings, realistic twin-engine exhaust nozzles. Cockpit canopies catch warm golden side-light from the right. The aircraft surfaces receive strong warm rim light from the sunset and cooler blue ambient fill from the sky and cloud deck.

The aircraft flies close enough above the cloud layer for its elongated shadow to be faintly visible on the smooth cloud surface below, stretching leftward away from the low sun. Subtle heat shimmer appears immediately behind the exhausts.

Composition: clean and monumental, with large areas of open sky and smooth cloud ocean. The single F-14 is the only visual subject. Strong diagonal tension from lower left to upper right. Cinematic scale, restrained visual effects, realistic atmospheric perspective.

Photorealistic cinematic film still, large-format aerial cinematography, physically plausible lighting, realistic atmospheric scattering, restrained HDR, subtle film grain, crisp aircraft geometry.

Constraints: no extra aircraft, no missiles firing, no explosions, no smoke trails, no thick vapor clouds, no oversized condensation cones, no broken cloud field, no scattered clouds, no foreground cloud wisps, no text, no watermark.
```

## P1 — I2VA Canonical：平流层交汇

**素材**：`@平流层交汇图`（P-IMG 的产出）｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（对角接近）→ 全速（中线闭合）→ 全速（分离侧滚）→ 峰值（交汇穿越，~70%）→ 缓（双机远去）

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a photorealistic aerial combat sequence, golden hour at very high altitude over a vast smooth cloud ocean, matching the composition, scale and airframes of <Picture 1> at 0.00 seconds — the lead Tomcat stands near and full-bodied in the frame exactly as pictured, sharp in fully swept-wing configuration with the wing sweep locked for the entire clip. The one continuous event is a single high-speed merge: the wingman closes in from the upper-right edge of the frame, crosses the lead's flight line just above it with a clear vertical offset, and both separate, and nothing else competes with that motion. In the opening moment, the lead holds stable level flight in place, nose locked to its heading, its thin contrail streaming from the wingtips and engine exhausts straight back along the actual flight path, faint heat shimmer behind the exhausts; the wingman's small distant silhouette appears at the upper-right edge, beginning to grow as it closes on its converging line. From 0.00 to 1.40 seconds, the wingman closes at full real-time speed, growing steadily in the frame while remaining visibly smaller and farther away than the lead, holding its line to cross just above the lead's path; the lead holds absolutely steady at its full-frame size while the camera stays completely still, letting the wingman's growth carry the speed. From 1.40 to 3.20 seconds, the gap narrows as the wingman draws level with the crossing point — just above and slightly behind the lead's flight line — its contrail stretching long and straight behind it along the actual path; both noses stay locked to their flight paths, no sideways sliding. From 3.20 to 4.80 seconds, the wingman slides past the crossing point in depth, just above and behind the lead's line, banking very slightly with its contrail bowing smoothly along the actual path while staying attached; the lead holds its line without changing attitude. From 4.80 to 6.00 seconds, at the visual peak, the wingman streaks cleanly past the lead's close silhouette at full real-time speed with a sharp sonic crack ringing out, its contrail crossing the lead's straight contrail into a shallow X in depth behind the lead; the camera holds its line through the pass. From 6.00 to 7.00 seconds, momentum carries both aircraft onward — the wingman shrinking toward the upper-left edge, the lead continuing its heading toward the upper right and shrinking naturally as it flies on — the contrail X stretching wide across the open sky; the shot ends wide and calm, horizon level, the low sun fixed on the right horizon, every highlight and shadow consistent with it throughout. Keep the merge as the sole event: no vertical zoom, no whip or orbit, no horizon tilt, no vapor cones, no sideways slide, no pivot in place, no extra aircraft, no slow motion, no mid-clip wing-sweep change, no detached contrails, and the lead's size and pose never change from the reference until it recedes.

overall_soundscape: jet roar building steadily; sharp sonic crack at the crossing; wind hiss fading as the pair separates.

non_diegetic_music: pulsing percussion and strings accelerating to the crossing, breaking into open air as the contrail X settles.
```

**WebApp 粘贴版**（先上传参考图，替换 `@图片`）：

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a photorealistic aerial combat sequence, golden hour at very high altitude over a vast smooth cloud ocean, matching the composition, scale and airframes of <Picture 1> at 0.00 seconds — the lead Tomcat stands near and full-bodied in the frame exactly as pictured, sharp in fully swept-wing configuration with the wing sweep locked for the entire clip. The one continuous event is a single high-speed merge: the wingman closes in from the upper-right edge of the frame, crosses the lead's flight line just above it with a clear vertical offset, and both separate, and nothing else competes with that motion. In the opening moment, the lead holds stable level flight in place, nose locked to its heading, its thin contrail streaming from the wingtips and engine exhausts straight back along the actual flight path, faint heat shimmer behind the exhausts; the wingman's small distant silhouette appears at the upper-right edge, beginning to grow as it closes on its converging line. From 0.00 to 1.40 seconds, the wingman closes at full real-time speed, growing steadily in the frame while remaining visibly smaller and farther away than the lead, holding its line to cross just above the lead's path; the lead holds absolutely steady at its full-frame size while the camera stays completely still, letting the wingman's growth carry the speed. From 1.40 to 3.20 seconds, the gap narrows as the wingman draws level with the crossing point — just above and slightly behind the lead's flight line — its contrail stretching long and straight behind it along the actual path; both noses stay locked to their flight paths, no sideways sliding. From 3.20 to 4.80 seconds, the wingman slides past the crossing point in depth, just above and behind the lead's line, banking very slightly with its contrail bowing smoothly along the actual path while staying attached; the lead holds its line without changing attitude. From 4.80 to 6.00 seconds, at the visual peak, the wingman streaks cleanly past the lead's close silhouette at full real-time speed with a sharp sonic crack ringing out, its contrail crossing the lead's straight contrail into a shallow X in depth behind the lead; the camera holds its line through the pass. From 6.00 to 7.00 seconds, momentum carries both aircraft onward — the wingman shrinking toward the upper-left edge, the lead continuing its heading toward the upper right and shrinking naturally as it flies on — the contrail X stretching wide across the open sky; the shot ends wide and calm, horizon level, the low sun fixed on the right horizon, every highlight and shadow consistent with it throughout. Keep the merge as the sole event: no vertical zoom, no whip or orbit, no horizon tilt, no vapor cones, no sideways slide, no pivot in place, no extra aircraft, no slow motion, no mid-clip wing-sweep change, no detached contrails, and the lead's size and pose never change from the reference until it recedes.

overall_soundscape: jet roar building steadily; sharp sonic crack at the crossing; wind hiss fading as the pair separates.

non_diegetic_music: pulsing percussion and strings accelerating to the crossing, breaking into open air as the contrail X settles.
```

**验收**：首秒主机近景全身位置/比例/机型/光线与参考图一致（僚机由文字在首秒内从右上角切入且全程小于主机）；单事件（僚机过线穿越）；交汇一刻为唯一峰值（~70%）；机头对齐航向、无侧滑；尾迹贴实航迹并随转向平滑弯曲；镜头全程锁定、无垂直运镜；结尾僚机出左上角、主机自然远去、尾迹成浅 X、地平线水平；无慢镜、无镜头切换、无文字、无宫格。



本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有两个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-i2va-canonical平流层交汇) | I2VA | 16:9 | 7s | `@平流层交汇图`（P-IMG 产出） | 平流层交汇缠斗——主路线 |
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

overall_soundscape: jet roar building steadily; sharp sonic crack at the crossing; wind hiss fading as the pair separates.

non_diegetic_music: pulsing percussion and strings accelerating to the crossing, breaking into open air as the contrail X settles.
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
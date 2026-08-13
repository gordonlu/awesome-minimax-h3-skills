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

1. **主体永远禁止慢镜**——战机必须以真实时间全速机动，G 力感通过「急转」「拉起」动词承载。
2. **至少两个加速事件**：对头接近的交汇一刻、峰值处的垂直跃升。
3. **全片只有一个冲击峰值**（跃升穿云顶 / 火力急转），放 70–90% 处。
4. 结尾 1s 内完成「云端全景收束」，地平线回正。

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

**素材**：`@平流层交汇图`（P-IMG 的产出）｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（高速接近）→ 全速（交汇）→ 中（环绕甩拍）→ 峰值（跃升爆闪）→ 缓（全景收束）

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a photorealistic aerial combat sequence, golden hour at very high altitude over a vast smooth cloud ocean, matching the composition and airframes of <Picture 1> at 0.00 seconds. From 0.00 to 1.40 seconds, the two jets close head-on at full real-time speed, contrails streaming behind them, closing the distance visibly. From 1.40 to 3.20 seconds, the jets cross in a clean high-speed merge, a sharp sonic crack ringing out as they pass, contrails bowing outward behind each airframe; the camera whips around the lead Tomcat, horizon tilting with the G-load, contrail arcs carving through the open sky. From 3.20 to 4.80 seconds, the lead jet breaks into a tight vertical turn, heat haze shimmering off the exhaust; the second jet pulls in pursuit, thin condensation filaments trailing from the wing tips. From 4.80 to 6.20 seconds, at the peak the lead Tomcat pulls up into a vertical zoom into the open sky above the cloud ocean, sun flare bursting across the canopy. From 6.20 to 7.00 seconds, the camera pulls back to a wide high shot; contrails cross in a shallow X above the cloud sea as the jets separate into the distance.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**WebApp 粘贴版**（先上传参考图，替换 `@图片`）：

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a photorealistic aerial combat sequence, golden hour at very high altitude over a vast smooth cloud ocean, matching the composition and airframes of <Picture 1> at 0.00 seconds. From 0.00 to 1.40 seconds, the two jets close head-on at full real-time speed, contrails streaming behind them, closing the distance visibly. From 1.40 to 3.20 seconds, the jets cross in a clean high-speed merge, a sharp sonic crack ringing out as they pass, contrails bowing outward behind each airframe; the camera whips around the lead Tomcat, horizon tilting with the G-load, contrail arcs carving through the open sky. From 3.20 to 4.80 seconds, the lead jet breaks into a tight vertical turn, heat haze shimmering off the exhaust; the second jet pulls in pursuit, thin condensation filaments trailing from the wing tips. From 4.80 to 6.20 seconds, at the peak the lead Tomcat pulls up into a vertical zoom into the open sky above the cloud ocean, sun flare bursting across the canopy. From 6.20 to 7.00 seconds, the camera pulls back to a wide high shot; contrails cross in a shallow X above the cloud sea as the jets separate into the distance.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**验收**：首秒与参考图同构图同机型；全速真实时间、无主体慢镜；音锥交汇清晰；跃升穿云顶为唯一峰值；尾迹/涡流/热浪可见；云层随战机撕裂；结尾地平线回正全景；无镜头切换、无文字、无宫格。



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

1. **主体永远禁止慢镜**——战机必须以真实时间全速机动，G 力感通过「急转」「拉起」动词承载。
2. **至少两个加速事件**：对头接近的交汇一刻、峰值处的垂直跃升。
3. **全片只有一个冲击峰值**（跃升穿云顶 / 火力急转），放 70–90% 处。
4. 结尾 1s 内完成「云端全景收束」，地平线回正。

## P2 — T2VA 降级（备选）：平流层交汇

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（高速接近）→ 全速（交汇）→ 中（环绕甩拍）→ 峰值（跃升爆闪）→ 缓（全景收束）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Golden hour at very high altitude; the camera holds at altitude over a vast smooth cloud ocean as two F-14 Tomcats close head-on at full real-time speed, thin contrails streaming behind them. 00:00.8-00:02.6 The jets cross in a clean high-speed merge, a sharp sonic crack ringing out as they pass, contrails bowing outward behind each airframe; the camera whips around the lead Tomcat, horizon tilting with the G-load, contrail arcs carving through the open sky. 00:02.6-00:04.8 One jet breaks into a tight vertical turn, heat haze shimmering off the exhaust, panel lines and wear on the airframe lit by low golden side-light; the second jet pulls in pursuit, thin condensation filaments trailing from the wing tips. 00:04.8-00:06.2 At the peak the lead Tomcat pulls up into a vertical zoom into the open sky above the cloud ocean, sun flare bursting across the canopy. 00:06.2-00:07.0 The camera pulls back to a wide high shot; contrails cross in a shallow X above the cloud sea as the jets separate into the distance.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒对头接近、全速真实时间；音锥交汇清晰；垂直跃升为唯一峰值；凝结尾迹/翼尖涡流/热浪可见；云层随战机撕裂；结尾地平线回正全景；无镜头切换、无文字、无宫格。

## P3 — T2VA 变体：峡谷内摇

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（峡谷缠斗）→ 快（越障急转）→ 峰值（穿桥拉升）→ 缓（出谷全景）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Dusk amber over a narrow stone canyon; the camera whips low through the gorge as two jets roar past in a high-speed chase at full real-time speed, wingtips missing the rock by meters. 00:00.8-00:02.6 The lead jet rolls through a canyon bend, dust and debris blasting off the cliff wall from its wake, the camera skimming the rock face alongside; heat haze shimmers off the exhaust. 00:02.6-00:04.8 The pursuit jet closes hard, both airframes snapping through low banks around rock spires, panel lines and battle paint lit by the dusk amber; debris streaks past the lens. 00:04.8-00:06.2 At the peak the lead jet pulls up hard and shoots beneath a stone bridge, canopy flashing amber as it clears the abutment by a wing span; the camera whips vertical to follow. 00:06.2-00:07.0 The jets climb out of the gorge into open sky, contrails fanning across the fading dusk as the camera settles into a wide high shot.

overall_soundscape: engine roar reverberating off canyon walls; stone debris crackle; a sharp gust as the jets break out of the gorge.

non_diegetic_music: tense drums and engine-pitched strings driving through the canyon, exploding into an open chord as the jets clear the ridge.
```

## 修改指南

- **换机型/风格**：把 fighter jet 换成 stealth bomber、helicopter chase、space fighter，**保留**「真实时间全速 + 交汇/急转加速事件 + 单一峰值 + 全景收束」骨架。
- **换舞台**：uniform stratus-like sheet / stone canyon 可换成 thin broken cirrus、city skyline、sea-level valley，同步调整天气与遮挡词。
- **换光照**：stratosphere blue / dusk amber 可换 dawn violet、storm flash，同步调整色调与爆闪词。
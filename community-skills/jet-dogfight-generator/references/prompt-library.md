# Jet Dogfight Generator — Runnable Prompt Library

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

## P1 — Canonical：平流层交汇

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（高速接近）→ 全速（交汇）→ 中（环绕甩拍）→ 峰值（跃升爆闪）→ 缓（全景收束）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Stratosphere blue above a flat white cloud deck; the camera holds at altitude as two fighter jets close head-on at full real-time speed, contrails streaming behind them. 00:00.8-00:02.6 The jets merge in a vapor-cone burst, sonic cracks blooming from their canopies as they pass; the camera whips around the lead airframe, horizon tilting with the G-load, contrail arcs carving through the sky and cloud wisps tearing past the wings. 00:02.6-00:04.8 One jet breaks into a tight vertical turn, heat haze shimmering off the exhaust, panel lines and wear on the airframe lit by low golden side-light; the second jet pulls in pursuit, wing-tip vortices trailing across the cloud deck. 00:04.8-00:06.2 At the peak the lead jet zooms vertically out of the cloud top, sun flare bursting across the canopy, vapor cone flaring around its nose. 00:06.2-00:07.0 The camera pulls back to a wide high shot; contrails cross in a shallow X above the cloud sea as the jets separate into the distance.

overall_soundscape: jet roar building; sharp sonic crack at the merge; wind-shear hiss through the orbit whip.

non_diegetic_music: pulsing electronic pulse and low percussion accelerating to the zoom peak, breaking into open air on the wide reset.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒对头接近、全速真实时间；音锥交汇清晰；垂直跃升为唯一峰值；凝结尾迹/翼尖涡流/热浪可见；云层随战机撕裂；结尾地平线回正全景；无镜头切换、无文字、无宫格。

## P2 — 峡谷内摇

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（峡谷缠斗）→ 快（越障急转）→ 峰值（穿桥拉升）→ 缓（出谷全景）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Dusk amber over a narrow stone canyon; the camera whips low through the gorge as two jets roar past in a high-speed chase at full real-time speed, wingtips missing the rock by meters. 00:00.8-00:02.6 The lead jet rolls through a canyon bend, dust and debris blasting off the cliff wall from its wake, the camera skimming the rock face alongside; heat haze shimmers off the exhaust. 00:02.6-00:04.8 The pursuit jet closes hard, both airframes snapping through low banks around rock spires, panel lines and battle paint lit by the dusk amber; debris streaks past the lens. 00:04.8-00:06.2 At the peak the lead jet pulls up hard and shoots beneath a stone bridge, canopy flashing amber as it clears the abutment by a wing span; the camera whips vertical to follow. 00:06.2-00:07.0 The jets climb out of the gorge into open sky, contrails fanning across the fading dusk as the camera settles into a wide high shot.

overall_soundscape: engine roar reverberating off canyon walls; stone debris crackle; a sharp gust as the jets break out of the gorge.

non_diegetic_music: tense drums and engine-pitched strings driving through the canyon, exploding into an open chord as the jets clear the ridge.
```

## 修改指南

- **换机型/风格**：把 fighter jet 换成 stealth bomber、helicopter chase、space fighter，**保留**「真实时间全速 + 交汇/急转加速事件 + 单一峰值 + 全景收束」骨架。
- **换舞台**：stratocumulus deck / stone canyon 可换成 thunderhead wall、city skyline、sea-level valley，同步调整天气与遮挡词。
- **换光照**：stratosphere blue / dusk amber 可换 dawn violet、storm flash，同步调整色调与爆闪词。
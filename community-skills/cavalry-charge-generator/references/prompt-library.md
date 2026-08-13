# Cavalry Charge Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的两种任务模式：**参考图路线（I2VA，推荐）** 与 **纯文字降级路线（T2VA，备选）**。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么使用参考图：先用图像生成模型锁住冲锋瞬间的构图与质感（逆光剪影、焦土、盔甲磨损），再让 H3 按图动起来——史诗质感的主要部分由图保底。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P-IMG](#p-img-参考图) | 图像生成 | 16:9 | — | 无 | 出「金色尘暴」参考图 |
| [P1-I2VA](#p1-i2va-canonical-金色尘暴) | I2VA | 16:9 | 7s | `@金色尘暴图` | 主路线：参考图驱动 |
| [P2-T2VA](#p2-t2va-降级-金色尘暴) | T2VA | 16:9 | 7s | 无（纯文字） | 备选：纯文字降级 |
| [P3](#p3-t2va-变体-余烬之夜) | T2VA | 16:9 | 7s | 无（纯文字） | 夜战火把突袭 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写。

## 速度铁律（所有案例共用）

1. **主体永远禁止慢镜**——骑兵必须以全速狂奔，用「真实时间速度 + 明确加速」措辞。
2. **至少两个加速事件**：尘线集结的冲锋加速、前排越镜的爆发超越。
3. **全片只有一个冲击峰值**（越镜 + 尘墙吞镜），放 70–90% 处。
4. 结尾 1s 内完成「尘落 + 俯瞰收束」，不留悬空尾帧。

## P-IMG — 参考图（先出这张图）

**用途**：作为 I2VA 的首帧参考。**构图要求**：16:9 横幅；低机位；骑兵群自左向右冲锋，前排持矛俯身的骑士占画面中下 1/3；右侧 1/3 为滚动尘墙；金色逆光。

```text
Scene: A flat dust-scoured plain at dusk, scorched-gold light; the low sun sits on the horizon to the right of the frame. A towering rolling dust wall closes in behind the charging column on the right, sand scuds whipping across its face; heat shimmer over the ground.

Subject: A full-speed cavalry charge, front rank galloping from left to right across a 16:9 frame, shot from an extremely low camera angle with the lens skimming the sand. Horses at full stride, muscles defined, manes and tails streaming; riders crouched low over their necks with leveled lances, dark worn armor with scratched plates and rivets, a torn war banner snapping overhead. Sand-spray plumes erupt behind every hoof.

Important details: The charge is fully backlit by the low sun behind it: rim light on helmets and lance tips, every silhouette edged in gold, long dramatic shadows of horses and riders stretching toward the camera to the left; dust particles backlit and sparkling between the galloping legs; weathered faces in shadow, lit only by glowing sand haze.

Use case: dramatic photorealistic concept frame / cinematic film still for an epic battle sequence. Photorealistic.

Constraints: no blood, no gore, no visible text, no watermark; horses must look anatomically correct at full gallop; the dust wall stays behind the charge and never blocks the riders.
```

## P1 — I2VA Canonical：金色尘暴

**素材**：`@金色尘暴图`（P-IMG 的产出）｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（集结加速）→ 全速（侧向追拍）→ 峰值（越镜吞镜）→ 缓（尘落俯瞰）

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is an epic war-sequence in photorealistic style, scorched-gold dusk over a dust-scoured plain, matching the composition, riders and lighting of <Picture 1> at 0.00 seconds. From 0.00 to 1.40 seconds, a wide low establishing shot: the lens skims the sand as the cavalry emerges from the distant haze line at full gallop, natural real-time speed, the dust wall churning behind the column on the horizon, hooves kicking sand-spray plumes behind every stride; the camera drifts laterally at ground level, letting the charge grow in the frame. From 1.40 to 2.80 seconds, the camera sprints into a side chase alongside the front rank, the lens locking the riders in crisp focus as the plain streaks past, lance-tips cutting through the hanging dust haze, sand glowing gold in the low backlight, rim-lit helmets flashing. From 2.80 to 4.20 seconds, the leading riders surge past the lens and a veil of dust washes across it; the camera comes out low ahead of the column, the front rank thundering straight at the lens and growing to fill the frame, riders and war banners silhouetted against the low sun. From 4.20 to 5.60 seconds, at the peak the horses launch past the lens on both sides, splitting around the camera as the charge thunders through, and the trailing dust wall swallows the frame from behind. From 5.60 to 7.00 seconds, the dust clears; the camera holds low behind the charge as the column streams away into the haze, the trailing dust wall receding with it, ending on a wide low shot of the charge fading into the golden dusk.

overall_soundscape: thunder of hooves building in waves; metal clatter and banner snap; one low war-horn at the pass-by peak.

non_diegetic_music: driving percussion and low brass accelerating to the pass-by, cutting into a low rumble on the wide reset.
```

**WebApp 粘贴版**（先上传参考图，替换 `@图片`）：

```text
How the reference picture aligns with the target video — <Picture 1> (from [Shot 1]) aligns with the 0.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is an epic war-sequence in photorealistic style, scorched-gold dusk over a dust-scoured plain, matching the composition, riders and lighting of <Picture 1> at 0.00 seconds. From 0.00 to 1.40 seconds, a wide low establishing shot: the lens skims the sand as the cavalry emerges from the distant haze line at full gallop, natural real-time speed, the dust wall churning behind the column on the horizon, hooves kicking sand-spray plumes behind every stride; the camera drifts laterally at ground level, letting the charge grow in the frame. From 1.40 to 2.80 seconds, the camera sprints into a side chase alongside the front rank, the lens locking the riders in crisp focus as the plain streaks past, lance-tips cutting through the hanging dust haze, sand glowing gold in the low backlight, rim-lit helmets flashing. From 2.80 to 4.20 seconds, the leading riders surge past the lens and a veil of dust washes across it; the camera comes out low ahead of the column, the front rank thundering straight at the lens and growing to fill the frame, riders and war banners silhouetted against the low sun. From 4.20 to 5.60 seconds, at the peak the horses launch past the lens on both sides, splitting around the camera as the charge thunders through, and the trailing dust wall swallows the frame from behind. From 5.60 to 7.00 seconds, the dust clears; the camera holds low behind the charge as the column streams away into the haze, the trailing dust wall receding with it, ending on a wide low shot of the charge fading into the golden dusk.

overall_soundscape: thunder of hooves building in waves; metal clatter and banner snap; one low war-horn at the pass-by peak.

non_diegetic_music: driving percussion and low brass accelerating to the pass-by, cutting into a low rumble on the wide reset.
```

**验收**：首秒与参考图同构图同质感；全速真实时间、无主体慢镜；越镜吞镜为唯一峰值；金色逆光剪影；至少两层尘参与响应；结尾尘落俯瞰；无镜头切换、无文字、无宫格。



本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（T2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有两个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-金色尘暴) | T2VA | 16:9 | 7s | 无（纯文字） | 黄昏逆光全速冲锋——主路线 |
| [P2](#p2-余烬之夜) | T2VA | 16:9 | 7s | 无（纯文字） | 夜战火把余烬中的突袭冲锋 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写。

## 速度铁律（所有案例共用）

1. **主体永远禁止慢镜**——骑兵必须以全速狂奔，用「真实时间速度 + 明确加速」措辞。
2. **至少两个加速事件**：尘线集结的冲锋加速、前排越镜的爆发超越。
3. **全片只有一个冲击峰值**（越镜 + 尘墙吞镜），放 70–90% 处。
4. 结尾 1s 内完成「尘落 + 俯瞰收束」，不留悬空尾帧。

## P2 — T2VA 降级（备选）：金色尘暴

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：全速（集结加速）→ 全速（侧向追拍）→ 峰值（越镜吞镜）→ 缓（尘落俯瞰）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Scorched-gold dusk over a dust-scoured plain; the camera skims the sand on a low fast dolly-in, a rolling dust wall on the horizon. 00:00.8-00:02.6 A cavalry mass appears at the dust line and charges at full gallop, natural real-time speed, hooves hammering the ground and kicking sand-spray plumes behind every stride; the camera drifts laterally, letting the charge grow in the frame. 00:02.6-00:04.8 The camera sprints into a side chase alongside the front rank, riders locked in crisp focus, lance-tips cutting through the hanging dust haze, sand glowing gold in the low backlight, metal clatter and banner cloth tearing in the wind. 00:04.8-00:06.2 At the peak the front rank surges past the lens and the trailing dust wall swallows the frame from behind. 00:06.2-00:07.0 The dust clears; the camera holds low behind the charge as it streams away into the haze, dust settling in fading golden light.

overall_soundscape: thunder of hooves building in waves; metal clatter and banner snap; one low war-horn at the pass-by peak.

non_diegetic_music: driving percussion and low brass accelerating to the pass-by, cutting into a low rumble on the wide reset.
```

**填充示例（可直接运行）**：无占位符，P1 为完全成品，复制即用。

**验收**：首秒低机位贴沙推进 + 尘线可见；全速狂奔真实速度、无主体慢镜；越镜为唯一峰值；金逆光剪影；至少两层尘参与响应；结尾尘落俯瞰；无镜头切换、无文字、无宫格。

## P3 — T2VA 变体：余烬之夜

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：7s ｜ **节奏**：快（火光突袭）→ 全速（夜追）→ 峰值（火把墙吞镜）→ 缓（余烬沉降）

```text
integrated_multimodal_description: [Shot 1] 00:00.0-00:07.0 Ash-silver night over a scorched battlefield lit by burning debris; the camera skims low and fast over ember-lit sand toward a column of torchlight on the horizon. 00:00.8-00:02.6 The raid erupts: a cavalry column charges at full gallop from the flames, natural real-time speed, torch flames streaming backwards, embers spiraling through the dust haze; the camera drifts laterally, letting the column grow in the frame. 00:02.6-00:04.8 The camera sprints into a side chase, riders locked in crisp focus, dark armor glinting with firelight, sword edges and horse muscle visible in the flicker, a burning standard trailing sparks. 00:04.8-00:06.2 At the peak the column surges past the lens and the torchlight wall swallows the frame in a burst of ember spray. 00:06.2-00:07.0 Embers drift down; the camera holds low behind the column as it shrinks into the dark plain, fires guttering behind it.

overall_soundscape: rolling hoof thunder against crackling fire; blade hiss and ember pop; a distant war horn at the peak.

non_diegetic_music: low strings and quick taiko drums driving to the ember-wall peak, resolving into a single sustained low note on the reset.
```

## 修改指南

- **换时代/军种**：把 rider/lance/armor 换成 katana samurai、mounted archers、war elephants 等，**保留**「全速 + 真实时间 + 两个加速事件 + 一个越镜峰值」骨架。
- **换光照**：golden backlight / torch flames 可换成 moonlight、storm flash、sunrise flare，并同步调整色调词。
- **换镜头**：贴沙俯压、侧向追拍、越镜吞镜、俯瞰收束四个镜头位可改角度，但顺序与职责不变。
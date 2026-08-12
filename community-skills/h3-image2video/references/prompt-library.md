# H3 Image-to-Video — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 **图生视频** Prompt：I2VA（首帧）/ FL2VA（首+尾帧）/ L2VA（尾帧）三模式各一例，语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。用图片锁形象，用文字锁动作。

> 只有文字没有图？请换用 `h3-text2video`（纯文生）。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-i2va-望远镜四关键帧) | I2VA | 16:9 | 8s | 四张关键帧图 + 文字推进 | 用多帧图串成一段推进式镜头 |
| [P2](#p2-fl2va-首帧到尾帧-舞剑) | FL2VA | 9:16 | 5s | 起势图 + 收势图 | 从姿势 A 精确过渡到姿势 B |
| [P3](#p3-l2va-尾帧定格) | L2VA | 16:9 | 6s | 只有一张结尾定格图 | 倒推开场并精确落帧 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动字段名、段落顺序与时间码格式**。段落正文用英文撰写，画面文字 / 对白保留原文。

---

## P1 · I2VA 望远镜四关键帧

- **模式**：I2VA · 16:9 · 8s
- **所需素材**：① 四张同一观景位的关键帧图 `<Picture 1>`（远景山峦）`<Picture 2>`（中景树林）`<Picture 3>`（近景枝叶）`<Picture 4>`（目镜特写）
- **注意**：四图按序逐一 `fully referenced`，每图锁定一拍；镜头推进感靠画面切换 + 时间码实现

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced; at 2.00 seconds into the target video, <Picture 2> (from [Shot 2]) is fully referenced; at 4.00 seconds into the target video, <Picture 3> (from [Shot 3]) is fully referenced; at 6.00 seconds into the target video, <Picture 4> (from [Shot 4]) is fully referenced.

integrated_multimodal_description:
[Shot 1] The target video is a documentary-style aerial travel sequence with crisp daylight and rich natural color. At 0.00 seconds, distant blue mountain ridges roll under a clear sky, fully matching <Picture 1>. From 0.00 to 2.00 seconds, thin clouds drift slowly across the peaks as the camera stays on the wide vista. [Shot 2] From 2.00 to 4.00 seconds, the view cuts to a mid-level forest band with layered pine treetops, fully matching <Picture 2>, gentle wind swaying the canopy. [Shot 3] From 4.00 to 6.00 seconds, the view cuts to a close-up of fresh branches with a dew-covered spider web, fully matching <Picture 3>, the frame drifting slowly downward. [Shot 4] From 6.00 to 8.00 seconds, the view cuts to a telescope eyepiece in sharp focus, fully matching <Picture 4>, sunlight flaring softly across the lens as the frame settles.

overall_soundscape: Light mountain wind, distant bird calls, and a faint mechanical click as each view changes.

non_diegetic_music: A calm ambient pad with slow piano notes, growing slightly in warmth toward the final frame.
```

**WebApp 粘贴版**（先上传 4 张图，把 `@图片` 换成输入框 @ 弹出的对应素材）：

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced; at 2.00 seconds into the target video, <Picture 2> (from [Shot 2]) is fully referenced; at 4.00 seconds into the target video, <Picture 3> (from [Shot 3]) is fully referenced; at 6.00 seconds into the target video, <Picture 4> (from [Shot 4]) is fully referenced.

integrated_multimodal_description:
[Shot 1] The target video is a documentary-style aerial travel sequence with crisp daylight and rich natural color. At 0.00 seconds, distant blue mountain ridges roll under a clear sky, fully matching <Picture 1>. From 0.00 to 2.00 seconds, thin clouds drift slowly across the peaks as the camera stays on the wide vista. [Shot 2] From 2.00 to 4.00 seconds, the view cuts to a mid-level forest band with layered pine treetops, fully matching <Picture 2>, gentle wind swaying the canopy. [Shot 3] From 4.00 to 6.00 seconds, the view cuts to a close-up of fresh branches with a dew-covered spider web, fully matching <Picture 3>, the frame drifting slowly downward. [Shot 4] From 6.00 to 8.00 seconds, the view cuts to a telescope eyepiece in sharp focus, fully matching <Picture 4>, sunlight flaring softly across the lens as the frame settles.

overall_soundscape: Light mountain wind, distant bird calls, and a faint mechanical click as each view changes.

non_diegetic_music: A calm ambient pad with slow piano notes, growing slightly in warmth toward the final frame.
```

---

## P2 · FL2VA 首帧到尾帧 · 舞剑

- **模式**：FL2VA · 9:16 · 5s
- **所需素材**：① 起势图 `<Picture 1>`（古装人物持剑侧立）② 收势图 `<Picture 2>`（同一人物剑尖朝下背身收剑）
- **注意**：首尾帧对齐指令必须写对结束时间戳（两位小数）；描述用「首帧状态 → 中间变化 → 逐步趋近 → 尾帧状态」结构

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the 5.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a wuxia film sequence in realistic cinematic style with soft morning mist and cool blue tones. At 0.00 seconds, a robed swordsman stands in profile holding a longsword low at his side, fully matching <Picture 1>. From 0.00 to 1.50 seconds, he shifts his weight and draws the blade up in a slow rising arc, robes trailing in the breeze. From 1.50 to 3.50 seconds, he steps into a turning slash, the blade tracing a full circle as dust and petals spiral around him. From 3.50 to 5.00 seconds, he completes the turn, lowers the blade behind his back, and settles into the exact stance, angle, and robe flow of <Picture 2> as the final frame lands.

overall_soundscape: The whistle of the blade cutting air, cloth snapping, and a single bell toll in the distance.

non_diegetic_music: A restrained guzheng phrase with a low drum pulse, ending on the final pose.
```

**WebApp 粘贴版**（先上传起势图与收势图，替换 `@图片`）：

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the 5.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a wuxia film sequence in realistic cinematic style with soft morning mist and cool blue tones. At 0.00 seconds, a robed swordsman stands in profile holding a longsword low at his side, fully matching <Picture 1>. From 0.00 to 1.50 seconds, he shifts his weight and draws the blade up in a slow rising arc, robes trailing in the breeze. From 1.50 to 3.50 seconds, he steps into a turning slash, the blade tracing a full circle as dust and petals spiral around him. From 3.50 to 5.00 seconds, he completes the turn, lowers the blade behind his back, and settles into the exact stance, angle, and robe flow of <Picture 2> as the final frame lands.

overall_soundscape: The whistle of the blade cutting air, cloth snapping, and a single bell toll in the distance.

non_diegetic_music: A restrained guzheng phrase with a low drum pulse, ending on the final pose.
```

---

## P3 · L2VA 尾帧定格

- **模式**：L2VA · 16:9 · 6s
- **所需素材**：① 只有一张结尾定格图 `<Picture 1>`（人物举杯看向镜头）
- **注意**：`<Picture 1>` 属于最后一个 `[Shot N]`；结构为「合理前置状态 → 明确动作路径 → 末段逐步趋近 → 尾帧精确落地」

```text
How the reference pictures align with the target video — <Picture 1> (from [Shot N]) aligns with the 6.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a warm cinematic character vignette with golden-hour window light and a shallow depth of field. A young man in a cream sweater stands by a window, soft light raking across his face. From 0.00 to 2.00 seconds, he stands relaxed with his hands resting on the windowsill, looking out at the street. From 2.00 to 4.00 seconds, he turns toward the camera, picks up a glass of amber tea from the sill, and lifts it slowly to chest height. From 4.00 to 6.00 seconds, he raises the glass in a gentle toast toward the lens, tilts his head slightly, and settles into the exact pose, lighting, and composition of <Picture 1> as the final frame lands.

overall_soundscape: Quiet room tone with a distant street hum and the faint clink of the glass being set down.

non_diegetic_music: A soft acoustic guitar phrase at 66 BPM, intimate and unhurried.
```

**WebApp 粘贴版**（先上传尾帧图，替换 `@图片`）：

```text
How the reference pictures align with the target video — <Picture 1> (from [Shot N]) aligns with the 6.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a warm cinematic character vignette with golden-hour window light and a shallow depth of field. A young man in a cream sweater stands by a window, soft light raking across his face. From 0.00 to 2.00 seconds, he stands relaxed with his hands resting on the windowsill, looking out at the street. From 2.00 to 4.00 seconds, he turns toward the camera, picks up a glass of amber tea from the sill, and lifts it slowly to chest height. From 4.00 to 6.00 seconds, he raises the glass in a gentle toast toward the lens, tilts his head slightly, and settles into the exact pose, lighting, and composition of <Picture 1> as the final frame lands.

overall_soundscape: Quiet room tone with a distant street hum and the faint clink of the glass being set down.

non_diegetic_music: A soft acoustic guitar phrase at 66 BPM, intimate and unhurried.
```

---

## 结构与语法速查

**对齐指令固定句式（首行，必须）：**

```text
I2VA:
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

FL2VA:
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the S.SS-second mark of the target video.

L2VA:
How the reference pictures align with the target video — <Picture 1> (from [Shot N]) aligns with the S.SS-second mark of the target video.
```

**基础模式顺序（固定）：**

```text
[关键帧对齐指令行 + 一个空行]

integrated_multimodal_description: ...
overall_soundscape: ...
non_diegetic_music: ...
```

**高频规则：**

- 对齐指令行后**必须空一行**再写字段
- 结尾时间戳写两位小数（`5.00`），且必须等于视频总时长
- I2VA 多帧时逐帧 `fully referenced`，每帧锚定一个时间点，顺序不得乱
- 身份锚点：主体描述给 3–5 个跨帧锚点（外形/服装/道具），保证多帧一致
- 单镜头偏好：FL2VA / L2VA 只写一个 `[Shot 1]`；I2VA 多帧可多镜头编号
- 画面内文字保留原文语言

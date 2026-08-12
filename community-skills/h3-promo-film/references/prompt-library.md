# H3 Promo Film — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 **文生宣传/预告片（T2VA）** Prompt——产品宣传与影视预告两类，语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。无任何参考素材，一切画面由文本承载。

> 需要参考图 / 参考视频？本 Skill 不适用，请换用 `h3-keyframe-film`（图生）或 `reference-motion-transfer`（动作迁移）。

## 速查表

| 编号 | 画幅 | 时长 | 主题 | 适用场景 |
| --- | --- | --- | --- | --- |
| [P1](#p1-美食宣传-北京烤鸭) | 16:9 | 6s | 美食产品宣传 · 北京烤鸭 | 电商/餐饮产品短宣传片 |
| [P2](#p2-史诗太空预告) | 9:16 | 8s | 史诗级太空歌剧院线短预告 | 竖屏影视预告 / 氛围大片 |

> 使用规则：替换 `<>` 内的描述即可，**切勿改动字段名、段落顺序与时间码格式**。段落正文用英文撰写，画面文字 / 对白保留原文。

---

## P1 · 美食宣传 · 北京烤鸭

- **模式**：T2VA · 16:9 · 6s
- **所需素材**：无
- **注意**：三拍式节奏（展示→切分→成品），每个拍点带时间码；刀切画面用特写，成品画面用中景

```text
integrated_multimodal_description:
[Shot 1] The target video is a cinematic food-commercial style with warm golden lighting and shallow depth of field. At 0.00 seconds, a glistening roasted Peking duck with caramelized mahogany skin hangs in a traditional wood-fired oven, filmed in close-up with gentle steam rising. From 0.00 to 2.00 seconds, the camera slowly pushes in on the crisp skin while hot oil beads glisten under the light. From 2.00 to 4.00 seconds, a chef's knife slices the duck in an elegant arc, thin pieces with perfect skin-to-meat ratio fanning out onto a white porcelain plate. From 4.00 to 6.00 seconds, the finished platter is presented in a medium shot, garnished with cucumber and scallion brushes beside a small dish of hoisin sauce, the text "北京烤鸭" appearing elegantly at the bottom right.

overall_soundscape: The crackle of crispy skin under the blade, a faint sizzle, and a warm room tone with very soft background chatter.

non_diegetic_music: An upbeat cinematic percussion track at 108 BPM with warm brass hits, building energy toward the final presentation.
```

**WebApp 粘贴版**（hailuoai.video/tools/minimax-h3，直接粘贴即生成，约 850 字符）：

```text
integrated_multimodal_description:
[Shot 1] The target video is a cinematic food-commercial style with warm golden lighting and shallow depth of field. At 0.00 seconds, a glistening roasted Peking duck with caramelized mahogany skin hangs in a traditional wood-fired oven, filmed in close-up with gentle steam rising. From 0.00 to 2.00 seconds, the camera slowly pushes in on the crisp skin while hot oil beads glisten under the light. From 2.00 to 4.00 seconds, a chef's knife slices the duck in an elegant arc, thin pieces with perfect skin-to-meat ratio fanning out onto a white porcelain plate. From 4.00 to 6.00 seconds, the finished platter is presented in a medium shot, garnished with cucumber and scallion brushes beside a small dish of hoisin sauce, the text "北京烤鸭" appearing elegantly at the bottom right.

overall_soundscape: The crackle of crispy skin under the blade, a faint sizzle, and a warm room tone with very soft background chatter.

non_diegetic_music: An upbeat cinematic percussion track at 108 BPM with warm brass hits, building energy toward the final presentation.
```

---

## P2 · 史诗太空预告

- **模式**：T2VA · 9:16 · 8s
- **所需素材**：无
- **注意**：三镜头推进结构（远景星际→近景飞船→特写舱内），风格句写实电影感；时间码 0-2-5-8

```text
integrated_multimodal_description:
[Shot 1] The target video is an epic science-fiction teaser in realistic cinematic style with volumetric light and deep-space contrast. At 0.00 seconds, a lone starship glides past a colossal gas giant, its rings backlit by a dying blue star, filmed in an extreme wide shot. From 0.00 to 2.00 seconds, the camera holds the wide shot as the ship's running lights pulse in the dark. From 2.00 to 5.00 seconds, the shot cuts closer to the ship's hull, weathered panels and tiny maintenance lights drifting past in slow parallax. From 5.00 to 8.00 seconds, the camera drifts through the cockpit window: a pilot silhouette at the console, a holographic star map rotating ahead, and the blue planet's glow washing across the dashboard, before the frame fades to black.

overall_soundscape: Deep hum of the ship's reactor, soft distant rumble of engines, and sparse metallic creaks in the void.

non_diegetic_music: A slow cinematic string pulse building from silence, with a low brass swell that cuts to silence on the final fade.
```

**WebApp 粘贴版**（约 900 字符）：

```text
integrated_multimodal_description:
[Shot 1] The target video is an epic science-fiction teaser in realistic cinematic style with volumetric light and deep-space contrast. At 0.00 seconds, a lone starship glides past a colossal gas giant, its rings backlit by a dying blue star, filmed in an extreme wide shot. From 0.00 to 2.00 seconds, the camera holds the wide shot as the ship's running lights pulse in the dark. From 2.00 to 5.00 seconds, the shot cuts closer to the ship's hull, weathered panels and tiny maintenance lights drifting past in slow parallax. From 5.00 to 8.00 seconds, the camera drifts through the cockpit window: a pilot silhouette at the console, a holographic star map rotating ahead, and the blue planet's glow washing across the dashboard, before the frame fades to black.

overall_soundscape: Deep hum of the ship's reactor, soft distant rumble of engines, and sparse metallic creaks in the void.

non_diegetic_music: A slow cinematic string pulse building from silence, with a low brass swell that cuts to silence on the final fade.
```

---

## 结构与语法速查

**T2VA 顺序（固定）：**

```text
[一个空行]

integrated_multimodal_description: ...
overall_soundscape: ...
non_diegetic_music: ...
```

**高频规则：**

- 开头第一句必须是**风格句**：风格 + 光线 + 画质（cinematic / 手绘 / 广告风…）
- `[Shot N]` 不写时间戳；**正文节拍必须带时间码**：`From X.XX to Y.YY seconds, ...`
- 时间码收尾要落在视频总时长上（如 6s 视频最后一拍 `From 4.00 to 6.00`）
- 每个镜头只能出现一次，多镜头用 `[Shot 1] [Shot 2]` 顺序编号
- 画面内文字（招牌/产品名）写明位置，保留原文语言
- 3–5 拍为宜；单拍 ≥1s，避免 0.5s 内的碎拍
- 纯文本没有参考，**禁止**出现 `<Picture N>` / `<Video N>` / reference 类字段

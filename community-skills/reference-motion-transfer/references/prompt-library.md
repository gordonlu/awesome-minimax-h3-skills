# Reference Motion Transfer — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖动作参考迁移的四种可用模式，每种模式一个示例，按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt` / `ref-en.txt`）。

> 为什么没有 T2VA：纯文本生成没有任何参考物，动作无从迁移，本 Skill 不适用。
> 为什么每种模式只有一个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)（文生/图生/首尾帧/关键帧/视频编辑/动作运镜参考，均有原文示例）。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-ref2va-舞蹈迁移) | Ref2VA | 16:9 | 7s | 舞蹈参考视频 + 目标角色图 | 主体「做参考视频里的动作」——主路线 |
| [P2](#p2-i2va-无参考视频兜底) | I2VA | 16:9 | 6s | 目标角色首帧图 + 文字动作描述 | 没有参考视频，只有一张图 + 一段文字 |
| [P3](#p3-fl2va-首尾姿态) | FL2VA | 1:1 | 5s | 起始姿态图 + 结束姿态图 | 从姿势 A 精确过渡到姿势 B |
| [P4](#p4-l2va-尾帧姿态) | L2VA | 16:9 | 6s | 最终姿态图 | 只有结尾定格图，倒推开场并落在该帧 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

---

## P1 · Ref2VA 舞蹈迁移

- **模式**：Ref2VA（主路线，官方六段式）
- **画幅 / 时长**：16:9 · 7s（参考时长 = 输出时长；拍数不变，时间码按比例缩放）
- **所需素材**：① 7s 单人舞蹈参考视频 `<Video 1>`（固定机位、全身清晰、无剪辑）② 狐狸角色图 `<Picture 1>`
- **适用**：全身舞蹈 / 走位迁移，动作保真优先
- **注意**：动作作为 `<Subject 2>` 从 `<Video 1>` 提取，保留标记用 `attribute_transfer`；固定机位写入镜头描述。**detailed_description 不重述具体舞步**——动作内容完全由参考视频承载，文本只写场景、机位、主体位置、节奏跟随与收尾状态，避免与参考动作冲突

```text
subject_definitions:
<Subject 1> is the anthropomorphic red fox in <Picture 1>: slim athletic build, orange fur, white muzzle and chest, large ears, amber eyes, white-tipped fluffy tail, black cropped hoodie with orange accents, white top, dark joggers, white-black-orange sneakers.
<Subject 2> is the dance routine of the dancer in <Video 1>: its step sequence, arm swings, body turns, hip timing, and tempo.

summary:
[reference generation] The target video shows <Subject 1> performing <Subject 2> in a clean indoor studio at the routine's original timing and energy.

retention_analysis:
<Subject 1> appears in [Shot 1]: fully_preserved. The fox's identity, proportions, outfit, and tail stay consistent.
<Subject 2> appears in [Shot 1]: attribute_transfer. The dance transfers from the dancer in <Video 1> to <Subject 1>; the dancer never appears.

detailed_description:
The target video follows the art style of <Picture 1> in a clean light-gray studio with a white backdrop.
[Shot 1] A static wide shot frames the fox's full body throughout. <Subject 1>, the fox from <Picture 1> in its black hoodie, white top, joggers, and sneakers, stands centered and performs <Subject 2>, following its step sequence, arm swings, body turns, hip timing, and tempo exactly from the first beat to the closing pose, in one continuous shot with no cuts. From 0.00 to 7.00 seconds the fox completes the routine at the reference video's own rhythm and holds the final pose as the last beat rings out.

overall_soundscape: Soft footfalls and the rustle of clothing sync with the steps in a quiet room tone.

non_diegetic_music: An upbeat funk-pop instrumental around 116 BPM with a four-on-the-floor kick, off-beat claps, and a bouncy bassline, matching the routine's tempo.
```

**WebApp 粘贴版**（hailuoai.video/tools/minimax-h3）：先上传参考视频与主体图，再把下块里的 `@视频` / `@图片` 换成输入框 @ 弹出的对应素材。六段结构与保留标记不变，仅去掉 `<Picture N>` / `<Video N>` 源标注。整块约 1560 字符，适配 Web 输入上限（约 1800 字符截断）：

```text
subject_definitions:
<Subject 1> is the anthropomorphic red fox: slim athletic build, orange fur, white muzzle and chest, large ears, amber eyes, white-tipped fluffy tail, black cropped hoodie with orange accents, white top, dark joggers, white-black-orange sneakers.
<Subject 2> is the dance routine of the dancer in @视频: its step sequence, arm swings, body turns, hip timing, and tempo.

summary:
[reference generation] The target video shows <Subject 1> performing <Subject 2> in a clean indoor studio at the routine's original timing and energy.

retention_analysis:
<Subject 1> appears in [Shot 1]: fully_preserved. The fox's identity, proportions, outfit, and tail stay consistent.
<Subject 2> appears in [Shot 1]: attribute_transfer. The dance transfers from @视频 to <Subject 1>; the dancer never appears.

detailed_description:
The target video follows the art style of @图片, in a clean light-gray studio with a white backdrop.
[Shot 1] A static wide shot frames the fox's full body throughout. <Subject 1>, the fox in its black hoodie, white top, joggers, and sneakers, stands centered and performs <Subject 2>, following its step sequence, arm swings, body turns, hip timing, and tempo exactly from the first beat to the closing pose, in one continuous shot with no cuts. From 0.00 to 7.00 seconds the fox completes the routine at the reference video's own rhythm and holds the final pose as the last beat rings out.

overall_soundscape: Soft footfalls and the rustle of clothing sync with the steps in a quiet room tone.

non_diegetic_music: An upbeat funk-pop instrumental around 116 BPM with a four-on-the-floor kick, off-beat claps, and a bouncy bassline, matching the routine's tempo.
```

---

## P2 · I2VA 无参考视频兜底

- **模式**：I2VA（无参考视频时的主兜底）
- **画幅 / 时长**：16:9 · 6s
- **所需素材**：① 目标角色首帧图 `<Picture 1>`（站姿全身）② 用户提供的文字动作描述
- **适用**：只有一张图 + 一段「让它做这个动作」的文字
- **注意**：动作保真度完全取决于文字描述质量；描述必须带时间码分拍；首行关键帧对齐指令不可省略

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description:
[Shot 1] The target video is a cinematic live-action-style scene with warm afternoon window light. At 0.00 seconds, a young woman with short black hair, wearing a beige trench coat, stands in the center of a sunlit café interior, fully matching <Picture 1>. From 0.00 to 2.00 seconds, she looks down at the cup on the table and picks it up with her right hand. From 2.00 to 4.00 seconds, she takes a slow sip, sets the cup back down, and glances out the window to her left. From 4.00 to 6.00 seconds, she turns her head back toward the camera and gives a soft, warm smile while holding the cup with both hands.

overall_soundscape: Quiet café ambience with faint clinking of cups, a distant espresso machine, and soft background chatter.

non_diegetic_music: Gentle acoustic guitar theme at 70 BPM, warm and intimate, with a slow fingerpicked pattern.
```

---

## P3 · FL2VA 首尾姿态

- **模式**：FL2VA
- **画幅 / 时长**：1:1 · 5s
- **所需素材**：① 起始姿态图 `<Picture 1>`（蜷缩的猫）② 结束姿态图 `<Picture 2>`（坐姿的猫）
- **适用**：需要「精确落到结束姿势」的过渡动作；伸展、起身、定格类
- **注意**：FL2VA 倾向单镜头；首行对齐指令必须写对结束时间戳（`S.SS` 两位小数）；描述使用「首帧状态 → 中间变化 → 逐步趋近 → 尾帧状态」结构

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the 5.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] The target video is a stylized 2D-animated scene in flat vector art style with soft pastel colors. At 0.00 seconds, a round orange cat character sits on a window sill, its body curled into a compact ball, fully matching <Picture 1>. From 0.00 to 1.50 seconds, the cat uncurls slowly, stretching its front paws forward across the sill with a deep yawn. From 1.50 to 3.50 seconds, the cat pushes itself up onto all fours and arches its back in a long upward stretch. From 3.50 to 5.00 seconds, the cat settles into a seated upright position, tail curling neatly around its paws, fully matching <Picture 2> as the final frame lands.

overall_soundscape: Soft pad of paws on wood, a quiet yawn, and the faint sound of birds outside the window.

non_diegetic_music: N/A
```

---

## P4 · L2VA 尾帧姿态

- **模式**：L2VA
- **画幅 / 时长**：16:9 · 6s
- **所需素材**：① 最终定格姿态图 `<Picture 1>`（狐狸 V 字定格 pose）
- **适用**：只有结尾一张定格图，需要倒推「前面发生了什么动作」
- **注意**：`<Picture 1>` 属于最后一个 `[Shot N]` 而非 Shot 1；结构为「合理的前置状态 → 明确动作路径 → 末段逐步趋近 → 尾帧精确落地」

```text
How the reference pictures align with the target video — <Picture 1> (from [Shot 1]) aligns with the 6.00-second mark of the target video.

integrated_multimodal_description:
[Shot 1] 3D CG, soft Pixar-like cartoon style, a wide shot frames the whole body of a stylized orange fox with a cream belly, a white-tipped fluffy tail, and a teal bandana in a clean light-gray studio space. The fox begins in a relaxed standing pose, feet together and arms loosely at its sides, facing slightly right of camera. From 0.00 to 2.00 seconds, the fox shifts its weight to the left foot and raises both arms overhead while the tail sweeps in a slow arc behind it. From 2.00 to 4.00 seconds, the fox steps forward with the right foot, pivots counterclockwise in a full turn, and comes back facing the camera, arms folding down to its sides. From 4.00 to 6.00 seconds, the fox slides backward into a wide stance, raises both arms into a V shape above its head, and settles into the exact pose, angle, lighting, and composition of <Picture 1> as the final frame lands.

overall_soundscape: Soft footfalls on the studio floor and the light rustle of the tail sweep, in a quiet indoor room tone.

non_diegetic_music: A low electronic pulse at a slow tempo, ending immediately as the fox reaches the final pose.
```

---

## 结构与语法速查

**Ref2VA 六段顺序（不可调换）：**

```text
1. subject_definitions   定义目标主体与动作来源（<Subject N> / <Picture N> / <Video N>）
2. summary               [reference generation] 前缀 + 谁做什么、来自哪个标签
3. retention_analysis    逐标签标注：fully_preserved / attribute_transfer / weak_reference
4. detailed_description  风格句 → [Shot N]（不带时间戳）→ 节拍时间码正文（350–500 词）
5. overall_soundscape    环境音与动作音效
6. non_diegetic_music    背景音乐方向（无则 N/A）
```

**基础模式（I2VA / FL2VA / L2VA）顺序：**

```text
[关键帧对齐指令行（固定句式，见下）+ 一个空行]

integrated_multimodal_description: ...
overall_soundscape: ...
non_diegetic_music: ...
```

对齐指令固定句式：

```text
I2VA:
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

FL2VA:
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the S.SS-second mark of the target video.

L2VA:
How the reference pictures align with the target video — <Picture 1> (from [Shot N]) aligns with the S.SS-second mark of the target video.
```

**动作迁移高频规则：**

- 动作作为 `<Subject N>` 抽取自 `<Video 1>`，保留标记一律 `attribute_transfer`
- 目标身份保留标记一律 `fully_preserved`，并在定义中给 3–5 个跨帧身份锚点
- **detailed_description 不重述具体舞步**：动作内容由参考视频唯一承载，文本只写成片可见的场景、机位、主体位置、单镜头节奏结构与收尾状态，绝不编造动作细节
- 节拍时间码只在需要标定成片结构时使用（如单镜头开头/收尾）；舞步内部节奏交给参考视频
- 固定机位必须写「The camera holds a static shot throughout」
- 一次生成只允许一个动作来源（一个 `<Video 1>`）
- I2VA / FL2VA / L2VA 均为单镜头偏好；Ref2VA 多镜头可用
- 本 Skill 不提供 T2VA（纯文本无参考，无法迁移动作）
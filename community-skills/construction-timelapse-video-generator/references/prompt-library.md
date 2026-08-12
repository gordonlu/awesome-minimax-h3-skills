# Construction Timelapse Video Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的四种任务模式，每种模式一个示例，按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么每种模式只有一个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-t2va-纯文最快探索) | T2VA | 16:9 | 8s | 无（纯文字） | 快速概念探索——最快出片 |
| [P2](#p2-l2va-尾帧精确收敛) | L2VA | 16:9 | 8s | 完工图 | 有目标成品图，快速迭代 |
| [P3](#p3-fl2va-首尾帧最高控制) | FL2VA | 16:9 | 8s | 空地起始图 + 完工图 | 前后对比要严格一致——最终展示 |
| [P4](#p4-i2va-起始地探索) | I2VA | 16:9 | 8s | 起始地现状图 | 锁定起始场地，自由脑补最终形态 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — T2VA（纯文最快探索）

**素材**：无 ｜ **模式**：T2VA ｜ **画幅**：16:9 ｜ **时长**：8s

```text
integrated_multimodal_description: [Shot 1] Fixed cinematic wide shot of {empty starting site}. A rapid high-compression construction timelapse begins immediately. {foundation/core} forms first, followed by {main structural frame}, {walls/envelope}, {major systems}, and {finishing/landscaping}. Construction progresses visibly every second at accelerated timelapse speed. Each completed stage remains permanently in place and supports the next stage; no structure disappears or resets. {machinery/workers/robots} operate quickly as secondary mechanisms while the growing structure remains the primary motion owner. The build reaches a clear completion peak, activity clears away, and the finished {target} holds briefly in a clean final hero view. No slow motion. No sudden teleport from empty site to finished result.

overall_soundscape: Compressed construction machinery, tools, structural impacts and location ambience.

non_diegetic_music: Energetic rhythmic instrumental track or N/A.
```

**验收**：全程可见进度；≥4 个可读建造阶段；已完成部分持续存在；无慢动作；峰值动作是最终结构完工。

## P2 — L2VA（尾帧精确收敛）

**素材**：一张完工图 ｜ **模式**：L2VA ｜ **画幅**：16:9 ｜ **时长**：8s

- 把完工图当作**精确目的地**；
- 推断合理空地/毛坯起始场地，保留相机与环境；
- 持续向最终几何形态建造，禁止跳变。

**必含语句**：
`The final seconds converge precisely to the supplied last-frame image without changing its architecture, proportions, camera, or material design.`

## P3 — FL2VA（首尾帧最高控制）

**素材**：空地起始图 + 完工图（同一机位）｜ **模式**：FL2VA ｜ **画幅**：16:9 ｜ **时长**：8s

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> is the fully referenced starting frame. At the final frame, <Picture 2> is fully referenced as the completed target.

integrated_multimodal_description: [Shot 1] Create a rapid construction timelapse that continuously transforms the exact starting site in <Picture 1> into the exact completed structure and composition in <Picture 2>. No slow motion and no leisurely cinematic pacing. Visible construction progress occurs throughout the entire clip. First {foundation/core stage} forms, then {main structure} is rapidly assembled, followed by {envelope/major systems}, then {details/landscaping}. Each completed construction stage remains permanently in place and becomes the foundation for the next stage; nothing already completed disappears, resets, relocates, or changes design. Workers, cranes, vehicles or automated tools may move quickly as secondary mechanisms, but the growing built structure is the primary motion owner. The process reaches a clear completion peak before construction activity clears and the video converges precisely to <Picture 2>. Keep the camera fixed or nearly fixed so the entire build progression is continuously readable.

overall_soundscape: Compressed construction ambience with machinery, tools, structural impacts and environmental sound appropriate to the project.

non_diegetic_music: Rhythmic forward-moving instrumental pulse or N/A.
```

## P4 — I2VA（起始地探索）

**素材**：一张起始地现状图 ｜ **模式**：I2VA ｜ **画幅**：16:9 ｜ **时长**：8s

- 保留场地与相机；
- 用文字明确描述最终设计；
- 要求连续累积（禁止 H3 重设计起始环境）。

# Cinematic Key Art Animator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的两种生产模式，每种模式一个示例，按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么每种模式只有一个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-living-key-art-氛围化立绘) | Living Key Art | 任意 | 8s | 一张角色立绘/主视觉图 | 肖像、情绪、氛围化站姿展示——主路线 |
| [P2](#p2-action-burst-高密度战斗) | Action Burst | 任意 | 8s | 一张机甲/武器/战斗姿态图 | 机甲、战斗、快节奏动作——默认战斗路线 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — Living Key Art（氛围化立绘）

**素材**：一张角色立绘（肖像/情绪艺术/站姿展示）｜**模式**：I2VA ｜ **画幅**：任意 ｜ **时长**：8s

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact character identity, face, costume or armor, proportions, signature objects, environment and visual style from <Picture 1>. All character motion occurs at natural real-time speed. <environment motion> is already active from the opening moment. The character <first clear body action>, then <second body action>, causing <secondary physical response>. The sequence reaches one clear visual peak with <activation/light/action event> and resolves into a noticeably changed hero pose. The camera <short supporting movement> and never substitutes for character movement.

overall_soundscape: <environment and body-action sounds>.

non_diegetic_music: <score or N/A>.
```

**验收**：角色至少一次改变剪影的多关节动作；未变回几乎相同的开场姿势；镜头未替角色完成动作；身份全程一致。

## P2 — Action Burst（高密度战斗）

**素材**：一张机甲/武器/战斗姿态图 ｜ **模式**：I2VA ｜ **画幅**：任意 ｜ **时长**：8s

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact character identity, armor or costume design, colors, proportions, weapon, environment and visual style from <Picture 1>. Create a fast-paced 8-second action sequence at full real-time speed, never slow motion. The first visible action begins immediately. <activation/hook>. The character <attack 1>, causing <reaction or incoming threat>. In response, the character <evasion or movement>, which creates an opening to <movement/attack 2>. Without pausing, the character <major Peak 2 action>, followed by <Peak 3 / impact>. Momentum carries naturally into <braking/recovery action>, ending in a strong new action-ready pose. Use 6–9 readable action beats with little idle time. Character motion is always primary. Camera movement, lighting, rain, smoke, sparks and explosions only support the action and never replace it.

overall_soundscape: <dense synchronized action sounds>.

non_diegetic_music: <fast rhythmic score supporting the action arc>.
```

**验收**：≥5 个可读动作节拍；首个大动作不晚到；无长空闲；动作因果连续；终局姿势与开场不同；身份未突变。

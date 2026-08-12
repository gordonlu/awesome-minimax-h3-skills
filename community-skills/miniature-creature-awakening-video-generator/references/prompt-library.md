# Miniature Creature Awakening Video Generator — Runnable Prompt Library

本库提供**可直接运行**的 MiniMax H3 生成 Prompt，覆盖本 Skill 的单一任务模式（I2VA），按 画幅 / 时长 / 素材 标注。语法严格遵循官方 `h3-prompt-writing` 指南（`base-en.txt`）。

> 为什么只有一个案例：变体只是素材不同，结构完全一致——替换素材即可复用同名段落。
>
> 想看更多风格参考？本站整理了官方《使用手册》的精选合辑：
> [`docs/official-prompt-anthology.md`](../../../docs/official-prompt-anthology.md)。

## 速查表

| 编号 | 模式 | 画幅 | 时长 | 所需素材 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| [P1](#p1-canonical-小飞龙苏醒) | I2VA | 任意 | 8s | 一张小生物图（吉祥物/幻想宠物/手办） | 让静态小生物「苏醒 + 肢体动作 + 互动 + 收尾姿态」 |

> 使用规则：替换 `<>` 内的素材引用即可，**切勿改动结构、字段名、段落顺序与标签**。所有段落正文用英文撰写，对白 / 歌词 / 画面文字保留原文。

## P1 — Canonical：小飞龙苏醒

**素材**：一张小飞龙/吉祥物图 ｜ **模式**：I2VA ｜ **画幅**：任意 ｜ **时长**：8s

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact creature identity, colors, anatomy, environment and important objects from <Picture 1>. All creature movement occurs at natural real-time speed, not slow motion. The creature immediately {awakening action}, then clearly {primary body action}. It {short movement} and performs {interaction / Peak Action}. It reacts with {reaction} and finishes in {final pose}. The camera {supporting camera motion} but never substitutes for creature movement. Keep the creature clearly visible and anatomically consistent.

overall_soundscape: {environment + physical action sounds}.

non_diegetic_music: {music or N/A}.
```

**参考节拍链**（直接替换到模板内即可）：
`blink → lift head → stretch → two quick steps → sneeze golden spark → recoil/react → hero pose`

**验收**：生物非冻结；除眨眼/呼吸外有明确肢体动作；Peak Action 存在；无慢动作感；解剖/身份不变；特效与镜头未抢戏。

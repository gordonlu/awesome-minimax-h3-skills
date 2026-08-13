---
name: h3-cinematic-director
description: |
  The craft layer above h3-prompt-writing — camera language, beat architecture, mask reframes, anti-AI-artifact checks (float, glide, blur, morph), lighting discipline, physics self-consistency. Use when a video prompt needs directing decisions: shot ladders, hidden camera repositions, grounding, soundscape taste, or a post-mortem of a generated clip that feels flat, floaty, or unmotivated. h3-keyframe-film / h3-promo-film own the format; this owns the craft. Local base-skill candidate — not yet listed on the site; publish after N satisfied videos.
---

# H3 导演手记（Cinematic Director）

h3-keyframe-film / h3-promo-film 回答"怎么写合规的 H3 提示词"；本 skill 回答"**好导演在这里会怎么拍**"。

核心原则：一段视频由三层决定——**节拍**（叙事弧）、**机位**（镜头人格）、**接地**（物理在场感）。prompt 三件事都做对：节拍有单一峰值、机位有机位阶梯、接地给每一帧物理证据。

## 1. Trigger

Use when: multi-beat video requests; any doubt about camera moves; "怎么更有电影感"; post-mortem of flat / floaty / blurry / AI-smelling generated clips; new skill design (inherit the craft before the first video round, not after six).

Do **not** use when: the question is pure format mechanics (field names, alignment lines, timing notation → `h3-prompt-writing` / `h3-keyframe-film`), or image-only craft (still-image composition, GPT-Image structure → the P-IMG chapters in the generator skills).

## 2. Intake

Confirm ① 每拍时长预算（≥1.4s）；② 唯一峰值拍及其位置（全片 70–90% 处）；③ 每拍机位人格（单段连续镜头内通过掩体换位，不是多镜头）；④ 每拍至少两条接地证据；⑤ 光源与阴影方向（先订死，再写别的）；⑥ 声音形状（soundscape 与 music 的方向句）。

## 3. Seven checks（完整手册见 references/director-craft.md）

1. **节拍架构** — 单一冲击峰值、速度三明治（慢拍被快拍夹住）、不许主体慢镜
2. **机位阶梯与掩体换位** — 远景漂移→侧面追拍→正面逼近→劈镜而过→身后收束；尘幕/光爆/水花吞画即伪切换点
3. **接地五件套** — 前景纹理滚动、接触点显式化、手持抖动、机位不悬空、地面光影锚
4. **防模糊旋钮** — 锁定焦点追拍、前景粒子降密度、机速与主速解耦
5. **光线纪律** — 背光/逆光优先、光源先钉死、坏词进 Constraints
6. **防 AI 滑行清单** — 均匀运动/无接触证据/对称构图/面光均匀，命中即返工
7. **物理自洽校对** — 光位-阴影-反射-尘埃方向四项互查（图与视频同查）

## 4. 与格式类 skill 的组合方式

- `h3-keyframe-film` 拥有对齐行与时间节拍框架；本 skill 把机位/接地/物理注入这些节拍内部
- 映射关系：单一峰值 → 节拍括号；机位阶梯 → 每括号一条镜头从句；接地五件套 → 每拍接触从句
- 落到 prompt 的写作位置：style 句紧跟对齐行；机位从句与时间括号绑定；接地证据只占每拍内 1–2 个短句，不稀释节拍密度

## 5. 胶片验收（对生成结果）

- **不飘**：暂停帧可看见接触点（蹄落沙/刃切水/脚踩地）
- **不滑**：速度由前景滚动读出，不是主体平移
- **不裂**：峰值拍主体不形变、无 morph
- **不跳**：换位点都有掩体（尘/光/水），无硬切
- **不乱**：光位-阴影-尘埃方向全片一致，画面中无 prompt 未解释的元素
- **单一峰值**：全片只有一处高潮拍

## 6. 版本状态

- 0.1.0 本地基座候选：**未加卡片、未推送**。满足发布条件（≥2 个满意视频，分别覆盖快节奏与大气象两类场景）后：加 data/skills.js 条目 + JSON 校验 + 推送，并让鲸鱼/铁骑/战机等 video 类 skill 的 references 挂链引用。
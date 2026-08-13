---
name: h3-shot-pattern-library
description: >
  Companion skill for h3-micro-cinematic-director. Provides a reusable shot-pattern
  library for MiniMax H3 5–15 second clips, including pattern selection, H3 reliability
  tiers, duration compatibility, T2V/I2V/FL2V guidance, composition arcs, spatial
  choreography, and short prompt examples. Use this skill together with the base
  h3-micro-cinematic-director skill when a clip needs stronger camera language,
  more deliberate spatial design, or a proven shot skeleton instead of inventing
  camera movement from scratch.
license: MIT
metadata:
  version: "0.1.0"
  category: video-direction
  target_model: MiniMax H3
  companion_to: h3-micro-cinematic-director
---

# H3 Shot Pattern Library

这是 `h3-micro-cinematic-director` 的补充 Skill。

它不替代基础 Skill，也不重新定义完整 H3 导演流程。

它只解决一个问题：

> **当 Agent 已经知道“这个 5–15 秒 clip 要发生什么”之后，选择一个成熟的镜头骨架，让空间、构图、主体运动和摄影机运动更有设计感。**

---

# 1. 使用方式

基础 Skill 负责：

```text
Shot Function
→ Blocking
→ Spatial Geometry
→ Action Beats
→ Composition Arc
→ H3 Prompt
```

本 Skill 插入在：

```text
Blocking / Shot Function
        ↓
Shot Pattern Selection
        ↓
Pattern Adaptation
        ↓
Composition Arc + Camera Behavior
        ↓
H3 Prompt Compiler
```

不要让 Pattern 反过来支配故事。

先知道要表达什么，再选镜头。

---

# 2. 核心规则

## 2.1 One Primary Pattern

每个 H3 clip 默认：

```text
1 Primary Shot Pattern
+
0–1 Supporting Spatial Device
```

禁止同时堆叠多个完整模式：

```text
Approach-to-Camera
+ Orbit
+ Crane Reveal
+ Push-In
+ Near-Miss
```

H3 的 5–15 秒窗口不是摄影机游乐场。

---

## 2.2 Pattern Is a Skeleton, Not a Template Prison

Pattern 定义：

- 主体与摄影机的基本空间关系
- 构图如何变化
- 主要视觉动力来自哪里
- 哪一种摄影机运动是合理的

Pattern 不应该固定：

- 角色
- 场景
- 武器
- 美术风格
- 情绪
- 光线
- 所有 Action Beats

同一个 Pattern 可以用于机甲、人物、动物、飞机、车辆或幻想生物。

---

# 3. Reliability Tier

对 H3 镜头模式按生成稳定性分三级。

## Tier A — Recommended

优先使用。

通常满足：

- 单一主要主体
- 单一运动轴
- 摄影机固定或简单跟随
- 遮挡可控
- 空间关系清楚
- 不需要复杂旋转

## Tier B — Conditional

有明显镜头收益，但需要：

- 清楚参考图
- 强 motion_control
- 良好起始构图
- 不过度动作堆叠

## Tier C — Experimental

只在用户明确需要时使用。

常包含：

- 高速近距离掠过
- 大角度复合运动
- 强遮挡
- 摄影机与主体同时高速运动
- 大幅姿态 / 透视变化

Tier C 失败时应降级到 Tier A/B，而不是不断增加 Prompt。

---

# 4. Duration Compatibility

| Pattern Type | 5s | 6–9s | 10–12s | 13–15s |
|---|---:|---:|---:|---:|
| Single reveal / turn | Excellent | Excellent | Good | Weak |
| Approach / rush | Excellent | Excellent | Excellent | Good |
| Tracking / pursuit | Good | Excellent | Excellent | Excellent |
| Transformation | Good | Excellent | Excellent | Excellent |
| Formation / build | Good | Excellent | Excellent | Excellent |
| Isolation / emotional | Good | Excellent | Excellent | Good |
| Near-miss / speed pass | Excellent | Excellent | Good | Weak |
| Long scale reveal | Weak | Good | Excellent | Excellent |

不要为了填满 15 秒，把一个本来 5 秒完成的动作拖慢。

如果模式天然只需要 4–6 秒，应增加：

- aftermath
- secondary spatial reveal
- controlled resolve

而不是无意义慢动作。

---

# 5. Input Strategy Guidance

## I2V

优先：

- Locked Subject Cross
- Foreground Reveal
- Reveal-by-Turn
- Push-to-Decision
- Low-Angle Hero Rise
- Formation Build
- Locked Transformation
- Static Frame / Background Threat

原因：

> I2V 已经拥有强起始构图，应尽量让运动建立在现有图像关系上。

避免轻易要求：

- 大幅摄影机绕到人物背后
- 极端视角切换
- 完全重新建立地理关系

---

## FL2V

优先：

- Approach-to-Camera
- Diagonal Rush
- Reveal-by-Turn
- Impact-and-Recover
- Scale Transformation
- Formation Build

必须先检查：

```text
首帧 → 尾帧
```

是否能够被解释为**同一连续动作链**。

如果首尾状态在空间、人物方向或摄影机位置上互相冲突，不要强行编造运动过程。

---

## T2V

空间自由度最高。

适合：

- Lateral Speed Pass
- Near-Miss Pass
- Depth Corridor Run
- Scale Reveal
- Parallel Track
- Leading Retreat
- Trailing Follow

但仍然必须遵守：

```text
one continuous event
one dominant camera behavior
```

---

# 6. Pattern Selection

根据主要视觉目的选择。

```text
主体从远处逼近？
→ Approach-to-Camera / Diagonal Rush

主体横穿画面？
→ Locked Subject Cross / Lateral Speed Pass

需要突然揭示主体？
→ Foreground Reveal / Occlusion Reveal

主体需要显得巨大？
→ Low-Angle Hero Rise / Scale Reveal

主体高速从摄影机附近掠过？
→ Near-Miss Pass

摄影机跟着主体移动？
→ Parallel Track / Trailing Follow / Leading Retreat

主体主要原地表演？
→ Reveal-by-Turn / Push-to-Decision

主体发生形态变化？
→ Locked Transformation / Silhouette-to-Detail

多个元素逐步组成完整画面？
→ Formation Build

背景威胁需要逐渐进入画面？
→ Static Frame / Background Threat

需要强纵深运动？
→ Depth Corridor Run

需要动作高潮后明显收势？
→ Impact-and-Recover
```

如果两个模式都可以：

> 优先选择更简单、Reliability 更高的模式。

---

# 7. Pattern 01 — Locked Subject Cross

**Tier:** A  
**Best duration:** 5–10s  
**Best for:** 横向运动、人物/车辆/动物、简单高速动作

## Visual Idea

摄影机不动。

主体从画面一侧进入，横穿前中景，再从另一侧离开或停下。

镜头感来自：

```text
主体横向位移
+
前中背景层次
+
屏幕方向
```

而不是摄影机运动。

## Geometry

```text
CAMERA: locked

SUBJECT:
left → right
or
right → left

FOREGROUND:
optional static obstruction

BACKGROUND:
stable
```

## Composition Arc

```text
OPEN:
主体在边缘或尚未完全进入

BUILD:
主体进入主体区域

PEAK:
主体经过画面视觉中心 / 最近点

RESOLVE:
主体离开中心或在另一侧停住
```

## H3 Notes

特别适合 I2V。

如果动作强烈：

- 让身体姿态变化明显
- 不要只做匀速走路
- 用加速 / 刹停 / 跳跃 / 武器动作制造峰值

## Mini Prompt Example

```text
The camera remains completely locked. The rider enters rapidly from the left
midground, crosses the frame from left to right, leans hard into the motion,
passes through the center at maximum speed, then brakes sharply near the
right edge and settles into a stable final pose. Keep the background fixed
and let the subject's movement create the shot.
```

---

# 8. Pattern 02 — Foreground Reveal

**Tier:** A  
**Best duration:** 5–10s  
**Best for:** 出场、威胁揭示、角色介绍、机械/巨兽

## Visual Idea

前景物先遮住部分主体。

主体或摄影机产生少量相对运动后，主体从遮挡后完整出现。

常用前景：

- 门框
- 机械结构
- 岩石
- 竹叶
- 柱子
- 车辆残骸
- 云层边缘

## Geometry

```text
Foreground Occluder
      ↓
partially hidden subject
      ↓
subject/camera moves enough
      ↓
full silhouette revealed
```

## Camera

优先：

```text
locked
or
very short lateral move
```

不要同时大幅 orbit。

## Composition Arc

```text
MYSTERY
→ PARTIAL REVEAL
→ FULL SILHOUETTE
→ ACTION / POSE
```

## Mini Prompt Example

```text
A large broken steel structure dominates the near foreground and initially
hides most of the mecha. The camera stays nearly fixed as the mecha steps
forward from behind the wreckage, first revealing its glowing visor, then
its shoulders and full silhouette. Once fully exposed, it lowers its center
of gravity and locks into a combat stance.
```

---

# 9. Pattern 03 — Approach-to-Camera

**Tier:** A  
**Best duration:** 5–12s  
**Best for:** 逼近、冲锋、人物登场、车辆、飞行物

## Visual Idea

主体沿纵深方向接近摄影机。

镜头感主要来自：

```text
subject scale increase
+
depth expansion
+
foreground parallax
```

## Recommended Lens Intent

```text
24–40mm equivalent look
```

不要只写焦段，要描述视觉效果：

> 主体迅速放大，前景元素移动更快，背景相对稳定。

## Composition Arc

```text
small distant subject
→ medium
→ dominant
→ pass / stop / impact
```

## Mini Prompt Example

```text
The fighter begins as a small distant shape near the horizon and accelerates
directly toward the camera on a shallow diagonal path. Its apparent scale
increases rapidly while nearby cloud edges sweep past faster than the distant
cloud deck. The camera remains mostly fixed, allowing the approaching aircraft
to become the dominant shape in frame before it banks away at the final moment.
```

---

# 10. Pattern 04 — Diagonal Rush

**Tier:** A  
**Best duration:** 5–10s  
**Best for:** 战斗、机甲、剑士、跑酷、车辆

## Visual Idea

主体不是正面冲摄影机，也不是纯横向移动。

而是：

```text
background corner
→ foreground opposite side
```

形成强二维屏幕轨迹 + 三维纵深变化。

典型：

```text
upper-left background
→ lower-right foreground
```

或反向。

## Why It Works

同时产生：

- 横向位置变化
- 主体尺度变化
- 透视速度感

比纯正面冲锋更容易读清身体动作。

## Mini Prompt Example

```text
The mecha bursts from the left background and rushes diagonally toward the
right foreground. Its body grows rapidly in frame while maintaining a clear
three-quarter silhouette. The camera performs only a short lateral adjustment
to preserve the full body as the subject crosses the near plane and reaches
the attack position.
```

---

# 11. Pattern 05 — Lateral Speed Pass

**Tier:** A/B  
**Best duration:** 5–8s  
**Best for:** 飞机、赛车、飞行生物、极速机甲

## Visual Idea

主体高速横穿摄影机前方。

摄影机：

```text
locked
or
short pan / track
```

主体速度明显高于摄影机。

## Important

不要让摄影机完全匹配主体速度。

否则画面会变成：

```text
主体静止
背景移动
```

而失去“掠过”的速度感。

## Composition Arc

```text
approach edge
→ rapid crossing
→ nearest point
→ departure
```

## Mini Prompt Example

```text
The aircraft enters from the far left at high speed and streaks across the
frame toward the right. The camera pans only enough to keep the aircraft
readable, deliberately lagging behind its speed so the jet rapidly traverses
the composition. At the closest point the aircraft briefly fills much of the
frame before pulling away toward the right distance.
```

---

# 12. Pattern 06 — Near-Miss Pass

**Tier:** C  
**Best duration:** 5–8s  
**Best for:** 飞机、车辆、怪物、强速度冲击

## Visual Idea

主体高速逼近，并从摄影机极近处掠过。

关键不是“撞镜头”。

而是：

```text
near collision impression
→ safe offset
→ high-speed pass
```

## Risk

H3 容易出现：

- 主体变形
- 消失
- 穿镜
- 方向错乱

所以必须明确：

```text
passes just beside the camera
does not collide with camera
remains fully coherent
```

## Mini Prompt Example

```text
The fighter approaches rapidly from the upper-right distance, growing in
scale as it aims just beside the camera rather than directly into it. At the
peak it passes extremely close along the camera's left side, creating a brief
near-miss impression, then continues cleanly into the lower-left distance.
The camera does not orbit or reverse direction.
```

---

# 13. Pattern 07 — Parallel Track

**Tier:** B  
**Best duration:** 6–15s  
**Best for:** 奔跑、车辆、人物移动、骑行、机甲行军

## Visual Idea

摄影机与主体平行移动。

```text
subject speed ≈ camera speed
```

主体在画面中保持大致固定位置。

镜头变化主要来自背景视差和动作本身。

## Good For

需要：

- 看清角色动作
- 同时体现持续移动
- 保持身份稳定

## Mini Prompt Example

```text
The swordswoman runs continuously from left to right while the camera tracks
parallel beside her at nearly the same speed. Her position remains around
the center-left of frame while bamboo trunks and rocks sweep rapidly through
the background, clearly communicating forward travel without changing the
camera angle.
```

---

# 14. Pattern 08 — Leading Retreat

**Tier:** B  
**Best duration:** 6–15s  
**Best for:** 人物逼近、追击、对话中移动、威胁靠近

## Visual Idea

摄影机在主体前方后退。

主体向摄影机推进。

```text
subject → camera
camera → backward
```

但摄影机速度略低或基本匹配。

## Visual Read

非常适合表现：

- 逼迫
- 追逐
- 主体持续向观众靠近
- Hero walk

## Mini Prompt Example

```text
The character advances steadily toward the camera while the camera retreats
along the same axis, keeping a medium full-body frame. The camera moves
slightly slower than the character so the subject gradually grows larger
and gains visual pressure throughout the shot.
```

---

# 15. Pattern 09 — Trailing Follow

**Tier:** A/B  
**Best duration:** 6–15s  
**Best for:** 背影、进入未知空间、探索、追逐

## Visual Idea

摄影机在主体后方。

主体向远处移动。

## Why It Works

相比 Leading Retreat：

- 人脸稳定性压力更小
- 空间探索感更强
- 很适合“进入某处”

## Composition Arc

```text
foreground back silhouette
→ deeper movement
→ destination reveal
```

## Mini Prompt Example

```text
Seen from a rear three-quarter view, the explorer moves away from the camera
through the narrow corridor. The camera follows at a controlled distance,
maintaining the full silhouette while the destination gradually becomes
clearer ahead. No orbit or angle switch occurs.
```

---

# 16. Pattern 10 — Reveal-by-Turn

**Tier:** A  
**Best duration:** 5–9s  
**Best for:** 人物、剑士、反派、情绪表演、角色介绍

## Visual Idea

摄影机固定。

主体通过身体旋转改变信息量。

典型：

```text
back / three-quarter back
→ profile
→ three-quarter front
```

或反过来。

## Rule

主体转身时：

> 摄影机不要同时绕。

双旋转会破坏空间感。

## Mini Prompt Example

```text
The camera remains locked as the character begins in a three-quarter back
pose, withholding most of the face. She hears something behind the camera,
pauses, then turns through the shoulders and waist until her face settles
into a clear three-quarter view. The turn itself is the reveal; the camera
does not move.
```

---

# 17. Pattern 11 — Low-Angle Hero Rise

**Tier:** A  
**Best duration:** 5–10s  
**Best for:** 机甲、英雄、巨物、角色登场

## Visual Idea

低机位 + 主体从低姿态进入高姿态。

例如：

```text
kneeling
→ standing
```

```text
head lowered
→ raises head
```

```text
weapon lowered
→ weapon ready
```

摄影机可以：

```text
locked
or
very small upward adjustment
```

## Mini Prompt Example

```text
From a low camera position near ground level, the armored figure begins
partially crouched with its head lowered. It rises to full height, lifts its
head, and brings the weapon into a ready position. The camera stays almost
locked, allowing the increasing vertical silhouette to create the heroic scale.
```

---

# 18. Pattern 12 — Push-to-Decision

**Tier:** A  
**Best duration:** 5–10s  
**Best for:** 人物表演、启动、情绪转折、武器激活

## Visual Idea

主体基本原地。

一个缓慢、单一 push-in 配合一个明确状态改变。

重点不是摄影机推进，而是：

> 推进必须在等待一个可见决定。

例如：

```text
犹豫
→ 握紧武器
```

```text
低头
→ 抬眼
```

```text
静止
→ 启动装置
```

## Mini Prompt Example

```text
The camera performs one slow controlled push-in while the character remains
nearly still. Her eyes stay lowered at first; halfway through the shot her
hand tightens around the sword hilt, then she raises her gaze directly toward
the threat. The push ends exactly as the decision becomes visible.
```

---

# 19. Pattern 13 — Pull-Back Isolation

**Tier:** A  
**Best duration:** 6–12s  
**Best for:** 孤独、余韵、失败、规模揭示

## Visual Idea

开始主体较大。

摄影机缓慢后退，使：

```text
subject scale decreases
environment scale increases
```

镜头意义：

> 人物被环境吞没。

## Mini Prompt Example

```text
The shot begins in a medium view of the lone figure. After the immediate
action resolves, the camera slowly pulls backward in one continuous move.
The character becomes progressively smaller while the empty landscape expands
around them, ending with the subject isolated inside a much larger frame.
```

---

# 20. Pattern 14 — Occlusion Wipe

**Tier:** B  
**Best duration:** 5–10s  
**Best for:** 空间切层、角色运动、车辆、连续视觉转场

## Visual Idea

一个前景物体完整扫过画面。

例如：

- 柱子
- 墙
- 车辆
- 树干
- 巨大机械

形成自然 wipe。

**默认仍是同一镜头、同一空间。**

不要偷偷用 wipe 做场景跳切，除非用户明确要求。

## Mini Prompt Example

```text
The subject moves laterally across the scene while the camera tracks gently.
A large foreground pillar passes fully across the frame, briefly occluding
the subject. As the pillar clears, the same subject continues the same motion
on the other side with unchanged identity, direction, and environment.
```

---

# 21. Pattern 15 — Depth Corridor Run

**Tier:** A/B  
**Best duration:** 6–15s  
**Best for:** 走廊、城市峡谷、森林、隧道、飞行

## Visual Idea

用重复的空间结构强调纵深：

```text
doorways
columns
trees
street lights
tunnel ribs
cloud layers
```

主体沿深度轴运动。

## Composition

强消失点。

摄影机：

```text
locked
follow
or
leading retreat
```

只能选一种。

## Mini Prompt Example

```text
The runner moves straight through a long corridor whose repeating doorframes
create a strong central vanishing point. Each doorway passes at a steady rhythm
as the subject advances deeper through the space. The camera follows smoothly
from behind without changing angle.
```

---

# 22. Pattern 16 — Scale Reveal

**Tier:** A  
**Best duration:** 8–15s  
**Best for:** 巨物、城市、飞船、建筑、怪兽

## Visual Idea

开头故意不给完整尺度参照。

随后通过：

- 人物
- 车辆
- 建筑
- 云层
- 环境关系

逐步揭示主体究竟有多大。

可以摄影机 pull-back，也可以小主体进入画面作为参照。

## Mini Prompt Example

```text
The shot begins close on a massive armored surface, with no clear sense of
scale. As the camera slowly pulls back, structural details become recognizable,
then a tiny maintenance vehicle enters the lower foreground, revealing the
enormous size of the machine. The camera continues the same pull-back until
the full silhouette becomes readable.
```

---

# 23. Pattern 17 — Formation Build

**Tier:** A  
**Best duration:** 6–15s  
**Best for:** 飞剑、无人机、机群、魔法阵、机械组件

## Visual Idea

多个元素逐步形成一个稳定的最终图案。

适合：

```text
scattered
→ coordinated
→ complete formation
```

必须定义最终几何：

- circle
- ring
- wedge
- line
- halo
- symmetrical array

## Mini Prompt Example

```text
Several luminous swords first appear separately around the swordswoman at
uneven distances. One after another they rotate into alignment and settle
into a clean circular orbit around her. The camera stays mostly fixed so the
formation itself becomes the dominant visual change, ending only after the
ring is complete and stable.
```

---

# 24. Pattern 18 — Locked Transformation

**Tier:** A  
**Best duration:** 5–15s  
**Best for:** 变形、觉醒、机械展开、艺术显现

## Visual Idea

摄影机固定或几乎固定。

让所有视觉复杂度集中在：

```text
subject state change
```

非常适合 I2V / FL2V。

## Rule

必须描述 2–4 个中间状态。

不要：

```text
human smoothly transforms into armor
```

而要：

```text
surface lines illuminate
→ armor plates separate
→ internal mechanisms extend
→ final silhouette locks
```

## Mini Prompt Example

```text
The camera remains locked. Thin illuminated seams first appear across the
machine's surface, then the outer armor panels separate and slide outward.
Internal mechanical sections extend into place, followed by the shoulders
and head locking into their final configuration. End only after the transformed
silhouette becomes fully stable.
```

---

# 25. Pattern 19 — Environmental Emergence

**Tier:** A  
**Best duration:** 6–15s  
**Best for:** 雾中出现、云中出现、水下出现、沙尘、烟幕

## Visual Idea

环境本身承担“遮挡 → 显现”。

与 Foreground Reveal 不同：

- Foreground Reveal 是固定物体遮挡
- Environmental Emergence 是体积介质逐渐允许主体被看见

## Mini Prompt Example

```text
Dense mist fills the frame while only a faint silhouette is visible at first.
The figure walks steadily forward as the mist parts around the body, revealing
the legs, torso, and finally the full upper silhouette. The camera remains
mostly locked; the reveal comes from the subject advancing through the mist.
```

---

# 26. Pattern 20 — Impact-and-Recover

**Tier:** A  
**Best duration:** 5–12s  
**Best for:** 战斗、跳跃、落地、斩击、爆炸冲击

## Visual Idea

不要在高潮处直接结束。

镜头结构：

```text
BUILD
→ IMPACT
→ PHYSICAL REACTION
→ RECOVERY
→ FINAL POSE
```

这是 H3 动作视频非常重要的收尾模式。

## Mini Prompt Example

```text
The character accelerates into the strike and reaches maximum speed at the
impact point. The collision throws the body slightly off balance, forcing one
foot to slide backward. The character absorbs the momentum, lowers the center
of gravity, and settles into a stable ready stance. Preserve enough time after
the impact for the recovery to read clearly.
```

---

# 27. Pattern 21 — Static Frame / Background Threat

**Tier:** A  
**Best duration:** 6–12s  
**Best for:** 悬疑、怪兽、威胁、角色未察觉危险

## Visual Idea

摄影机固定。

前景主体动作很少。

真正的变化发生在背景：

```text
background threat enters / rises / approaches
```

但 Primary Motion Owner 可以是背景威胁，而不是人物。

## Composition

关键：

> 开场时要预留负空间给威胁进入。

## Mini Prompt Example

```text
The camera remains locked on the character in the lower-right foreground,
leaving a large empty area in the distant left background. The character
continues a small natural action without turning around. Slowly, a massive
silhouette rises into the empty background space behind them, becoming clearly
readable before the clip ends.
```

---

# 28. Pattern 22 — Silhouette-to-Detail

**Tier:** A/B  
**Best duration:** 6–15s  
**Best for:** 人物登场、飞行物、巨物、逆光场景

## Visual Idea

主体先只是：

```text
silhouette
```

随后通过接近、光线关系改变或环境显现，逐渐获得：

```text
shape
→ material
→ identity detail
```

重点是**信息层级增加**。

## Mini Prompt Example

```text
The subject first appears as a dark silhouette against the bright horizon.
As it moves closer, the outer shape becomes readable, then metallic surfaces,
panel lines, and colored markings gradually emerge from shadow. Keep the
camera angle stable so the visual progression is driven by increasing subject
detail rather than a changing viewpoint.
```

---

# 29. Supporting Spatial Devices

这些不是完整 Pattern，只能辅助 Primary Pattern。

## Foreground Parallax

用途：

```text
增强速度 / 深度
```

适合：

- Approach-to-Camera
- Diagonal Rush
- Parallel Track

---

## Frame-within-Frame

利用：

- 门
- 窗
- 建筑结构
- 机械框架

建立主体空间位置。

适合：

- Foreground Reveal
- Trailing Follow
- Static Threat

---

## Negative Space Reserve

提前为空间事件留位置。

例如：

```text
人物在右
左侧大面积留白
→ 敌人从左侧出现
```

适合：

- Background Threat
- Formation Build
- Reveal

---

## Scale Contrast

加入小尺寸参照物：

- 人
- 车
- 鸟
- 建筑
- 飞机

用于：

- Scale Reveal
- Hero Rise
- 巨型主体

---

## Controlled Occlusion

短暂遮挡主体，但必须：

```text
before occlusion: identity readable
after occlusion: same motion continues
```

不要长时间完全遮挡。

---

# 30. Pattern Composition Rules

允许：

```text
Approach-to-Camera
+
Foreground Parallax
```

允许：

```text
Reveal-by-Turn
+
Frame-within-Frame
```

允许：

```text
Impact-and-Recover
+
Negative Space Reserve
```

谨慎：

```text
Diagonal Rush
+
Near-Miss
```

禁止默认：

```text
Near-Miss
+
Orbit
+
Whip Pan
+
Zoom
```

---

# 31. Automatic Pattern Scoring

Agent 在候选模式之间选择时，内部评估：

```yaml
pattern_score:
  story_function_fit: 0-3
  spatial_readability: 0-3
  h3_reliability: 0-3
  reference_compatibility: 0-3
  duration_fit: 0-3
  visual_payoff: 0-3
```

总分：

```text
18
```

优先选择总分最高者。

如果两个模式相差 ≤ 2：

> 选择 Reliability Tier 更高、摄影机更简单的模式。

---

# 32. Pattern Failure Downgrade

如果生成失败：

## Orbit-like drift / identity loss

降级：

```text
camera movement
→ locked / lateral track
```

## Subject not moving enough

降级到更主体驱动的：

```text
Locked Subject Cross
Diagonal Rush
Approach-to-Camera
```

## Geometry confused

减少：

```text
motion axes
occlusions
camera movement
```

并优先：

```text
Locked Subject Cross
Reveal-by-Turn
Locked Transformation
```

## Flat composition

增加 Supporting Spatial Device：

```text
foreground parallax
frame-within-frame
negative space
scale contrast
```

不要第一反应增加更多 Camera Moves。

---

# 33. Quick Selection Table

| Desired Result | Recommended Pattern |
|---|---|
| 主体高速逼近 | Approach-to-Camera |
| 斜向冲锋 | Diagonal Rush |
| 高速横穿 | Lateral Speed Pass |
| 极强速度冲击 | Near-Miss Pass |
| 展示横向身体动作 | Locked Subject Cross |
| 遮挡后登场 | Foreground Reveal |
| 背影进入场景 | Trailing Follow |
| 面向镜头持续逼近 | Leading Retreat |
| 横向移动且看清动作 | Parallel Track |
| 转身揭示人物 | Reveal-by-Turn |
| 英雄/巨物登场 | Low-Angle Hero Rise |
| 情绪决定 | Push-to-Decision |
| 孤独/余韵 | Pull-Back Isolation |
| 利用遮挡产生流动 | Occlusion Wipe |
| 强纵深运动 | Depth Corridor Run |
| 展现巨大尺度 | Scale Reveal |
| 多元素组成阵型 | Formation Build |
| 原地复杂变形 | Locked Transformation |
| 雾/云/水中出现 | Environmental Emergence |
| 打击后完整收势 | Impact-and-Recover |
| 背景威胁出现 | Static Frame / Background Threat |
| 从剪影逐渐看清 | Silhouette-to-Detail |

---

# 34. Output Rule

当本 Skill 被调用时：

1. 不要把 22 个模式全部列给用户。
2. 根据需求选择 1 个主模式。
3. 必要时选择 1 个 Supporting Spatial Device。
4. 将模式参数融合进基础 `h3-micro-cinematic-director` 的 Director Plan。
5. 最终仍由基础 Skill 的 H3 Prompt Compiler 输出自然语言 Prompt。

如果用户明确问：

> 为什么选择这个镜头？

只需说明：

```text
Shot Function
+
Spatial Benefit
+
H3 Reliability
```

不要写长篇电影理论。

---

# 35. Final Principle

> A strong H3 shot does not need a complicated camera.
>
> It needs a clear spatial idea that evolves visibly within 5–15 seconds.
>
> Choose the skeleton first.
> Then choreograph the subject.
> Then give the camera only the motion the shot actually needs.

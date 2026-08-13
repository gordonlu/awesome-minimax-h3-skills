---
name: h3-micro-cinematic-director
description: >
  A short-form cinematic direction skill designed specifically for MiniMax H3's
  5–15 second generation window. It converts a rough video idea or reference image
  into one continuous cinematic event with deliberate blocking, spatial geometry,
  composition arc, subject choreography, camera behavior, depth design, visual peak,
  and a final H3-ready prompt. Use when H3 generations feel static, lack camera
  language, have weak action choreography, meaningless camera movement, poor spatial
  readability, or no clear visual climax.
license: MIT
metadata:
  version: "0.1.0"
  category: video-direction
  target_model: MiniMax H3
---

# H3 Micro-Cinematic Director

MiniMax H3 的基本创作单位不是一场戏，而是一个 **5–15 秒连续生成片段**。

本 Skill 不尝试在一个 Prompt 内模拟完整电影剪辑。

它的目标是：

> **把一个 H3 clip 导演成一个完整、可读、有空间、有高潮、有收势的连续电影镜头。**

---

# 1. 核心定位

默认：

```text
1 H3 generation
=
1 continuous cinematic event
```

除非用户明确要求，否则不要自动加入：

- cut to
- hard cut
- reverse shot
- insert shot
- montage
- angle switching
- multiple independent scenes

如果故事需要多个镜头，应拆成多个独立的 H3 clip，再交给上层 storyboard / editing workflow。

---

# 2. 本 Skill 负责什么

前置（由 h3-reality-physics-guard 先行完成）：

- Reality Mode 判定（默认 strict_realism）
- 已知事实核对（禁止脑补）与八类现实检查
- 产出 Reality Sheet；本 Skill 只在其允许 / 禁止范围内设计

负责：

- Shot Function
- Blocking
- Spatial Geometry
- Screen Direction
- Camera-to-Subject Geometry
- Lens / perspective intent
- Foreground / Midground / Background
- Subject Motion
- Camera Motion
- Composition Arc
- Action Beats
- Visual Peak
- Ending State
- H3 Prompt Compilation

不负责：

- 长视频剧本
- 多场景分镜
- 完整剪辑设计
- 配乐编排
- 多机位 coverage
- 复杂 shot-reverse-shot
- 长时间角色表演调度

---

# 3. 最高优先级规则

## Rule 1 — One Continuous Event

一个 H3 clip 默认只表达一个主要视觉事件。

例如：

- 机甲冲锋并完成斩击
- 剑仙起剑并进入万剑环绕收势
- 巨兽从沉睡中苏醒
- 建筑从地基快速建设完成
- 角色从静止海报状态进入战斗准备
- 飞机从云层中高速掠过摄影机

不要把：

```text
发现敌人
→ 对话
→ 战斗
→ 爆炸
→ 回忆
→ 离开
```

全部塞进一个 8 秒 Prompt。

---

## Rule 2 — Subject Motion Comes First

默认优先级：

```text
Subject Motion
>
Spatial Change
>
Camera Motion
>
Environmental Motion
>
Particles / Lighting Effects
```

如果主要变化来自：

- 镜头推进
- 雾气移动
- 光效
- 粒子
- 雨
- 火花

而主体本身几乎没有动作，则判定为弱镜头。

---

## Rule 3 — Camera Motion Must Have a Job

相机不允许为了“电影感”而运动。

每个 Camera Move 必须回答：

> **为什么摄影机必须移动？**

合法理由：

- 跟住高速主体
- 增强接近速度
- 揭示新的空间信息
- 放大高潮
- 从遮挡中揭示主体
- 维持主体轮廓
- 改变主体与背景的尺度关系

不合法理由：

- cinematic
- dynamic
- dramatic
- looks cool
- make the scene more immersive

如果没有明确理由：

```text
camera = locked / mostly static
```

---

## Rule 4 — One Dominant Camera Behavior

每个 clip：

```text
0–1 个 dominant camera move
```

10–15 秒片段允许一个非常轻微的 secondary adjustment。

不要写：

```text
push in
→ orbit
→ tilt up
→ handheld
→ zoom
→ pull back
```

这种摄影机动作链。

---

## Rule 5 — Blocking Before Camera

先决定：

```text
主体在哪里
主体朝哪里
主体要去哪里
主体与环境是什么关系
主体动作轴是什么
```

再决定：

```text
摄影机站在哪里
用什么构图
是否需要移动
```

不能先选：

> 24mm low-angle tracking shot

再硬塞动作进去。

---

# 4. H3 时间语法

H3 支持 5–15 秒，因此动作量和构图复杂度必须随时长变化。

## 4.1 5 秒：ONE MOMENT

目标：

> 一个强动作 / 一个视觉变化 / 一个清楚结局。

推荐：

```text
2–3 major beats
1 visual peak
0–1 camera move
```

时间结构：

```text
0.0–0.5s    Hook
0.5–2.0s    Build
2.0–4.0s    Main action / Peak
4.0–5.0s    Resolve
```

例：

```text
眼灯点亮
→ 推进器爆发冲锋
→ 拔剑斩击并收势
```

## 4.2 6–9 秒：MICRO STORY

H3 推荐默认区间。

推荐：

```text
3–5 major beats
Action Burst 可 5–7 个短 beats
1 primary peak
可选 1 secondary peak
1 dominant camera behavior
```

结构：

```text
Hook
→ Build
→ Escalate
→ Peak
→ Resolve
```

## 4.3 10–12 秒：TWO-PHASE EVENT

允许明显的两阶段空间变化：

```text
Phase A
建立空间与动作关系

↓

Phase B
关系发生明显变化并进入高潮
```

例如：

```text
人物远处接近
→ 穿过前景遮挡
→ 摄影机开始侧跟
→ 主体进入近距离战斗
```

仍然保持：

```text
1 continuous event
1 dominant camera move
```

## 4.4 13–15 秒：EXTENDED CONTINUOUS EVENT

不是一部“小电影”。

推荐：

```text
5–7 major beats
1 central event
1–2 peaks
1 stable ending
```

允许更充分的：

- 空间建立
- 逼近
- 转折
- 爆发
- aftermath

但默认仍禁止多镜头剪辑语法。

---

# 5. Shot Function

每个 clip 必须先确定镜头功能。

可选：

```text
reveal
approach
escape
pursuit
impact
transformation
activation
confrontation
performance
discovery
scale_reveal
aftermath
construction
environmental_emergence
```

Shot Function 不是“镜头类型”。

例如：

```yaml
shot_function:
  type: approach
  purpose: >
    让主体从远处的小轮廓快速成长为压迫画面的巨大存在，
    强调速度与质量感。
```

如果无法解释：

> 这个镜头让观众新看到、理解或感受到什么？

则镜头设计尚未完成。

---

# 6. Visual Thesis

每个 clip 应有一个一句话的视觉命题。

必须是**可以拍出来的变化**。

好：

```text
机甲从远处的小轮廓迅速成长为占据整个画面的压迫主体。
```

好：

```text
剑仙原本孤立静止，随着飞剑出现，画面逐渐被圆形剑阵包围。
```

坏：

```text
表现宿命感。
```

坏：

```text
画面很史诗。
```

---

# 7. Blocking

在设计摄影机之前，定义主体走位。

推荐结构：

```yaml
blocking:
  subject_start:
    screen_position: left_background
    facing: front_three_quarter
    body_state: standing_ready
    distance: far

  subject_end:
    screen_position: right_midground
    facing: right_three_quarter
    body_state: low_combat_stance
    distance: medium

  movement_axis:
    world_direction: diagonal_forward
    screen_trajectory: lower_left_to_upper_right

  target:
    object: enemy
    position: right_midground
```

---

# 8. Spatial Geometry

人物运动镜头必须明确：

```yaml
motion_control:
  subject_facing:
  camera_relation:
  movement_direction:
  screen_trajectory:
  target:
  start_distance:
  end_distance:
```

自然语言负责好读。

结构字段负责**不可误解**。

如果两者冲突：

```text
motion_control wins
```

---

# 9. Cinematography

摄影设计必须从镜头目的推导出来。

推荐结构：

```yaml
cinematography:

  shot_size:
    start:
    peak:
    end:

  camera_geometry:
    relation_to_subject:
    relation_to_motion_axis:
    height:
    viewing_angle:

  lens_intent:
    equivalent:
    purpose:

  dominant_camera_behavior:
    type:
    direction:
    trigger:
    speed_relation_to_subject:
    stop_condition:
    purpose:
```

---

# 10. Lens Intent

不要只是为了专业感写焦段。

焦段必须有视觉目的。

## Wide Look — 20–28mm

适合：

- 强速度
- 强空间感
- 前景视差
- 主体向摄影机运动
- 巨物尺度
- 狭小空间

视觉效果：

```text
depth expansion
strong perspective
foreground parallax
approaching objects accelerate visually
```

## Natural Wide — 32–40mm

适合：

- 角色与环境同时可读
- 跟随
- 走位
- 中强动作
- 比较自然的空间关系

通常是 H3 Action Clip 非常安全的选择。

## Normal / Portrait — 50–85mm

适合：

- 表演
- 角色状态变化
- 中近景
- Living Key Art
- 面部可读性

空间更平稳。

## Long Look — 100mm+

谨慎使用。

适合：

- 压缩空间
- 被观察感
- 远距离逼近
- 背景压迫主体

对于 H3：

```text
只在构图目的明确时使用。
```

---

# 11. Depth Design

优秀的 H3 镜头不能只有：

```text
subject + background
```

至少考虑：

```yaml
depth_design:

  foreground:
    element:
    purpose:

  midground:
    element:
    purpose:

  background:
    element:
    purpose:
```

## Foreground

常用于：

- 快速视差
- 遮挡揭示
- 建立镜头位置
- 增加空间层次

例如：

- 竹叶
- 门框
- 岩石
- 机械残骸
- 栏杆
- 建筑边缘
- 车辆
- 云层边缘

## Midground

通常放：

```text
Primary Motion Owner
```

## Background

常用于：

- 敌人
- 爆炸
- 建筑
- 山脉
- 城市
- 天空
- 远景光源

背景动作不应抢走主要动作。

---

# 12. Composition Arc

H3 clip 不只需要 Action Arc。

还必须设计：

> **Composition Arc**

描述整个 5–15 秒内画面构图如何变化。

推荐结构：

```yaml
composition_arc:

  opening:
    subject_scale:
    screen_position:
    negative_space:
    depth_relation:

  buildup:
    subject_scale_change:
    foreground_parallax:
    frame_pressure:

  peak:
    subject_scale:
    frame_occupancy:
    visual_dominance:

  resolve:
    subject_scale:
    silhouette:
    background_event:
    negative_space:
```

## 示例

```text
OPEN
主体较小，左后方，大量负空间

BUILD
主体快速接近，前景残骸产生强视差

PEAK
主体突然占据大部分画面

RESOLVE
主体进入右侧中景，
背景爆炸，
轮廓重新变得清晰
```

这比简单写：

```text
camera tracks the mecha
```

更有镜头感。

---

# 13. Action Choreography

动作必须有：

```text
Start State
→ Trigger
→ Action
→ Reaction
→ Escalation
→ Peak
→ End State
```

不要求每个 clip 都出现全部阶段。

## Action Beat 数量

推荐：

| Duration | Normal | Action Burst |
|---|---:|---:|
| 5s | 2–3 | 3–4 |
| 6–9s | 3–5 | 5–7 |
| 10–12s | 4–6 | 5–7 |
| 13–15s | 5–7 | 6–8 |

动作 beat 是**可见状态变化**。

不是：

```text
looks angry
feels powerful
becomes dramatic
```

而是：

```text
torso snaps toward threat
rifle rises
body sidesteps
rear thrusters ignite
energy blade deploys
```

---

# 14. Hook

前：

```text
0.5–0.8 seconds
```

必须有可见变化。

可以是：

- 眼灯亮起
- 头部突然转向
- 剑气出现
- 推进器点火
- 身体重心改变
- 巨兽睁眼
- 墨迹开始流动
- 建筑第一层结构快速出现

不要让前两秒只是：

```text
角色站着
衣服轻轻飘
镜头慢慢推进
```

除非用户明确要求极静态氛围。

---

# 15. Primary Motion Owner

每个 clip 必须明确：

```yaml
primary_motion_owner:
```

通常是：

- 主角
- 车辆
- 飞机
- 机甲
- 建筑过程
- 转化对象
- 环境本身

所有：

```text
camera
particles
fog
light
rain
sparks
```

只能支持 Primary Motion Owner。

---

# 16. Camera / Subject Motion Separation

永远分开描述：

```yaml
subject_motion:
camera_motion:
```

例如：

```text
Subject:
mecha accelerates diagonally toward the right foreground.

Camera:
camera begins a short lateral track only after the mecha clears
the foreground obstruction, moving slower than the subject.
```

结果：

```text
主体仍然在画面内快速变大并横穿画面。
```

不要写：

```text
dynamic camera follows the mecha dramatically
```

---

# 17. Camera Trigger

摄影机运动最好不是从第一帧无理由开始。

允许定义触发条件：

```yaml
camera_motion:
  type: lateral_track
  starts_when: subject clears foreground obstruction
  stops_when: slash reaches impact point
```

这会比：

```text
camera tracks throughout the scene
```

更有设计感。

---

# 18. Peak Design

每个 clip 必须有明确高潮。

```yaml
peak:
  event:
  timing:
  visual_change:
  composition:
```

推荐高潮时间：

```text
60%–80%
```

不要把高潮放在最后一帧，否则没有 Resolve。

---

# 19. Ending State

H3 Prompt 必须明确最终状态。

例如：

```text
finishes in a low combat-ready stance
```

```text
ends with the flying swords stabilized in a complete circular formation
```

```text
the completed building stands fully illuminated as construction motion stops
```

禁止：

```text
and continues fighting
```

这种没有落点的结尾。

---

# 20. H3 Motion Modes

## A. Living Key Art

适合：

- 角色展示
- 海报动态化
- 氛围人物
- 时装
- 魔法角色

规则：

```text
3–4 beats
1 peak
mostly stable camera
natural real-time motion
```

避免：

```text
only hair / cloth / particles moving
```

主体必须有至少一次明显身体状态改变。

## B. Action Burst

适合：

- 机甲
- 战斗
- 枪战
- 剑士
- 飞行
- 高速运动

规则：

```text
fast / combat tempo
strong subject translation
clear causal action chain
5–7 beats for 8s
1 dominant camera behavior
clear impact
clear recovery
```

默认：

```text
no slow motion
```

## C. Transformation

适合：

- 变身
- 苏醒
- 机械展开
- 生物觉醒
- 艺术媒介转化

主要运动者：

```text
state transformation
```

必须有多个中间状态。

不要：

```text
start image
→ smooth morph
→ final image
```

## D. Construction / Timelapse

适合：

- 建筑
- 微缩世界
- 场景建设
- 植物生长

主要运动：

```text
persistent state progression
```

建议：

```text
至少 4 个可读建设阶段
camera mostly stable
```

---

# 21. H3 Director Plan

正式生成 Prompt 前，先内部形成以下规划。

```yaml
mode:

duration:
aspect_ratio:

shot_function:
  type:
  purpose:

visual_thesis:

primary_motion_owner:

input_strategy:
  type: t2v | i2v | fl2v | l2v
  identity_lock:
  environment_lock:

blocking:
  subject_start:
    screen_position:
    facing:
    distance:
    body_state:

  subject_end:
    screen_position:
    facing:
    distance:
    body_state:

  movement_axis:
    world_direction:
    screen_trajectory:

motion_control:
  subject_facing:
  camera_relation:
  movement_direction:
  screen_trajectory:
  target:

cinematography:
  shot_size:
    start:
    peak:
    end:

  camera_geometry:
    relation_to_subject:
    relation_to_motion_axis:
    height:
    angle:

  lens_intent:
    equivalent:
    purpose:

depth_design:
  foreground:
    element:
    purpose:

  midground:
    element:

  background:
    element:

subject_motion:
  tempo:
  phase_beats:

camera_motion:
  dominant_behavior:
  starts_when:
  direction:
  speed_relation_to_subject:
  stops_when:
  purpose:

composition_arc:
  opening:
  buildup:
  peak:
  resolve:

peak:
  event:
  timing:

ending:
  final_pose:
  final_composition:

continuity:
  must_keep:
  screen_direction:
  forbidden_changes:

negative_motion_rules:
```

---

# 22. H3 Prompt Compiler

最终 Prompt 不是 Director Plan 的逐字段复读。

必须重新编译成自然、连续、可执行的视觉语言。

## Prompt 推荐顺序

```text
Identity / Scene Lock
↓
Opening Composition
↓
Immediate Hook
↓
Subject Action Chain
↓
Spatial Evolution
↓
Camera Behavior
↓
Visual Peak
↓
Ending State
↓
Motion Constraints
```

---

# 23. Prompt 写作原则

## 多写可见事实

好：

```text
The mecha starts small in the left background.
```

好：

```text
Broken machinery dominates the lower-right foreground.
```

好：

```text
As the mecha approaches, the foreground debris sweeps rapidly across frame.
```

坏：

```text
The shot feels cinematic and dynamic.
```

## 描述视觉结果，而不是摄影术语堆积

比起：

```text
24mm lens
```

更重要的是：

```text
wide perspective with strong foreground-to-background depth,
near debris stretching past the frame while the approaching mecha
rapidly grows in scale
```

焦段可作为辅助，而非唯一指令。

---

# 24. H3 Prompt Template

```text
Preserve the exact identity, proportions, clothing or armor design, colors,
signature objects, and environment from the reference.

Create one continuous [DURATION]-second cinematic event.

At the opening, [SUBJECT] is positioned [OPENING SCREEN POSITION / SCALE],
with [FOREGROUND] establishing strong foreground depth and [BACKGROUND]
remaining clearly readable behind the subject.

Within the first moment, [HOOK].

The subject then [BEAT 1], causing [VISIBLE RESULT].
Without resetting pose, [BEAT 2].
This leads directly into [BEAT 3], while the subject moves
[SCREEN TRAJECTORY / SPATIAL DIRECTION].

The composition evolves from [OPEN COMPOSITION] toward [BUILD COMPOSITION].
Foreground elements create [PARALLAX / OCCLUSION EFFECT] as the subject
changes scale from [START SCALE] to [PEAK SCALE].

The camera remains [CAMERA RELATION].
Its only dominant movement is [CAMERA MOVE], beginning when [TRIGGER],
moving [SPEED RELATION], specifically to [CAMERA PURPOSE].

The sequence reaches its visual peak around [PEAK TIMING] when [PEAK EVENT].
At that moment [PEAK COMPOSITION].

After the impact, [RECOVERY ACTION], ending with [FINAL POSE]
in [FINAL COMPOSITION].

Keep [PRIMARY MOTION OWNER] as the dominant source of motion.
Do not replace subject movement with camera drift, particles, fog,
lighting changes, sparks, or environmental effects.
Do not introduce random camera orbit, unnecessary slow motion,
pose resets, direction reversal, or unrelated actions.
```

---

# 25. Example — H3 8s Mecha Attack

## Director Plan

```yaml
mode: action_burst

duration: 8s
aspect_ratio: 16:9

shot_function:
  type: approach_impact
  purpose: >
    从远距离逼近转化成近距离压迫，
    让速度主要通过主体尺度变化和前景视差被感知。

visual_thesis:
  机甲从远处的小轮廓迅速成长为压迫整个画面的巨大主体。

primary_motion_owner: mecha

blocking:
  subject_start:
    screen_position: left_background
    facing: front_three_quarter
    distance: far
    body_state: combat_ready

  subject_end:
    screen_position: right_midground
    facing: right_three_quarter
    distance: medium
    body_state: low_combat_stance

  movement_axis:
    world_direction: diagonal_forward
    screen_trajectory: lower_left_to_upper_right

cinematography:
  shot_size:
    start: wide
    peak: medium_close
    end: medium_wide

  camera_geometry:
    relation_to_subject: front_three_quarter
    relation_to_motion_axis: roughly_30_degrees
    height: low
    angle: slightly_upward

  lens_intent:
    equivalent: 24-28mm
    purpose: strong depth expansion and foreground parallax

depth_design:
  foreground:
    element: broken industrial machinery
    purpose: fast parallax and reveal

  midground:
    element: mecha

  background:
    element: enemy position and industrial deck structures

subject_motion:
  tempo: combat
  phase_beats:
    - visor activates and torso snaps toward threat
    - rifle fires a short burst
    - incoming fire forces a sharp lateral sidestep
    - rear thrusters ignite
    - mecha accelerates diagonally toward camera
    - energy blade deploys during approach
    - high-speed slash crosses target zone
    - skid-stop into final stance

camera_motion:
  dominant_behavior: short lateral track
  starts_when: mecha clears foreground wreckage
  direction: right
  speed_relation_to_subject: slower
  stops_when: slash reaches impact point
  purpose: preserve silhouette while allowing subject scale to increase

composition_arc:
  opening:
    subject small in left background with large negative space

  buildup:
    subject rapidly enlarges while foreground debris sweeps across frame

  peak:
    mecha dominates most of the frame during the slash

  resolve:
    mecha settles into right midground while explosion remains behind

peak:
  event: high-speed energy-blade slash
  timing: 70%

ending:
  final_pose: low aggressive combat-ready stance
  final_composition: clean silhouette with explosion in deep background
```

## H3 Prompt

```text
Preserve the exact identity, armor design, proportions, colors, orange visor,
rifle, energy weapon system, and rain-soaked industrial launch-deck environment
from the reference image.

Create one continuous fast 8-second combat event at full real-time speed.

At the opening, the mecha appears relatively small in the left background,
seen from a low front three-quarter angle. Large broken industrial machinery
occupies the near foreground, creating strong foreground depth, while the enemy
position remains visible farther to the right.

Within the first half-second, the orange visor flashes on and the mecha sharply
snaps its torso toward the threat. It immediately raises the rifle and fires a
short burst. Incoming fire strikes nearby, forcing a hard lateral sidestep.
Without stopping or resetting pose, the rear thrusters ignite and the mecha
explodes forward on a diagonal path from the left background toward the right
foreground.

As it accelerates, the nearby wreckage sweeps rapidly across the foreground,
creating strong parallax while the mecha grows quickly from a small distant
figure into a dominant near-frame subject. During the approach the rifle drops
and a bright energy blade deploys.

The camera stays in a low front three-quarter relationship. Its only major
movement is a short lateral track to the right, beginning only after the mecha
clears the foreground wreckage. The camera moves slower than the mecha so that
the subject continues to grow in frame while its full silhouette remains readable.

Around the final third of the clip, the mecha reaches the visual peak with a
high-speed diagonal energy-blade slash across the target zone, briefly dominating
most of the frame. A heavy explosion erupts behind it in the deep background.

Momentum carries the mecha forward before it plants one foot, skids across the
wet deck, and settles into a low aggressive combat-ready stance in the right
midground. End on a clean readable silhouette with the explosion behind it.

Keep the mecha as the primary motion owner. Do not replace its action with camera
movement, rain, sparks, lighting changes, or explosions. No slow motion, no random
orbit, no unnecessary camera shake, no pose reset, and no reversal of screen direction.
```

---

# 26. Failure Repair

## Static Wallpaper

症状：

```text
主体不动
只有头发、衣服、粒子、镜头在动
```

修复：

```text
增加身体重心变化
增加主体位移
增加 silhouette-changing action
降低 camera motion
```

## Camera Doing Too Much

症状：

```text
主体动作难读
背景旋转
画面漂移
```

修复：

```text
保留一个 dominant move
其他 camera behaviors 删除
```

## Flat Image

症状：

```text
人物像贴在背景上
没有空间感
```

修复：

```text
增加 foreground element
设计 near/mid/far layers
增加主体尺度变化
允许合理 parallax
```

## Weak Impact

症状：

```text
整个视频动作很多，但没有高潮
```

修复：

```text
减少无关 beats
明确 peak event
让构图在 peak 时达到最大 frame pressure
```

## Random Action

症状：

```text
动作很多但没有因果
```

修复：

```text
Trigger
→ Reaction
→ Opportunity
→ Attack
→ Impact
→ Recovery
```

## No Ending

症状：

```text
最后仍然在移动
视频像被截断
```

修复：

```text
定义 final_pose
定义 final_screen_position
定义 final_composition
保留 0.5–1 秒 resolve
```

---

# 27. 真实物理与现实事实门禁（前置：h3-reality-physics-guard）

涉及真实环境、真实生物、真实物体，或场景由真实物理法则主导时，
**真实物理与事实核对由 `h3-reality-physics-guard` 在本 Skill 之前完成**，
产出 Reality Sheet：

```yaml
reality_mode:          # strict_realism | plausible_stylized | deliberate_fantasy
fact_anchors:          # 已核对的事实锚点（正面行为）
must_verify:           # 无法核实、禁止脑补的项
reality_constraints:   # allowed（正面行为）/ forbidden（禁令兜底）
```

本 Skill 在 Reality Sheet 的允许与禁止范围内设计镜头、走位、峰值与风格。
任何 spectacle 需求与 Reality Sheet 冲突时，按 Reality Priority 裁决：

```text
Reality / factual correctness
        > Identity consistency
        > Subject motion correctness
        > Spatial readability
        > Camera design
        > Effects / spectacle
```

改摄影机、改走位、改光线、改角度，而不是让现实迁就画面。

无 Reality Sheet 且题材涉现实对象时，先运行门禁，不得跳过。

## 已知失败案例（Reality Sheet 应堵住的坑）

- 鲸鱼「肚皮先落地」：下沉方向写反——「sink back」缺姿态约束。修法：写明「背脊保持朝上、中段先没入、尾鳍最后沉」。
- 铁骑「漂浮感」：接触反馈缺失。修法：接地五件套（前景纹理滚动 / 蹄落地扬尘 / 手持抖动 / 机位不悬空 / 地面长影）。
- 战机「侧滑 / 原地转向」：解剖与航向约束缺失。修法：机头对齐航向 + 禁侧滑、禁原地转向。

## 编译后回读

- Reality Sheet 的 `forbidden` 在最终 Prompt 中全部未出现。
- `allowed` 的每一条「正面可见行为」均有落点。
- `must_verify` 非空时不得交付。

---

# 28. Final Quality Gate

最终 H3 Prompt 输出前检查：

- [ ] 这是一个连续事件，而不是多镜头小电影
- [ ] Shot Function 明确
- [ ] Visual Thesis 可以被拍出来
- [ ] Primary Motion Owner 明确
- [ ] 主体起始位置明确
- [ ] 主体结束位置明确
- [ ] Screen Trajectory 明确
- [ ] Camera 与主体运动分离
- [ ] Camera Move 有明确理由
- [ ] Camera Move 不超过一个主要行为
- [ ] 有 Foreground / Midground / Background 思考
- [ ] 有 Composition Arc
- [ ] 动作量与 5–15 秒时长匹配
- [ ] 前 0.5–0.8 秒有 Hook
- [ ] 有明确 Peak
- [ ] Peak 后有 Resolve
- [ ] 有明确 Final Pose / Final Composition
- [ ] 没有用粒子或相机运动代替主体动作
- [ ] 没有无意义慢动作、环绕、漂浮或随机方向变化
- [ ] 涉及真实题材时已过 # 27 真实物理门禁（八项均有落点）

如果其中超过 3 项失败：

> 不要继续润色 Prompt，重新设计镜头。

---

# 29. Output Behavior

用户只要求 Prompt 时：

```text
内部完成 Director Plan，
只输出最终 H3 Prompt，
除非导演决策存在需要用户确认的重大取舍。
```

用户要求“镜头设计”“导演方案”“为什么这样拍”时：

输出：

1. 一句话 Shot Concept
2. 简化 Director Plan
3. H3 Prompt
4. 简短说明镜头设计理由

不要默认把完整 YAML 全部展示给普通用户。

---

# 30. Principle

> Do not decorate the prompt.
>
> Direct the motion.
>
> Design the space.
>
> Shape the composition.
>
> Give the camera a reason to exist.

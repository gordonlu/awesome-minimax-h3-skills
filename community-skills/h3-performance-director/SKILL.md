---
name: h3-performance-director
description: >
  Companion skill for MiniMax H3 5–15 second video generation. Directs the subject
  itself rather than the camera: performance intent, visible behavior, movement quality,
  body mechanics, weight, timing, force, anticipation, follow-through, recovery,
  silhouette readability, and subject-type-specific motion grammar. Designed to work
  with h3-micro-cinematic-director and h3-shot-pattern-library. Supports both text-directed
  performance and reference-motion transfer workflows.
license: MIT
metadata:
  version: "0.1.0"
  category: video-performance-direction
  target_model: MiniMax H3
  companion_to:
    - h3-micro-cinematic-director
    - h3-shot-pattern-library
---

# H3 Performance Director

`h3-performance-director` 是一个面向 MiniMax H3 5–15 秒视频生成的**主体表演 / 动作导演 Skill**。

它不负责决定摄影机怎么拍。

它负责解决：

> **主体到底怎么演、怎么动、怎么发力、怎么表现情绪、怎么产生重量和惯性，以及动作最终如何落到一个清晰可读的状态。**

与其他 Skill 的职责关系：

```text
h3-micro-cinematic-director
    总入口 / 协调者
    决定：这个镜头为什么存在、要表达什么
    综合镜头设计与主体表演信息
    最终编译并输出自然、连续、可执行的 H3 Prompt

h3-shot-pattern-library
    参考 Skill
    决定：摄影机与主体如何组织空间
    为主 Skill 提供成熟的镜头模式与空间骨架

h3-performance-director
    参考 Skill
    决定：主体具体怎么表现、怎么完成动作
    为主 Skill 提供表演、动作、重量、物理与运动语法
```

---

# 1. 核心原则

## Rule 1 — Never Describe Only What Happens

不要只写：

```text
she runs
he attacks
the mecha lands
the aircraft turns
```

必须补充：

```text
how it begins
how force enters the motion
how the subject changes through the motion
what visible consequences appear
how the motion finishes
```

核心原则：

> **Never describe only what the subject does. Describe how the subject gets there.**

---

## Rule 2 — Visible Behavior, Not Internal Labels

视频模型不能直接看到：

- sadness
- confidence
- fear
- anger
- hesitation
- determination

所以：

```text
emotion
↓
objective / tactic
↓
observable behavior
```

不要：

```text
she looks nervous
```

改为：

```text
she takes a short involuntary step back, catches herself,
plants the rear foot, tightens both hands around the sword grip,
and forces her gaze back onto the approaching opponent
```

---

## Rule 3 — One Performance Turn Per Short Clip

H3 的 5–15 秒窗口很短。

一个 clip 不要安排多个完全不同的表演转折。

推荐：

```text
1 dominant performance intention
1 visible turn
1 clear endpoint
```

例如：

```text
hesitation → commitment
fear → controlled resistance
stillness → explosive attack
collapse → recovery
confusion → recognition
```

不要：

```text
fear → anger → sadness → confidence → comedy
```

塞进一个 8 秒 clip。

---

## Rule 4 — Action Must Have Physical Consequence

动作不是一个动词。

动作必须改变至少一种东西：

```text
pose
position
balance
speed
orientation
contact
object state
environment response
```

例如：

```text
the mecha lands
```

太弱。

应该至少有：

```text
feet contact the deck
knees compress
torso drops
water bursts outward
armor settles
body regains height
```

---

## Rule 5 — Strong Motion Needs an Endpoint

每个主要动作必须结束在：

```text
stable pose
stable trajectory
stable formation
stable object state
```

禁止：

```text
continues fighting
keeps moving dramatically
keeps flying around
```

这种没有落点的结尾。

---

# 2. Performance Routing

先判断主体类型，再选择需要的表演层。

```text
Human / Humanoid
→ Dramatic Intent + Visible Behavior + Movement Quality + Body Mechanics

Mecha / Robot
→ Intent + Mechanical Body Mechanics + Force + Inertia + Pose Lock

Creature
→ Intent + Spine / Limb Support + Weight + Balance + Reactive Motion

Vehicle
→ Control Input + Weight Transfer + Suspension / Traction + Momentum

Aircraft
→ Heading + Bank + Pitch + Roll + Flight Path + Energy State

Transformation / Object
→ Dependency Order + Intermediate States + Mechanical / Material Consequence
```

不要对所有主体使用同一套人体语言。

---

# 3. Dramatic Intent

这一层主要用于：

- 人物
- 人形角色
- 有明显拟人意图的机器人 / 生物

不适用于普通飞机、车辆、建筑过程。

推荐结构：

```yaml
dramatic_intent:
  given_circumstance:
  objective:
  obstacle:
  tactic:
  turn:
```

---

## Given Circumstance

当前可见处境。

例如：

```text
enemy approaching
door is blocked
character is trying not to reveal fear
weapon is empty
friend is leaving
```

---

## Objective

主体此刻想完成什么。

必须是可执行的：

```text
hold the doorway
convince the other person
escape
hide fear
reach the weapon
protect the child
```

不要：

```text
be emotional
look heroic
feel sad
```

---

## Obstacle

阻碍目标的东西。

例如：

```text
opponent is stronger
character's hand is injured
distance is closing
character is exhausted
the other person refuses eye contact
```

---

## Tactic

主体为了达成 Objective 做出的行为策略。

例如：

```text
hold ground
step closer
avoid eye contact
force eye contact
hide shaking hand
attack before opponent finishes moving
```

---

## Turn

这 5–15 秒里最重要的状态变化。

例如：

```text
hesitation → commitment
control → loss_of_balance
fear → resistance
waiting → attack
uncertainty → recognition
```

---

# 4. Emotion-to-Behavior Translation

情绪只作为内部标签。

最终必须转换成可见表现。

## Fear

不要：

```text
looks terrified
```

可选表现：

```text
rear foot retreats half a step
shoulders narrow inward
breathing becomes visibly faster
gaze remains locked on threat
grip tightens without releasing the weapon
```

---

## Confidence

不要：

```text
confident heroic pose
```

可选表现：

```text
body remains upright
weight stays centered
subject does not retreat as the threat approaches
chin lifts slightly
weapon remains lowered until the last moment
```

---

## Anger

不要：

```text
looks furious
```

可选表现：

```text
jaw tightens
breathing shortens
weight shifts forward
shoulders become more square to target
movement initiates earlier and more directly
```

---

## Hesitation

可选表现：

```text
movement starts then stops
weight transfers forward but does not commit
gaze drops briefly
hand reaches toward object then pauses
breath is held before action resumes
```

---

## Grief / Suppressed Sadness

可选表现：

```text
eyes remain on the object rather than the other person
shoulders drop only slightly
hands carefully flatten or fold the object
body avoids a full collapse
movement becomes smaller and slower
```

---

# 5. Subtext Through Contradiction

如果角色表面行为与真实意图不同，优先表现身体矛盾。

例如：

```text
dialogue / surface:
"I'm fine."

body:
smiles briefly,
takes half a step backward,
keeps both hands tightly clasped,
does not relax the shoulders
```

规则：

```text
surface action
+
one contradictory body cue
```

通常比直接写：

```text
she is secretly upset
```

更有效。

---

# 6. Movement Quality

同一个动作可以有完全不同的表达质量。

使用简化的四维运动语法：

```yaml
movement_quality:
  weight: light | firm
  time: sustained | sudden
  space: direct | indirect
  flow: bound | free
```

---

## Weight

### light

感觉：

```text
delicate
floating
minimal force
soft contact
```

### firm

感觉：

```text
committed
heavy
forceful
decisive
```

---

## Time

### sustained

```text
continuous
measured
unhurried
controlled
```

### sudden

```text
quick initiation
sharp acceleration
brief decisive event
```

---

## Space

### direct

```text
clear target
straight path
precise intention
```

### indirect

```text
searching
curved
wandering
exploratory
```

---

## Flow

### bound

```text
controlled
stoppable
contained
precise
```

### free

```text
released
carried by momentum
open
less restrained
```

---

# 7. Movement Quality Examples

## Calm Expert Sword Draw

```yaml
movement_quality:
  weight: firm
  time: sustained
  space: direct
  flow: bound
```

表现：

```text
the hand finds the sword grip without searching,
the blade leaves the sheath in one controlled line,
the shoulders remain quiet,
the blade stops exactly on the intended guard line
```

---

## Furious Sword Draw

```yaml
movement_quality:
  weight: firm
  time: sudden
  space: direct
  flow: free
```

表现：

```text
the shoulder launches first,
the sword is ripped free in one sharp motion,
the torso follows the momentum,
the blade overshoots slightly before the body regains control
```

---

# 8. Performance Arc

强动作或明显状态变化使用：

```text
ANTICIPATION
→ INITIATION
→ PRIMARY ACTION
→ FOLLOW-THROUGH
→ RECOVERY
→ END STATE
```

不是每个动作都必须六段全用。

但以下动作通常至少需要：

```text
anticipation
primary action
follow-through
recovery
```

- punch
- slash
- jump
- landing
- sprint start
- heavy push
- throw
- recoil
- sudden turn
- braking

---

# 9. Anticipation

作用：

> 让观众和模型知道动作即将发生，并明确力从哪里开始。

例如挥刀：

```text
weight shifts onto rear leg
torso coils
weapon draws behind shoulder
gaze locks onto target
```

例如跳跃：

```text
knees bend
center of mass lowers
arms prepare
feet remain planted until launch
```

不要把 anticipation 写得太长。

H3 5–8 秒动作片里通常：

```text
0.2–0.8 seconds
```

已经足够。

---

# 10. Initiation

明确第一股力从哪里来。

常见：

```text
rear foot drive
hip rotation
shoulder pull
thruster ignition
steering input
braking input
wing roll
tail push
```

如果不知道动作从哪里启动，模型容易让整个主体同时僵硬地移动。

---

# 11. Kinetic Chain

高强度人形动作使用简化动力链：

```text
ground
→ support leg
→ pelvis
→ torso
→ shoulder
→ arm
→ hand / weapon
```

不要每个动作都机械复读完整链条。

只在：

- strike
- throw
- heavy push
- jump
- landing
- explosive turn

等需要明显力传递时启用。

---

# 12. Follow-Through

主动作完成后，惯性不能瞬间消失。

例如：

```text
blade continues beyond impact line
shoulders rotate slightly past target
coat and hair lag behind torso motion
rear foot pivots after the hips
```

作用：

```text
momentum
weight
continuity
```

---

# 13. Recovery

Recovery 不是装饰。

它负责证明：

> 主体真的承受了刚才的运动。

例如：

```text
front leg receives the weight
torso drops slightly
weapon settles
gaze returns to target
stance stabilizes
```

Action clip 结尾通常保留：

```text
0.5–1.0 seconds
```

让 recovery 可读。

---

# 14. Root Motion

主体整体在世界空间中的位移必须与局部动作分开。

推荐：

```yaml
root_motion:
  start_position:
  end_position:
  travel_direction:
  travel_distance:
  speed_curve:
```

速度曲线可用：

```text
steady
gradual_acceleration
explosive_acceleration
accelerate_then_brake
burst_then_coast
decelerating
```

不要只写：

```text
moves forward
```

---

# 15. Weight & Balance

适用于：

- Human
- Mecha
- Creature

推荐结构：

```yaml
balance:
  support:
  center_of_mass:
  transfer:
  stability:
```

例如：

```yaml
balance:
  support: rear_right_leg
  center_of_mass: lowered
  transfer: rear_right_to_front_left
  stability: committed_forward
```

最终 Prompt 不需要输出字段名。

只输出可见结果。

---

# 16. Contact & Force

如果发生：

- 落地
- 撞击
- 武器接触
- 推门
- 踩地
- 制动
- 抓握

必须至少给一个接触结果。

```yaml
contact:
  point:
  force_level:
  visible_consequence:
```

例如：

```text
both feet strike the wet deck,
the knees compress,
water sprays outward,
the upper body drops before recovering
```

---

# 17. Motion Hierarchy

同一个主体不应所有部位同等级运动。

推荐：

```yaml
motion_hierarchy:
  primary:
  secondary:
  tertiary:
  reactive:
```

例：

```yaml
motion_hierarchy:
  primary: full_body_forward_dash
  secondary: sword_draw
  tertiary: torso_rotation
  reactive:
    - coat trails behind
    - hair lags behind head turn
    - dust kicks backward
```

默认：

```text
Primary Motion must remain visually dominant.
```

---

# 18. Secondary Motion

Secondary Motion 必须由 Primary Motion 引发或支持 Primary Motion。

好：

```text
body turns
→ coat follows slightly late
```

```text
aircraft banks
→ contrails bend behind the new flight path
```

```text
mecha lands
→ loose armor panels settle
```

坏：

```text
character attacks
hair moves
particles swirl
camera moves
cape moves
lights flicker
fog moves
```

所有东西无因果地同时运动。

---

# 19. Silhouette Readability

在动作峰值时问：

> **如果主体变成纯黑剪影，动作是否依然看得懂？**

检查：

```yaml
silhouette:
  limb_separation:
  weapon_separation:
  torso_direction:
  support_relation:
  avoid_overlap:
```

避免：

```text
weapon overlaps torso
both arms merge
legs cross exactly at impact
hands disappear behind body
head direction cannot be read
```

对于：

- 剑士
- 机甲
- 格斗
- 飞行角色

尤为重要。

---

# 20. Pose Contract

关键动作可以定义：

```yaml
pose_contract:
  feet:
  pelvis:
  torso:
  shoulders:
  arms:
  head:
  gaze:
  prop_or_weapon:
```

只在关键状态使用：

```text
opening pose
peak pose
ending pose
```

不要为每一帧写 Pose Contract。

---

# 21. Gaze Direction

人物 / 生物表演中，视线是重要动作。

定义：

```yaml
gaze:
  target:
  change:
  timing:
```

例如：

```text
eyes stay fixed on opponent during body turn
```

```text
gaze drops to the letter before the hands move
```

```text
head turns first, eyes find the threat, body follows
```

---

# 22. Human Performance Grammar

重点：

```text
posture
weight shift
foot placement
pelvis / torso relationship
shoulder lead
hand intent
gaze
breath
facial behavior
```

避免：

```text
complex finger choreography
face touching during rapid action
many unrelated gestures
```

## Human Action Example — Controlled Sword Strike

```yaml
performance:
  intent: commit_to_attack
  movement_quality:
    weight: firm
    time: sudden
    space: direct
    flow: bound

  anticipation:
    - rear foot plants
    - hips lower
    - sword draws behind right shoulder

  initiation:
    - rear leg drives

  kinetic_chain:
    - pelvis rotates
    - torso follows
    - right shoulder releases
    - sword accelerates

  impact:
    weapon_path: upper_right_to_lower_left

  follow_through:
    - shoulders rotate slightly beyond target

  recovery:
    - front leg receives weight
    - sword settles low_left
    - gaze stays on target
```

---

# 23. Mecha / Robot Performance Grammar

机甲不是“穿铠甲的人”。

重点：

```text
mass
joint sequence
servo-like precision
mechanical inertia
foot planting
thruster contribution
recoil
armor settling
pose lock
```

避免：

```text
rubbery torso
human-like loose joints
weightless floating
instant direction reversal
```

推荐结构：

```yaml
mecha_motion:
  support_contact:
  joint_sequence:
  thrust:
  inertia:
  recoil:
  mechanical_settle:
  final_lock:
```

## Mecha Landing Example

```text
The mecha descends with both legs aligned beneath the torso.
Its feet strike the deck first, the knee joints compress deeply under the
machine's weight, and the torso drops a fraction of a second later.
Water blasts outward from both contact points. The ankle and hip joints
correct the remaining forward momentum, the armor panels settle after the impact,
and the machine rises slightly into a stable crouched combat stance.
```

---

# 24. Creature Performance Grammar

重点：

```text
spine
limb support
head balance
tail balance
muscle anticipation
ground interaction
breathing
species-appropriate locomotion
```

不要默认给所有动物“人类肩髋动作”。

推荐：

```yaml
creature_motion:
  locomotion_type:
  support_pattern:
  spine_action:
  head_behavior:
  tail_or_counterbalance:
  ground_reaction:
```

---

# 25. Vehicle Performance Grammar

车辆重点不是“情绪动作”。

重点：

```text
steering input
acceleration
braking
weight transfer
body roll
suspension
traction
wheel slip
surface reaction
```

例如急刹：

```text
front suspension compresses
rear rises slightly
tires maintain traction until final moment
body pitches forward
vehicle settles after stopping
```

---

# 26. Aircraft Performance Grammar

飞机禁止使用模糊的人体动作语言。

不要：

```text
the fighter turns dramatically
```

应明确：

```text
bank
pitch
roll
heading
flight path
turn radius
climb / descent
energy state
contrail response
```

推荐结构：

```yaml
aircraft_motion:
  initial_heading:
  roll:
  bank:
  pitch:
  path:
  speed_change:
  exit_heading:
  trail_response:
```

---

## Aircraft Turn Example

```text
The fighter drops its left wing first and rolls into a controlled left bank.
The nose lowers slightly as the flight path bends into a shallow descending turn.
The aircraft maintains forward speed through the arc rather than pivoting in place.
Its contrails lag behind the new heading and curve smoothly through the turn.
As it approaches the exit heading, the roll reverses and the wings return
toward level flight.
```

---

## Aircraft High-Speed Pass Example

```text
The fighter maintains a stable shallow bank while crossing the frame at high speed.
Its nose stays aligned with the actual flight path; the fuselage does not slide sideways.
The aircraft grows rapidly near the closest point, then decreases in apparent size
as it continues away. Contrails remain attached to the rear flight path and bend
smoothly behind the aircraft rather than pointing independently.
```

---

# 27. Transforming Object Grammar

变形不是：

```text
A becomes B
```

而是依赖关系明确的状态链：

```text
trigger
→ first visible state change
→ structural release
→ extension / rotation
→ locking
→ final stable state
```

推荐：

```yaml
transformation:
  trigger:
  dependency_order:
  intermediate_states:
  lock_state:
```

例如：

```text
illuminated seams appear first,
outer panels unlock,
hinged sections rotate outward,
internal structures extend,
each section reaches its mechanical stop,
the final silhouette locks and becomes still
```

---

# 28. Text-Directed vs Reference-Directed Performance

H3 可使用文字和多模态参考来约束运动。

当用户提供合法的动作 / 表演参考时，不要执着于把所有动作拆成超长文字。

优先判断：

```yaml
performance_source:
  mode: text_directed | reference_motion
```

---

## Text-Directed

适合：

- 动作简单
- 没有参考视频
- 明确姿态变化
- 角色微表演
- 风格化动作

使用本 Skill 的结构化 Performance Plan 编译为 Prompt。

---

## Reference-Motion

适合：

- 舞蹈
- 武术
- 复杂身体动作
- 特技
- 难以用文字准确描述的 timing
- 用户希望复用特定运动节奏

定义：

```yaml
reference_motion:
  source:
  transfer:
    body_motion:
    timing:
    blocking:
    performance_quality:
    camera_motion:
  preserve:
    identity:
    costume:
    scene:
```

必须明确：

> 参考视频负责什么，不负责什么。

例如：

```text
Use the motion timing and body choreography from the motion reference,
but preserve the identity, armor design, proportions, weapon, and scene
from the character reference. Do not transfer the reference performer's identity.
```

---

# 29. Performance Complexity Budget

H3 片段时长越短，越需要控制表演复杂度。

| Duration | Recommended Performance Complexity |
|---|---|
| 5s | 1 strong action + 1 recovery |
| 6–9s | 1 action chain + 1 performance turn |
| 10–12s | 1 main action chain + 1 secondary response |
| 13–15s | 1 extended chain + 1–2 controlled turns |

不要把多个独立动作误认为“更丰富”。

---

# 30. Multi-Subject Performance

多人时必须指定焦点。

```yaml
ensemble:
  focus_subject:
  supporting_subjects:
```

动作层级：

```text
FOCUS SUBJECT
→ one primary performance beat

SUPPORTING SUBJECTS
→ persistent micro-motion or one simple response
```

不要：

```text
three characters all run, turn, gesture, grab objects, and react
```

同时发生。

---

# 31. Micro-Motion

不承担主要叙事的角色可以使用：

```text
breathing
blink
small gaze shift
minor shoulder adjustment
hair / cloth reaction
small posture maintenance
```

Micro-motion 的作用是：

```text
avoid frozen background figures
```

不是抢主角表演。

---

# 32. Performance Plan

调用本 Skill 时，内部可形成：

```yaml
performance_plan:

  subject_type:
  performance_source:

  dramatic_intent:
    given_circumstance:
    objective:
    obstacle:
    tactic:
    turn:

  visible_behavior:
    opening_behavior:
    key_gesture:
    ending_behavior:

  movement_quality:
    weight:
    time:
    space:
    flow:

  root_motion:
    start_position:
    end_position:
    travel_direction:
    travel_distance:
    speed_curve:

  balance:
    support:
    center_of_mass:
    transfer:
    stability:

  action_arc:
    anticipation:
    initiation:
    primary_action:
    follow_through:
    recovery:

  motion_hierarchy:
    primary:
    secondary:
    tertiary:
    reactive:

  contact:
    point:
    force_level:
    visible_consequence:

  gaze:
    target:
    change:
    timing:

  silhouette:
    key_read:
    avoid_overlap:

  ending:
    pose:
    balance:
    orientation:
    motion_state:
```

只填写真正有用的字段。

不要机械地把整个 YAML 填满。

---

# 33. H3 Performance Compiler

最终生成 Prompt 时，优先顺序：

```text
Subject / Identity Lock
↓
Opening Physical State
↓
Performance Intention as Visible Behavior
↓
Anticipation
↓
Primary Motion
↓
Force / Weight / Contact
↓
Follow-Through
↓
Reactive / Secondary Motion
↓
Recovery
↓
End State
```

---

# 34. Prompt Compression Rule

Director Plan 可以详细。

最终 Prompt 不需要把所有字段复读。

例如内部分析：

```yaml
movement_quality:
  weight: firm
  time: sudden
  space: direct
  flow: bound
```

最终不用写：

```text
firm weight, sudden time, direct space, bound flow
```

而是翻译成：

```text
The movement starts sharply and commits to one precise attack line.
The body remains controlled with no loose or wandering motion,
and the blade stops on a clearly defined finishing line.
```

---

# 35. Human Performance Prompt Example

```text
The swordswoman begins with her weight slightly behind the right leg,
her shoulders controlled and her eyes fixed on the opponent.
She makes one involuntary half-step backward as the threat closes,
then catches herself and plants the rear foot firmly.

Her grip tightens around the sword. Instead of retreating again,
she lowers her center of gravity and commits forward.
The rear leg drives first, the hips rotate, then the torso and right shoulder
carry the blade into a fast diagonal strike from upper right to lower left.

Her head and gaze remain locked on the target throughout the motion.
The blade continues slightly beyond the impact line rather than stopping instantly.
The front leg absorbs the remaining momentum, her torso settles,
and she finishes in a low stable guard with the sword held clear of the body.

Keep the action controlled and physically connected.
No floating footwork, no instant pose reset, no disconnected arm-only sword swing.
```

---

# 36. Mecha Performance Prompt Example

```text
The mecha begins with both feet planted and the torso held slightly forward.
Its rear leg compresses first as the center of mass drops.
The rear thrusters ignite only after the stance is loaded.

The machine launches forward from the planted foot rather than sliding.
Hip and torso joints rotate in sequence as the right arm draws the blade back.
The left foot reaches forward and receives the machine's weight as the blade
accelerates diagonally through the target line.

The strike carries the upper body slightly beyond the impact point.
The leading leg and ankle joints absorb the momentum, armor panels settle,
and the mecha lowers into a stable combat stance with the blade held clear
of the torso.

Preserve heavy mechanical mass, jointed motion, planted contact,
and visible recovery after every high-force movement.
```

---

# 37. Aircraft Performance Prompt Example

```text
The fighter begins in stable level flight.
The left wing drops first as the aircraft rolls smoothly into a left bank.
The nose lowers only slightly and remains aligned with the changing flight path.

The aircraft continues forward through a broad shallow turn instead of pivoting
around its center. Speed remains high and consistent through the arc.
The contrails bend smoothly behind the changing heading and remain attached
to the aircraft's actual path.

As the fighter reaches the new heading, the roll reverses gradually,
the wings return toward level, and the aircraft exits in stable forward flight.

No sideways sliding, no instant heading change, no rotation in place,
and no contrails pointing independently of the flight path.
```

---

# 38. Failure Repair

## Emotion Is Vague

症状：

```text
looks powerful
looks nervous
looks emotional
```

修复：

```text
objective
→ tactic
→ one visible gesture
```

---

## Arm-Only Action

症状：

```text
武器挥动
身体不参与
```

修复：

```text
support foot
→ hip
→ torso
→ shoulder
→ arm
→ weapon
```

---

## Weightless Motion

症状：

```text
漂移
落地无冲击
方向瞬间改变
```

修复：

```text
contact
compression
overshoot
recovery
surface reaction
```

---

## Pose Teleport

症状：

```text
动作中间突然换姿态
```

修复：

```text
add anticipation
add transition state
preserve continuous support relation
define endpoint
```

---

## Too Many Independent Motions

症状：

```text
身体、头发、衣服、粒子、镜头、背景全部乱动
```

修复：

```text
Primary
→ Secondary
→ Reactive
```

只保留一个主要动作。

---

## Aircraft Slides Sideways

修复：

```text
nose aligned with flight path
forward motion preserved
bank changes trajectory
no pivot in place
```

---

## Mecha Feels Like Rubber

修复：

```text
joint sequence
planted feet
mechanical stops
inertia
armor settle
```

---

> 环境与介质的物理事实门禁（浮力、接触、连续性、尺度等八项）见 h3-micro-cinematic-director # 27 真实物理与现实事实门禁；表演类故障（侧滑、橡皮机甲、失重漂浮、姿态瞬移）可在本 Skill 的故障档案内查找修法。

# 39. Final Quality Gate

最终输出前检查：

- [ ] 主体的目标或动作目的清楚
- [ ] 情绪已转换为可见行为
- [ ] 主要动作不是一个孤立动词
- [ ] 有清楚的起始状态
- [ ] 有明确的动作启动方式
- [ ] 高强度动作有 anticipation
- [ ] 需要重量感时有 contact / force / reaction
- [ ] 有 follow-through 或合理惯性
- [ ] 有 recovery
- [ ] 有明确 end state
- [ ] Primary Motion 明确
- [ ] Secondary Motion 不抢主体
- [ ] 动作峰值时 silhouette 可读
- [ ] 主体类型使用了正确运动语法
- [ ] 飞机没有侧滑式转向
- [ ] 机甲没有橡皮人式关节
- [ ] 人物不是单纯依靠情绪形容词
- [ ] 动作复杂度符合 5–15 秒时长
- [ ] 有参考动作时已明确 reference role

如果失败超过 3 项：

> 不继续润色 Prompt，重新设计主体表演。

---

# 40. Output Behavior

用户只要求最终 H3 Prompt：

```text
内部完成 Performance Plan，
只输出压缩后的可执行主体动作语言。
```

用户要求：

- 动作设计
- 表演设计
- 演员指导
- 为什么主体看起来假
- 为什么没有重量感

则可输出：

1. Performance Intent
2. Movement Quality
3. Action Arc
4. Physical / Body Mechanics
5. H3 Prompt Rewrite

---

# 41. Final Principle

> The camera shows the action.
>
> Performance gives the action meaning.
>
> Mechanics gives the action weight.
>
> Timing gives the action life.
>
> H3 should not be told only what happens.
> It should be told how the subject visibly becomes the next state.

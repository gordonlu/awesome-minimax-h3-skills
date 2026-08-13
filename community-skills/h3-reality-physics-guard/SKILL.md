---
name: h3-reality-physics-guard
description: >
  Pre-director gate for MiniMax H3 5–15 second generation. Runs BEFORE any camera,
  blocking or performance design: classifies Reality Mode, verifies known facts
  about real subjects, runs an eight-category reality check, resolves contradictions
  against a fixed priority ladder, and hands the director a Reality Sheet of
  allowed / forbidden / must-verify constraints. Catches physics, anatomy, medium,
  light and temporal bugs — belly-first landings, floating cavalry, sliding aircraft,
  morphing geometry, teleporting clouds — before credits are spent. Does not write
  prompts and does not direct; it only guards.
license: MIT
metadata:
  version: "0.1.0"
  category: video-reality-gate
  target_model: MiniMax H3
  companion_to:
    - h3-micro-cinematic-director
    - h3-shot-pattern-library
    - h3-performance-director
---

# H3 Reality / Physics Guard

`h3-reality-physics-guard` 是放在导演之前的**生成前防翻车层**。

它不生成 Prompt，不设计镜头，不编排表演。

它只负责在 `h3-micro-cinematic-director` 设计任何东西**之前**：

```text
Reality Mode     判定现实模式
→ Known Facts    核对已知事实
→ 八类 Reality Check
→ Contradiction Check
→ Reality Sheet  把约束交给导演
```

得到 Reality Sheet 之前，不进入镜头设计。

> 漂亮镜头救不了基础事实错误。
> 机头与航向不一致、飞机横着滑、原地转向、尾迹方向反了、
> 左滚转却右转、高速瞬间变向、把凝结尾迹翼尖涡音爆云混成一种白烟——
> 这类错误任何打光都救不回来。

---

# 1. Reality Mode（现实模式判定）

设计之前先回答：这个世界遵守什么现实？

```yaml
reality_mode:
  strict_realism      # 现实环境/生物/物体，遵守基本事实
  plausible_stylized  # 风格化但物理仍自洽（雨滴慢镜、漫画夸张）
  deliberate_fantasy  # 允许一个明确超自然前提，其余保持因果一致
```

**默认规则**：

> 只要用户描述的是现实存在的环境、生物、物体、车辆、飞机、天气或自然现象，
> 又没有明确要求违反现实规律，默认 `strict_realism`。

流程方向强制为：

```text
现实对象
→ 先保证事实正确
→ 再设计主体表现
→ 再设计摄影机
→ 最后加风格
```

而不是：

```text
先想一个很酷的画面
→ 让现实世界迁就画面
```

用户是否真的要求违反现实，必须明示；"想拍酷一点"不等于可以违反事实。

---

# 2. Reality Priority（现实优先级）

任何设计决策冲突时，按固定优先级裁决：

```text
Reality / factual correctness
        >
Identity / structural consistency
        >
Subject motion correctness
        >
Spatial readability
        >
Camera design
        >
Effects / spectacle
```

| 冲突示例 | 裁决结果 |
| --- | --- |
| 为了更强烈的近景，让飞机做不可能的横移 | 不允许；改用摄影机（贴近、提升、跟拍） |
| 为了拍动物正面，让四足动物脚步错乱 | 不允许；换动作或角度 |
| 为了让层状云更"电影感"，拆成满天碎块 | 不允许；改光线、改构图，不改云的结构 |

---

# 3. Known Facts（已知事实核对）

涉及**已知物种、载具、航空器、机器、自然现象或专业物理过程**时，先做题：

```text
我是否真的知道它：
发动机位置？
翼型状态？
尾迹从哪里形成？
高速转弯姿态？
可变后掠翼在当下速度大致是什么状态？
四足动物在这个速度的步态？
```

**不确定，不要脑补。**

> When strict realism involves a known species, vehicle, aircraft, machine,
> natural phenomenon, or specialized physical process, verify uncertain factual
> behavior before designing the shot. Do not invent mechanics merely to make the
> image more dramatic.

- 能核实的 → 落成 `fact_anchors`（事实锚点，写进最终 Prompt 的正面行为）。
- 无法核实的 → 落进 `must_verify`，禁止用"看起来更帅"的机制填补。
- 脑补机制是本 Skill 绝不退让的红线：模型会在你给的错误世界状态上跑出所有衍生错误。

---

# 4. 八类 Reality Check

对 Reality Sheet 的每个候选画面，逐类检查，每一类都要有落点。

## 4.1 Geometry / Structure（几何结构与形态保持）

实体结构不能自己变，这是防 morphing 的第一道闸。

```text
飞机：机翼数量、位置、尾翼、发动机、起落架基本结构正确
汽车：四轮位置正确、车轮接地、转向轮方向合理
动物：四肢数量、关节方向、翅膀连接位置正确
建筑：结构不无原因弯曲、漂浮、穿插
```

## 4.2 Gravity / Support / Contact（重力、支撑与接触）

重力环境下，物体必须有支撑 / 正在下落 / 有合理升力浮力推力，三选一。

```text
人站立：脚必须真正接地，重心落在支撑区域内
动物奔跑：步态产生周期性的支撑与腾空
物体落地：contact → compression / bounce / deformation → recovery
```

禁止"碰到地面但是完全没反应"。

## 4.3 Inertia / Momentum（惯性）

任何有质量的东西 **cannot instantly**:

```text
start
stop
reverse
rotate
```

除非有对应的巨大力。因此：

```text
高速运动 → 刹车 → 重心 / 悬挂 / 身体出现响应
高速转向 → 必须有连续轨迹
挥刀 → impact 后仍然有 follow-through
```

## 4.4 Cause → Effect（因果）

任何明显效果都必须有原因：

```text
风 → 头发、衣服、树叶朝一致方向响应
脚踩积水 → 接触点向外溅水
飞机穿过湿空气 → 凝结位置与局部压力变化相关
爆炸 → 冲击、碎片、烟尘从爆点向外发展
枪后坐 → 武器和身体出现对应反应
```

效果不能自己凭空发生。没有原因就当它是 bug。

## 4.5 Medium Rules（介质规律）

空气、水、烟、云、沙、雪各有自己的运动规律，不能互相套用。

```text
连续云层（如 continuous stratocumulus deck）：
  大面积连续、大致共同高度、只有顶部起伏、
  不突然碎成几十块、光照方向统一

水下：
  动作阻力明显、布料 / 头发运动滞后、气泡向上
  ——不能和空气里一样挥动
```

## 4.6 Biology / Anatomy / Locomotion（生物、解剖与步态）

真实生物默认使用物种基本运动方式，不许让 AI 自己发明步态。

```text
limb count
joint direction
support pattern
spine behavior
head stabilization
tail counterbalance
species-appropriate gait
```

鸟飞行检查翼拍 / 滑翔 / 身体姿态 / 转弯时滚转 / 尾羽作用。

不是：`bird moves left while wings flap randomly`。

## 4.7 Light / Shadow / Reflection（光、影、反射）

默认一个主导太阳方向：

```text
主体受光方向一致
地面阴影方向一致
云顶与云底照明关系一致
镜面反射服从表面方向
水面高光与太阳方向相关
```

不能镜头转一点，太阳突然跑到另一边。

## 4.8 Temporal Continuity（时间连续性）

5–15 秒内部保持 same object / same environment / same physical state，连续演化。

禁止无理由的状态重置：

```text
wet → dry
damaged → intact
武器从左手变到右手
云瞬移
车辆速度归零重跑
太阳方向改变
动物步态相位跳变
```

模型特别容易在连续时间里偷偷重置状态，这条是死规则。

---

# 5. Contradiction Check（矛盾检查）

把每个 beat 逐条对照 `fact_anchors`、`reality_mode` 与八类检查：

```text
姿态 ⊥ 事实？        → 否决或改写行为
beats 之间事实跳变？  → 补过渡
spectacle 要求破坏现实？ → 先改画面
```

冲突一律按 # 2 Reality Priority 裁决：

> 任何 spectacle 需求若要求 impossible / contradictory 的行为，
> 改写为满足事实的等价画面（改摄影机、改走位、改光线、改角度），
> 而不是让现实迁就画面。

---

# 6. Fantasy Rule（幻想也不是没有物理）

`deliberate_fantasy` 的定义：

> 允许一个明确的超自然前提，然后**其余世界保持因果一致**。

例如允许"角色御剑飞行"，仍然要求：

```text
衣服响应气流
身体有加减速
飞剑轨迹连续
落地有重量
环境不会随机变形
```

> **Break one law intentionally, not every law accidentally.**
> 故意打破一条法则，而不是不小心打破所有法则。

Deliberately chosen and explicitly written; 其余冲突仍走 Reality Priority 裁决。

---

# 7. 产出 Reality Sheet（交给导演）

门禁结束产出唯一交付物，交给 `h3-micro-cinematic-director`：

```yaml
reality_mode: strict_realism   # strict_realism | plausible_stylized | deliberate_fantasy
fact_anchors:                  # 已核对的事实锚点（正面行为）
  - 
must_verify:                   # 无法核实、禁止脑补的项
  - 
reality_constraints:
  allowed:                     # 正面可见行为，率先写进拍子
    - 
  forbidden:                   # 禁令，兜底追加
    - 
```

规则：

- 存在未裁决的矛盾，或 `must_verify` 非空却不允许跳过 → 门禁未通过，不进入导演。
- `allowed` 以"正面可见行为"优先，`forbidden` 只兜底，不替代正面行为。
- 导演必须在 Reality Sheet 的允许 / 禁止范围内做走位、镜头、峰值与风格；
  超出范围的任何"更酷"方案，回到 # 2 裁决。

---

# 8. 与其它 Skill 的关系（调用前置）

```text
用户意图 / 参考图
  ↓
h3-reality-physics-guard（本 Skill）
  Reality Mode → Known Facts → 八类检查 → 矛盾裁决 → Reality Sheet
  ↓
h3-micro-cinematic-director
  在 Reality Sheet 范围内做镜头 / 走位 / 峰值
  ↓
h3-shot-pattern-library（镜头骨架）/ h3-performance-director（主体表演）
```

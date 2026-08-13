---
name: mythic-cloud-whale-generator
description: Create cinematic 7-second MiniMax H3 text-to-video clips of colossal mythological beings crossing an endless sea of clouds. One legendary subject (cloud whale, sky leviathan, cloud dragon…) is the primary motion owner; the clip is built on a fast-slow contrast rhythm — explosive break-through actions and real-time speed beats, never an all-slow-motion piece — with volumetric light, drifting dust and layered mist for an epic, high-texture look. T2VA only, no reference material needed.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA in T2VA mode.
trigger-words: [cloud whale, sky leviathan, mythic beast, 云海巨鲸, 巨鲸, 云鲸, 神话生物, 神兽巡游, 云海, 天地奇观]
---

# Mythic Cloud Whale Generator

Default:
- Model: H3-Base-FL2VA
- Mode: I2VA (reference image first); T2VA fallback supported
- Duration: 7s
- Aspect ratio: 16:9
- Primary Motion Owner: the mythic subject (whale / leviathan / dragon)
- Tempo: Natural-to-Energetic with one Impact peak — slow motion is a seasoning, never the main course

## Reference-First Workflow（参考图路线，推荐）

优选 **I2VA**：先用图像生成模型产出首帧参考图（见 `references/prompt-library.md` 的 P-IMG），
再让 H3 按图动起来——主体形象与材质由图保底，文字只负责动作节拍、镜头与光线响应。

1. 按 P-IMG 的构图要求生成 16:9 参考图（巨鲸侧身占右 1/3、云海占左 2/3、丁达尔光柱为主光源）。
2. 用 P1-I2VA 模板生成 7s 视频；首帧必须与图同构图、同材质。
3. 没有图像生成条件时，降级 P2-T2VA 纯文字模板（结果取决于文字质感，非首选）。


## Global Motion Principles

These rules override decorative cinematic language unless the requested concept is explicitly a drifting meditation — and even then the whale must visibly move.

### Motion Ownership

The mythic subject owns ALL primary motion. Camera moves, volumetric light, dust, mist, and background cloud drift support it but never replace it.

If the whale never visibly performs — bursts, rolls, whips, dives, arcs — the generation fails even if the shot is beautiful.

### The Anti-Slow-Motion Rule

This Skill forbids the cliché "majestic beast drifts slowly through clouds" output.

- At least one beat must run at **natural real-time speed or faster** with crisp, purposeful acceleration (an explosive break-through, a whip of the tail, a plunge).
- Use exactly **one Impact peak** (burst, tail-whip, crash-dive). Put it in the first half when you want shock, in the second half when you want climax. Never two.
- Rising, arcing, and re-entry beats may be slow — but every slow section must be bracketed by a fast one. Slow-slow-slow repeats until the clip ends are forbidden.

Prefer explicit language:

`The whale bursts upward through the cloud layer in a single explosive motion, at natural real-time speed, with crisp acceleration.`

`No slow motion for the break-through beat; the tail-whip hits hard and fast.`

Avoid overusing: `slowly`, `gently`, `majestically drifts`.

### Camera

The camera is a second supportive voice, not a substitute for action:

- Open with a high-altitude **drop or push-in** to establish scale in the first second.
- Mid-clip **lateral chase or orbit** that follows the whale's motion — no "beauty fly-over" without subject action.
- End with a controlled **pull-back to a wide high shot** as the whale re-enters the clouds.

The whale must complete at least one full arc (burst → curve → re-entry) before the wide reset. Camera never becomes the only moving element on screen.

## Texture & Scale Requirements (the epic look)

- **Scale cue inside the first second**: the whale reads as a mountain, not a fish — cloud peaks, cliff-like flanks, broken mist revealing the horizon behind it.
- **Texture language**: moss, vines, rocks, barnacle-like ridges, star-glitter between scales, water-droplet beads on skin — at least two surface details, visible in the light.
- **Light as a character**: one named light system (volumetric sun shafts / aurora / moonlight through cloud gaps / god rays at golden hour) that actually interacts — beams breaking through, dust igniting, mist glowing.
- **Atmosphere layer stack**: background cloud sea + mid-ground mist wave + foreground dust/droplet motes. At least two layers must visibly respond to the whale's motion.
- **Color discipline**: one dominant temperature per clip (golden dusk / lunar blue / dawn rose), plus one accent from the light system.

## Prompt Structure

Every generation uses the official three-field layout (see `h3-prompt-writing`):

```text
integrated_multimodal_description: [Shot 1] <opening establish> <break-through beat> <interaction with light/mist> <peak beat> <re-entry and wide reset> — with time brackets so the rhythm is explicit.

overall_soundscape: <cloud/weather ambience> + <one deep subject vocal (whale cry / leviathan roar) at the peak> + <mist hiss / debris sound>.

non_diegetic_music: <braam / choir / low percussion> rising to the peak, cutting on re-entry with a decaying tail.
```

Rules:
- One continuous shot — no cuts, no montage, no grid layout, no text overlays.
- English body copy. Time brackets per beat inside the description.
- The peak beat gets the strongest verb; slow beats get their verbs but never multiple in a row for the subject.
- Never exceed 7s; the re-entry must land before the last 1s.

## Acceptance Checklist

- [x] First second shows scale and opens with a camera move (drop / push-in)
- [x] At least one beat at natural real-time speed or faster, with visible acceleration
- [x] Exactly one Impact peak — clear, physical, not a camera trick
- [x] Whale performs a full arc: burst → curve → re-entry before the wide reset
- [x] Two or more surface texture details visible in light
- [x] Atmosphere layers visibly respond to the whale (mist wave, dust surge, cloud tear)
- [x] One dominant color temperature + one light-system accent
- [x] No all-slow-motion output; no cuts; single 16:9 7s clip

## Canonical Demo

Runnable now — see `references/prompt-library.md` P1 (Golden Hour Break-Through). Two more variants (Lunar Night Crossing, Sunrise Resurfacing) are listed there; swap the material slots only. Do not change the structure, field order, or labels.
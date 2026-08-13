---
name: jet-dogfight-generator
description: Create cinematic 7-second MiniMax H3 text-to-video clips of high-speed jet dogfights above and through cloud decks. Full real-time speed, vapor cones, contrail arcs, G-load haze and sun flare on canopies; the camera orbits and whips with the airframes. No slow motion, no external footage feel — one continuous aerial shot. T2VA only, no reference material needed.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA in T2VA mode.
trigger-words: [jet dogfight, air combat, fighter jet, 空战, 战机, 缠斗, 俯冲, 高空, 凝结尾迹, dogfight, aerial combat]
---

# Jet Dogfight Generator

Default:
- Model: H3-Base-FL2VA
- Mode: I2VA (reference image first); T2VA fallback supported
- Duration: 7s
- Aspect ratio: 16:9
- Primary Motion Owner: the dogfighting airframes
- Tempo: Energetic — full real-time speed; slow motion prohibited for the subject

## Reference-First Workflow（参考图路线，推荐）

优选 **I2VA**：先用图像生成模型产出首帧参考图（见 `references/prompt-library.md` 的 P-IMG），
再让 H3 按图动起来——机型、音锥与凝结尾迹的视觉由图保底，文字只负责机动与镜头。

1. 按 P-IMG 的构图要求生成 16:9 参考图（大广角高空、双机对头占对角、云海平面居中）。
2. 用 P1-I2VA 模板生成 7s 视频；首帧必须与图同构图、同机型。
3. 没有图像生成条件时，降级 P2-T2VA 纯文字模板（结果取决于文字质感，非首选）。


## Global Motion Principles

These rules override decorative cinematic language. This Skill's whole identity is speed.

### Motion Ownership

The airframes own all primary motion: the head-on pass, the pull, the vertical zoom. Contrails, vapor cones, cloud tears and heat haze accompany but never replace the move.

If the jets never visibly maneuver at real speed with crisp G-loading, the generation fails even if the shot is beautiful.

### The Speed Rule

- **No slow motion for the subject — ever.** Prefer explicit language: `The jets maneuver at full real-time speed, snapping through the turn at high G.`
- At least two acceleration events: the head-on merge and the vertical zoom breakaway.
- Exactly one Impact peak (the vertical zoom out of the cloud deck / canopy flash, placed at 70–90% of the clip).
- Airframes stay physically coherent: correct wing flex, vapor cone placement, no gliding physics.

### Camera

Three camera landmarks, all participating in speed:

1. **High-altitude head-on hold** — camera static against the cloud deck while the jets close fast (first second).
2. **Orbit whip** — camera whips around the lead airframe as it pulls, contrails carving arcs through the sky (mid-clip).
3. **Breakaway zoom & wide reset** — at the peak the jets zoom vertically out of the cloud top, sun flare on the canopy; camera pulls back to a wide high shot over the cloud sea (last second).

Camera follows G-forces; the horizon tilt reads the load. Never a cruise-by fly-over.

## Texture & Scale Requirements (the epic look)

- **Sky as a stage with weather**: named cloud system (uniform stratus-like sheet layer / thin broken cirrus at altitude — avoid cell-like cumuliform words such as stratocumulus) that visibly tears around the jets.
- **Speed artifacts**: vapor cone at the canopy, contrail pairs, wing-tip vortices, heat-haze shimmer off the exhaust.
- **Light as an accent**: sun flare on the canopy, low golden side-light on the airframe, cloud shadows streaking past.
- **Two surface details minimum**: panel lines and rivets, paint wear, missile rails, pilot helmet silhouette in the canopy.
- **One color temperature** (stratosphere blue / dusk amber / dawn violet) plus one light accent.

## Prompt Structure

Official three-field layout (see `h3-prompt-writing`):

```text
integrated_multimodal_description: [Shot 1] <head-on hold, jets closing at real speed> <converge + vapor cone burst> <orbit whip, contrails arc, cloud tears> <Impact peak: vertical zoom out of the deck, canopy flare> <wide reset over the cloud sea> — time brackets per beat.

overall_soundscape: <jet roar building> + <sonic crack at the merge> + <wind shear hiss during the orbit>.

non_diegetic_music: <pulsing electronic pulse and low percussion> accelerating to the peak, breaking into open air on the wide reset.
```

Rules:
- One continuous shot — no cuts, no montage, no grid, no text overlays.
- English body copy. Time brackets per beat.
- The Impact peak gets the strongest verb; the zoom is a single burst, not a loop.
- Never exceed 7s; the wide reset lands in the final second.

## Acceptance Checklist

- [x] First second: head-on hold, jets closing at real speed
- [x] Full real-time maneuvering with visible G-load; no subject slow motion
- [x] One Impact peak: vertical zoom out of the cloud deck, canopy flare
- [x] Vapor cone, contrails and wing-tip vortices visible
- [x] Two or more airframe surface details visible in light
- [x] Cloud system visibly tears around the jets
- [x] One color temperature + one light accent
- [x] No cuts; single 16:9 7s clip; physically coherent flight

## Canonical Demo

Runnable now — see `references/prompt-library.md` P1 (Stratosphere Merge). One more variant (Valley Swing) is listed there; swap material slots only. Do not change structure, field order, or labels.
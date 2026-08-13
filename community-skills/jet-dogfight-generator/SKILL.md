---
name: jet-dogfight-generator
description: Create cinematic 7-second MiniMax H3 text-to-video clips of high-speed jet dogfights above and through cloud decks. Full real-time speed, contrail arcs and a clean high-speed merge under a locked camera; no whip or orbit moves, no vapor cones. No slow motion, no external footage feel — one continuous aerial shot with a fixed lens.
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

The airframes own all primary motion: the closing approach, the crossing, the separation. Contrails, wing-tip filaments and heat haze accompany but never replace the move.

If the jets never visibly maneuver at real speed with crisp G-loading, the generation fails even if the shot is beautiful.

### The Speed Rule

- **No slow motion for the subject — ever.** Prefer explicit language: `Both jets maneuver at full real-time speed, noses locked to their headings.`
- One continuous event per clip: the merge (close → cross → separate).
- Exactly one Impact peak — the high-speed crossing at 70–90% of the clip, sonic crack and contrail X.
- Aircraft grammar: nose always aligned with flight path, no sideways slide, no pivot in place, contrails attached to the actual path and bending smoothly with any bank.

### Camera

One dominant camera behavior:

1. **Locked high-altitude hold** — the camera holds absolutely still at altitude for the whole clip; closing speed is read from the two airframes growing in frame.
2. **No whip, no orbit, no vertical moves** — the crossing does the drama; horizon stays level, screen direction never reverses.

Never follow with the lens what the nose of the aircraft can do on its own.

## Texture & Scale Requirements (the epic look)

- **Sky as a stage with weather**: named cloud system (uniform stratus-like sheet layer / thin broken cirrus at altitude — avoid cell-like cumuliform words such as stratocumulus) that visibly tears around the jets.
- **Speed artifacts**: contrail pairs, faint wing-tip condensation filaments, heat-haze shimmer off the exhaust — no vapor cones.
- **Light as an accent**: sun flare on the canopy, low golden side-light on the airframe, cloud shadows streaking past.
- **Two surface details minimum**: panel lines and rivets, paint wear, missile rails, pilot helmet silhouette in the canopy.
- **One color temperature** (high-altitude golden / dusk amber / dawn violet) plus one light accent.

## Prompt Structure

Official three-field layout (see `h3-prompt-writing`):

```text
integrated_multimodal_description: [Shot 1] <locked hold, jets closing at real speed from opposite corners> <stable level approach toward center, noses locked to headings> <separation banks, contrails bowing> <Impact peak ~70%: clean high-speed crossing + sonic crack, contrail X> <both jets recede to opposite edges, contrail X settles> — time brackets per beat.

overall_soundscape: <jet roar building steadily> + <sharp sonic crack at the crossing> + <wind hiss fading as the pair separates>.

non_diegetic_music: <pulsing percussion and strings> accelerating to the crossing, breaking into open air as the contrail X settles.
```

Rules:
- One continuous shot — no cuts, no montage, no grid, no text overlays.
- English body copy. Time brackets per beat.
- The Impact peak gets the strongest verb; the zoom is a single burst, not a loop.
- Never exceed 7s; the wide reset lands in the final second.

## Acceptance Checklist

- [x] First second: locked hold, jets closing at real speed from opposite corners
- [x] Full real-time maneuvering; no subject slow motion
- [x] One Impact peak: the clean high-speed crossing with sonic crack (~70%)
- [x] Contrails and faint wing-tip filaments visible; no vapor cones
- [x] Two or more airframe surface details visible in light
- [x] Cloud system visibly tears around the jets
- [x] One color temperature + one light accent
- [x] No cuts; single 16:9 7s clip; physically coherent flight

## Canonical Demo

Runnable now — see `references/prompt-library.md` P1 (I2VA Merge) and P2 (T2VA fallback). One more variant (Canyon Pass) is listed there; swap material slots only. Do not change structure, field order, or labels.
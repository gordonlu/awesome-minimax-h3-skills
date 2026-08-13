---
name: cavalry-charge-generator
description: Create cinematic 7-second MiniMax H3 text-to-video clips of full-speed cavalry charges across dust-scoured plains. Every beat runs at natural real-time speed or faster — no slow motion; the camera presses low through the dust wall alongside the charge. Dust, armor, sand-spray and low golden backlight carry the epic texture. T2VA only, no reference material needed.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA in T2VA mode.
trigger-words: [cavalry charge, horse charge, 铁骑, 冲锋, 骑兵, 万马奔腾, 沙暴, 战场, 史诗冲锋, horsemen]
---

# Cavalry Charge Generator

Default:
- Model: H3-Base-FL2VA
- Mode: T2VA
- Duration: 7s
- Aspect ratio: 16:9
- Primary Motion Owner: the charging cavalry mass
- Tempo: Energetic — full-speed, real-time; slow motion prohibited for the subject

## Global Motion Principles

These rules override decorative cinematic language. This Skill's whole identity is speed.

### Motion Ownership

The cavalry mass owns all primary motion: the charge, the dust wall, the sand-spray under hooves. The camera chases; dust, light and heat haze accompany — they never replace the charge.

If the horses never visibly gallop at full speed with jarring impacts, the generation fails even if the shot is beautiful.

### The Speed Rule

- **No slow motion for the subject — ever.** Prefer explicit language: `The cavalry charges at full gallop, natural real-time speed, hooves hammering the ground.`
- At least two acceleration events: the charge building from the dust horizon, and the pass-by burst where the front rank overtakes the camera.
- Exactly one Impact peak (the pass-by / dust-wall swallow at 70–90% of the clip).
- Terrain, armor, and horse anatomy stay physically coherent at speed — no sliding, no float.

### Camera

Three camera landmarks, all participating in speed:

1. **Low dolly-in over the sand** — camera skims the ground as the charge builds in the distance (first second).
2. **Lateral press / side chase** — camera accelerates alongside the front rank, sand-spray over the lens (mid-clip).
3. **Front-rank overtake & wide reset** — at the peak the cavalry surges past the camera, dust swallows the frame; camera rises to a wide overhead as the dust settles (last second).

Camera motion reads fast. Never a static wide with the charge moving inside it.

## Texture & Scale Requirements (the epic look)

- **Dust as a character**: one dust system (sand-spray plumes, rolling dust wall, ember-lit haze) with visible motion.
- **Low golden backlight**: silhouetted riders, rim-lit helmets, sand glowing in the light.
- **Two surface details minimum**: armor wear (scratches, rivets), weapon glint, horse muscle ripple, banner cloth tearing.
- **Atmosphere stack**: background dust wall + mid-ground rolling haze + foreground sand-spray; at least two layers respond to the charge.
- **One color temperature** (scorched gold / ash-silver / ember night) plus one light accent (torch flicker / moon edge / sun flare).

## Prompt Structure

Official three-field layout (see `h3-prompt-writing`):

```text
integrated_multimodal_description: [Shot 1] <low opening dolly-in + dust horizon> <charge builds at real-time speed> <side chase, sand-spray over lens> <Impact peak: front rank overtakes, dust swallows frame> <wide reset, dust settling> — time brackets per beat.

overall_soundscape: <thunder of hooves in waves> + <metal clatter, banner snap> + <low war-horn at the peak>.

non_diegetic_music: <driving percussion and low brass> accelerating to the pass-by, cutting into a low rumble on the wide reset.
```

Rules:
- One continuous shot — no cuts, no montage, no grid, no text overlays.
- English body copy. Time brackets per beat.
- The Impact peak gets the strongest verb; the pass-by is a single burst, not a repeated trope.
- Never exceed 7s; dust-settle lands in the final second.

## Acceptance Checklist

- [x] First second: low dolly-in over sand, charge visible on the dust horizon
- [x] Full-gallop real-time speed with visible acceleration; no subject slow motion
- [x] One Impact peak: front rank overtakes the camera, dust swallows the frame
- [x] Low golden backlight: rim-lit riders, glowing sand
- [x] Two or more surface details visible in light
- [x] At least two dust/atmosphere layers respond to the charge
- [x] One color temperature + one light accent
- [x] No cuts; single 16:9 7s clip; physically coherent gallop

## Canonical Demo

Runnable now — see `references/prompt-library.md` P1 (Golden Dust Charge). One more variant (Ember Night Charge) is listed there; swap material slots only. Do not change structure, field order, or labels.
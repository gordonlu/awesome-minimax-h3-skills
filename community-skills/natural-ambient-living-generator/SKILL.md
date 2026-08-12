---
name: natural-ambient-living-generator
description: |
  Create a 7–8 second MiniMax H3 text-to-video clip of a full-scale natural environment living and breathing at real-world size — forest, ocean, sky, river, desert, snowfield, window rain — where an environmental system (wind, light, water, cloud) is the declared primary motion owner. The scene must show continuous visible change every 1–2 seconds and reach a soft peak beat; no camera-only clips, no static desktop-wallpaper output. Follows base-en.txt exactly. Miniature/diorama scenes belong to miniature-world-landscape-generator; ink-paper subjects to living-ink-painting-video-generator; construction to construction-timelapse-video-generator.
---
# Natural Ambient Living Generator

Real-scale nature shorts: mist breathing through a forest, waves collapsing on a shore, cloud sheets moving across a valley, rain streaking a window, grass rippling under wind. Every clip needs one **declared environmental motion owner** and continuous visible change — the opposite of a frozen wallpaper with a slow zoom.

Default:
- Mode: T2VA
- Duration: 7–8s
- Aspect ratio: 16:9 (or 9:16 per platform)
- Tempo: Natural (Calm only for intentionally meditative scenes)
- Primary Motion Owner: one environmental system
- Peak: one soft physical peak per clip
- Camera: slow, supporting only

## Global Motion Principles

These rules override decorative cinematic language.

### Motion Ownership

Every video must define one **Primary Motion Owner**.

In this Skill the owner is always an **environmental system**: wind, water, light, cloud, particles (snow, rain, dust, embers), or growth. The system must produce clearly visible change on its own — leaves bending, water moving, beams shifting, embers drifting.

Camera movement, DoF changes, and lighting-tint shifts never count as system motion. If the system fails to visibly change every 1–2 seconds, the generation fails even if the shot looks beautiful.

### Tempo

Use:
- **Calm** only for intentionally meditative, drifting, slow scenes (still must show change).
- **Natural** — default: real-time physical motion.
- **Energetic** for storms, surf, waterfalls, wind gusts, auroras.
- **Impact** only for the single peak beat, never the whole clip.

Prefer explicit language:
`The <system> moves at natural real-time speed, not slow motion. The change is continuous and visible every second.`

Avoid overusing: slowly, gently, subtly, peacefully, drifting. Replace with physical verbs: bend, ripple, surge, streak, spill, billow, cascade, scatter.

### Beat Density

For a 7–8s clip, target a visible change every 1–2 seconds, plus one soft peak beat (gust, wave crash, light shaft burst, meteor) and a settling resolution — never an abrupt cut, and never a shot that only zooms.

### Camera Rule

The camera may dolly, arc, or push in slowly, but it must never be the source of motion. Keep camera words short and generic (`slow push-in`, `gentle lateral drift`) — most words go to the system.

## 1. Suitable Themes

- Forest: mist breathing, light shafts, leaf scatter, rain dripping through canopy
- Ocean/coast: wave collapse, foam, spray, lighthouse beam sweep
- Sky/clouds: cloud movement, moon through gaps, aurora, storm front
- River/lake: current, ripple, surface light, drifting leaves
- Mountain/snowfield: wind erosion, snowfall, distant avalanche dust
- Desert: sand ripple, heat shimmer, dust devils
- Window/still: rain streaks, condensation, plant shadows
- Field/grass: wind waves, grasshopper hops, flower pollen

## 2. Structure of a 7–8s Clip

1. 0–1.5s — establish the scene and the system in motion from the first second
2. 1.5–4.5s — system performs two to three clearly readable changes
3. 4.5–6.0s — the soft Peak beat (one physical event)
4. 6.0–8.0s — resolution: the system relaxes, motion narrows, final composition holds briefly

## 3. Prompt Template

```text
integrated_multimodal_description: [Shot 1] {style + compositional opening}. {The system} is the primary source of motion and is already in motion from the first second at natural real-time speed. First {change A}, then {change B} as {secondary consequence}. The clip reaches its peak at {peak event}, then the system {resolution — narrowing relaxation}. The camera {short supporting move only}. Do not replace {system} motion with camera movement.

overall_soundscape: {diegetic environment sound matched to each beat}.

non_diegetic_music: {score with a soft accent at the peak or N/A}.
```

## 4. Canonical Demo — Morning Forest

Beats:
`mist seeps between trunks → light shaft widens and sweeps → leaf scatter from a gust (peak) → mist recloses, shafts narrow → final composition holds`

Full runnable prompt: `references/prompt-library.md`.

## 5. Failure Recovery

- Only camera moves → delete camera words; restate Motion Ownership
- Too static → add a physical verb per 1–2s window; add the peak beat
- Looks full-CG / flat → add micro-detail (insects, droplets, floating seeds)
- Scene mutates → lock landmarks (same trees, same mountain line)
- Peak too violent for genre → soften the event, keep it physical

## 6. QC

Fail if: system change is not visible every 1–2s / only camera or lighting moves / no peak beat in Natural+ tempo / scene terrain mutates / motion feels like slow-motion wallpaper.

## Boundaries

Full-scale natural environments only. Miniature/diorama → `miniature-world-landscape-generator`. Ink-paper subjects → `living-ink-painting-video-generator`. Building processes → `construction-timelapse-video-generator`. Anything with reference images or videos routes to `h3-keyframe-film` / `reference-motion-transfer`. No real identifiable persons, brands, or logos.
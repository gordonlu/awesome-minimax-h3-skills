---
name: living-ink-painting-video-generator
description: Create a 7–8 second MiniMax H3 text-to-video shot in which a traditional ink-wash subject painted on rice paper comes alive, moves briskly within the flat painting, then accelerates and breaks free from the paper as a living ink-and-water form while preserving ink material continuity.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA in T2VA mode.
trigger-words: [living ink painting, ink wash animation, sumi-e video, 水墨活化, 水墨动画, 水墨画变活, 文生视频]
---

# Living Ink Painting Video Generator

Default:
- Model: H3-Base-FL2VA
- Mode: T2VA
- Duration: 8s
- Aspect ratio: 16:9
- Tempo: Natural
- Primary Motion Owner: ink subject
- Peak Action: break free from the paper

## Global Motion Principles

These rules override decorative cinematic language unless the requested concept is intentionally slow.

### Motion Ownership

Every video must define one **Primary Motion Owner**.

Camera movement, lighting changes, particles, rain, fog, smoke, depth of field, and background motion never count as primary motion unless the Skill explicitly defines an environmental system as the Motion Owner.

If the Primary Motion Owner fails to visibly change, the generation fails even if the shot looks beautiful.

### Tempo

Default tempo is **Natural**, not Calm.

Use:
- **Calm** only for intentionally soothing, meditative, drifting, or slow scenes.
- **Natural** for normal real-time physical motion.
- **Energetic** for action, machinery, storms, cities, performance, and activation.
- **Timelapse** only for deliberately time-compressed processes such as construction, growth, assembly, or long-duration change.
- **Impact** only for a short peak beat, never the whole clip.

When Natural or Energetic is selected, prefer explicit language such as:

`All primary motion occurs at natural real-time speed, not slow motion.`

`Actions are crisp and purposeful, with visible acceleration and deceleration.`

Avoid overusing:
- slowly
- gently
- gradually
- subtle
- restrained
- drifting

### Beat Density

For a 7–8 second clip, target a visible change every 1–2 seconds.

A default 8-second action curve is:

- 0.0–1.2s: motion begins immediately
- 1.2–3.0s: first readable action
- 3.0–5.5s: second action / development
- 5.5–6.8s: Peak Action
- 6.8–8.0s: short settle / hero frame

Do not spend most of the clip waiting for the main action.

### Peak Action

Every non-Calm video must contain one clearly identifiable **Peak Action**.

Examples:
- motion-transfer: strongest reference pose or move
- creature: hop / reach / sneeze / object interaction
- ink: break free from paper
- landscape: lightning / lava ignition / city activation / train crossing
- key art: weapon raise / torso turn / armor deployment
- construction: major structural completion before final finishing

The Peak Action must be performed by the Primary Motion Owner.

### Camera Rule

Camera motion supports the subject.

`Do not replace primary subject motion with camera motion.`

A camera push-in, parallax, rack focus, lighting sweep, rain, mist, or particles cannot substitute for required subject action.

## 1. Core Structure

`flat painting → visible movement → brisk travel → acceleration → break free → short dimensional action → settle`

Never:
`painting → slow floating morph → realistic animal`

## 2. Required Tempo

The first visible movement begins within the opening second.

The subject must travel at normal readable speed.

The emergence is **not** a slow dissolve.

Mandatory:
`The transition from flat painting to dimensional form contains a clear acceleration and release event.`

Use:
- flicks
- swims briskly
- crosses
- accelerates
- breaks free
- bursts through
- arcs

Avoid default:
- gradually rises
- slowly floats
- gently emerges

## 3. 8-Second Beat Plan

- 0–1.0s: establish + first movement
- 1.0–3.0s: flat painted locomotion
- 3.0–4.8s: stronger travel toward release point
- 4.8–6.0s: sharp acceleration + break-free Peak Action
- 6.0–7.2s: short dimensional hero action
- 7.2–8.0s: quick settle

## 4. Visual Identity

Preserve:
- rice paper fibers
- wet ink
- brush edges
- pigment diffusion
- restrained color
- tabletop lighting

The dimensional subject remains visibly:
- water
- ink
- pigment
- brush texture

## 5. Suitable Subjects

Best:
- koi
- goldfish
- crane
- butterfly

Also:
- dragon
- horse
- cat
- bamboo
- lotus

Default:
red-and-black koi.

## 6. Motion Ownership

The ink subject itself must visibly:
- move through the flat painting
- change position
- accelerate
- emerge

Camera movement does not count.

Fail if the koi/subject mostly drifts while the camera provides the perceived motion.

## 7. Prompt Template

```text
integrated_multimodal_description: [Shot 1] Cinematic macro shot of a traditional {subject} ink painting on white rice paper resting on a {table setting}. The painted {subject} begins motionless, then immediately {first movement} and moves briskly through the wet brush strokes at natural real-time speed while remaining flat inside the painting. It makes {one or two clear motion beats}, pushing ink and pigment through the composition. As it reaches {release point}, it sharply accelerates and breaks free from the paper in one continuous motion, becoming a translucent living form made of flowing water, black ink and {accent pigment} while preserving brush-textured edges and ink trails. It performs {short dimensional hero action} before slowing briefly into the final composition. The camera tracks at moderate speed and brakes near the end. Do not replace subject motion with camera motion.

overall_soundscape: {room ambience}, quick wet brush and water motion, a distinct release/splash sound, and ink droplets.

non_diegetic_music: {restrained music with a short accent at the break-free moment or N/A}.
```

## 8. Canonical Koi Prompt

```text
integrated_multimodal_description: [Shot 1] Cinematic macro shot of a traditional red-and-black koi ink painting on white rice paper resting on a dark wooden desk. The painted koi begins motionless, then immediately flicks its tail and swims briskly through the wet ink at natural real-time speed. Its body makes two clear swimming strokes as it crosses the painting, pushing black ink and vermilion pigment aside. As it reaches the paper edge, the koi sharply accelerates and breaks free from the flat painting in one continuous upward motion, transforming into a translucent living form made of flowing water, black ink and vermilion pigment. It completes one fast graceful arc through the air above the paper, then slows briefly as several ink droplets fall back onto the sheet. The camera tracks alongside the koi at moderate speed and brakes near the end. Do not replace the koi's movement with camera motion. The koi itself must visibly travel across the paper and rapidly emerge into the air.

overall_soundscape: Quiet room ambience, quick wet brush and water movement, a distinct splash-like ink release as the koi leaves the paper, and several crisp ink droplets landing on the sheet.

non_diegetic_music: Sparse guqin notes with a short rising accent as the koi breaks free from the paper, followed by one brief sustained note.
```

## 9. Failure Recovery

Too slow:
- first movement within 1s
- use briskly / sharply accelerates / breaks free
- shorten dimensional floating period

Slow emergence:
- explicitly require release event
- reduce "transformation" prose
- describe one physical acceleration

Looks realistic:
- reinforce ink/water material

Camera carries motion:
- reduce camera movement
- require visible paper-crossing distance

## 10. QC

Fail if:
- emergence resembles slow floating
- first movement happens late
- no clear acceleration peak
- subject does not visibly travel
- camera substitutes for subject motion
- subject loses ink identity

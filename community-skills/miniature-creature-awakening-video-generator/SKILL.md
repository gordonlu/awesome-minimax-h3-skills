---
name: miniature-creature-awakening-video-generator
description: Turn one image of a small creature, mascot, fantasy pet, figurine-like character, or tiny animal into a stable 7–8 second MiniMax H3 image-to-video clip. The creature must visibly wake, perform at least one clear body action, interact with one nearby object or effect, and finish in a readable pose while preserving identity.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA with the supplied image as frame 0.
trigger-words: [animate creature image, make character come alive, tiny creature animation, mascot animation, 小动物苏醒, 角色动起来, 图生视频]
---

# Miniature Creature Awakening Video Generator

Default:
- Model: H3-Base-FL2VA
- Mode: I2VA
- Duration: 8s
- Tempo: Natural
- Primary Motion Owner: creature body

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

## 1. Core Motion Spine

`still → wake → clear body action → interaction → reaction → settle`

Recommended 8s:
- 0–1.0s: immediate awakening cue
- 1.0–2.5s: clear body action
- 2.5–4.8s: short locomotion or reach
- 4.8–6.5s: interaction / Peak Action
- 6.5–8.0s: reaction and hero pose

## 2. Mandatory Primary Action

At least one medium-visible body action is required:
- walk
- hop
- climb
- full-body turn
- reach
- stretch
- flap
- quick head-and-body reaction

These do **not** count as the primary action:
- blinking
- breathing
- eye movement
- steam
- particles
- lighting
- camera movement

## 3. Input

Required:
- one reference image

Optional:
- action
- interaction
- tempo
- music
- duration

If unspecified:
- 8s
- Natural tempo
- wake → two steps or one hop → interact → react

## 4. Identity Lock

Keep concise:
- creature type
- dominant colors
- distinctive anatomy
- clothing/accessories
- starting location
- one nearby interactable object

## 5. Interaction Rule

Use exactly one main interaction:
- touch object
- sniff steam
- nudge item
- catch a leaf
- sneeze a spark
- trigger a tiny glow

The interaction may be the Peak Action.

## 6. Camera

Camera is supporting only.

Preferred:
- fixed camera
- short moderate push-in
- small tracking adjustment

Avoid long floating dolly shots.

## 7. I2VA Prompt Structure

Begin:
`For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.`

Then:
- `integrated_multimodal_description`
- `overall_soundscape`
- `non_diegetic_music`

## 8. Prompt Template

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact creature identity, colors, anatomy, environment and important objects from <Picture 1>. All creature movement occurs at natural real-time speed, not slow motion. The creature immediately {awakening action}, then clearly {primary body action}. It {short movement} and performs {interaction / Peak Action}. It reacts with {reaction} and finishes in {final pose}. The camera {supporting camera motion} but never substitutes for creature movement. Keep the creature clearly visible and anatomically consistent.

overall_soundscape: {environment + physical action sounds}.

non_diegetic_music: {music or N/A}.
```

## 9. Failure Recovery

Too slow:
- start visible action within first second
- remove slowly/gently/gradually
- use crisp verbs

Only micro-motion:
- add walking/hopping/reaching/full-body turn
- make it mandatory

Effects dominate:
- reduce magic
- reinforce creature body as Motion Owner

Camera dominates:
- fix camera
- add `Do not replace creature movement with camera motion.`

## 10. QC

Fail if:
- creature mostly stays frozen
- no body action beyond blink/breath
- Peak Action is missing
- motion feels like slow motion
- anatomy changes
- effects/camera carry the clip

## 11. Canonical Demo — Tiny Dragon

`blink → lift head → stretch → two quick steps → sneeze golden spark → recoil/react → hero pose`

Tempo:
Natural / Playful.

---
name: miniature-world-landscape-generator
description: Create cinematic 7–8 second MiniMax H3 text-to-video clips featuring richly detailed miniature landscapes across natural, urban, historical, fantasy, geological, terrarium, tabletop, and sci-fi themes. Each generation combines one landscape family, one presentation mode, and one clearly visible hero effect with appropriate tempo and strong scale cues.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA in T2VA mode.
trigger-words: [miniature world, miniature landscape, tiny world, diorama landscape, 微缩世界, 微缩景观, 袖珍世界, 瓶中世界, 沙盘景观]
---

# Miniature World Landscape Generator

Default:
- Model: H3-Base-FL2VA
- Mode: T2VA
- Duration: 8s
- Aspect ratio: 16:9
- Primary Motion Owner: selected Hero Effect / environmental system
- Effect Intensity: Clear
- Tempo: derived from effect

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

## 1. Composition Formula

`Landscape Family + Presentation Mode + Hero Effect + Tempo + Camera`

Use:
- 1 landscape family
- 1 presentation mode
- 1 hero effect
- 1 camera move
- 2–3 minor ambient motions max

## 2. Landscape Families

- Island & Ocean
- Mountain & Valley
- Forest & Woodland
- City & Architecture
- Rural & Village
- Desert & Arid World
- Snow & Ice
- Tropical & Wetland
- Geological Cross-Section
- Terrarium / Ecosystem
- Tabletop Miniature World
- Object-Born Landscape
- Ancient / Historical
- Fantasy
- Sci-Fi

## 3. Presentation Modes

- Open Miniature
- Contained World
- Embedded World
- Cross-Section World
- Floating Miniature
- Pure Diorama View

## 4. Hero Effect Ownership

The selected Hero Effect is the Primary Motion Owner.

It must visibly change the miniature world.

Camera motion, depth of field, light drift, fog particles, or generic ambience alone cannot satisfy the Hero Effect.

Fail if the opening and ending world are essentially unchanged and only the camera moved.

## 5. Effect Intensity

### Gentle
Use only for:
- light fog
- fireflies
- calm snow
- subtle sunrise

### Clear — default
The effect is unmistakably visible without destroying the scene.

### Dramatic
Use for:
- thunderstorm
- lightning
- volcanic ignition
- strong wave
- sci-fi power-up

## 6. Effect Library

Weather:
- thunderstorm
- snowfall
- rainstorm
- sandstorm
- rolling fog

Lighting:
- sunrise
- sunset
- night awakening
- aurora
- eclipse shadow

Water:
- incoming wave
- tide rising
- waterfall awakening
- rain-fed streams
- frozen-to-flowing water

Geological:
- volcanic glow
- geothermal steam
- crystal illumination
- erosion / water flow

Seasonal:
- spring bloom
- autumn wind
- firefly evening
- forest breathing

Civilization:
- city lights on
- tiny train passage
- lighthouse sweep
- harbor activation
- festival lanterns

Fantasy:
- floating rocks
- glowing river
- cloud waterfall
- giant tree awakening
- tiny meteor

Sci-Fi:
- colony power-up
- spacecraft arrival
- terraforming mist
- solar array tracking

## 7. Tempo Mapping

Thunderstorm:
- Energetic
- Impact lightning

Volcanic Glow:
- Natural → Impact crack

City Lights:
- Natural, dense beats

Tiny Train:
- Natural real-time train speed

Rolling Fog:
- Calm/Natural

Snowfall:
- Calm/Natural

Spacecraft Arrival:
- Energetic entry + brake

Autumn Wind:
- Natural + one strong gust

## 8. 8-Second Beat Plan

Default:
- 0–1.0s: miniature scale clearly established
- 1.0–2.5s: ambient system begins
- 2.5–5.5s: hero effect develops visibly
- 5.5–6.8s: Peak Action
- 6.8–8.0s: short resolve

Do not leave the Hero Effect until the last second.

## 9. Scale Anchors

Use at least two:
- tabletop
- visible base
- glass edge
- container rim
- book/cup/object
- tiny architecture
- macro depth of field

Scale should be readable within first second.

## 10. Physical Coherence

- water follows gravity
- snow accumulates plausibly
- fog follows terrain
- rain creates wetness
- glass reflects/refracts
- lights illuminate nearby surfaces
- train follows track
- lava follows terrain

## 11. Camera

Do not default everything to slow push-in.

Energetic:
`a short moderate camera advance with a clear brake near the Peak Action`

Natural:
`controlled macro track or push-in`

Calm:
slower movement allowed.

## 12. Prompt Template

```text
integrated_multimodal_description: [Shot 1] Cinematic macro view of {presentation}, featuring a highly detailed miniature {landscape}. Clear scale cues establish the tiny physical world within the first second. The {Hero Effect} is the primary source of motion and develops at {tempo} speed with visible real-time environmental change. {ambient system} begins first, then {hero effect progression} reaches {Peak Action} before resolving. Terrain, structures and scale remain physically coherent. The camera {supporting camera move} and never substitutes for the Hero Effect.

overall_soundscape: {environment ambience}, detailed miniature {natural/civilization sounds}, and a clear sound matching the Hero Effect.

non_diegetic_music: {score or N/A}.
```

## 13. Failure Recovery

Too slow:
- start effect earlier
- increase effect intensity
- shorten camera move
- replace gradual with explicit physical verbs

Effect too weak:
- increase Hero Effect amplitude
- do not add unrelated second effect

Only camera moves:
- reinforce effect ownership
- reduce camera movement

Scene mutates:
- lock terrain landmarks

Looks full scale:
- add scale anchors

## 14. QC

Fail if:
- Hero Effect is visually weak or absent
- only camera/light changes
- no Peak Action in non-Calm mode
- tempo mismatches theme
- world loses miniature scale
- terrain mutates
- effect physics are incoherent

## 15. Presets

Storm Island:
Rocky island + glass sphere + thunderstorm
Tempo: Energetic / Impact

Alpine Morning:
Mountain village + open diorama + fog/sunrise
Tempo: Natural

Volcano Cutaway:
Volcanic island + geological cross-section + volcanic glow
Tempo: Natural / Impact

Autumn Railway:
Mountain countryside + open miniature + autumn wind + one tiny train
Tempo: Natural

Mars Colony:
Sci-fi settlement + pure diorama + colony power-up
Tempo: Energetic

Floating Island:
Floating miniature + cloud waterfall
Tempo: Natural

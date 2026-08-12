---
name: construction-timelapse-video-generator
description: Create a 7–8 second MiniMax H3 accelerated construction timelapse showing a coherent build from an empty or incomplete state to a finished structure, environment, machine, interior, infrastructure project, or miniature world. Automatically route between FL2VA, L2VA, T2VA, and I2VA according to available start/end images. Enforce persistent construction state so completed work never disappears, resets, relocates, or changes design.
compatibility: Portable to agents that can read local files and use MiniMax H3-Base-FL2VA. Supports FL2VA, L2VA, T2VA, and I2VA task modes.
trigger-words: [construction timelapse, build from zero, building timelapse, assembly timelapse, 建造延时, 从零建造, 延时摄影, 建筑生成, 施工延时, 组装延时]
---

# Construction Timelapse Video Generator

Create a fast, satisfying construction or assembly sequence where visible progress occurs throughout the entire clip.

Default:
- Model: H3-Base-FL2VA
- Duration: 8s
- Tempo: Timelapse
- Primary Motion Owner: persistent built structure / assembly state
- Camera: fixed or minimally moving
- Native audio: optional; use compressed construction ambience if enabled

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

## 1. Mode Routing

Route by both **control quality** and **generation cost/latency**.

Observed local workflow note: two-frame FL2VA can be substantially slower than single-image generation. Treat FL2VA as a high-control mode, not the automatic default for every iteration.

### L2VA — default for fast iteration when a final target exists
Input:
- finished image only

Use when:
- the final architecture/design matters;
- fast iteration matters;
- exact empty-site geometry is less important.

Why:
- one reference image;
- strong final-state anchoring;
- usually a better iteration tradeoff than two-frame FL2VA.

Infer a plausible empty/incomplete starting state and build continuously toward the supplied final frame.

### FL2VA — highest-control final validation
Inputs:
- start image
- final image

Use when:
- exact start site and exact final design both matter;
- camera/viewpoint alignment matters;
- producing a final showcase/demo;
- extra generation time is acceptable.

Advantages:
- locks site;
- locks camera;
- locks final design;
- best before/after control.

Do not use FL2VA for every exploratory attempt if it is materially slower in the user's runtime.

### T2VA — fastest concept exploration
Input:
- text only

Use for:
- trying construction themes;
- testing stage logic;
- rapid prompt iteration;
- cases where exact final appearance is not required.

### I2VA — start-site controlled exploration
Input:
- start image only

Use when:
- exact initial site matters;
- final structure can be invented from text.

### Recommended Workflow

For a new construction Skill example:

`T2VA concept test → L2VA single-image refinement → FL2VA final showcase only if exact before/after control is worth the added runtime`

When the user already has a good final image:

`L2VA first → FL2VA only for final high-control validation`

### Routing Priority by Goal

Fast iteration:
`L2VA > T2VA > I2VA > FL2VA`

Maximum before/after control:
`FL2VA > L2VA > I2VA > T2VA`

The Skill should choose the route based on the user's goal instead of treating FL2VA as universally preferred.

## 2. Supported Construction Types

Architecture:
- house
- villa
- skyscraper
- temple
- fortress
- bridge
- station

Infrastructure:
- railway
- road
- harbor
- dam
- launch facility

Interior:
- room renovation
- studio setup
- shop fit-out
- stage construction

Landscape:
- garden
- pond
- miniature city
- terrarium
- model railway
- mountain diorama

Machines:
- vehicle assembly
- robot/mecha assembly
- spacecraft
- ship
- industrial machine

Fantasy/Sci-Fi:
- automated base deployment
- floating structure assembly
- Mars colony construction
- magical architecture growth

## 3. Persistent Build State — Mandatory

This is the most important rule.

`Each completed construction stage remains permanently in place and becomes the foundation for the next stage.`

Completed elements must never:
- disappear
- reset
- relocate
- swap design
- revert to empty state
- rebuild from scratch

Stage N+1 must inherit all correct completed work from Stage N.

## 4. Timelapse Tempo

This Skill intentionally uses accelerated time.

Mandatory language:
- rapid construction timelapse
- high temporal compression
- continuous visible progress every second
- fast but physically ordered assembly
- accelerated construction process

Always include:
`No slow motion. No leisurely cinematic pacing. Construction progresses visibly and rapidly throughout the clip.`

This Skill is an explicit exception to the default Natural tempo.

## 5. Beat Density

For an 8-second timelapse, visible progress should occur almost continuously.

Recommended:

### 0.0–1.0s — Start State
Empty site / raw materials / incomplete object.

### 1.0–2.2s — Foundation / Core
- excavation
- foundation
- base plate
- frame origin
- terrain preparation

### 2.2–3.8s — Main Structure
- frame
- columns
- walls
- structural modules
- main mechanical body

### 3.8–5.2s — Envelope / Major Systems
- roof
- facade
- glass
- panels
- rails
- major machinery
- interior partitions

### 5.2–6.6s — Detail / Environment
- landscaping
- lighting
- paving
- fixtures
- secondary equipment
- surface finishing

### 6.6–7.4s — Completion Peak
The structure becomes recognizably complete.

### 7.4–8.0s — Clean Final Reveal
Construction activity stops or clears.
The final state holds briefly.

## 6. Construction Logic

Order must be physically plausible.

Architecture:
`groundwork → foundation → frame → walls/envelope → roof/facade → services/details → landscaping`

Machine:
`base frame → structural skeleton → major modules → panels → mechanisms → surface details → activation`

Interior:
`empty shell → framing → surfaces → fixtures → furniture → lighting/details`

Miniature world:
`terrain base → roads/water → structures → vegetation → utilities → lights/details`

Do not install finishing before the supporting structure exists.

## 7. Motion Ownership

The **built state itself** is the Motion Owner.

Workers, cranes, robots, vehicles, tools, flying parts, or magical effects are secondary mechanisms.

The video fails if:
- machinery moves but structure does not progress
- camera moves while construction remains almost unchanged
- the final structure appears suddenly without visible intermediate accumulation

## 8. Human / Machinery Policy

Humans may appear only as small secondary construction actors.

Prefer:
- cranes
- excavators
- robotic arms
- modular parts
- scaffolding
- construction vehicles
- workers as small scale cues

Do not turn the sequence into a close-up character story.

## 9. Realistic vs Stylized Build Modes

### Real Construction
Use physically plausible machinery, labor, materials, and sequence.

### Automated Construction
Robotic systems rapidly assemble modules.

### Magical Construction
Parts may fly or grow into place, but persistent build state still applies.

### Miniature Construction
Model builders, tiny machinery, or self-assembling miniature scenery.

The build logic remains ordered in all modes.

## 10. Camera

Construction continuity is easier with a stable camera.

Default:
- fixed camera
- very small time-lapse push-in
- subtle final move only

Avoid:
- orbit
- major angle change
- hard cuts
- camera movement that hides continuity

For FL2VA, preserve start/end viewpoint alignment.

## 11. FL2VA Prompt Template

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> is the fully referenced starting frame. At the final frame, <Picture 2> is fully referenced as the completed target.

integrated_multimodal_description: [Shot 1] Create a rapid construction timelapse that continuously transforms the exact starting site in <Picture 1> into the exact completed structure and composition in <Picture 2>. No slow motion and no leisurely cinematic pacing. Visible construction progress occurs throughout the entire clip. First {foundation/core stage} forms, then {main structure} is rapidly assembled, followed by {envelope/major systems}, then {details/landscaping}. Each completed construction stage remains permanently in place and becomes the foundation for the next stage; nothing already completed disappears, resets, relocates, or changes design. Workers, cranes, vehicles or automated tools may move quickly as secondary mechanisms, but the growing built structure is the primary motion owner. The process reaches a clear completion peak before construction activity clears and the video converges precisely to <Picture 2>. Keep the camera fixed or nearly fixed so the entire build progression is continuously readable.

overall_soundscape: Compressed construction ambience with machinery, tools, structural impacts and environmental sound appropriate to the project.

non_diegetic_music: Rhythmic forward-moving instrumental pulse or N/A.
```

## 12. L2VA Prompt Guidance

When only final image exists:

- treat final image as exact destination
- infer a plausible empty/raw starting site
- preserve camera and environment
- build toward final geometry continuously

Mandatory:
`The final seconds converge precisely to the supplied last-frame image without changing its architecture, proportions, camera, or material design.`

## 13. T2VA Prompt Template

```text
integrated_multimodal_description: [Shot 1] Fixed cinematic wide shot of {empty starting site}. A rapid high-compression construction timelapse begins immediately. {foundation/core} forms first, followed by {main structural frame}, {walls/envelope}, {major systems}, and {finishing/landscaping}. Construction progresses visibly every second at accelerated timelapse speed. Each completed stage remains permanently in place and supports the next stage; no structure disappears or resets. {machinery/workers/robots} operate quickly as secondary mechanisms while the growing structure remains the primary motion owner. The build reaches a clear completion peak, activity clears away, and the finished {target} holds briefly in a clean final hero view. No slow motion. No sudden teleport from empty site to finished result.

overall_soundscape: Compressed construction machinery, tools, structural impacts and location ambience.

non_diegetic_music: Energetic rhythmic instrumental track or N/A.
```

## 14. I2VA Guidance

When only start image exists:
- preserve site/camera
- describe final design clearly in text
- require continuous accumulation
- do not let H3 redesign the starting environment

## 15. Minimum Visible Progress

At least 4 distinguishable build states must be visually readable:
1. start
2. early structure
3. main structure
4. near-complete
5. final preferred

If only start and final are readable, the timelapse is too abrupt.

## 16. Failure Recovery

### Structure disappears/rebuilds
Strengthen Persistent Build State.

### Final design drifts
Use FL2VA or L2VA with stronger final-frame anchoring.

### Progress too slow
Increase temporal compression.
Use:
`multiple construction operations occur in parallel while respecting structural order`.

### Suddenly jumps to finished
Require 4–5 visible stages.
Explicitly name them.

### Too much machinery, little construction
Reduce worker/machinery description.
Reinforce built structure as Motion Owner.

### Camera movement hides progress
Fix camera.

### Impossible build order
Restate stage dependency.

## 17. QC

Pass only when:
- visible progress occurs throughout
- at least 4 build states are readable
- completed work persists
- construction order is plausible
- no slow-motion pacing
- Peak Action is final structural completion
- machinery does not dominate
- final image converges correctly when provided

## 18. Canonical Demo — Empty Hillside to Modern Villa

Recommended development mode:
L2VA using the completed villa image for faster iteration.

Recommended final showcase mode:
FL2VA using matched empty-site and completed-villa frames when exact before/after control justifies the additional runtime.

Start frame for FL2VA:
empty hillside plot, fixed camera.

End frame / L2VA reference:
same viewpoint, complete modern glass-and-wood villa with terrace, pool and landscaping.

Expected 8s:
`empty site → foundations → structural frame → walls/glass/roof → pool/terrace → landscaping/lights → equipment clears → finished villa`

Tempo:
Timelapse.

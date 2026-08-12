---
name: cinematic-key-art-animator
description: Turn one high-quality character illustration, concept art image, fantasy portrait, game key art, anime-style character image, or original mecha artwork into a polished 7–8 second MiniMax H3 moving key-art clip. Automatically route between atmospheric Living Key Art and high-density Action Burst. Preserve identity and art direction while allowing meaningful pose changes, multi-joint action, fast short-form pacing, and multiple escalating peaks when the subject is action-oriented.
compatibility: Portable to agents that can read local files and use MiniMax H3. Use H3-Base-FL2VA with the image as frame 0.
trigger-words: [animate key art, moving poster, character illustration animation, game key art video, action key art, 动态海报, 角色立绘动起来, 主视觉动画, 图生视频, 战斗短片]
---

# Cinematic Key Art Animator

Turn one strong static character image into a short moving key-art sequence without redesigning the character.

Default:
- Model: H3-Base-FL2VA
- Mode: I2VA
- Duration: 8s
- First frame: user image
- Primary Motion Owner: main character
- Camera: supporting only

## 1. Mode Routing

Choose one production mode automatically.

### Living Key Art

Use for:
- portraits;
- emotional character art;
- fashion;
- peaceful fantasy scenes;
- atmospheric standing poses;
- non-combat character showcases.

Default:
- Tempo: Natural
- Action Budget: Medium
- 3–5 major beats
- Peak Structure: 1 primary peak

Typical sequence:

`environment active → head/body action → arm/cloth action → lighting peak → changed hero pose`

Do not reduce Living Key Art to blinking and camera push-in.

### Action Burst

Use by default when the image contains:
- mecha;
- firearms;
- swords;
- shields;
- combat armor;
- fighting stance;
- superhero/action pose;
- obvious battle context.

Default:
- Tempo: Fast or Combat
- Action Budget: High
- 6–9 major beats
- Peak Structure: 2–3 escalating peaks

Typical sequence:

`activation → attack → reaction/evasion → movement → second attack → major peak → braking/recovery → final combat pose`

Eight seconds is enough for a complete micro-action sequence. Do not treat it as one slow cinematic shot.

## 2. Identity Lock

Always preserve:
- face/head identity;
- hairstyle;
- costume/armor design;
- color scheme;
- body proportions;
- signature weapon;
- major silhouette;
- environment art direction.

Identity preservation does not require preserving the original pose.

The final pose may be significantly different from the first pose if the same character design remains recognizable.

## 3. Motion Ownership

The main character is always the Primary Motion Owner.

Camera movement, rain, fog, smoke, particles, light, sparks, explosions, cloth, or background motion never satisfy the required primary action by themselves.

Always include:

`Do not replace character action with camera movement, lighting, rain, smoke, particles, or environmental effects.`

If the character remains nearly frozen while the environment moves, generation fails.

## 4. Action Budget

Choose the amount of character action according to mode.

### Low
1–2 major beats.
Use only when the user explicitly requests very restrained motion.

### Medium
3–5 major beats.
Default for Living Key Art.

### High
6–9 major beats.
Default for Action Burst.

High Action Budget does not mean random actions. Every beat must follow from the previous beat.

## 5. Causal Action Chain

Action Burst must be written as a causal sequence rather than a list.

Good:

`fires → incoming attack forces sidestep → opening allows forward dash → closes distance → switches to melee → slash creates explosion → momentum carries character forward → braking finish`

Bad:

`fires, jumps, spins, sword attack, explosion, pose`

Each action should create the reason for the next action.

## 6. Tempo

### Natural
Normal real-time performance.

### Fast
High-density short-form action with little idle time.

### Combat
Aggressive continuous action with crisp acceleration, fast directional changes, impacts, and decisive braking.

For Fast or Combat, include:

`Fast-paced action at full real-time speed, never slow motion.`

`Every action flows directly into the next with almost no idle time.`

Avoid default use of:
- slowly;
- gently;
- gradually;
- restrained;
- subtle;
- lingering.

## 7. Hook Density

Unless intentionally Calm:

- first visible change within 0.5–0.8s;
- first major character action within 1.5s;
- no long opening hold;
- final hero hold normally 0.5–1.0s.

For Action Burst, the opening frame is a launch point, not a pose to admire for several seconds.

## 8. Peak Structure

### Living Key Art
1 major peak.

### Fast
1–2 peaks.

### Combat
2–3 escalating peaks.

Example Combat peaks:
1. ranged attack / first impact;
2. dash or major movement;
3. melee strike / explosion / decisive finish.

Do not force every action sequence into one single Peak Action.

## 9. Minimum Character Motion

Every output needs at least one silhouette-changing, multi-joint action.

Examples:

Human/fantasy:
- raise weapon;
- turn torso;
- step;
- lunge;
- dodge;
- partial draw;
- shield raise;
- spell cast;
- jump or landing when appropriate.

Mecha:
- head snap;
- torso rotation;
- rifle raise;
- sidestep;
- forward dash;
- thruster burst;
- armor deployment;
- melee strike;
- skid/brake.

These do not count:
- blink only;
- breathing only;
- eye movement only;
- visor light only;
- cape movement only;
- camera push-in.

## 10. Planted vs Mobile Action

### Planted Action
Feet remain fixed but upper body performs clearly visible multi-joint motion.

Use for:
- portraits;
- heavy armored stance;
- defensive pose;
- limited reference framing.

### Mobile Action
Character may:
- step;
- sidestep;
- dash;
- lunge;
- skid;
- jump briefly.

Use by default for Action Burst when full body and ground plane are clearly visible.

Do not unnecessarily forbid locomotion.

## 11. Camera

Camera follows action; it does not create action.

Living Key Art:
- short dolly;
- small arc;
- rack focus.

Action Burst:
- reactive tracking;
- brief push;
- short lateral follow;
- controlled impact shake when useful.

Avoid:
- long slow push-in;
- full orbit;
- camera movement that hides body action.

The camera may accelerate and brake around character motion.

## 12. Environment and Effects

Effects support action.

Good:
- rain displaced by movement;
- water splashes under foot;
- sparks from impact;
- steam from mechanical activation;
- cloth lag after turn;
- dust reacting to landing;
- light reflecting from weapon fire.

Effects should have physical cause-and-effect.

## 13. Living Key Art Prompt Template

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact character identity, face, costume or armor, proportions, signature objects, environment and visual style from <Picture 1>. All character motion occurs at natural real-time speed. <environment motion> is already active from the opening moment. The character <first clear body action>, then <second body action>, causing <secondary physical response>. The sequence reaches one clear visual peak with <activation/light/action event> and resolves into a noticeably changed hero pose. The camera <short supporting movement> and never substitutes for character movement.

overall_soundscape: <environment and body-action sounds>.

non_diegetic_music: <score or N/A>.
```

## 14. Action Burst Prompt Template

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact character identity, armor or costume design, colors, proportions, weapon, environment and visual style from <Picture 1>. Create a fast-paced 8-second action sequence at full real-time speed, never slow motion. The first visible action begins immediately. <activation/hook>. The character <attack 1>, causing <reaction or incoming threat>. In response, the character <evasion or movement>, which creates an opening to <movement/attack 2>. Without pausing, the character <major Peak 2 action>, followed by <Peak 3 / impact>. Momentum carries naturally into <braking/recovery action>, ending in a strong new action-ready pose. Use 6–9 readable action beats with little idle time. Character motion is always primary. Camera movement, lighting, rain, smoke, sparks and explosions only support the action and never replace it.

overall_soundscape: <dense synchronized action sounds>.

non_diegetic_music: <fast rhythmic score supporting the action arc>.
```

## 15. Canonical Demo — Mecha Combat Burst

Reference:
original white/dark-navy/orange mecha on a rain-soaked industrial launch deck at dusk.

Mode:
Action Burst

Tempo:
Combat

Action Budget:
High

Peak Structure:
3 escalating peaks

Expected:
`visor activation → rifle burst → sidestep incoming fire → thruster dash → energy blade deployment → high-speed slash → explosion → skid/brake → combat-ready finish`

### Direct Prompt

```text
For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.

integrated_multimodal_description: [Shot 1] Preserve the exact mecha identity, white and dark-navy armor, orange accents, rifle, proportions, launch deck, and visual style from <Picture 1>. Create a fast, aggressive 8-second combat sequence at full real-time speed with continuous action and no slow motion. The orange visor flashes on immediately as the mecha snaps toward an incoming threat and raises its rifle. It fires a rapid burst across the rain-soaked deck, muzzle flashes reflecting across the wet armor. Incoming fire strikes nearby and the mecha sharply sidesteps, twisting its torso as sparks and water erupt beside it. Without stopping, its rear thrusters ignite and drive it forward in a powerful low dash through the rain. As it closes the distance, the rifle drops to one side and a bright energy blade deploys from its free hand. The mecha swings one fast horizontal slash while passing the unseen opponent, then a violent explosion erupts behind it. Momentum carries the mecha several meters forward; it plants one armored foot, skids across the wet deck with a spray of water and sparks, rotates back toward the camera, raises the rifle again, and finishes in an aggressive combat-ready stance. Every action flows directly into the next with almost no idle time. Keep the full mecha design consistent throughout. Character combat motion is the primary action; camera movement, rain, sparks, explosions, and lighting only support it.

overall_soundscape: Heavy rain and wind, rapid mechanical servos, rifle bursts, nearby projectile impacts, thruster ignition, rushing air, energy-blade activation, a sharp high-speed slash, a heavy explosion, metal foot impacts, and a long wet skid across the deck.

non_diegetic_music: Fast aggressive electronic percussion and low cinematic pulses driving the entire sequence, with hard impact accents on the slash and explosion.
```

## 16. Failure Recovery

### Looks like dynamic wallpaper
Switch to Action Burst or increase Action Budget.

### Character barely moves
Require locomotion or a larger silhouette change.

### Too much camera, too little action
Reduce camera instructions and repeat Motion Ownership.

### Action becomes random
Rewrite as causal action chain.

### Identity drifts
Reduce the most extreme transformation, not the action count.

### Action is too slow
Move first action earlier; use fast/combat tempo; remove slow cinematic language.

### Too chaotic
Keep High Action Budget but simplify effects and camera before deleting character beats.

## 17. QC

Living Key Art fails if:
- only micro-motion occurs;
- pose is almost unchanged;
- camera/environment carries the shot.

Action Burst fails if:
- fewer than 5 readable action beats occur;
- first major action starts late;
- there is long idle time;
- only one minor action occurs;
- action lacks causal continuity;
- final pose is essentially the opening pose;
- the subject identity mutates beyond recognition.

The goal is not minimum motion. The goal is maximum readable action density while preserving identity.

---
name: redirect-mass-with-leverage
description: |
  Generate a grounded, hyper-realistic dark-fantasy tavern brawl in a single take — an elf ranger uses speed, footwork and leverage to take down a massive half-orc bruiser in a crowded seaside tavern, from a two-character reference image. Use when the user wants a physical fight scene, a bar/tavern brawl, a David-vs-Goliath melee, or any cinematic hand-to-hand sequence that must feel real (believable momentum, real weight, grounded handheld camera) — never floaty, never anime-exaggerated, never superhuman. Locks both characters' look to the two-character reference image; keeps real physical momentum; no flying, no slow-mo, no cartoon.
---

# Redirect Mass with Leverage — Grounded Tavern Brawl

Use this Skill when the user wants a **grounded, hyper-realistic dark-fantasy tavern brawl**: an elf ranger (Morwen) uses speed, footwork and leverage to take down a massive half-orc bruiser (Rogar) in a crowded seaside tavern, from a **two-character reference image**.

Core principle: **lock both characters to the reference, keep every hit physically believable, spend the model's budget on real weight and momentum — never floaty, never anime-exaggerated, never superhuman.**

The prompt follows the three-part H3 structure (reference locking → core concept → timecoded shot list) with hard negative rules.

---

## 1. Trigger

- A physical fight scene / tavern brawl with real weight
- A David-vs-Goliath melee (small fast vs big slow)
- Any cinematic hand-to-hand sequence that must feel grounded and real

Do **not** use this Skill when:

- The user wants a floaty, anime-style or superhuman fight
- The user wants a non-physical, magic-heavy battle
- No two-character reference image exists

## 2. Inputs

- One **two-character** reference image (`@图片1`) — locks both characters' look and build:
  - **Morwen** — a lean female elf ranger: silver-white hair braided back, dark green leather armor, cloth wraps, a sword at her hip.
  - **Rogar** — a massive half-orc bruiser: scarred grey-brown skin, bone armor, twin heavy hammers.
  - Only a look reference — never used as the first frame, never limits framing or staging.
- Duration 15s, aspect 16:9, hyper-realistic handheld cinematic.

## 3. Six Timecoded Beats (15s)

1. **0–2s** Wide establishing: the crowded dark seaside tavern — drunken sailors, braziers, smoke, spilled mead, roaring crowd. Morwen moves through it warily; Rogar drinks at a huge wooden table. No clear facial close-ups, no subtitles/logos.
2. **2–4s** Close tension: Morwen and Rogar lock eyes; Rogar rises to full towering height; benches scrape, cups rattle from his weight; the crowd forms a ring and hollers. Grounded handheld.
3. **4–7s** The fight erupts. Rogar throws a heavy punch with believable momentum; Morwen barely dodges and staggers into a wooden table that cracks and splinters; she answers with quick low strikes to his ribs and legs; the crowd yells, coins and cups fly. No floating, no anime rolls, no superhuman physics.
4. **7–10s** The fight surges through the tavern: Rogar grabs Morwen and hurls her across a table that shatters under her weight; she rolls on the floor and recovers naturally; Rogar charges heavily, smashing furniture; patrons leap clear for real. Only physically credible violence, no clipping through objects.
5. **10–12s** Morwen wins with speed and leverage. She dodges once more, sending Rogar into a support beam — dust and debris fall from the ceiling; she briefly climbs the bar, leaps down with restrained real momentum, locks his arm and throws him off balance with his own force. No weightless floating, no slow-motion.
6. **12–15s** Cinematic climax. Morwen slams Rogar onto the splintered wooden wreckage, the floor shaking from impact; she pins him with a sword at his throat; Rogar struggles in real, exhausted weight; the crowd roars and slams cups. The camera pushes slowly on the winded Morwen, sweat, dust and firelight flickering over both.

## 4. Hard Rules

- Real physics, believable body momentum, grounded handheld camera, live-action texture, realistic impacts and environment interaction.
- Both characters look exactly like the reference throughout. No floating, no anime-style fights, no superhuman physics, no unrealistic tumbling, no weightless motion, no blurry characters, no low detail, no cartoon, no sluggish reactions, no clipping through objects.
- Music/SFX: heavy cinematic seaside tavern fight score — low drums, roaring crowd, wood cracking, metal clangs, real body hits, brazier ambience, shattering cups, heavy footsteps, rough northern atmosphere.

## 5. Generation

- Mode: I2VA with `@图片1` as the two-character reference only — never used as the first frame unless explicitly requested.
- 15s, 16:9, native H3 audio.

## 6. Verified Output

A 15.08s / 1056×608 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt and reference image. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`, two-character reference: `assets/reference.png`.
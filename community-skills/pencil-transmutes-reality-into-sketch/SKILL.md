---
name: pencil-transmutes-reality-into-sketch
description: |
  Generate a POV magic-pencil film — a hand holding an orange pencil points at moving subjects in real Hong Kong and completely transmutes each into animated 2D hand-drawn illustration while the subject keeps its natural motion — as a 10s 16:9 24fps short converting four subjects in sequence: an MTR train, a street cat on a tong-lau windowsill, a red taxi and a woman on a park bench, against a bright realistic Hong Kong environment. Use when the user wants a "magic pencil" effect, a live-action-to-animation transmutation, a POV doodle-wand video, or a "whatever the pencil points at turns into a sketch" clip. T2VA (text-to-video) only, no reference image. Hard rules: the transmutation must be total (no live-action color, material or light left; no half-real-half-sketch states) and synchronous with the subject entering frame (the pencil starts drawing the moment the subject appears — never after a delay); conversion applies only to the pointed subject, never spreads to the environment; converted subjects keep their natural motion; camera motion stays consistent with no jump cuts.
---

# Pencil Transmutes Reality Into Sketch — Hong Kong Magic Pencil

Use this Skill when the user wants a **magic-pencil film**: a hand-held pencil points at real moving subjects and completely turns each into 2D hand-drawn animation while the subject keeps moving naturally, one by one, in a bright real-world city.

Core principle: **total and synchronous conversion — the moment a subject enters frame the pencil starts drawing, and the result is fully hand-drawn with zero live-action residue; never partial, never late, never spilled onto the environment.**

The prompt follows the H3 timecoded structure (core concept → four-conversion screen description with positive and negative per beat → hard negative list). T2VA only — pure text, no reference image.

---

## 1. Trigger

Use this Skill when the user's request matches any of:

- A "magic pencil" / "whatever the pencil points at turns into a sketch" effect
- A live-action-to-animation transmutation clip
- A POV "doodle wand" video in a real city setting
- A multi-subject sequential conversion showreel (train, cat, taxi, person)

Do **not** use this Skill when:

- The user wants a full-scene animation — the environment must stay realistic; only the pointed subject converts
- The user wants conversion that is slow, partial, or starts after the subject has already been on screen
- The user wants a still / freeze-frame at conversion, or a jumpy camera
- A reference image must drive the look (this is pure T2VA)

## 2. Inputs

- A text description of the scene only: bright realistic Hong Kong — an MTR station platform, an old tong-lau (tenement) building with a cat on a windowsill, a busy street with neon signs, and a park with benches; a hand holding an orange pencil moves through these locations.
- Duration 10s, aspect 16:9, 24fps, POV magic-pencil film look.
- No reference image, no first frame — T2VA.

## 3. Core Concept

10 seconds, 16:9, POV magic-pencil film. A hand holds an orange pencil, the tip pointed at moving subjects in the real world, and **completely** converts each into an animated 2D hand-drawn illustration while preserving its natural motion. The conversion must be total — the subject's live-action color, material and light texture all vanish, replaced entirely by pencil linework, leaving no live-action trace. The conversion must be synchronous with the subject appearing — as soon as a subject enters frame, the pencil points at it and starts drawing; the subject is never allowed to appear first and only later get drawn. Four subjects are converted in sequence: an MTR train passing a Hong Kong station, an orange tabby cat on an old tong-lau windowsill, a red taxi driving through a busy street, and a woman sitting on a park bench. Bright realistic Hong Kong environment, fluid conversion, magic-pencil effect, consistent camera motion throughout, seamless live-action-to-animation transmutation.

## 4. Screen Description

| Time | Beat | What must happen |
|---|---|---|
| 0–2.5s | POV setup + MTR train | POV shot; the hand-held orange pencil enters from one side, tip pointing at the distant approaching MTR train (teal-and-white). The instant the train enters frame the pencil starts drawing, sweeping along the body — wherever the pencil passes, the train **fully** becomes a black-and-white pencil sketch: the teal body vanishes, leaving only clean linework and dense hatching over white paper texture, no live-action color remaining. The train keeps rolling and rocking at its original speed. The sunny real Hong Kong platform stays real — signs and passing passengers visible. No conversion stalling into a freeze; no outlining-only with color kept; no half-live-action half-sketch state; no letting the train appear for a moment before conversion begins. |
| 2.5–4.5s | Tong-lau street cat | The lens pans smoothly; the pencil points at an orange tabby napping on an old tong-lau windowsill. The instant the cat enters frame the pencil starts drawing and the cat is **fully** converted to a white pencil sketch: the orange fur disappears, fur and markings made entirely of dense pencil hatching and paper white, only the eyes keep a little grey-lead value change. The cat keeps stretching and tail-flicking naturally. Don't change the cat's actions; don't let conversion spread to anything but the cat; no orange residue; no starting after the cat has appeared. |
| 4.5–6.5s | Red taxi | The pencil points at a passing Hong Kong red taxi; the moment it enters frame the pencil draws and the taxi in motion **fully** becomes pastel pink-and-mint-green cartoon art: the red paint vanishes, the body made entirely of flat pastel fills and cartoon linework; the wheels keep rolling and the shadow keeps moving; the neon signs and pedestrians stay bright and realistic. No cartoon background, no deformed wheels, no red paint residue, no starting mid-drive past. |
| 6.5–8.5s | Woman on park bench | The pencil points at a woman sitting on a Hong Kong park bench; the instant she enters frame the pencil starts drawing and she, together with the bench, is **fully** converted to stylized flat-color animation: the realistic texture of skin and clothing disappears, everything becomes flat color blocks and clean linework, only value layers between color blocks. She keeps natural small actions like turning pages, adjusting her collar, wind in her hair. No facial distortion, no frozen figure after conversion, no realistic skin or fabric texture residue, no starting after she has already settled. |
| 8.5–10s | Wrap-up | The pencil tip lightly draws a magic circle; the four converted subjects each light up with a faint paper sheen in sequence; the pencil withdraws off-frame and the lens slowly pulls back to a hold: Hong Kong's realistic environment dotted with four spots of 2D hand-drawn animation, natural motion still continuing. No text, no second pencil. |

## 5. Hard Rules

- **Total conversion** — the pointed subject loses all live-action color, material and light texture; the result is fully hand-drawn. Never leave a half-live-action half-sketch state, never keep any live-action color or material after conversion.
- **Synchronous conversion** — the pencil starts drawing the instant the subject enters frame; the subject is never shown first and drawn later; no delay, no late starts.
- **Conversion stays on the subject** — it applies only to the pointed subject and never spreads to the environment; no cartoon background.
- **Natural motion preserved** — converted subjects keep moving naturally (rolling wheels, stretching cat, turning pages); no freeze, no stalling into a static frame.
- **Consistent camera** — camera motion stays identical and smooth across the whole film; no jump cuts; no text; no second pencil.

## 6. Negative Rules (Do Not)

Any text or Logo; conversion stalling, freezing or jumping; conversion spreading to the environment; converted subjects losing their natural motion; any subject stuck in a half-live-action half-sketch state; any live-action color or material residue after conversion; starting to draw after the subject has already appeared; jump cuts or inconsistent camera motion; a cartoon background; extra characters; a second pencil.

## 7. Generation

- Mode: T2VA (pure text-to-video) — no reference image, no first frame.
- 10s, 16:9, 24fps, native H3 audio (diegetic city ambience: station, street traffic, park; pencil strokes and magic-circle shimmer).

## 8. Verified Output

A 10.13s / 960×552 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`.

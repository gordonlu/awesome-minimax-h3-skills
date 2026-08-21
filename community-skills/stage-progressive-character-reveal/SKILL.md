---
name: stage-progressive-character-reveal
description: |
  Generate a 15s 16:9 cinematic character-entrance short from a single character reference image — a progressive four-stage reveal (defining detail → partial body → face close-up → full-body hero frame) that builds presence, silhouette, temperament and restrained action, e.g. a fog-harbor lantern-bearer slowly ascending the steps. Use when the user wants a "progressive reveal / slow unveiling" character entrance for a game, anime or film intro, a character-presence cinematic shot, or a "detail-first, hero-frame-last" opening — I2VA with @图片1 as the character reference only, never used as the first frame. Locks the face, body proportions, hairstyle, outfit, colors, materials and overall silhouette to the reference; no redesign, no simplification, no replacement of any defining visual feature.
---

# Stage Progressive Character Reveal — Cinematic Character Entrance

Use this Skill when the user wants a **15-second cinematic character-entrance short** built as a progressive four-stage reveal from a single character reference image: defining detail → partial body → face close-up → full-body hero frame.

Core principle: **stage the character like a cinematic entrance — reveal from detail to whole, let presence, silhouette, temperament and restrained action carry the shot, and lock the character's identity to the reference so nothing defining changes.**

The prompt follows the four-part H3 structure (reference locking → core concept → four-stage reveal → hard negative rules). I2VA: @图片1 is the character reference only, never the first frame.

---

## 1. Trigger

- A "progressive reveal / slow unveiling" character entrance for a game, anime, or film intro
- A character-presence cinematic shot: presence, silhouette, temperament over action
- A "detail-first, hero-frame-last" opening that builds the reveal across the full duration

Do **not** use this Skill when:

- The user wants a fast action sequence, fight, or camera-chaos shot
- The user wants a multi-character scene (this is a single-character reveal)
- No character reference image exists

## 2. Inputs

- One character reference image (`@图片1`) — locks the character's face, body proportions, hairstyle, outfit, colors, materials and overall silhouette. No redesign, no simplification, no replacement of any defining visual feature. The environment, lighting, tones and style of the image also serve as overall reference.
- Environment described in text, matched to the character's identity and mood (e.g. the lantern-bearer slowly ascending the steps of a misty harbor).
- Duration 15s, aspect 16:9, cinematic, high-end anime/game/film character-opening quality, render style consistent with `@图片1`.

## 3. Four-Stage Reveal (timecoded, 16:9)

- **0–4s (Defining detail)**: begin on a defining detail close-up — boots, shoes, feet, hands, a hem, or a signature prop (e.g. the lantern); the character enters the frame or stands still, the camera slowly tilts up, hair and clothing drift naturally with the environment. No messy motion, no revealing the full face too early.
- **4–8s (Partial body)**: mid shot or medium-wide from behind / side / three-quarter showing more of the body; the character stands calmly in the environment, the camera makes a smooth circling move (truck + pan) or arc / lateral move that gradually reveals the face and silhouette. No chaotic camera, no exaggerated action.
- **8–12s (Face close-up)**: tighten to a cinematic close-up or head-and-shoulders; the character does one small signature gesture that fits their personality (chin lift, head turn, adjusting clothing, brushing hair aside, opening a palm, a look to camera, or adjusting stance) — tiny, deliberate, the expression matching the character's temperament. No oversized motion, no expression drift.
- **12–15s (Hero frame)**: close on a strong full-body hero frame presenting the complete design and silhouette; low angle / eye level / slightly dramatic framing; the character settles into a natural final pose and holds it with confidence; clean finish. No cropping feet or body, no outfit change, no face change.

## 4. Hard Rules

- The character's identity is locked to `@图片1` — no outfit change, no face change, no copy; the character is the only one in the scene.
- The environment supports the character's identity and mood without stealing the frame.
- Camera movement is smooth, restrained, purposeful — no messy motion.
- Render style, color and material follow `@图片1`.
- No subtitles, no watermarks, no text.

## 5. Generation

- Mode: I2VA (image-to-video) with `@图片1` as the character reference only — never used as the first frame unless explicitly requested.
- 15s, 16:9, cinematic, H3 native audio.

## 6. Verified Output

A 15.08s / 1056×608 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt and reference image. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`, character reference: `assets/reference.png`.

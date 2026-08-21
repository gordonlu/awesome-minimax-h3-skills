---
name: link-skills-with-base-loop
description: |
  Generate a magazine-grade character showcase sheet from a single character reference image — a hero key visual plus detail grid, three-view turnaround, palette board, and nameplate — held as a near-static 4s 16:9 shot with only the slightest living motion (fabric, hair, ink edges). Use when the user wants a character setting / showcase sheet, a "design this character's reference board", a character-introduction card for a game or series, or a prompt-built "skills with a base loop" still showcase. Locks the character's face, body, proportions, hairstyle, skin tone and outfit to the reference; no second character, no camera movement, no large motion.
---

# Link Skills with Base Loop — Character Showcase Sheet

Use this Skill when the user wants a **magazine-grade character showcase sheet** built from a single character reference image: a hero key visual plus a details grid, a three-view turnaround, a palette board and a nameplate — held as a near-static 4-second shot with only the slightest living motion.

Core principle: **lock the character to the reference, keep the frame still, spend the model's budget on print-grade detail and board layout — not on motion.**

The prompt follows the three-part H3 structure (reference locking → core concept → near-static shot description) with a hard negative rule.

---

## 1. Trigger

- A character showcase / setting sheet for a game, anime, or series
- "Design a character reference board" from one image
- A static or near-static character introduction card

Do **not** use this Skill when:

- The user wants an animated scene, a fight, or a story sequence
- The user wants a real-photography look (this is cel-shaded 3D / semi-real CGI, not photo)
- No character reference image exists

## 2. Inputs

- One character reference image (`@图片1`) — locks face, body, proportions, hairstyle, skin tone and outfit. No redesign.
- (Optional) Character name and copy lines (e.g. nameplate + tagline) to place on the board.
- Duration 4s, aspect 16:9, near-static with only slight breathing motion.

## 3. Board Layout (left-to-right)

- **Left / hero key visual**: full-body hero of the character in an action pose, with a stylized ink-wash or flat-color backdrop that fades to white; nameplate in large calligraphic type top-left, small tagline beneath.
- **Right column**: `DETAILS` — 4 close-up insets (calm face, focused eyes, collar & belt knots, bare feet on floor); a three-view `TURNAROUND` (front / side / back, same person, same outfit, same proportions, with small standalone prop illustrations); a `PALETTE` board (white, ink black, vermilion, bamboo green — as designed); a small slogan bottom-right.

## 4. Style & Motion

- Cel-shaded 3D anime, semi-realistic CGI, hand-drawn texture, hard-edge brushwork. Not cartoon, not Disney, not Pixar. Print-grade detail.
- Near-static: only the hero's garment hem, hair strands and ink-wash edges have the slightest breathing motion. No camera movement, no big motion, no second character.
- No subtitle animation, no extra text appearing, no dynamic poster transformation.

## 5. Generation

- Mode: I2VA with `@图片1` as the character reference only — never used as the first frame unless explicitly requested.
- 4s, 16:9, native H3 audio (no music needed for a near-static showcase).

## 6. Verified Output

A 4.46s / 1376×768 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt and reference image. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`, character reference: `assets/reference.png`.
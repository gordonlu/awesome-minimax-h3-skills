---
name: h3-promo-film
description: |
  Write runnable MiniMax H3 promo & trailer prompts with no reference assets at all — food promos, product campaigns, brand teasers, cinematic trailers. Use when the user wants a publicity or marketing short generated purely from text. Produces timecoded beats per base-en.txt; requests with reference images or videos are redirected. Produces integrated_multimodal_description with timecoded beats, overall_soundscape, and non_diegetic_music following the official base-en.txt guide. Requests that bring reference images or videos are redirected to the image-to-video or motion-transfer skills.
---

# H3 Promo Film Studio

Use this Skill when the user wants a **promo or trailer** from MiniMax H3 **from text alone**: "make a 6-second Peking-duck promo", "a product launch film", "a sci-fi teaser for my channel". No images, no clips — the prompt is the entire production.

Core principle: **the description is the footage. Every visible beat must exist in text with a timecode, or it will not exist in the video.**

Prompts follow `h3-prompt-writing` (`base-en.txt`). Field names, order, and timing notation come from the guide and must not be improvised.

## 1. Trigger

Use when: pure-text generation requests in any language; any of T2VA's natural jobs — food / product promos, trailers, ambient or cinematic shots, explainer-style one-shots, kinetic-type pieces.

Do **not** use when: the user supplies reference images (I2VA/FL2VA), reference videos (Ref2VA), or wants to edit/continue an existing clip. Route to `h3-keyframe-film` or `reference-motion-transfer` instead. Requests for >15s continuous output require segmentation.

## 2. Intake

Confirm: ① concept & mood (one line), ② aspect ratio (16:9 / 9:16 / 1:1 / 4:3 / 3:4 / 21:9), ③ duration (4–15s; default 6s), ④ visual style (cinematic / hand-drawn / ad / 2D…), ⑤ on-screen text (exact wording & language), ⑥ audio policy (silent / SFX / BGM direction).

## 3. Goal

One approved video whose every beat matches the written timecoded description — scene, camera, subject, and audio all visibly derived from the prompt, with no invented content.

## 4. Analysis

Decompose the concept into 3–5 beats, one readable action per beat (≥1s each). Note the camera move per beat (push-in / cut / drift…), and flag anything the model cannot render from text (exact logos, real people, brand likeness) — decline those or abstract them.

## 5. Planning

- **Beat sheet** — timecoded, e.g. `0–2s wide vista → 2–5s hull close-up → 5–8s cockpit drift`. Beats must tile the full duration; the last beat ends exactly at the total duration.
- **Structure** — one shot per beat transition or a continuous single shot; `[Shot N]` numbering in order.
- **Style sentence first** — the very first sentence of `integrated_multimodal_description` fixes style, lighting, and quality grade.
- **On-screen text** — state position in the frame and keep the original language.

## 6. Prompt Construction

Three fields, in this order:

1. `integrated_multimodal_description` — style sentence → `[Shot N]` headers (no timestamp) → timecoded beat prose: `From X.XX to Y.YY seconds, ...`. Each beat: subject, action, camera, and any visible text.
2. `overall_soundscape` — diegetic sound per beat.
3. `non_diegetic_music` — genre, BPM, energy curve; `N/A` when unused.

Rules: no reference labels (`<Picture N>` / `<Video N>`) — this is T2VA; 350–500 English words for the description; dialogue/lyrics/on-screen text stay in their original language.

Ready-to-run examples: [`references/prompt-library.md`](references/prompt-library.md).

## 7. Generation & Review

- Model: **MiniMax H3**, ratio & duration as planned. First pass default resolution; upgrade to 2K only after approval.
- Review checklist: beat coverage (every timecoded beat appears in order) / scene consistency / subject consistency / camera follows the written move / on-screen text correct / audio matches policy. Score pass / partial (name the beat) / fail.

## 8. Retry Strategy

Fix the cheapest layer first:

| Symptom | Fix |
| --- | --- |
| A beat is missing or merged | Re-write that beat's timecode window explicitly; shorten duration |
| Camera doesn't match | State the move inside the beat sentence ("the camera pushes in") |
| Style drift | Re-state the style sentence verbatim as the first sentence |
| On-screen text wrong | Shorten the phrase; state exact position (e.g. "bottom right") |
| Generic/boring result | Add one concrete object detail per beat; tighten tempo contrast |

Escalate after two failed retries of the same layer — offer a shorter window or fewer beats instead of a third blind retry.

## 9. Output

Deliver: final video file; the beat sheet; the exact prompt text used (reusable asset); settings record (ratio, duration, audio policy, resolution pass); review notes.

## Boundaries

Text-only generation only. If the user mentions uploading an image or clip, stop and route to `h3-keyframe-film` / `reference-motion-transfer`. Do not generate real identifiable persons, brand logos, or copyrighted characters; abstract them or decline.

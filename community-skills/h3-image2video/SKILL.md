---
name: h3-image2video
description: |
  Write runnable MiniMax H3 image-to-video prompts — I2VA (first frame), FL2VA (first+last frame), L2VA (last frame only). Use when the user has reference images (keyframes, character art, product shots, final poses) and wants the image identity locked while text drives the motion. Follows base-en.txt exactly, including the keyframe-alignment instruction lines. Pure-text requests are redirected to h3-text2video; reference-video motion goes to reference-motion-transfer.
---

# H3 Image-to-Video Prompt Studio

Use this Skill when the user has **images but no video** and wants MiniMax H3 to animate them: "start from this character sheet", "transition between these two poses", "land exactly on this final frame". Images lock the identity; text locks the motion.

Core principle: **the alignment line decides what the video is anchored to; the timecoded beats decide what happens between anchors.**

Prompts follow `h3-prompt-writing` (`base-en.txt`). The alignment instruction lines are fixed templates — copy them verbatim.

## 1. Trigger

Use when: I2VA first-frame requests; FL2VA pose-to-pose transitions; L2VA "end on this exact frame" requests; multi-keyframe montages (up to 4 frames); image + text motion description in any language.

Do **not** use when: no images at all (→ `h3-text2video`), a reference *video* is the motion source (→ `reference-motion-transfer`), or the user wants to edit an existing clip.

## 2. Intake

Confirm: ① the image(s) and their role (start frame / end frame / keyframe sequence), ② aspect ratio & duration (4–15s), ③ motion description with beats, ④ style & scene (comes from the image + style sentence), ⑤ on-screen text, ⑥ audio policy.

## 3. Goal

One approved video where the subject's identity matches the reference images in every frame and the motion follows the written beats exactly, ending per the mode contract (I2VA: first frame locked; FL2VA: both frames locked; L2VA: final frame locked).

## 4. Mode Selection

| Assets | Mode | Alignment line |
| --- | --- | --- |
| First-frame image + text motion | **I2VA** | `For the target video, at 0.00 seconds into the target video, <Picture 1> (from [Shot 1]) is fully referenced.` |
| Start + end pose images | **FL2VA** | `How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark ...; Picture 2 (from Shot N) aligns with the S.SS-second mark ...` |
| End-pose image only | **L2VA** | `How the reference pictures align with the target video — <Picture 1> (from [Shot N]) aligns with the S.SS-second mark ...` |
| Up to 4 keyframes, sequential | **I2VA multi-frame** | One `fully referenced` clause per frame, each pinned to its timestamp |

## 5. Prompt Construction

After the alignment line and a blank line, three fields:

1. `integrated_multimodal_description` — style sentence → `[Shot N]` (no timestamp) → timecoded beats `From X.XX to Y.YY seconds, ...`. Identity anchors (3–5 per subject: silhouette, colors, signature props) must recur across beats. Motion path structure: initial state → middle changes → gradual approach → final state landing on the end frame.
2. `overall_soundscape` — per-beat diegetic sound.
3. `non_diegetic_music` — genre, BPM, curve; `N/A` when unused.

Rules: end timestamp must equal the total duration with two decimals (`S.SS`); single-shot preference for FL2VA / L2VA; dialogue/on-screen text keep original language; 350–500 English words.

Ready-to-run examples: [`references/prompt-library.md`](references/prompt-library.md).

## 6. Generation & Review

- Model: **MiniMax H3**, ratio & duration as planned; 2K only after approval.
- Checklist: identity holds in every frame (no feature leak from other reference images) / each beat appears in order with correct timing / end frame matches the locked picture / camera matches the written move / audio matches policy. Score pass / partial (name the beat) / fail.

## 7. Retry Strategy

| Symptom | Fix |
| --- | --- |
| Identity drifts mid-video | Add 1–2 identity anchors; re-state the image as a mid-video keyframe if I2VA multi-frame |
| End frame not landed | Re-check the alignment line timestamp; extend the final approach beat |
| Motion too generic | Add timecoded micro-beats; shorten the windows |
| Wrong subject element leaks in | Remove the leaked attribute from every beat; restate `fully referenced` clauses |
| Camera inconsistent | State the move inside each beat sentence |

Escalate after two failed retries of the same layer — offer fewer keyframes or a simpler motion path.

## 8. Output

Deliver: final video file; the prompt with alignment line exactly as used; settings record (mode, ratio, duration, audio policy); review notes.

## Boundaries

Image-to-video only. No images → `h3-text2video`. Reference-video motion → `reference-motion-transfer`. Do not animate real identifiable persons without consent, brand logos, or copyrighted characters; abstract or decline.

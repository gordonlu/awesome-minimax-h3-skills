---
name: h3-fl2va-film
description: |
  Write runnable MiniMax H3 first-last-frame (FL2VA) prompts that use exactly two images — a start frame and an end frame — and interpolate the motion path between them. Use when the user has exactly two reference images (before/after poses, outfit changes, object states, scene or lighting transitions) and wants the video to open on Picture 1 and land precisely on Picture 2. Follows base-en.txt exactly, including the verbatim alignment line. One image → h3-keyframe-film (I2VA/L2VA); more than two keyframes → h3-keyframe-film; no images → h3-promo-film; reference-video motion → reference-motion-transfer.
---
# H3 FL2VA Film Studio

Use this Skill when the user has **exactly two images** and wants a transition between them: "open on this pose and land on that pose", "before → after", "transform this object's state", "day to night, intact to broken, outfit A to outfit B". Picture 1 anchors the opening, Picture 2 anchors the ending; the prompt supplies the **motion path that connects them**.

Core principle: **the two images are the anchors, not the content — the body text never repeats two static descriptions, it describes the continuous transformation between them.**

Prompts follow `h3-prompt-writing` (`base-en.txt`). The alignment instruction line is a fixed template — copy it verbatim.

## 1. Trigger

Use when: exactly two reference images; an explicit or inferable "from A to B" transition; pose-to-pose, outfit change, object-state change, scene/lighting transition, growth or decay, assembly or deconstruction, seasonal or day-night change.

Do **not** use when: one image only (→ `h3-keyframe-film` I2VA/L2VA), more than two keyframes (→ `h3-keyframe-film`), no images at all (→ `h3-promo-film`), a reference *video* is the motion source (→ `reference-motion-transfer`), or editing an existing clip.

## 2. Intake

Confirm: ① both images and which is `Picture 1` / `Picture 2`, ② what transitions (pose, object state, scene, lighting, wardrobe, position), ③ aspect ratio & duration (4–15s), ④ single shot vs explicit multi-shot, ⑤ on-screen text, ⑥ audio policy.

## 3. Goal

One approved video that opens at 0.00 seconds on Picture 1's exact state and converges, through continuously progressively narrowing differences, onto Picture 2's exact state at the final second — identity and composition consistent in every frame.

## 4. The Alignment Line (verbatim)

```text
How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot N) aligns with the S.SS-second mark of the target video.
```

Rules:
- `N` is the index of the actual final shot; `S.SS` is the effective video duration formatted to exactly two decimal places.
- The line is the **first line of the final prompt**, followed by one blank line before the core fields.
- The end timestamp must equal the total duration (`S.SS`).

## 5. Prompt Construction

After the alignment line and a blank line, exactly three fields:

1. `integrated_multimodal_description` — start with the style derived from Picture 1, then the first-frame state. Then the motion path per the recommended structure:

   `first-frame state → observable intermediate changes → progressively narrowing differences → last-frame state`

   - The body supplies the **path**, never two static image descriptions.
   - FL2VA favors a **single shot** so the model interpolates continuously; use multiple shots only when explicitly specified. The last frame must be reached by the final `[Shot N]` at the end of the video.
   - Identity anchors (silhouette, colors, signature props — 3–5 per subject) recur across the change so the subject stays recognizable while its state transforms.
   - Timecoded beats (`From X.XX to Y.YY seconds, ...`) drive the intermediate changes; each beat narrows the difference toward Picture 2.
2. `overall_soundscape` — per-beat diegetic sound for the transition.
3. `non_diegetic_music` — genre, BPM, curve; `N/A` when unused.

Keep 350–500 English words. Dialogue / on-screen text keep the original language.

Ready-to-run examples: [`references/prompt-library.md`](references/prompt-library.md).

## 6. Generation & Review

- Model: **MiniMax H3**, ratio & duration as planned; 2K only after approval.
- Checklist: opens exactly on Picture 1's state / every intermediate beat appears in order / the change narrows progressively (no reset or jump) / final frame matches Picture 2 exactly (pose, spacing, composition, lighting) / identity holds throughout / audio matches policy. Score pass / partial (name the beat) / fail.

## 7. Retry Strategy

| Symptom | Fix |
| --- | --- |
| Opens near Picture 2 already | Re-state Picture 1's exact opening state in the first sentence |
| End frame not landed | Extend the final convergence beat and re-check the `S.SS` timestamp |
| Middle looks like two stitched clips | Force single shot; remove any cut words; add an unbroken causal chain |
| Change jumps instead of morphing | Add 1–2 mid beats and shorten the windows |
| Subject loses identity mid-change | Add identity anchors to every beat; keep silhouette/colors constant while state changes |
| Wrong element leaks from one image to the other | Remove the leaked attribute from every beat; restate both `aligned` marks |

Escalate after two failed retries of the same layer — offer a gentler transform or a slower duration.

## 8. Output

Deliver: final video file; the prompt with alignment line exactly as used; settings record (mode, ratio, duration, audio policy); review notes.

## Boundaries

Exactly two images, FL2VA only. One image → `h3-keyframe-film`. More than two keyframes → `h3-keyframe-film`. No images → `h3-promo-film`. Reference-video motion → `reference-motion-transfer`. Do not animate real identifiable persons without consent, brand logos, or copyrighted characters; abstract or decline.
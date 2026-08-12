---
name: reference-motion-transfer
description: |
  Transfer the motion from a user-supplied reference video onto a new target subject with MiniMax H3. Use when the user wants a character, mascot, product, or creature to perform the dance, gesture, action, locomotion, or camera move they saw in another video. Covers Ref2VA motion transfer (primary route), plus I2VA / FL2VA / L2VA fallbacks when no usable reference video exists. Pure-text requests have nothing to transfer from and are redirected to the base `h3-prompt-writing` skill. Not for style-only transfer with no motion, direct editing of the source video, real-person impersonation without consent, or sequences longer than 15 seconds without segmentation.
---

# Reference Motion Transfer

Use this Skill when the user wants to take the **motion** from one video and apply it to a **different subject** — "make my character do this dance", "let the mascot copy these gestures", "repeat this camera move on my product". The motion source is a reference video; the target is a character image, a text description, or both.

Core principle: **analyze the motion before writing anything, keep one motion source per run, and spend the model's capacity on motion fidelity — not on a busy scene.**

This Skill builds prompts through `h3-prompt-writing`. Follow its guides exactly: `base-en.txt` for T2VA / I2VA / FL2VA / L2VA, `ref-en.txt` for Ref2VA. Field names, section order, labels, and timing notation come from those guides and must not be improvised.

---

## 1. Trigger

Use this Skill when the user's request matches any of:

- Transfer a dance, gesture set, or body action from a reference video to a new character
- Make a mascot / product / creature mimic a person's movement
- Replicate a camera movement from a reference clip onto a new scene
- "Same motion, different subject" requests, in any language
- Motion-style transfer where timing and body mechanics matter

Do **not** use this Skill when:

- The user only wants the *look* of a video (style/grade transfer with no motion) — that is a style task, not motion transfer
- The user wants to edit, cut, or extend the reference video itself — that is `video editing` / `video continuation`, not this Skill
- The request targets a real, identifiable private person without consent — impersonation is prohibited by the H3 Acceptable Use Policy
- There is no reference video, keyframe, or pose image — a pure text choreography request has nothing to transfer from; decline and redirect to the base `h3-prompt-writing` T2VA
- The sequence needs more than 15 seconds of *continuous* motion and the user refuses segmentation

## 2. Intake

Minimum viable intake — confirm all of these before analysis:

1. **Motion reference video** (required for the Ref2VA route)
   - Best: 4–15 seconds, one clearly visible moving subject, static or simple camera
   - If longer than 15s, ask the user to pick a ≤15s window, or plan segmentation
   - Confirm the user has the right to use it; do not accept private-person footage for impersonation
2. **Target subject** (required)
   - A reference image of the character/mascot/product, or a precise text description
   - If the body plan differs from the reference subject (e.g. blob mascot vs. human dancer), note it now — it drives feasibility
3. **Output format** — aspect ratio (16:9 / 9:16 / 1:1 / 4:3 / 3:4 / 21:9) and duration (4–15s; default: match the reference window)
4. **Camera policy** — `static camera` (default, recommended) or `copy reference camera`
5. **Scene policy** — default to a simple, neutral scene; complex scenes consume motion fidelity
6. **Audio policy** — silent, SFX-only, or BGM direction; whether to reference the reference video's audio rhythm

If the user has no reference video, route to the fallback modes in Section 7 and say so explicitly — motion fidelity drops significantly.

## 3. Goal

Deliver **one approved video** (or one approved segment chain) in which:

- The target subject performs the reference motion recognizably, with matching timing and tempo
- The target's identity stays stable across every frame
- Body mechanics look natural for the target's proportions — no copied anatomy glitches
- Output ratio, duration, camera and audio policy match the intake confirmation

Success is judged by motion fidelity first, identity stability second, everything else third.

## 4. Analysis

Analyze before writing any prompt. Produce a short analysis block:

**Reference video:**

- Motion class: full-body dance / upper-body gesture / locomotion / facial performance / camera-only move
- Subject framing: full body / half body / close-up
- Tempo: slow / medium / fast, and whether the rhythm is steady or accent-driven
- Occlusions, props, and interaction with objects or other people
- Camera: static, panning, tracking, orbiting — and how much of the frame the motion occupies

**Complexity grade:**

- **S** — slow, single-plane motion, no occlusion (wave, nod, sway, slow walk) → single generation, up to 15s
- **M** — multi-limb coordinated motion, moderate tempo (dance phrase, jump-and-land) → single generation, ≤10s recommended
- **L** — spins, fast footwork, acrobatics, heavy occlusion → segment into 2+ clips of ≤8s, or ask the user to simplify

**Target subject:**

- Body-plan compatibility with the reference subject (humanoid / quadruped / object)
- 3–5 identity anchors that must survive every frame (silhouette, color, signature props)
- Which reference motions are physically implausible for this body — flag them now

**Verdict:** one paragraph stating the transfer plan is feasible / feasible-with-simplification / not feasible, and why.

## 5. Planning

Convert the analysis into a production plan:

1. **Motion Beat Sheet** — segment the reference motion into 1–4 beats with timecodes while watching the reference, e.g. `0.0–2.5s: weight shifts left, both arms rise; 2.5–5.0s: spin ...`. One beat = one readable action. Never exceed 4 beats per 15s. **Beats are an analysis artifact: derive them from what the reference actually shows, never invent them.**
2. **Duration** — match the reference window, clamped to 4–15s. M-grade: ≤10s. L-grade: ≤8s per segment.
3. **Aspect ratio** — full-body motion: 9:16 or 16:9; upper-body gestures: 1:1 / 3:4 / 9:16; camera-move replication: match the reference ratio. Never let the chosen ratio crop the moving body parts.
4. **Camera** — default static. Copy the reference camera only when the camera move *is* the point of the request.
5. **Scene** — neutral studio / clean backdrop by default. A rich scene is a deliberate trade against motion fidelity; say so when the user asks for one.
6. **Segmentation** — L-grade or >15s: split at a motion pause, plan tail-frame continuation (Segment A's last frame becomes Segment B's first-frame reference).

## 6. Intermediate Artifacts

Before generation, keep these artifacts visible to the user:

- **Motion Beat Sheet** — the timecoded beat list from Section 5
- **Target Subject Card** — the identity anchors; if the user gave no image, generate one still of the target first and lock it
- **Transfer Brief** — one short paragraph: *what moves* (the reference motion), *who performs* (the target), *what stays* (timing, tempo), *what changes* (subject, scene, style), *camera & audio policy*
- Optional: first/last frame stills when an FL2VA hybrid is planned

Generation starts only after the user confirms the Transfer Brief.

## 7. H3 Strategy

Choose the generation mode from the available assets, in this priority order:

| Available assets | Mode | Notes |
| --- | --- | --- |
| Reference video + target image | **Ref2VA** (primary) | Highest motion fidelity. Motion enters as a `<Subject N>` action from `<Video 1>` with `attribute_transfer` retention |
| Reference video + text-only target | **Ref2VA** | Same structure; define the target subject textually in `subject_definitions` |
| Target image + text motion description (no video) | **I2VA** | Motion described in words; fidelity depends on description quality |
| Start-pose and end-pose images | **FL2VA** | Single shot; describe the motion path between the poses |
| End-pose image only | **L2VA** | Rare; for "land exactly on this final pose" requests |
| Text only, no assets at all | **Decline / redirect** | Not a transfer task — nothing to transfer from; redirect to the base `h3-prompt-writing` T2VA |

Segmentation for long/complex motion: run Ref2VA per segment with identical subject definitions; use each segment's approved tail frame as the next segment's `<Picture N>` first-frame anchor (Ref2VA + keyframe-completion hybrid).

Never mix two reference videos in one generation — one motion source per run.

## 8. Prompt Construction

All prompts are written through `h3-prompt-writing` rules. For the primary Ref2VA route:

1. **`subject_definitions`** — one `<Subject N>` for the target (appearance source: `<Picture N>` or text), one `<Subject N>` for the *motion itself* sourced from `<Video 1>`, e.g. `<Subject 2> is the dance routine performed in <Video 1>, including its step sequence, timing, and tempo.`
2. **`summary`** — prefix `[reference generation]`; state who performs what, sourced from which labels.
3. **`retention_analysis`** — target appearance: `fully_preserved`; motion: `attribute_transfer` from the reference performer to the target; camera (when copied): a `<Video N>` entry with `fully_preserved` for its camera path and pacing.
4. **`detailed_description`** — style sentence(s) first, then `[Shot 1]` with no timestamp. The reference video is the only source of the motion: never restate specific dance steps or poses. Write the beat structure as timecoded windows that point back to the motion source (`"the fox performs <Subject 2> from 0.00 to 7.00 seconds, following its tempo exactly"`); describe what the output adds — scene, camera policy, subject placement, sound. 350–500 English words for generation tasks.
5. **`overall_soundscape` / `non_diegetic_music`** — per the audio policy; `N/A` when unused.
6. Language rules: sections in English; dialogue/lyrics/visible text keep their original language inside `<d>` or quotation marks.

For fallback modes, follow `base-en.txt`: I2VA / FL2VA / L2VA open with the exact keyframe-alignment instruction line, then the three core fields in order.

Ready-to-run prompts for every mode, ratio, and duration live in [`references/prompt-library.md`](references/prompt-library.md).

## 9. Generation

- Model: **MiniMax H3**. Duration = planned window (4–15s), ratio = planned ratio.
- First pass at default resolution (shorter side 768px). Only after the motion is approved, upgrade with H3-Regenerate-2K if 2K is needed.
- `generate_audio=true` when SFX/BGM are part of the plan; keep the music direction in `non_diegetic_music` consistent with the reference tempo.
- One generation per planned segment; do not batch-variant the whole chain.
- Change exactly one variable per retry (see Section 11).

## 10. Review

Check against this list before delivery:

- **Motion fidelity** — the reference motion is recognizable; every beat from the Beat Sheet appears in order; tempo matches
- **Coverage** — no beat silently dropped; the final beat lands inside the video duration
- **Identity** — the target's anchors hold in every frame; no features leak over from the reference performer
- **Body integrity** — no extra limbs, melting joints, frozen limbs, or sudden costume changes
- **Camera policy** — static stayed static; copied camera matches the reference path
- **Scene discipline** — background did not steal detail budget from the moving body
- **Audio** — matches the agreed policy; music tempo fits the motion

Score each item pass / partial (name the failing beat) / fail. Partial or fail goes to Section 11 with a named cause.

## 11. Retry Strategy

Fix the cheapest layer first. Never rewrite the whole prompt on failure.

| Symptom | First fix | Then |
| --- | --- | --- |
| Motion ignored or replaced by generic movement | In `retention_analysis`, spell out what transfers (step sequence, timing, tempo); restate beat 1 in the first sentence of `[Shot 1]` | Shorten the duration; drop to fewer beats |
| Timing drifts between beats | Add explicit timecodes to every beat | Reduce beat count; reduce duration |
| Target identity drifts mid-video | Add 1–2 stronger identity anchors to the target's `<Subject N>` | Add the target image as a `<Picture N>` keyframe anchor (Ref2VA + keyframe hybrid) |
| Limb melting / extra limbs (L-grade motion) | Segment at a motion pause; simplify the scene to a plain backdrop | Ask for a slower-tempo interpretation of the same routine |
| Camera moved when it should be static | Add "The camera holds a static shot throughout" to the shot description | — |
| Scene steals focus | Strip the scene to a neutral backdrop in `detailed_description` | — |
| One segment of a chain fails | Regenerate **only that segment** with the same upstream tail frame | — |

Escalate to the user only after two failed retries of the same layer: offer simplification options (shorter window, fewer beats, simpler motion) instead of a third blind retry.

## 12. Output

Deliver together:

1. Final video file(s), in segment order when chained
2. The **Motion Beat Sheet** and **Transfer Brief**
3. The final prompt text exactly as generated (it is a reusable asset)
4. A settings record: mode, ratio, duration, audio policy, resolution pass
5. Review notes with any accepted caveats (e.g. "beat 3 simplified after retry 2")

## Boundaries

This Skill transfers *motion*, not identity: do not copy the reference performer's face, body, or likeness onto the target, and never use it to make a real private person appear to perform actions they did not perform. For pure style transfer, video editing, or >15s unsegmented requests, route to the appropriate workflow instead of forcing this one.

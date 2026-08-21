---
name: stage-solo-posture-comedy-arc
description: |
  Generate a 12s 16:9 single-person talking-head comedy short: a young man alone on a sofa facing camera, casually riffing about fitness and telling 2–3 self-deprecating jokes in a deadpan rambling tone. Use when the user wants a "talk about X, but make jokes" solo comedy spot, a deadpan self-deprecating monologue, or a low-key talking-head bit that reads as natural casual chat — T2VA (pure text generation, no reference image). Hard rules: homey lighting, natural performance, stable camera with slight push-ins at each punchline, only this one character, no subtitles, no BGM, no canned laughter, no reality-show exaggeration.
---

# Stage Solo Posture Comedy Arc — Fitness Talking-Head Comedy

Use this Skill when the user wants a **12-second single-person talking-head comedy short**: a young man in his twenties sits alone on a sofa facing the camera and riffs about fitness in a casual, offhand way, landing 2–3 self-deprecating jokes.

Core principle: **"talk about fitness, but make jokes" — keep it a natural deadpan chat, not a performance; the arc is a slow controlled push-in across three beats that lands harder with every punchline.**

The prompt follows the three-part H3 structure (core concept → timecoded beats → hard negative rules). T2VA: pure text generation, no reference material.

---

## 1. Trigger

- A "talk about X, but make jokes" solo comedy spot
- A deadpan, self-deprecating talking-head monologue
- A low-key comedy bit that must feel like natural casual chat, not a performance

Do **not** use this Skill when:

- The user wants a multi-person sketch, interview, or VLOG with extras
- The user wants a highly produced ad look, variety-show sound effects, or subtitles
- The user wants high-energy stand-up delivery or exaggerated reactions

## 2. Inputs

- Text only — no reference image (T2VA, pure text generation).
- Duration 12s, aspect 16:9, stable camera, homey lighting, natural performance.
- Subject: one young man in his twenties, alone on a sofa, facing the camera.

## 3. Beats (timecoded, 16:9)

- **0–4s (Mid shot)**: ordinary living room interior; the young man sits on the sofa facing the camera, hands gesturing as he opens: "A gym membership is like my muscles — the day you sign up is the day it peaks." Then a slight open-palm shrug. No ad-style polished lighting, no variety-show sound effects, no subtitles.
- **4–8s (Slight push-in)**: the camera slowly pushes in; he shifts his sitting posture, sighs, and continues deadpan: "My workout plan only has two columns: 'start tomorrow' and 'definitely next week'." with a perfectly straight face. No audience laugh track, no second person in frame.
- **8–12s (Push-in to close-up, close)**: the camera pushes in further to a close-up; he pauses half a beat, leans closer to the lens and lowers his voice: "Don't ask how consistent I am — my fitness career doesn't even have a 'trailer', just a membership-card poster." Then he breaks and lets out a small laugh himself; the shot holds on his face to close. No over-the-top acting, no extra characters entering frame.

## 4. Hard Rules

- Only this one character in the whole frame; no second person.
- Natural, casual, self-deprecating ramble — not reality-show exaggeration.
- Homey, ordinary lighting; stable camera; slight push-ins at punchlines.
- No subtitles, no logo, no BGM, no canned laugh track, no variety-show sound effects.

## 5. Generation

- Mode: T2VA (pure text generation) — no reference image.
- 12s, 16:9, H3 native audio.

## 6. Verified Output

A 12.25s / 1056×608 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`.

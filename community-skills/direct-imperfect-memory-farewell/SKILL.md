---
name: direct-imperfect-memory-farewell
description: |
  Generate a hyper-realistic documentary-style short of a forgotten 1998 MiniDV home video — a 20-year-old Japanese woman waiting at a quiet seaside Kamakura station, watching the sea, and waving goodbye before boarding — as a 15s 16:9 24fps clip wearing full 90s Sony MiniDV camcorder artifacts: violent handheld shake, off-frame compositions, auto-focus hunting between the train and her face, exposure riding on the daylight, faded color, soft contrast, slight motion blur, MiniDV compression, no stabilization. Use when the user wants a "found footage / old camcorder memory" film, a nostalgic farewell at a train station, an imperfect real-family-video look, or a memory flashback with an authentic period camera texture. T2VA (text-to-video) only, no reference image. Hard rules: no music and no narration — only ambient sound; no stabilized footage; no text on screen; identity, clothing and hairstyle stay consistent throughout.
---

# Direct Imperfect Memory Farewell — 1998 MiniDV Seaside Station

Use this Skill when the user wants a **memory-style film shot like a forgotten old camcorder tape**: a quiet goodbye at a seaside station in autumn 1998, seen through the imperfect, unsteady eyes of a 90s MiniDV home video.

Core principle: **imperfection is the medium — violent handheld shake, missed focus, drifting exposure and compression are the texture; never let it look stabilized, modern or well-composed.**

The prompt follows the H3 timecoded structure (core concept → five-segment screen description with positive and negative per beat → hard negative list). T2VA only — pure text, no reference image.

---

## 1. Trigger

Use this Skill when the user's request matches any of:

- A "found footage / old camcorder tape" memory film
- A nostalgic farewell at a train station (or similar quiet goodbye)
- "Make it look like a real family MiniDV video from the 90s"
- A memory / flashback scene that needs an authentic period camcorder texture

Do **not** use this Skill when:

- The user wants a smooth, cinematic, stabilized shot — this must look unsteady and handheld
- The user wants modern phone-camera quality with crisp focus and filters
- The user wants music or narration — only ambient sound is allowed
- A reference image must drive the look (this is pure T2VA)

## 2. Inputs

- A text description of the scene only: a quiet seaside station in Kamakura, autumn 1998; a 20-year-old Japanese woman, everyday no-makeup look; waiting on the platform, watching the sea, waving goodbye before boarding.
- Duration 15s, aspect 16:9, 24fps, hyper-realistic documentary look with full 90s Sony MiniDV camcorder texture.
- No reference image, no first frame — T2VA.

## 3. Core Concept

15 seconds, 16:9, hyper-realistic documentary-style short. A forgotten 1998 autumn MiniDV home video records a quiet morning at a small seaside station in Kamakura. The subject is a 20-year-old Japanese woman with an everyday no-makeup look, waiting on the platform, watching the sea, and waving goodbye before boarding. The whole film wears 90s Sony MiniDV camcorder texture — violent handheld shake, off-frame compositions, auto-focus hunting back and forth between the train and her face, exposure riding with the daylight, faded color, soft contrast, slight motion blur, MiniDV compression artifacts, no stabilization — with ordinary time-segmented cuts.

## 4. Screen Description

| Time | Beat | What must happen |
|---|---|---|
| 0–3s | Establish | She stands at the edge of the platform, holding a warm cup of station tea, looking at the distant rails. The lens first briefly focuses on the platform sign, then finds her face; a light breeze stirs her hair ends. No stable smooth shots, no modern phone-camera quality. |
| 3–6s | Hesitation | Cool sea breeze blows through her hair; she looks down at the station timetable and gives a small laugh; the operator accidentally pushes in too close, then quickly pulls back to correct. No posed refinement, no steady fast accurate focus. |
| 6–9s | Waiting | She sits on the wooden platform bench, takes a sip of hot tea, and looks out at the sea; auto-focus switches back and forth between her profile and the glittering water behind her. No added lighting, no filter look. |
| 9–12s | Train arrives | The train glides into the station with a soft metallic rumble; she rises, adjusts the canvas bag on her shoulder, and walks toward the opening doors. No obvious post-process artifacts reflecting in the window glass. |
| 12–15s | Farewell | Before boarding, she notices the camera, gives a small wave and a smile to the lens, then steps into the carriage; the doors begin to close, the lens slowly lowers, and the recording cuts abruptly to black. No posed feel, no subtitles. |

## 5. Hard Rules

- **90s MiniDV camcorder texture throughout** — violent handheld shake, off-frame compositions, auto-focus hunting between the train and her face, exposure riding on the daylight, faded color, soft contrast, slight motion blur, MiniDV compression artifacts, no stabilization.
- **Identity consistency** — her face, clothing and hairstyle stay identical for the whole film.
- **Ambient sound only** — no music, no narration; only natural environment sound (waves, seagulls, light wind, distant station announcements, footsteps, train braking, doors opening and closing, low conversation).
- **No on-screen text** — clean frame.
- **Ordinary cuts** — normal time-segmented cuts, not a modern polished edit.

## 6. Negative Rules (Do Not)

Stabilized / smooth footage; modern phone-camera quality; crisp, steady, fast auto-focus; posed refinement; added lighting; filter look; music; narration; any text on screen; obvious post-process artifacts in window glass; changes to her identity, clothing or hairstyle; a polished modern edit feel.

## 7. Generation

- Mode: T2VA (pure text-to-video) — no reference image, no first frame.
- 15s, 16:9, 24fps, native H3 audio (ambient environment sound only, no music or narration).

## 8. Verified Output

A 15.08s / 960×552 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`.

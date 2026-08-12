---
name: kinetic-title-card-generator
description: |
  Create a 7–8 second MiniMax H3 text-to-video clip where a short title, brand name, or slogans are the hero: a title card / text animation built on text-driven motion. Use for brand-name opens, film/series title cards, song-title cards, event posters, or any request whose main subject is displayed words. The text must be short (1–6 characters per line), placed once with explicit position, timing, font flavor, and entrance behavior; never let it morph, relocate, or regrow. Different from music-video-subtitle-generator (lyric karaoke) and promotional films with incidental text (h3-promo-film): here the words ARE the video. Follows base-en.txt exactly. Reference images or videos route to h3-keyframe-film / reference-motion-transfer.
---
# Kinetic Title Card Studio

The words are the hero: a brand name ignites into gold dust, a film title slides out of fog, a song name pulses with light. The written text must arrive clean, readable, and spelled exactly right — this Skill treats text integrity as a first-class QC item.

Default:
- Mode: T2VA
- Duration: 7–8s
- Aspect ratio: 16:9 or 9:16
- Text: 1–6 characters per line, one placement, original language preserved
- Camera: near-static or subtle; motion belongs to the text and its effect
- Music: drives the timing (entrance on beat, exit/linger to resolution)

## Global Text Rules

### Integrity

- The text must be spelled exactly as given, in its original language. Never translate, paraphrase, or romanize.
- One line up to ~6 characters; two lines only if the user provides both (e.g., brand + slogan) — never split words across lines.
- State it explicitly once: `The text "XXX" remains clearly readable and correctly spelled throughout, without morphing or rearranging its letters.`

### Placement & Behavior

- Fix position in the first beat: `the text "XXX" appears at {position, e.g. upper third / center / bottom-right} in {font flavor} style`.
- Give it one entrance behavior and one resolution: enter, hold, exit (or hold to the end). No regrowth, no re-placement, no letter-by-letter assembly after arrival.
- The text should visibly "land" — settling scale, flicker-to-clean, particles converging — but must not change its wording.

## 1. Text-Driven Motion Ideas

- Particles/embers converge into the letters, then settle
- Letters slide in from fog/water/mist (slide, fade, wipe, dissolve)
- Light behind the text flares and dims; the words never re-arrange
- Letters punch in with a scale overshoot, then lock to a clean hold
- Camera slowly pushes toward a fixed text card (camera supporting)
- Environment beats around the text: rain streaks, embers, floating dust

## 2. Structure of a 7–8s Clip

1. 0–1.5s — opening space/effect before the text (or text arriving immediately if user wants instant)
2. 1.5–3.5s — the text arrives via one entrance behavior and lands cleanly
3. 3.5–6.0s — ambient beats support the held text (particles, light, environment)
4. 6.0–7.0s (optional) — exit behavior (dissolve, fade with the light) or steady hold to the end

## 3. Prompt Template

```text
integrated_multimodal_description: [Shot 1] {style + opening composition}. The text "<TITLE>" in {font flavor} characters {appears at position} as {entrance behavior}. It lands and locks: clearly readable and correctly spelled, without morphing or rearranging. {ambient effects} support the held text at natural real-time speed while the camera {subtle move only}. {exit behavior or hold to the final second}.

overall_soundscape: {diegetic sound matched to entrance/ambient beats}.

non_diegetic_music: {score with entrance accent on the first beat of the text}.
```

## 4. Canonical Demo — Album Title Card "黎明"

Beats:
`dark studio space, dust in haze → the word "黎明" punches in with a light flare at upper third, scale overshoot then lock → dust drifts, light breathes behind the letters → hold clean to the final second`

Full runnable prompt: `references/prompt-library.md`.

## 5. Failure Recovery

- Text garbled / extra letters → shorten to ≤4 characters; remove ambient clutter behind the letters; restate the integrity line
- Text moves away from its position → repeat the exact position in every beat
- Letters morph into another word → forbid rearrangement explicitly; reduce geometric effects
- Entrance too fast to read → start the entrance earlier; end the landing earlier; hold longer
- Looks like a poster, not a video → add one ambient system beat per 1–2s

## 6. QC

Fail if: any letter is misspelled or lost / text relocates or regrows / entrance misses the music beat / the card holds for less than 2 clean seconds / words are translated or split.

## Boundaries

Text-as-hero title cards only. Lyric karaoke → `music-video-subtitle-generator`. Full commercials with incidental text → `h3-promo-film`. Reference images or videos → `h3-keyframe-film` / `reference-motion-transfer`. No real identifiable persons, profanity, or trademarks as decorative subjects.
---
name: suv-commercial
description: |
  Generate a top-tier, ultra-premium future luxury SUV commercial — elegant, restrained, real, like an international luxury car brand spot — as one continuous 15s 16:9 24fps film from a single vehicle reference image. Use when the user wants a luxury car / SUV brand film, a showroom or Brutalist design-studio ad, a cinematic car-launch commercial, or a "car ad" that must feel expensive and calm rather than like a tech demo or racing game. Locks the vehicle to the reference image (no redesign, no second interior), enforces LEFT-HAND DRIVE consistency in every interior shot, restricts the palette to a luxury night showroom look, allows only five typography lines with soft-fade motion, and uses NO BGM — pure cinematic SFX only. Original prompt by Flkrstudio (source below); this Skill packages that prompt with reference-locking rules and a verified 15s output.
---

# SUV Commercial — Future Luxury Vehicle Ad

Use this Skill when the user wants a **future luxury SUV / car commercial** that must feel elegant, expensive, restrained and real — like a formal spot from an international luxury car brand. It generates a single continuous 15-second film (16:9, 24fps, cinematic) from one vehicle reference image.

Core principle: **lock the vehicle to the reference, keep LEFT-HAND DRIVE consistent everywhere, spend the model's budget on restraint and realism — never on tech-demo gimmicks.**

The prompt follows the three-part H3 structure (reference locking → core concept → timecoded shot list) with hard negative rules. It was authored by Flkrstudio and packaged here as a reusable Skill with a verified 15s output.

---

## 1. Trigger

Use this Skill when the user's request matches any of:

- A future luxury SUV / car commercial, showroom film, or design-studio brand spot
- "Make it look like a real luxury car brand ad" — expensive, calm, cinematic
- A car launch / journey-begins film with a female driver, interior detail, ambient lighting, and headlight ignition

Do **not** use this Skill when:

- The user wants a tech-demo / sci-fi HUD overloaded car shot — that is a different visual language
- The user wants a racing-game style dynamic car chase
- No reference image of the vehicle exists (the Skill is built around locking a single vehicle reference)

## 2. Inputs

- One vehicle reference image (`@图片1`) — the ONLY reference for the vehicle. Body proportions, four doors, glass, wheels, tires, front/rear lights, bumpers, side lines and interior are all locked to it. No redesign, no second interior.
- (Optional) A text description of the female driver: adult woman, same face, blue-gray eyes, dark long hair, realistic skin, black minimal high-end clothing. Natural, confident, calm — no runway walk, no looking at camera, no posing.
- Duration 15s, aspect 16:9, 24fps, cinematic 4K-grade look.

## 3. Hard Rules

### Vehicle lock
Body proportions, doors, glass, wheels, tires, lights, bumpers, side lines, interior — all from `@图片1`. License plate reads only: 家越07. Never redesign the vehicle, never invent a second interior.

### LEFT-HAND DRIVE (top priority)
Steering wheel fixed on the left. Driver always in the front-left seat; passenger on the right; center console centered between the two front seats. The driver enters through the left front door. Any interior shot: no mirroring, no RHD, no mispositioned console, no interior flip, no second interior.

### Environment
Night, futuristic Brutalist private car design studio: dark grey concrete, black stone, vertical platinum light strips, polished black reflective floor, light cinematic haze. Palette limited to: Obsidian Black / Gunmetal / Platinum / Cool White / minimal Warm Amber. Inside the car, after ignition, low-brightness refined deep-blue Ambient Light is allowed — not blue neon. No cyberpunk RGB, no purple/pink lights, no billboards, no random text.

### Typography
Modern luxury sans serif, thin weight, wide letter-spacing, Ivory White / Soft Platinum, lots of negative space. Animation: soft fade in 6–10 frames → hold → soft fade out 6–10 frames, only slight letter-spacing expansion and 2–3% micro-shift. No giant text, fly-in, glitch, HUD, bounce, fast rotation.

### Allowed text (only these five)
1. SCULPTED AERODYNAMICS / ELEGANCE IN MOTION
2. FULL-GRAIN NAPPA LEATHER / TAILORED COMFORT
3. ADAPTIVE AMBIENT LIGHT / SIGNATURE BLUE
4. PANORAMIC GLASS ROOF / OPEN TO THE NIGHT
5. ROEWE 家越07 / THE JOURNEY BEGINS

### NO BGM
Absolutely no background music, songs, drums, electronic music, narration, dialogue or voices. Only premium cinematic SFX: footsteps, palm touching paint, door-handle mechanics, luxury door open & heavy close, leather and fabric friction, start-button click, instrument & console boot-up electronics, ambient-light system hum, low electric-drive start, tires beginning to roll, air moving past the car, large Brutalist hall reverb. All sounds strictly synced.

## 4. Shot List (12 CUT, continuous single segment)

| CUT | Time | Content |
|---|---|---|
| 01 | 0.00–1.20 | Low front-45° slow dolly; SUV static; driver walks from the nose toward the driver side; full vehicle in frame, no text. |
| 02 | 1.20–2.80 | Camera slides along the left side; palm caresses fender → shoulder line → left front door; right negative space fades in: SCULPTED AERODYNAMICS / ELEGANCE IN MOTION. |
| 03 | 2.80–3.80 | She grips the left front door handle, opens, enters naturally; transition via the door edge, never cut to the other side. |
| 04 | 3.80–5.20 | From the door position into the cabin: driver seated front-left, steering wheel clearly left, passenger right, console center; camera sweeps the seat shoulder, stitching, leather; fade: FULL-GRAIN NAPPA LEATHER / TAILORED COMFORT. |
| 05 | 5.20–6.30 | Same LHD interior structure, close side shot; she closes the door; left steering wheel, central digital cluster, center display, center armrest, right passenger all visible. |
| 06 | 6.30–7.40 | Extreme close-up: right hand reaches naturally from near the wheel to the start button and presses; button in naturally reachable dashboard area. |
| 07 | 7.40–8.70 | Continuous interior shot, no direction change: digital cluster first, then center display, then dashboard & door trims gain refined deep-blue ambient light; fade: ADAPTIVE AMBIENT LIGHT / SIGNATURE BLUE. |
| 08 | 8.70–9.80 | Camera lifts slightly from behind the driver's left shoulder: panoramic glass roof and night building-top lights; fade: PANORAMIC GLASS ROOF / OPEN TO THE NIGHT. |
| 09 | 9.80–11.10 | Front low angle, SUV static; left/right DRLs ignite precisely, ~0.15s later main headlights start softly, symmetrical, matching `@图片1`; lights come on BEFORE any movement. |
| 10 | 11.10–12.40 | Same front framing, lights full; camera pulls back slowly, SUV rolls forward very smoothly, tires truly rotating, only slight weight transfer. |
| 11 | 12.40–13.60 | Low front-45° parallel tracking; graceful acceleration; vertical platinum strips slide across headlights → hood → windshield → left door → rear fender. |
| 12 | 13.60–15.00 | SUV drives toward the exit onto the same future city night road; right negative space fades: ROEWE 家越07 / THE JOURNEY BEGINS. Final ~0.4s: passes a huge black building column that naturally occludes the lens into a black-out ending. |

## 5. Negative Rules (Do Not)

Tech-demo feel; racing-game feel; over-complex editing; cyberpunk RGB; purple/pink lights; billboards; random text; mirrored interior; RHD; mispositioned console; flipped interior; second interior; redesigned vehicle; runway-walk modeling; looking at camera; posing; giant text; fly-in; glitch; HUD; bounce; fast rotating text; background music; narration or dialogue.

## 6. Generation

- Mode: I2VA (image-to-video) with `@图片1` as the vehicle reference only — never used as the first frame unless explicitly requested.
- 15s, 16:9, 24fps, native H3 audio (SFX only, no BGM).

## 7. Verified Output

A 15.08s / 1376×768 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt and reference image. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`, vehicle reference: `assets/reference.png`.

## 8. Attribution

Original prompt: Flkrstudio — https://x.com/Flkrstudio/status/2090230972851835104. This Skill packages that prompt with reference-locking rules, a Chinese localisation, and a verified 15s output.
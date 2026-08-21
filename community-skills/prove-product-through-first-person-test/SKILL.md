---
name: prove-product-through-first-person-test
description: |
  Generate an authentic first-person UGC food-tasting review (iPhone selfie-vlog style, handheld, fast jump cuts, TikTok/Reels aesthetic) from a single food-product reference image — a young Chinese girl reviews a roujiamo (Chinese hamburger) in Mandarin across 8 shots. Use when the user wants a product-tasting review, a first-person "prove the product" short, a UGC-style food review, or an e-commerce KOC-style food clip. Locks the product (bun shape, filling thickness, juice state, toppings, proportions) to the reference in every shot; no commercial-ad staging, no cinematic grade, no CGI food.
---

# Prove Product Through First-Person Test — UGC Food Review

Use this Skill when the user wants an **authentic first-person UGC food-tasting review** in iPhone selfie-vlog style — handheld, natural light, fast jump cuts, TikTok/Reels aesthetic. A young Chinese girl reviews a roujiamo in Mandarin across 8 fast shots.

Core principle: **lock the product to the reference in every shot, keep it authentically casual, spend the model's budget on realistic food and a real review moment — not on commercial staging.**

The prompt follows the three-part H3 structure (reference locking → core concept → 8-shot list with spoken lines) plus hard negative rules.

---

## 1. Trigger

- A first-person "prove the product" food-tasting review short
- UGC / KOC-style food review for e-commerce or social
- "Review this food product in an authentic vlog style"

Do **not** use this Skill when:

- The user wants a cinematic commercial-grade food ad
- The user wants talking-head professional studio content
- No food-product reference image exists

## 2. Inputs

- One food-product reference image (`@图片1`) — locks bun shape, filling thickness, juice state, toppings and proportions in every shot.
- (Optional) Reviewer description: young Chinese girl, natural beauty, loose dark ponytail, off-white hoodie, light makeup, bright smile, friendly lifestyle-blogger vibe.
- Duration 15s, aspect 16:9, authentic UGC / iPhone selfie-vlog, Mandarin dialogue.

## 3. Shot List (8 shots, fast jump cuts)

1. **0–2s** Selfie showing the paper bag. She says: "夜宵时间！" (Midnight snack time!)
2. **2–4s** Opens the bag, takes out the roujiamo.
3. **4–6s** Quick push-in on the roujiamo.
4. **6–8s** Holds it with both hands, braised juice naturally drips.
5. **8–10s** Takes a bite and reacts. She says: "哇……这个真的绝了。" (Wow… this is really incredible.)
6. **10–12s** Casual close b-roll: reaches for a cup of sour plum drink, sips.
7. **12–14s** Raises the roujiamo to the camera for a toast. She says: "你也得来一个。" (You've got to get one too.)
8. **14–15s** Freeze-frame with overlaid text: "肉夹馍 = 快乐 🥙" (Roujiamo = happiness)

## 4. Style & Hard Rules

- Handheld, natural light, slight grain, autofocus breathing, imperfect handheld, fast jump cuts. Not cinematic grade, not studio light, not commercial staging.
- Food stays true to the reference: no CGI roujiamo, no fake juice, no hand distortion, no food deformation, no logo distortion.
- Spoken lines in Mandarin only.

## 5. Generation

- Mode: I2VA with `@图片1` as the product reference only — never used as the first frame unless explicitly requested.
- 15s, 16:9, native H3 audio (voice + ambient).

## 6. Verified Output

A 15.08s / 1376×768 / 24fps MP4 was generated end-to-end with MiniMax H3 from the packaged prompt and reference image. Preview: `assets/preview.mp4`, poster: `assets/poster.webp`, product reference: `assets/reference.png`.
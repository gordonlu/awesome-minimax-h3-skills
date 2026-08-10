# Third-Party Materials — MiniMax-H3

Everything under this directory originates from the official MiniMax H3
repositories and remains the property of MiniMax:

- **Upstream repository:** https://github.com/MiniMax-AI/MiniMax-H3
- **License:** MiniMax H3 Community License Agreement — see `LICENSE` in
  this directory (copied from
  https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE).
- **Required notice:** MiniMax H3 is licensed under the MiniMax H3
  Community License Agreement, Copyright © 2026 MiniMax. All Rights Reserved.

## Contents

### `previews/` — official skill demo media (MODIFIED)

The files in `previews/` were **re-encoded** by this project from the
official demo GIFs in the upstream repository's `assets/` directory,
solely for web-delivery performance (lazy-loading, smaller transfers):

- `*.mp4` — H.264 re-encode of the official GIF, 720px wide, no audio track
- `*.webp` — first frame of the official GIF, 720px wide, used as a poster

No creative content was altered: same frames, same duration, same visual
content as the upstream GIFs. Per Section III.2 of the MiniMax H3 Community
License Agreement, this note serves as the prominent notice that these
files have been modified (re-encoded) by this project.

Mapping (upstream → local):

| Upstream file (`assets/`)                            | Local files (`previews/`)            |
| ---------------------------------------------------- | ------------------------------------ |
| `3d-animation-short-generator.gif`                   | `3d-animation-short-generator.mp4` / `.webp` |
| `brand-promo-video-generator.gif`                    | `brand-promo-video-generator.mp4` / `.webp` |
| `co-op-game-intro-generator.gif`                     | `co-op-game-intro-generator.mp4` / `.webp` |
| `handdrawn-live-video-generator.gif`                 | `handdrawn-live-video-generator.mp4` / `.webp` |
| `minimalist-product-ad-generator.gif`                | `minimalist-product-ad-generator.mp4` / `.webp` |
| `music-video-subtitle-generator.gif`                 | `music-video-subtitle-generator.mp4` / `.webp` |
| `paper-collage-explainer-generator.gif`              | `paper-collage-explainer-generator.mp4` / `.webp` |
| `papercraft-stop-motion-explainer.gif`               | `papercraft-stop-motion-explainer.mp4` / `.webp` |

The upstream GIFs remain the canonical versions; every preview shown on the
site links back to its upstream source file.

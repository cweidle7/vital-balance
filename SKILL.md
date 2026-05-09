---
name: vital-balance-design
description: Use this skill to generate well-branded interfaces and assets for Vital Balance, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files in this skill:
- `README.md` — voice, color, type, motion, layout foundations + caveats
- `colors_and_type.css` — every design token (use as `:root` import)
- `components.css` — nav, footer, trust bar, product card, buttons, pills, marquee
- `vitalbalance-home.html` / `vitalbalance-plp.html` / `vitalbalance-pdp.html` — full reference pages
- `ui_kits/web/` — reusable component patterns
- `fonts/` — DM Sans + Plus Jakarta Sans variable fonts (load via `@font-face`)
- `assets/` — brand artwork (note: official logo is medical/blue-red and does not match the editorial sage/cream system in this skill)

Aesthetic shorthand: **Aesop meets functional medicine meets editorial magazine.** Sage greens, cream backgrounds, warm browns, italic Cormorant Garamond serif on top of DM Sans, no emoji, no hype, no gradients-for-decoration.

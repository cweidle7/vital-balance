# Vital Balance — Design System

A complete editorial-wellness design system for Vital Balance, a regenerative-medicine company that supplies functional medicine practitioners with formulated supplement protocols. Aesthetic direction is **refined natural luxury** — Aesop meets functional medicine meets editorial magazine.

## Source materials

- **Reference site**: https://vitalbalance.bio
- **Uploaded brand assets**:
  - `assets/vital_balance_logo_official.jpg` — the official current Vital Balance logo (blue/red EKG mark with "Regenerative Wellness" lockup). **Note**: this logo is from the company's medical-clinic identity and does NOT match the editorial-wellness aesthetic the brief asks for. The system below treats Vital Balance as if it were re-branding into a consumer wellness label. **Iterate with us** if you want the medical EKG identity preserved instead.
  - `fonts/DMSans-*.ttf`, `fonts/PlusJakartaSans-*.ttf` — uploaded by the brand. Used as the body family.
- **Figma file**: `product listing page_inspo.fig` — generic e-commerce inspiration board, used only for reference patterns (not Vital Balance content).

## Pages in this system

- `vitalbalance-home.html` — full editorial homepage (hero, marquee, story, featured grid, process, editorial split, ingredient philosophy, reviews, journal, newsletter)
- `vitalbalance-plp.html` — product listing page with sticky filters, staggered grid, skeleton loading
- `vitalbalance-pdp.html` — product detail with sticky media split, variant pills, tabs, sticky buy bar

## Foundations

- `colors_and_type.css` — every design token (colors, type scale, spacing, motion, shape, elevation). Single source of truth — every value used in the pages references a token here.
- `components.css` — shared components: nav, footer, trust bar, product card, buttons, pills, marquee, badges
- `home.css`, `plp.css`, `pdp.css` — page-scoped layout
- `shared.js` — sticky nav, hamburger overlay, wishlist toggle, IntersectionObserver-driven entrance animation

## Brand assets

- `assets/vital_balance_logo_official.jpg` — uploaded original brand logo (medical identity)
- `fonts/` — DM Sans + Plus Jakarta Sans variable-font files

## Index

| File | Purpose |
|---|---|
| `vitalbalance-home.html` | Homepage |
| `vitalbalance-plp.html` | Product Listing Page |
| `vitalbalance-pdp.html` | Product Detail Page |
| `colors_and_type.css` | Design tokens |
| `components.css` | Shared component CSS |
| `home.css` / `plp.css` / `pdp.css` | Page-specific layout |
| `shared.js` | Shared interactions |
| `preview/` | Card-sized swatches/specimens for the Design System tab |
| `ui_kits/web/` | Reusable React-style components and demo |
| `SKILL.md` | Agent skill manifest (compatible with Claude Code) |
| `assets/` | Logos and brand artwork |
| `fonts/` | Variable font files |

---

## CONTENT FUNDAMENTALS — voice, copy, tone

The voice is **considered, calm, slightly literary**. Sentences are confident and unhurried. Avoid hype, exclamation marks, urgency tactics, and bro-science tropes.

### Tone of voice
- **Persona**: a knowledgeable practitioner explaining something they actually believe in. Quiet confidence. Never pleading.
- **Pronoun**: occasional **you**, but the brand prefers third-person observation over direct address. The body, the cell, the practice — these are the subjects.
- **Casing**: sentence case for headlines (with intentional italic phrases). All-caps reserved for spaced-letter eyebrow labels (`OUR APPROACH`, `THE PRACTICE`).
- **Punctuation**: em-dashes, semicolons, oxford commas. Sentences may begin with conjunctions when it adds rhythm.
- **Italics**: italics in serif headlines carry the emotional emphasis — `Restore what *time has taken*, cell by cell.`
- **No emoji**. No exclamation marks except in error states.
- **Numerals**: spelled out under ten in body copy; figures in stats and pricing.

### Examples (used in the system)
- Hero: *"Restore what time has taken, cell by cell."*
- Section header: *"Wellness, the way your body remembers it."*
- Banner: *"Built for the body's own intelligence — not against it."*
- Ingredient subheading: *"What goes in matters more than what's left out."*
- Newsletter: *"Letters from the practice."*

### Anti-patterns
- ❌ "Boost your energy with our amazing supplements!"
- ❌ "Don't miss out — limited stock!"
- ❌ "🌿 Made with love 💚"
- ✅ "A clinical-grade nicotinamide riboside complex, formulated for cellular repair pathways."

---

## VISUAL FOUNDATIONS

### Colors
- **Background**: cream (`#F4EFE6`) is the canvas; cream-dark (`#E8E0D2`) for tonal banding sections.
- **Primary brand**: sage family (`--sage` `#6B7F5C`, `--sage-dark` `#3F4A36`, `--sage-deepest` `#2A3325`). Sage is the CTA and link color.
- **Warm accent**: brown family (`--brown` `#8B6F4E`, `--brown-light` `#C4A988`). Used for eyebrow labels, italic emphasis, and warm gradients.
- **Text**: charcoal (`#1F1F1B`) primary; muted (`#6B6B62`) secondary.
- **Stars/utility amber**: `#C4853A` — warm, never yellow.
- **Status**: `--success` `#5C7A4E`, `--warn` `#C4853A`, `--error` `#A14A3F`.

### Type
- **Display serif**: Cormorant Garamond. Carries italics that do most of the editorial work. Hero headlines run in 300/400 weight, italic for emphasis. **Flagged: loaded from Google Fonts** because no Cormorant .ttf was uploaded — please replace with the brand's licensed copy if Cormorant isn't your final choice.
- **Body sans**: DM Sans (uploaded), with Plus Jakarta Sans as a fallback (also uploaded).
- **Eyebrow micro-text**: 12px, 0.18em letter-spacing, uppercase, brown or sage.

### Layout & spacing
- 8px base spacing scale. Page rhythm uses fluid `clamp()` for section padding (`--section-y` 64–128px) and gutters (20–48px).
- Max content width 1320px; narrow text columns at 880px.
- Mobile-first. Breakpoints: 720px (tablet), 880px (desktop), 1080px (wide).

### Backgrounds
- **Cream by default.** Full-bleed dark sections (sage-deepest) used sparingly for narrative emphasis (ingredient philosophy, footer).
- **Hero**: dark moody gradient + SVG fractal noise (mix-blend overlay) to read as photographic.
- **Product imagery placeholders**: per-category radial gradients (sage for adaptogen, brown for longevity, warm tan for mineral, etc).
- No repeating illustrated patterns. No corporate gradients. No glassmorphism beyond the nav.

### Motion
- **Easing**: custom `cubic-bezier(0.22, 0.61, 0.36, 1)` — natural-feeling decelerate. Out-only ease for entrances.
- **Durations**: 160 / 280 / 520ms. Defaults to 280.
- **Cards** enter with 16px translateY + opacity, staggered by IntersectionObserver.
- **Hover on product cards**: image scale to 1.05 (800ms) + drawer slides up.
- **Marquee**: linear 60s loop.
- `prefers-reduced-motion` honored globally.

### States
- **Hover (light bg)**: darker color or 4–6% transform-down lift on cards. Buttons darken via background-color shift.
- **Hover (dark bg)**: invert (cream fill, dark text).
- **Active**: 1px translate-down on primary buttons.
- **Focus-visible**: 2px sage outline, 2–3px offset.

### Borders & corners
- **Radii**: 2 / 4 / 8 (default) / 16 / 24 / 999. Cards use 8 or 16. Pills use 999.
- **Borders**: `rgba(31,31,27,0.12)` on cream; `rgba(244,239,230,0.16)` on dark.
- **Dividers** preferred over heavy panels.

### Elevation
- **Soft** (1–2px + 2–6px) for cards.
- **Card** (2px+8px / 12px+32px) for floating cards.
- **Hover** (6px+16px / 24px+56px) for raised state.
- **Shadow-inset** for subtle inner border treatments.
- All shadows use rgba on charcoal at 4–14% opacity. Never pure black.

### Imagery treatment
- **Color vibe**: warm earthy. Greens lean olive, browns lean caramel.
- **Grain**: subtle SVG noise overlay on dark hero gradients.
- **Tone**: low-saturation, slightly underexposed, editorial. Never high-contrast, never neon.
- **Aspect ratios**: 3/4 (product cards), 4/5 (story media), 5/4 (editorial blocks).

### Layout rules
- Sticky elements: nav (fixed, always), PLP filter bar (sticks under nav on scroll), PDP media (sticky on desktop only).
- Sticky bottom buy bar on PDP appears after in-page CTA scrolls offscreen.
- Asymmetric splits used for editorial sections: 65/35 and 35/65 (reverse) — never 50/50.

### Transparency & blur
- Nav uses 72% opacity on cream + 16px backdrop-filter blur.
- On PLP/PDP cream pages, nav solidifies to 92% on scroll.
- Glass treatment is reserved for the nav and PLP filter bar — used sparingly so it stays "luxe" not "trendy".

### Cards
- Product card: full-bleed media + bottom drawer + body. No outer card chrome (no border, no shadow on default state) — the photo is the card.
- Editorial cards (story stat, testimonial): cream background, 16px radius, soft drop shadow.
- Review cards: tinted surface (`#FAF7F1`), 16px radius, hairline border.

---

## ICONOGRAPHY

The system uses **inline SVG line icons** at 1.5px stroke weight. No icon font, no PNG icons, no emoji. Icons are warm and considered — they read like botanical illustrations more than UI glyphs.

### Patterns
- **Stroke**: `currentColor`, 1.5px (or 1.2px for the larger ingredient icons).
- **Sizes**: 14 (chips/stars) · 16 (footer/social) · 20 (nav) · 22 (benefit strip) · 36 (ingredient feature).
- **Style**: rounded line caps, no fills, simple geometry. Botanical flourishes used sparingly (the story media has a delicate SVG plant motif).

### CDN substitution
The current SVGs are hand-written to fit the brand's stroke weight. If you want a comprehensive set, **Lucide** (https://lucide.dev) is the closest match — same 1.5px line, same minimal aesthetic. **Flagged**: we did not import Lucide as a dependency; we drew the small set the system actually uses inline. Add Lucide as a CDN if you need a fuller library.

### When to use each
- Star: rating, filled amber for review counts.
- Heart (outline): wishlist; flips to filled brown on toggle.
- Cart, Search: nav.
- Botanical / mineral / molecule glyphs: ingredient cards (Reishi, Astaxanthin, Marine Collagen, Ashwagandha — drawn to feel like specimens, not crisp UI icons).

### What's not used
- ❌ Emoji
- ❌ Unicode glyphs as icons (✓, ★ etc) — use SVG instead
- ❌ Filled solid icons (everything is stroked outline)
- ❌ Bicolor or gradient icons
- ❌ Stock icon-pack badges

---

## Caveats & flags

1. **Logo mismatch.** The official uploaded logo is medical-clinic blue/red. The brief specifies sage/cream/brown editorial — these don't match. The system implements the brief; the medical identity is archived in `assets/`.
2. **Cormorant Garamond loaded from Google Fonts.** No serif .ttf was uploaded. Please confirm the licensed display font.
3. **Imagery is gradient-placeholder only.** Real photography (regeneratively grown ingredients, glass bottles, lifestyle) will replace the per-category gradients in production.
4. **Vital Balance is described as B2B for practitioners.** The home/PLP/PDP build above is a consumer DTC funnel, per the explicit brief. A B2B portal could share these tokens — flag if that's a future need.

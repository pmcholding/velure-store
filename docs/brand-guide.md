# VELURE Brand Guide

## Brand Identity

**VELURE** is a premium skincare and haircare brand that combines luxury aesthetics with clean, effective formulations. The brand stands for intentional self-care rituals and confident beauty.

### Brand Name

- Always written as **VELURE** in uppercase with letter-spacing (`tracking-[0.2em]`)
- The name evokes "velvet" and "allure" - softness meets magnetism

### Tagline

> Reveal your natural radiance.

---

## Color Palette

### Primary Colors

| Name        | Hex       | RGB              | Usage                                      |
|-------------|-----------|------------------|---------------------------------------------|
| Deep Teal   | `#1A5653` | `26, 86, 83`     | Primary brand color. Buttons, headers, text |
| Warm Cream  | `#F5F0E8` | `245, 240, 232`  | Primary background. Page backgrounds        |
| Soft Gold   | `#C9A96E` | `201, 169, 110`  | Accent color. CTAs, badges, highlights      |

### Extended Palette

| Name        | Hex       | RGB              | Usage                           |
|-------------|-----------|------------------|---------------------------------|
| Teal Dark   | `#133F3D` | `19, 63, 61`     | Hover/active states for teal    |
| Teal Light  | `#237370` | `35, 115, 112`   | Secondary accents               |
| Cream Dark  | `#E8E0D2` | `232, 224, 210`  | Borders, card backgrounds       |
| Gold Dark   | `#B8954F` | `184, 149, 79`   | Hover/active states for gold    |
| Gold Light  | `#D4BA87` | `212, 186, 135`  | Subtle gold highlights          |

### Neutral Colors

| Name        | Hex       | Usage               |
|-------------|-----------|----------------------|
| Foreground  | `#1A1A1A` | Primary text         |
| Muted       | `#6B6B6B` | Secondary text       |
| Border      | `#D9D3C7` | Dividers, borders    |

### Color Usage Rules

- **Deep Teal** is the dominant brand color. Use it for primary actions and key UI elements.
- **Warm Cream** is the default background. Avoid pure white (`#FFFFFF`) as a page background.
- **Soft Gold** is reserved for CTAs, sale badges, and accent elements. Do not overuse.
- Maintain strong contrast ratios (WCAG AA minimum) between text and backgrounds.

---

## Typography

### Font Families

| Role     | Font              | Weight Range | Style    |
|----------|-------------------|-------------|----------|
| Headings | Playfair Display  | 400-900     | Serif    |
| Body     | DM Sans           | 100-1000    | Sans     |

### Type Scale

| Element | Font          | Size   | Weight    | Usage             |
|---------|---------------|--------|-----------|-------------------|
| H1      | Playfair      | 2.5rem | Semibold  | Page titles       |
| H2      | Playfair      | 2rem   | Semibold  | Section headings  |
| H3      | Playfair      | 1.5rem | Medium    | Subsection titles |
| H4      | Playfair      | 1.25rem| Medium    | Card titles       |
| Body    | DM Sans       | 1rem   | Regular   | Paragraphs        |
| Small   | DM Sans       | 0.875rem| Regular  | Captions, labels  |
| Micro   | DM Sans       | 0.75rem| Medium   | Badges, tags      |

### Typography Rules

- Headings always use Playfair Display - never use DM Sans for headings.
- Body text always uses DM Sans - never use Playfair Display for long-form body text.
- Use `tracking-wide` (letter-spacing) for uppercase labels and navigation items.
- Line height for body text: 1.6 for readability.

---

## Tone of Voice

### Personality

- **Sophisticated** - elevated language without being pretentious
- **Warm** - approachable and inclusive, never cold or clinical
- **Confident** - assured in quality, never boastful
- **Clean** - concise, clear, no filler language

### Writing Guidelines

1. Address the customer directly with "you/your"
2. Focus on the experience and ritual, not just the product
3. Highlight ingredients and their benefits naturally
4. Avoid hyperbolic claims ("best ever", "miracle")
5. Use active voice
6. Keep sentences concise - aim for 15-20 words per sentence

### Example Copy

**Do:** "Nourish your skin with cold-pressed rosehip oil, rich in vitamins A and C."
**Don't:** "Our amazing miracle cream is the best product you will ever use on your face!"

**Do:** "Your daily ritual, elevated."
**Don't:** "Buy now for incredible results!!!"

---

## Photography Style

- Clean, natural lighting with warm tones
- Lifestyle imagery showing products in use (bathroom shelves, vanity setups)
- Minimal, uncluttered compositions
- Skin tones should appear natural, never over-filtered
- Background palette should complement the cream/teal brand colors

---

## Logo Usage

- The VELURE wordmark uses Playfair Display Bold with `tracking-[0.2em]`
- Minimum clear space: equal to the height of the "V" character on all sides
- Primary color: Deep Teal on Cream backgrounds
- Inverted: White on Teal backgrounds
- Never stretch, rotate, or apply effects to the wordmark

---

## UI Component Patterns

### Buttons

| Variant   | Background   | Text   | Border | Usage                     |
|-----------|-------------|--------|--------|---------------------------|
| Primary   | Deep Teal   | White  | None   | Main actions              |
| Secondary | Transparent | Teal   | Teal   | Alternative actions       |
| Gold      | Soft Gold   | White  | None   | CTAs (Add to Cart, etc.)  |

- Border radius: `rounded` (0.25rem)
- Padding: `px-6 py-2.5` (medium size)
- Font weight: Medium
- Always include hover and disabled states

### Cards

- Background: Cream or white
- Border radius: `rounded-lg` (0.5rem)
- Subtle hover effect: image scale or shadow transition
- No harsh borders - use cream-dark for subtle definition if needed

### Spacing

- Use Tailwind's spacing scale consistently
- Section padding: `py-12` to `py-16`
- Content max-width: `max-w-7xl` (1280px)
- Grid gap: `gap-6` for product grids

---

## Accessibility

- All interactive elements must have visible focus indicators
- Focus ring: 2px solid Deep Teal with 2px offset
- Minimum touch target: 44x44px on mobile
- Color contrast must meet WCAG AA standards
- All images must have descriptive alt text
- Cart and menu drawers must trap focus and be keyboard-navigable

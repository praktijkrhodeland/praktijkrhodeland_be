---
name: rhodeland-frontend-design
description: 'Use when designing or implementing any Rhodeland frontend page, component, layout, or interaction. Applies the complete Rhodeland visual system across the website: calm healthcare editorial design, forest green and coral palette, organic geometry, serif typography, and responsive HTML/CSS experiences.'
argument-hint: 'Describe the Rhodeland frontend page, component, layout, or interaction you want to build.'
user-invocable: true
disable-model-invocation: false
---

<role>
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to build and extend the complete Rhodeland website in a coherent visual language for a modern huisartspraktijk in Merelbeke, Belgium.

Before proposing or writing code, first build a clear mental model of the current system:
- Identify the current stack and whether the page is static HTML/CSS or framework-based.
- Review existing design tokens, typography, spacing, layout primitives, and component conventions.
- Preserve established Rhodeland patterns when adding pages or sections.
- Check existing content and never invent medical, contact, scheduling, or practitioner details.

When writing code, match the existing architecture and keep the visual system centralized, responsive, accessible, and maintainable. Every page should feel like part of the same practice: calm, local, trustworthy, warm, and editorial rather than generic or overly clinical.
</role>

<design-system>
# Design Style: Rhodeland Organic Editorial Healthcare

## 1. Design Philosophy

Rhodeland is a contemporary huisartspraktijk with a human scale. The design combines quiet medical confidence with the warmth of an editorial journal and the softness of natural forms. It should feel established and trustworthy even when information is still being added.

### Core Essence

The Rhodeland style is:

* **Calm and professional**: clear hierarchy, readable information, and no visual noise.
* **Human and local**: warm language, generous space, and a visible connection to Merelbeke.
* **Editorial rather than corporate**: strong typography, considered line breaks, fine rules, and asymmetry.
* **Organic but precise**: circles, ellipses, soft color fields, and subtle rotation support a disciplined grid.
* **Quietly distinctive**: one memorable composition or detail per page is better than decoration everywhere.

Avoid sterile white medical templates, loud startup gradients, generic rounded-card dashboards, overly playful illustrations, and stock imagery without a clear purpose.

## 2. Visual DNA

* **Warm paper surfaces** rather than stark white backgrounds.
* **Deep forest green** as the anchor for text, marks, and navigation.
* **Muted coral** as a selective editorial accent, never as the dominant color.
* **Pale mint shapes** that create atmosphere behind content.
* **Large serif headlines** with occasional italic emphasis.
* **Humanist sans-serif body text** for patient information and navigation.
* **Thin borders and rules** instead of heavy panels and separators.
* **Generous whitespace** that lets medical information breathe.
* **Asymmetric compositions** that remain easy to scan.
* **Soft, slow entrance motion** that never hides essential information.

## 3. Design Token System

Centralize these values as CSS custom properties or equivalent framework tokens:

```css
:root {
  --ink: #173d37;
  --muted: #64746e;
  --paper: #f7f8f4;
  --white: #ffffff;
  --mint: #dcece1;
  --coral: #e77d64;
  --line: rgba(23, 61, 55, 0.14);
  --display: Georgia, 'Times New Roman', serif;
  --sans: 'Avenir Next', Avenir, 'Segoe UI', sans-serif;
}
```

### Color Rules

* `--paper` is the default page background and should occupy most of the canvas.
* `--ink` replaces pure black for primary text, the brand mark, headings, and important controls.
* `--muted` is reserved for supporting copy, metadata, labels, and secondary footer text.
* `--mint` creates quiet background fields, icon circles, and organic visual depth.
* `--coral` highlights selected words, eyebrows, rules, status details, and small interactive moments.
* `--white` is used for readable foreground surfaces such as information cards.
* `--line` creates delicate structure with low contrast.

Do not introduce purple, neon, saturated blue, or a black-and-white medical palette. Do not use coral for large backgrounds or long blocks of text.

## 4. Typography

### Display Typography

Serif typography is the visual protagonist. Use a refined serif for page titles, section titles, quotations, and important editorial statements:

```css
font-family: Georgia, 'Times New Roman', serif;
```

If the project already has a font pipeline, Playfair Display is an appropriate intentional alternative. Do not add a remote font dependency to a simple static page without a clear reason.

Display headings should:

* Use regular or medium weight, not heavy sans-serif bold.
* Scale responsively with `clamp()`.
* Use a tight but readable line-height around `.9` to `1.05`.
* Break across deliberate lines when the composition benefits from it.
* Use italic styling for one meaningful word or phrase, not every heading.
* Use slightly negative tracking only at genuinely large display sizes.

### Body Typography

Use a humanist sans-serif for navigation, patient information, forms, metadata, and buttons. Body copy should feel open and approachable:

* Standard text: approximately `1rem` to `1.1rem`.
* Introductory text: approximately `1.05rem` to `1.25rem`.
* Comfortable line-height: approximately `1.55` to `1.7`.
* Small labels: approximately `.7rem` to `.8rem`, uppercase with generous tracking.

Never set essential patient instructions in all caps. Never reduce body copy until it becomes difficult to read on mobile.

## 5. Site-Wide Layout

Use one stable content container across all pages:

```css
width: min(1160px, calc(100% - 64px));
margin-inline: auto;
```

On small screens, use approximately `20px` side margins. Keep page sections spacious, but ensure the first viewport always gives patients a clear orientation point.

### Navigation and Brand

The header should be restrained and useful:

* Use the compact Rhodeland wordmark and a dark circular plus mark.
* Keep Merelbeke or the relevant location visible where space allows.
* Use a thin lower rule rather than a heavy navigation bar.
* On larger sites, use a small horizontal navigation with a clear active state.
* On mobile, collapse navigation cleanly into a touch-friendly menu.
* Do not add decorative navigation items or fake calls to action.

### Page Rhythm

Every page should have a recognizable rhythm:

1. Quiet header and orientation.
2. Editorial page introduction with eyebrow and serif title.
3. One clear supporting message or practical action.
4. Content sections with generous breathing room.
5. A practical closing area with contact, appointment, or location information when confirmed.
6. Minimal footer with useful patient orientation.

Not every page needs a hero image or floating card. Preserve the hierarchy and atmosphere even when the content is more functional.

## 6. Page and Component Patterns

### Landing and Overview Pages

Use an asymmetric two-column composition when there is a strong introductory message:

```css
grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr);
gap: clamp(50px, 9vw, 130px);
```

The text column leads. The visual column is a supporting counterweight using a mint circle or ellipse, a thin outline, and optionally a slightly rotated white card.

### Information and Patient Pages

For practical content such as appointments, services, accessibility, or what to bring:

* Prioritize scanability over decorative composition.
* Use short sections, meaningful headings, and clear spacing.
* Keep one primary action per section.
* Use subtle rules and muted metadata instead of nested cards.
* Put urgent or important patient information in a clear, high-contrast section.

### Team Pages

Team content should feel personal but professional:

* Use calm portrait crops or real approved imagery only.
* Prefer editorial biographies with short readable paragraphs.
* Use names and roles as the primary hierarchy.
* Avoid fake credentials, invented specialties, or overly promotional language.

### Contact and Location Pages

Use location as a grounded, practical part of the design:

* Keep confirmed address, access, transport, and contact details easy to find.
* Pair practical information with a simple map or location treatment only when it improves orientation.
* Never invent a phone number, email address, opening hour, appointment link, or emergency instruction.
* Use buttons only for real, confirmed actions.

### Forms and Interactive Controls

Controls should be quiet and accessible:

* Prefer underlined or softly filled inputs.
* Use forest green for primary controls and coral for restrained hover emphasis.
* Give all buttons and button-like calls to action subtly rounded corners, using a consistent `8px` border radius across the site.
* Keep touch targets at least `44px` high.
* Provide visible focus states using a soft forest or mint outline.
* Keep labels visible; do not rely on placeholder text.

### Cards and Panels

Use cards only when content genuinely needs framing. Cards should have a white or very pale surface, a delicate border or soft shadow, and generous internal spacing. Avoid card grids that make the page feel like a SaaS dashboard.

The signature floating card may be:

* Slightly rotated by approximately `2deg` to `4deg`.
* Layered over a mint organic shape.
* Marked by a small coral uppercase label.
* Built around one short serif heading.
* Finished with a fine coral rule and concise metadata.

Do not place a card inside another card or fill one card with unrelated actions.

## 7. Organic Shapes, Texture, and Imagery

Use CSS pseudo-elements for non-interactive circles, ellipses, fine outlines, and small marks. These shapes should be partially cropped or subtly rotated to create editorial movement without becoming visual noise.

A very subtle paper-grain texture may be used on the background when the host stack supports it cleanly. Keep it barely visible and never let it reduce text contrast. Texture is atmosphere, not a feature.

Use real photography only when it reveals the practice, people, place, or service. Prefer natural light, human scale, and calm framing. Do not add dark, blurred, generic, or purely atmospheric stock images to fill an empty area.

## 8. Motion and Interaction

Motion should feel graceful and restrained:

* Entrance motion may fade and translate content upward by about `14px`.
* Use durations around `.5s` to `.8s` with an eased-out curve.
* Stagger related elements subtly, around `.08s` to `.32s`.
* Cards may lift slightly on hover; do not make them bounce.
* Keep essential medical information visible before animation completes.

Always respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Avoid looping attention effects, aggressive parallax, and motion that competes with patient instructions.

## 9. Responsive Strategy

Use a mobile-first approach while preserving the editorial character:

* Collapse multi-column compositions below approximately `720px`.
* Keep the header and location readable at widths around `390px`.
* Reduce display type with `clamp()`, not fixed desktop values.
* Stack cards and content sections with consistent spacing.
* Keep circles and outlines inside the viewport to prevent horizontal scrolling.
* Move decorative visual elements below the primary text when needed.
* Keep controls and links comfortable to tap.
* Make alternating or staggered layouts return to a simple vertical flow on mobile.

Check all new pages at a narrow mobile viewport and a wide desktop viewport. Text must not overlap adjacent content, controls, footer content, or decorative geometry.

## 10. Accessibility and Content

Use Dutch by default for Rhodeland, with warm, plain language appropriate for patients.

* Set `lang="nl"` on the document.
* Use semantic landmarks and one clear `h1` per page.
* Preserve visible keyboard focus on every interactive element.
* Maintain readable contrast for all text and controls.
* Add accessible names to links and icon-only controls.
* Mark decorative shapes as presentational so they do not clutter assistive technology.
* Never communicate important information through color or animation alone.
* Do not invent medical claims, practitioners, services, opening hours, prices, contact details, or emergency advice.

## 11. Implementation Principles

For a simple page, a dependency-free `index.html` with semantic HTML and scoped CSS is appropriate. For a framework application:

* Keep the tokens in the existing global design system.
* Build reusable primitives for the brand mark, page header, eyebrow, section heading, notice, practical info block, and footer.
* Preserve the hierarchy and spacing rhythm rather than copying static class names.
* Follow the existing framework's conventions for routing, icons, forms, and animation.
* Use the smallest abstraction that supports more than one real use case.
* Keep content separate from decorative geometry when possible.

## 12. Final Review

Before finishing a Rhodeland page, confirm:

* The page feels calm, professional, local, warm, and editorial.
* The palette and typography match the Rhodeland tokens.
* The content hierarchy is clear without relying on decorative elements.
* The page works as part of a complete site, not only as an isolated landing page.
* Practical patient information is easy to scan.
* No unconfirmed facts or fake contact actions were introduced.
* Desktop and mobile layouts have no overlap or horizontal overflow.
* Keyboard focus, landmarks, contrast, and reduced-motion behavior are present.
* A browser check confirms the title, page heading, main content, navigation, and footer render correctly.
</design-system>

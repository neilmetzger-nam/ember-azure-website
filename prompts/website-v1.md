# Claude Code Prompt: Ember & Azure — Restaurant Website v1

## Concept
Ember & Azure is an upscale casual Pan-Asian wood-fire restaurant opening at Village at Leesburg, Virginia. Floor-to-ceiling wood fire grill is the visual centerpiece. Full bar. Raw bar (oysters, crab legs, raw seafood). ~120 seats. Cuisine: Thai, Chinese, Japanese — creative and theatrical.

## Brand
- **Ember** = fire, warmth, grill, deep char, bold flavors
- **Azure** = water, raw bar, sky, cool contrast, sophistication

## Color Palette
- Background: Deep charcoal `#1a1a1a`
- Accent 1 (Ember): `#e85d04` — fire orange
- Accent 2 (Azure): `#0096c7` — cool blue
- Text: Warm white `#f8f4f0`
- Gold: `#c9a84c` — premium accent

## Typography
- Headlines: Playfair Display (Google Font)
- Body: Inter
- Logo: EMBER bold serif + & Azure lighter weight

## Tech Stack
Next.js 14 App Router, Tailwind CSS, TypeScript. No database — static content only.
Initialize as a new Next.js project in the current directory.

## Pages

### 1. Home (/)
- Full-viewport dark hero, subtle CSS ember/fire particle animation
- Logo + tagline: "Wood Fire. Raw Bar. Pan-Asian."
- CTAs: "Reserve a Table" (ember orange) | "View Menu" (ghost button)
- Story section: "Born from Fire and Water" — concept paragraph
- Featured dishes (3 cards): Yakitori Omakase, Whole Fire-Roasted Fish, Raw Bar Tower
- Raw Bar callout (azure blue accent): oysters, crab legs, seasonal crudo
- Bar section: craft cocktails (Ember Negroni, Azure Mule, Fire & Ice)
- Hours + location

### 2. Menu (/menu)
Sections: Raw Bar | From the Fire | Small Plates | Desserts | Bar Menu

Sample items (creative, realistic pricing):
- Hamachi Crudo, yuzu kosho, crispy shallot — $18
- Slow-Roasted Pork Ribs, tamarind glaze, pickled daikon — $34
- Whole Bronzino, green curry, kaffir lime — $42
- Oysters on the Half Shell (6pc) — $24
- King Crab Legs, clarified butter, finger lime — $58
- Yakitori Omakase (7 skewers) — $38
- Thai Beef Larb, toasted rice, herbs — $16
- Miso Black Cod, dashi broth, scallion — $36

### 3. Reservations (/reservations)
- Form: name, date, time, party size, email, requests
- OpenTable placeholder div
- "Walk-ins welcome at the bar"

### 4. About (/about)
- The story, wood fire philosophy
- "We've been feeding Loudoun County for years. Ember & Azure is what we've always wanted to build."

### 5. Contact (/contact)
- Address: Village at Leesburg, 1600 Village Market Blvd, Leesburg VA 20175
- Hours, phone, email
- Private dining inquiry form

## Navigation
Sticky header, transparent over hero → solid on scroll. Mobile hamburger.

## Image Placeholders
Use dark gradient divs everywhere. Add comments like `{/* IMAGE: wood-fire-grill-hero.jpg */}` so we know where to drop AI-generated images later.

## Footer
Logo, tagline, hours, "Opening 2026 — Village at Leesburg", social icons.

## Acceptance Criteria
- [ ] All 5 pages built and navigating
- [ ] Color palette consistent
- [ ] Mobile responsive
- [ ] Hero fire animation subtle
- [ ] `npm run build` clean

# Claude Code Prompt: Wire All Food Images Into Site

## Images Available in /public/images/
- wood-fire-grill-1.webp — hero background (already wired)
- wood-fire-grill-2.webp — story section (already wired)
- yakitori-skewers-1.webp — featured dish card + menu
- raw-bar-tower-1.webp — featured dish card + menu + raw bar callout section
- whole-fish-1.webp — featured dish card + menu
- pork-ribs-1.webp — menu section

## Changes to Make

### 1. Home Page — Featured Dish Cards (app/page.tsx)
Replace gradient placeholders with real images:
- Card 1 "Yakitori Omakase" → yakitori-skewers-1.webp
- Card 2 "Whole Fire-Roasted Fish" → whole-fish-1.webp  
- Card 3 "Raw Bar Tower" → raw-bar-tower-1.webp

Each card: image top half (object-cover, fixed height ~240px), text below.
Dark overlay on image for text legibility if any text overlaps.

### 2. Raw Bar Callout Section (Home)
Replace gradient placeholder with raw-bar-tower-1.webp as background.
Keep azure blue overlay on top (bg-[#0096c7]/80 or similar) so the
section still reads as the "azure" brand moment.

### 3. Menu Page (app/menu/page.tsx)
Add images to menu item cards where available:
- Yakitori Omakase → yakitori-skewers-1.webp
- Whole Bronzino → whole-fish-1.webp
- Slow-Roasted Pork Ribs → pork-ribs-1.webp
- Oysters / Raw Bar items → raw-bar-tower-1.webp

Menu item layout: small image thumbnail (left, ~80x80px square, rounded)
+ item name, description, price (right). Clean, simple.

### 4. About Page — Raw Bar Section
Replace the `{/* TODO: raw-bar-oysters.webp */}` placeholder with
raw-bar-tower-1.webp. Full width, object-cover, ~400px tall.

## Image Component Notes
- Use next/image with proper width/height or fill + container sizing
- All images should have descriptive alt text
- Keep sizes reasonable — these are 512px webp files, don't stretch too large

## Acceptance Criteria
- [ ] All 3 featured dish cards show real food photos
- [ ] Raw bar callout section has image background
- [ ] Menu items show thumbnails for available dishes
- [ ] About page raw bar section has real image
- [ ] `npm run build` clean, no missing image errors

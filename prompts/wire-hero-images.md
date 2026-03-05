# Claude Code Prompt: Wire Hero Images + Polish Site

## Images Available
The following images are in /public/images/:
- wood-fire-grill-1.webp — dramatic wood fire hearth, restaurant background
- wood-fire-grill-2.webp — similar angle, slightly different framing

## Changes to Make

### 1. Hero Section — Replace gradient placeholder with real image
In app/page.tsx hero section:
- Use wood-fire-grill-1.webp as the hero background via next/image
- Add a dark overlay: `bg-gradient-to-b from-black/60 via-black/40 to-black/80`
- Text must remain fully legible over the image
- Image should be `object-cover` full viewport height

### 2. "The Fire" / Story Section
- Use wood-fire-grill-2.webp as the left-side image in the story section
- Slight rounded corners, subtle shadow

### 3. Placeholder divs for remaining images
Leave gradient placeholder divs for:
- Yakitori skewers (comment: {/* TODO: yakitori-skewers.webp */})
- Raw bar tower (comment: {/* TODO: raw-bar-tower.webp */})
- Whole fish (comment: {/* TODO: whole-fish.webp */})
- Pork ribs (comment: {/* TODO: pork-ribs.webp */})

### 4. About the Grill (add to About page and story section)
The wood fire grill has a 12-inch opening and is 48 inches wide.
The fire burns behind a tiled surround — visible through the opening, theatrical.
Add this detail to the story copy: 
"Our 48-inch wood fire grill anchors the room. The fire glows behind hand-laid tile — 
you feel its warmth from every seat in the house."

### 5. Meta / SEO
Update layout.tsx:
- title: "Ember & Azure | Wood Fire Restaurant | Village at Leesburg"
- description: "Asian-inspired wood-fire cuisine, raw bar, and craft cocktails. Opening 2026 at Village at Leesburg, Virginia."

## Acceptance Criteria
- [ ] Hero loads with real grill image + dark overlay
- [ ] Text fully legible on hero
- [ ] Story section shows second grill image
- [ ] `npm run build` clean

# Canevia Flagship

Act as a Principal Frontend Engineer and World-Class Creative Director. Build a luxury, high-fashion flagship web application from scratch for CANEVIA (a sovereign pure sugarcane jaggery brand by KOTHULE INDUSTRIES).

The goal is to build an interactive, ultra-luxurious e-commerce web platform that surpasses Apple-level aesthetics, combining deep obsidian dark modes, brushed metallic gold foil accents, raw craft-paper textures, editorial serif typography, and 3D product interactions.

---

### BRAND IDENTITY & TECHNICAL SPECS:

- Brand Name: CANEVIA (Parent Company: Kothule Industries)
- Brand Tagline: "Pure Strength. Timeless Taste. / Sovereign Sugarcane Reserve"
- Food Safety License: FSSAI Lic No. 10022022000543
- Direct Sales Channels:
  - WhatsApp Direct Sales: +91 9922341509
  - Email Desk: princegojo5004@gmail.com
- Primary Palette: Obsidian Dark (#060B11), Metallic Brushed Gold (#D4AF37), Craft Paper Tone (#D8C3A5), Warm Ivory (#FAF8F5).
- Fonts: Serif for editorial luxury headlines + Sans-Serif for high-legibility specs.

---

### CORE SECTIONS & INTERACTIVE ARCHITECTURE TO BUILD:

1. GLASSMORPHIC STICKY NAVIGATION BAR:
   - Floating glassmorphism navbar with brand logos (Canevia + Kothule Industries mark).
   - Links: Overview, 3D Packaging, Reserve Collection, Heritage, B2B Wholesale.
   - Interactive Shopping Bag button displaying dynamic live item badge counters.

2. HERO SECTION (HIGH-FASHION EDITORIAL):
   - Dramatic ambient gold radial glow in the background.
   - Bold headline: "Sovereign Sweetness." with glowing gold shimmer gradients.
   - Smooth CTA buttons: "Acquire Selection" and "Inspect Packaging".

3. INTERACTIVE 3D PACKAGING INSPECTOR (FLIP CARD ENGINE):
   - A realistic 3D craft pouch card that physically rotates 180 degrees on click/tap.
   - FRONT SIDE: Canevia brand mark, net weight badge, transparent product display window simulation, FSSAI certification badge, 100% Veg symbol.
   - BACK SIDE: Kothule Industry manufacturer guarantee, exact nutritional table (Energy: 375 kcal, Carbs: 95g per 100g), ingredients list (100% Sugarcane Jaggery), and storage instructions.

4. RESERVE COLLECTION STOREFRONT:
   - Product Grid featuring 3 primary formulations:
     1. Jaggery Cubes (Hand-Carved Amber Geometry)
     2. Jaggery Powder (Micro-Ground Velvet Dust)
     3. Jaggery Syrup (Slow-Boiled Golden Nectar)
   - Interactive Weight Variant Selector for each product: [250g], [500g], [1kg].
   - Dynamic price updates when a user selects different weight variants.
   - Instant "Add to Bag" button with slide-out toast alerts.

5. HERITAGE & MANUFACTURING EXCELLENCE SECTION:
   - Highlights parent company stewardship: Kothule Industries.
   - Features 4 Quality Pillars: Single-Origin Cane, Zero Chemical Bleaching/Sulfur, Rich Mineral Preservation (Iron/Magnesium), and Moisture-Sealed Barrier Packaging.

6. B2B / WHOLESALE CONCIERGE MODAL:
   - Custom quote portal for commercial bakeries, hotels, and export clients (50kg – 500kg+ bulk orders) with direct WhatsApp query routing.

7. SLIDE-OVER SHOPPING BAG & DUAL-DISPATCH CHECKOUT:
   - Slide-over bag drawer to review quantities, modify items, and view total calculations in INR (₹).
   - Checkout Modal collecting Customer Name, Phone, Email, and Shipping Address.
   - UPON SUBMISSION: Formats a structured text receipt invoice and automatically triggers two actions:
     1. Opens WhatsApp with the pre-filled order text sent to +91 9922341509.
     2. Triggers an automated backup mailto link to princegojo5004@gmail.com.

---

### DESIGN REQUIREMENTS:

- Ensure smooth micro-interactions, hover glass effects, gold shimmer animations, and responsive layouts across mobile, tablet, and desktop screens.
- Use clean component modularity, state management for cart/modal triggers, and Shadcn UI / Lucide React icons where applicable.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ccbc69fa-8c4d-48d0-bc98-1287b26d3dc6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

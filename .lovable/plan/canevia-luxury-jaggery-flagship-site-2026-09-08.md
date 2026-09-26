# CANEVIA — Luxury Jaggery Flagship Site

A single-page, dark-luxury storefront for CANEVIA by Kothule Industries: obsidian background, brushed-gold accents, craft-paper texture, editorial serif headlines. Orders are sent through WhatsApp and email — no payment gateway, no accounts, no database.

## What gets built

**1. Floating navigation**
Glass-effect sticky bar with the Canevia leaf mark and Kothule wordmark, links to Overview, 3D Packaging, Reserve Collection, Heritage, B2B Wholesale, and a shopping-bag button with a live count badge.

**2. Hero**
Ambient gold radial glow, shimmering headline "Sovereign Sweetness.", tagline "Pure Strength. Timeless Taste.", buttons "Acquire Selection" and "Inspect Packaging".

**3. 3D packaging inspector**
A realistic pouch card using the uploaded CANEVIA front and back pouch images as its two layers, flipping 180 degrees on click/tap. A 100 g / 20 g serving toggle controls the visible nutrition values. The label includes FSSAI Lic No. 10022022000543, the vegetarian mark, manufacturer guarantee, ingredients "Sugarcane Jaggery (100%)", and storage instructions.

**4. Reserve Collection**
Three products — Jaggery Cubes, Jaggery Powder, Jaggery Syrup — each with 250 g / 500 g / 1 kg selectors, price updating on selection, and "Add to Bag" with a slide-in toast.

**5. Heritage**
Kothule Industries stewardship plus four quality pillars: single-origin cane, zero chemical bleaching/sulphur, mineral preservation (iron/magnesium), moisture-sealed barrier packaging.

**6. B2B concierge modal**
Bulk enquiry form (name, company, city, notes) with selectable 50 kg, 100 kg, and 500 kg+ tiers. Each tier displays its discount badge. Submission opens WhatsApp to +91 9922341509 with the enquiry pre-filled.

**7. Bag drawer + checkout**
Slide-over bag with quantity edits, remove, and ₹ totals. Checkout modal collects name, phone, email, shipping address. On submit it builds a clean Markdown receipt, safely passes it through `encodeURIComponent()`, and opens WhatsApp to +91 9922341509. The confirmation state also provides explicit **Send Backup Email** and **Copy Order Invoice to Clipboard** buttons, with success feedback.

## Content assumption

Prices and B2B discount percentages were not provided, so the first version will use clearly marked sample values:

- Cubes: ₹199 / ₹369 / ₹699
- Powder: ₹189 / ₹349 / ₹659
- Syrup: ₹249 / ₹459 / ₹869
- B2B badges: 50 kg “Trade Rate”, 100 kg “Preferred Rate”, 500 kg+ “Export Rate” (no invented percentage claims)

Shipping/GST handling is out of scope; the receipt shows item totals only. These values can be replaced when final commercial pricing is available.

## Technical notes

- TanStack Start, single index route with focused CANEVIA components; shadcn UI + lucide-react icons; sonner for toasts.
- Design tokens (obsidian #060B11, gold #D4AF37, craft #D8C3A5, ivory #FAF8F5, gold-foil gradient, glass and glow shadows) added to `src/styles.css` in oklch; serif display + sans body fonts loaded in the document head.
- Cart state in React context with `useReducer`, persisted to localStorage; no backend.
- Packaging flip uses CSS 3D transforms (`perspective` / `rotateY`), keyboard support, and reduced-motion behavior. Uploaded pouch photography is preserved as the actual front/back artwork rather than recreated.
- Uploaded logos and selected pouch images become CDN assets; the Canevia leaf mark also becomes the favicon.
- Client and checkout fields receive validation and length limits. WhatsApp and mail links use encoded payloads; invoice clipboard access is user-triggered with a fallback message if unavailable.
- Page head gets a CANEVIA-specific title, description, and social tags.
- Verification covers desktop and mobile rendering, the pouch flip/toggle, weight-price changes, cart edits, B2B tier badges, WhatsApp/email payloads, and clipboard copying.

import { createFileRoute } from "@tanstack/react-router";
import { Storefront } from "@/components/canevia/Storefront";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CANEVIA | Sovereign Sugarcane Reserve · Pure Jaggery Radically Refined" },
      {
        name: "description",
        content:
          "Discover CANEVIA: India's sovereign pure sugarcane jaggery reserve. Single-origin Maharashtra cane, woodfired crystallization, clarified exclusively with wild botanical okra extract. Hand-carved cubes, velvet powder, and slow-boiled amber syrup by Kothule Industries.",
      },
      { property: "og:title", content: "CANEVIA | Sovereign Sugarcane Reserve" },
      {
        property: "og:description",
        content:
          "Pure strength. Timeless taste. Hand-carved amber geometry, micro-ground velvet dust, and slow-boiled golden nectar from the riverbanks of Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CANEVIA | Sovereign Sugarcane Reserve" },
      {
        name: "twitter:description",
        content:
          "Pure jaggery. Radically refined. FSSAI Lic. No. 10022022000543 by Kothule Industries.",
      },
    ],
  }),
  component: Storefront,
});

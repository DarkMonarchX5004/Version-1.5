import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/canevia/Navbar";
import { Footer } from "@/components/canevia/Footer";
import { ProductCard } from "@/components/canevia/ProductCard";
import { WholesaleBand } from "@/components/canevia/WholesaleBand";
import { products, type ProductId } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Pure Jaggery Collection | CANEVIA" },
      {
        name: "description",
        content:
          "Explore CANEVIA's pure sugarcane jaggery collection: hand-cut golden cubes, fine powder, and slow-boiled golden syrup.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [filter, setFilter] = useState<"all" | ProductId>("all");

  const filterOptions = [
    { id: "all", label: "All Varieties" },
    { id: "cubes", label: "Golden Cubes" },
    { id: "powder", label: "Velvet Powder" },
    { id: "syrup", label: "Golden Syrup" },
  ] as const;

  const displayedProducts =
    filter === "all"
      ? Object.values(products)
      : Object.values(products).filter((p) => p.id === filter);

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Category Header */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Single-Origin Maharashtra
              </span>
            </div>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl text-white tracking-tight leading-[1.02] mb-6">
              The Pure Jaggery <br />
              <em className="gold-shimmer not-italic font-normal">Collection.</em>
            </h1>
            <p className="text-xs sm:text-sm text-[#A8A49A] leading-relaxed">
              <strong className="block font-semibold text-white">Pure Cane, Three Textures</strong>
              <span className="block">
                Riverbank-grown Maharashtra cane meets wild okra, iron vats, and daily cooking.
              </span>
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-[#20201C]">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setFilter(opt.id);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  filter === opt.id
                    ? "bg-[#D4AF37] text-[#080807] shadow-[0_0_15px_rgba(212,175,55,0.3)] font-bold"
                    : "bg-[#121210] text-[#706E66] hover:text-white border border-[#242420] hover:border-[#383830]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        {/* Wholesale Band */}
        <WholesaleBand />
      </main>

      <Footer />
    </div>
  );
}

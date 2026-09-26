import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search as SearchIcon, X, Sparkles } from "lucide-react";
import { Navbar } from "@/components/canevia/Navbar";
import { Footer } from "@/components/canevia/Footer";
import { ProductCard } from "@/components/canevia/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search Collection | CANEVIA" },
      {
        name: "description",
        content:
          "Search CANEVIA pure jaggery varieties, pairings, and process.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");

  const matchingProducts = Object.values(products).filter((product) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.note.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.tastingNotes.some((t) => t.toLowerCase().includes(q)) ||
      product.pairings.some((p) => p.toLowerCase().includes(q))
    );
  });

  const popularTags = [
    "Cubes",
    "Powder",
    "Syrup",
    "Molasses",
    "Okra",
    "Single Origin",
    "Coffee",
    "Chai",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-12">
          {/* Search Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold block mb-3">
              Product Search
            </span>
            <h1 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Search the Collection
            </h1>

            {/* Input Field */}
            <div className="relative flex items-center bg-[#11110F] border border-[#282824] rounded-full px-5 h-14 shadow-lg focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20 transition-all">
              <SearchIcon className="w-5 h-5 text-[#D4AF37] shrink-0 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search varieties, pairings, ingredients, purity standards..."
                className="w-full h-full bg-transparent border-none outline-none text-xs sm:text-sm text-white placeholder:text-[#706E66]"
                autoFocus
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                  }}
                  className="p-1.5 text-[#706E66] hover:text-white transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Suggested Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
              <span className="text-[#706E66] text-[11px] font-mono">Popular Searches:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setQuery(tag);
                  }}
                  className="px-3 py-1 rounded-full bg-[#141412] text-[#A8A49A] hover:text-white border border-[#242420] hover:border-[#D4AF37]/40 transition-colors cursor-pointer text-[11px]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="mt-8">
            <div className="flex items-center justify-between pb-6 border-b border-[#20201C] mb-8 text-xs text-[#706E66] font-mono">
              <span>
                {matchingProducts.length}{" "}
                {matchingProducts.length === 1 ? "Product Found" : "Products Found"}
              </span>
              {query && <span>Query: "{query}"</span>}
            </div>

            {matchingProducts.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <p className="text-sm text-[#706E66] mb-4">
                  No products found for "{query}".
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="px-5 py-2 rounded-full bg-[#181815] text-[#D4AF37] border border-[#282824] text-xs font-semibold uppercase tracking-wider"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {matchingProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

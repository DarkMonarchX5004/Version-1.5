import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { playTactileClick } from "@/lib/sound-effects";

export function CollectionSection() {
  return (
    <section
      id="collection"
      className="py-24 sm:py-36 px-6 sm:px-12 bg-[#0A0A09] border-t border-[#22221E] relative"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                The Pure Jaggery Collection
              </span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.02]">
              Three varieties. <br />
              <em className="gold-shimmer not-italic font-normal">One pure sugarcane.</em>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-xs sm:text-sm text-[#A8A49A] max-w-md leading-relaxed mb-5 md:text-right">
              Made from fresh winter sugarcane along Maharashtra riverbanks. 100% unrefined,
              chemical-free, and rich in natural minerals. Choose the variety that fits your routine.
            </p>
            <Button
              variant="outline"
              asChild
              className="rounded-full px-6 h-11 text-xs font-semibold uppercase tracking-wider border-[#2C2C26] bg-[#141412] hover:bg-[#1C1C19] text-white cursor-pointer"
              onClick={() => playTactileClick()}
            >
              <Link to="/collection">
                View All Varieties <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#D4AF37]" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 3 Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(products).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Plus, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { inr, weights, type ProductDetails, type Weight } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: ProductDetails; index?: number }) {
  const { add } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<Weight>("500g");

  const currentPrice = product.prices[selectedWeight];

  return (
    <article
      data-cursor="INSPECT"
      className="group relative flex flex-col bg-[#11110F] rounded-3xl overflow-hidden border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/50 hover:shadow-[0_20px_55px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.12)] hover:-translate-y-1.5 transition-all duration-400"
    >
      {/* Index Number & Badge Row */}
      <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
        <span className="font-mono text-[10px] font-semibold tracking-widest text-[#A8A49A] bg-[#0A0A09]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#282824]">
          N° 0{index + 1}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-[#1A1A17]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
          {product.badge}
        </span>
      </div>

      {/* Image Stage with Subtle Amber Aura */}
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="relative block aspect-square w-full overflow-hidden bg-[#0A0A09] p-6 focus:outline-none"
      >
        <div className="absolute inset-0 bg-radial from-[#D4AF37]/10 via-[#D4AF37]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter saturate-[0.98] group-hover:scale-106 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </Link>

      {/* Product Content Details */}
      <div className="flex flex-col flex-1 p-6 sm:p-8 bg-[#11110F] border-t border-[#1F1F1B]">
        <span className="text-[11px] font-medium text-[#706E66] tracking-wider uppercase mb-1">
          {product.note}
        </span>

        <h3 className="font-display text-2xl font-semibold text-white mb-2 tracking-tight">
          <Link
            to="/product/$id"
            params={{ id: product.id }}
            className="hover:text-[#D4AF37] transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-xs text-[#A8A49A] line-clamp-2 leading-relaxed mb-6 flex-1">
          {product.descriptionHeadline && (
            <strong className="block font-semibold text-white">{product.descriptionHeadline}</strong>
          )}
          <span className="block">{product.description}</span>
        </p>

        {/* Weight Selector Pill Group */}
        <div
          className="flex items-center gap-1.5 p-1 rounded-xl bg-[#080807] border border-[#242420] mb-6"
          role="group"
          aria-label={`${product.name} weight selection`}
        >
          {weights.map((weight) => (
            <button
              key={weight}
              type="button"
              onClick={() => {
                setSelectedWeight(weight);
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedWeight === weight
                  ? "bg-[#D4AF37] text-[#080807] shadow-xs font-bold"
                  : "text-[#706E66] hover:text-[#FAF7F0]"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>

        {/* Price & Primary Action Row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1C1C19]">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#706E66] uppercase tracking-wider">
              Price
            </span>
            <strong className="font-display text-2xl font-semibold text-white">
              {inr.format(currentPrice)}
            </strong>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-full px-3.5 text-xs border-[#2A2A24] bg-[#161613] hover:bg-[#20201C] text-[#FAF7F0] cursor-pointer"
            >
              <Link to="/product/$id" params={{ id: product.id }}>
                Details <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </Button>

            <Button
              size="sm"
              className="rounded-full px-4 text-xs bg-[#D4AF37] text-[#080807] hover:bg-[#EAD698] font-semibold transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] active:scale-95 cursor-pointer"
              onClick={() => {
                add(product.id, selectedWeight);
              }}
              data-cursor="ADD"
            >
              Add to Bag <Plus className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

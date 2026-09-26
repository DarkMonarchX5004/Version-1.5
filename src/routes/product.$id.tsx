import { useState, useEffect } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/canevia/Navbar";
import { Footer } from "@/components/canevia/Footer";
import { PurityBadgesStrip } from "@/components/canevia/PurityBadge";
import { useCart } from "@/lib/cart-context";
import {
  inr,
  products,
  weights,
  type ProductDetails,
  type ProductId,
  type Weight,
} from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products[params.id as ProductId];
    if (!product) {
      throw notFound();
    }
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: `${p?.name || "Product"} | CANEVIA Pure Jaggery` },
        {
          name: "description",
          content: `${p?.tagline} Pure single-origin sugarcane jaggery by Kothule Industries in Maharashtra.`,
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();

  const [selectedWeight, setSelectedWeight] = useState<Weight>("500g");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.image);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [servingSize, setServingSize] = useState<100 | 20>(100);

  const currentPrice = product.prices[selectedWeight];
  const totalPrice = currentPrice * quantity;
  const factor = servingSize / 100;

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 650);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    add(product.id, selectedWeight, quantity);
  };

  const handleDirectWhatsApp = () => {
    const text = `*CANEVIA — ORDER INQUIRY*\nProduct: *${product.name}* (${product.subtitle})\nPack Size: ${selectedWeight} × ${quantity}\nTotal: ${inr.format(totalPrice)}\n\nHi, I would like to order this. Please confirm availability and delivery.`;
    window.open(
      `https://wa.me/919922341509?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-[1360px] mx-auto px-6 sm:px-12 py-4 mb-4">
          <nav className="flex items-center gap-2 text-xs text-[#706E66]" aria-label="Breadcrumb">
            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#383830]" />
            <Link
              to="/collection"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-3 h-3 text-[#383830]" />
            <span className="text-[#D4AF37] font-medium">{product.name}</span>
          </nav>
        </div>

        {/* Master Split Stage */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Left Visual Column (7 cols) - Gallery Viewport */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Master Viewport */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl bg-[#0F0F0D] border border-[#242420] flex items-center justify-center p-8 sm:p-12 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
              <div className="absolute top-5 left-5 z-10">
                <span className="font-mono text-xs text-[#D4AF37] bg-[#161613]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#2E2E28]">
                  {product.subtitle}
                </span>
              </div>
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain filter saturate-95 hover:scale-103 transition-transform duration-500 ease-out select-none"
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-2xl bg-[#11110F] border p-2 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${
                    activeImage === img
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-md scale-102"
                      : "border-[#242420] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Tasting Notes Pill Strip */}
            <div className="p-6 rounded-2xl bg-[#11110F] border border-[#242420] mt-2">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold block mb-3">
                Natural Tasting Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="text-xs font-medium text-[#FAF7F0] bg-[#181815] px-3.5 py-1.5 rounded-full border border-[#2A2A24]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Purchasing & Specification Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                {product.badge}
              </span>
            </div>

            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-white tracking-tight leading-[1.05] mb-2">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm font-medium text-[#A8A49A] mb-5">{product.tagline}</p>

            {/* Price Display */}
            <div className="flex items-baseline gap-3 pb-6 border-b border-[#20201C]">
              <strong className="font-display text-3xl sm:text-4xl font-semibold text-white">
                {inr.format(currentPrice)}
              </strong>
              <span className="text-xs text-[#706E66]">
                Tax included · Free delivery above ₹999
              </span>
            </div>

            {/* Weight Allocation Selection */}
            <div className="py-6 border-b border-[#20201C]">
              <div className="flex justify-between items-center mb-3 text-xs">
                <span className="font-semibold text-white uppercase tracking-wider text-[11px]">
                  Select Pack Size
                </span>
                <span className="text-[#D4AF37] font-mono">{selectedWeight} resealable pouch</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {weights.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSelectedWeight(w)}
                    className={`py-3.5 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedWeight === w
                        ? "bg-[#D4AF37] text-[#080807] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] font-bold"
                        : "bg-[#11110F] text-white border-[#242420] hover:border-[#383830]"
                    }`}
                  >
                    <span className="block text-sm font-display font-semibold">{w}</span>
                    <span
                      className={`text-[10px] mt-0.5 block ${
                        selectedWeight === w ? "text-[#080807]" : "text-[#706E66]"
                      }`}
                    >
                      {inr.format(product.prices[w])}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add-To-Bag Action */}
            <div className="py-6 border-b border-[#20201C] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#282824] rounded-full bg-[#11110F] h-12 px-2 shadow-inner">
                  <button
                    type="button"
                    onClick={() => {
                      setQuantity(Math.max(1, quantity - 1));
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1C1C18] text-white cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-mono text-sm font-semibold text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1C1C18] text-white cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <Button
                  size="lg"
                  className="flex-1 rounded-full h-12 text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-[0.99] cursor-pointer"
                  onClick={handleAddToCart}
                >
                  Add {quantity} to Bag · {inr.format(totalPrice)}
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-full h-11 text-xs font-medium border-[#282824] bg-[#11110F] hover:bg-[#181815] text-[#A8A49A] hover:text-white transition-colors cursor-pointer"
                onClick={handleDirectWhatsApp}
              >
                <MessageCircle className="w-4 h-4 mr-2 text-[#D4AF37]" />
                Order Directly on WhatsApp
              </Button>

              <div className="flex items-center gap-2.5 text-xs text-[#706E66] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero chemicals or bleach · Clarified naturally with wild okra</span>
              </div>
            </div>

            {/* Specifications Matrix */}
            <div className="py-6 border-b border-[#20201C] flex flex-col gap-3 text-xs">
              <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Product Details
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#11110F] border border-[#242420]">
                  <span className="text-[10px] text-[#706E66] block">Origin</span>
                  <strong className="text-white text-xs">{product.characteristics.origin}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#11110F] border border-[#242420]">
                  <span className="text-[10px] text-[#706E66] block">Process</span>
                  <strong className="text-white text-xs">{product.characteristics.process}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#11110F] border border-[#242420]">
                  <span className="text-[10px] text-[#706E66] block">Texture</span>
                  <strong className="text-white text-xs">
                    {product.characteristics.consistency}
                  </strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#11110F] border border-[#242420]">
                  <span className="text-[10px] text-[#706E66] block">Shelf Life</span>
                  <strong className="text-white text-xs">
                    {product.characteristics.shelfLife}
                  </strong>
                </div>
              </div>
            </div>

            {/* Culinary Pairings */}
            <div className="py-6 text-xs">
              <span className="text-[11px] font-mono tracking-widest text-[#706E66] uppercase block mb-3">
                Suggested Pairings
              </span>
              <ul className="flex flex-col gap-2 text-[#A8A49A]">
                {product.pairings.map((pairing) => (
                  <li key={pairing} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{pairing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Nutritional Breakdown Table Section */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 py-16 bg-[#0E0E0C] rounded-3xl border border-[#22221E] mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                  Nutritional Information
                </span>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Nutrition Facts
                </h3>
              </div>

              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#080807] border border-[#242420]">
                <button
                  type="button"
                  onClick={() => {
                    setServingSize(100);
                  }}
                  className={`px-3.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    servingSize === 100 ? "bg-[#D4AF37] text-[#080807] font-bold" : "text-[#706E66]"
                  }`}
                >
                  Per 100g
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setServingSize(20);
                  }}
                  className={`px-3.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    servingSize === 20 ? "bg-[#D4AF37] text-[#080807] font-bold" : "text-[#706E66]"
                  }`}
                >
                  Per Serving (20g)
                </button>
              </div>
            </div>

            <div className="bg-[#121210] rounded-2xl border border-[#242420] overflow-hidden shadow-xs">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#161613] border-b border-[#22221E] text-[#706E66] uppercase tracking-wider font-mono text-[10px]">
                  <tr>
                    <th className="py-3.5 px-5">Nutrient</th>
                    <th className="py-3.5 px-5 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C1C18]">
                  <tr>
                    <td className="py-3 px-5 font-medium text-white">Energy (Calories)</td>
                    <td className="py-3 px-5 text-right font-display font-semibold text-white">
                      {Math.round(product.nutritionPer100g.energy * factor)} kcal
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-medium text-white">Carbohydrates</td>
                    <td className="py-3 px-5 text-right font-display font-semibold text-white">
                      {Math.round(product.nutritionPer100g.carbohydrates * factor)} g
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-medium text-white">Sugars</td>
                    <td className="py-3 px-5 text-right font-display font-semibold text-white">
                      {Math.round(product.nutritionPer100g.sugars * factor)} g
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-medium text-white">Iron</td>
                    <td className="py-3 px-5 text-right font-display font-semibold text-[#D4AF37]">
                      {product.nutritionPer100g.iron}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-medium text-white">Magnesium</td>
                    <td className="py-3 px-5 text-right font-display font-semibold text-[#D4AF37]">
                      {product.nutritionPer100g.magnesium}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-5 font-medium text-white">Sulphur & Bleach</td>
                    <td className="py-3 px-5 text-right font-semibold text-[#4CAF50]">
                      Zero (Not Detected)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Purity Badges Strip */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              Our Standards
            </span>
            <h3 className="font-display text-3xl font-semibold text-white mt-2">
              Pure from field to boil.
            </h3>
          </div>
          <PurityBadgesStrip />
        </section>

        {/* Client Tasting Reviews */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 mb-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#11110F] border border-[#242420]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#20201C]">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  Customer Reviews
                </span>
                <h3 className="font-display text-2xl font-semibold text-white">
                  What People Say
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-white">5.0 / 5.0 Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#A8A49A] italic leading-relaxed">
                  "The caramel depth in this jaggery is unlike anything in commercial markets. You
                  can taste the earthen minerals and cane field terroir immediately."
                </p>
                <div className="flex flex-col text-[11px]">
                  <strong className="text-white">Devendra S.</strong>
                  <span className="text-[#706E66]">Pastry Chef, Mumbai</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#A8A49A] italic leading-relaxed">
                  "Knowing it is clarified solely with wild okra juice and contains zero bleaching
                  agents makes it the only jaggery we stock in our home kitchen."
                </p>
                <div className="flex flex-col text-[11px]">
                  <strong className="text-white">Priyanka K.</strong>
                  <span className="text-[#706E66]">Verified Customer, Pune</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs text-[#A8A49A] italic leading-relaxed">
                  "The hand-carved geometry holds its crystalline integrity beautifully. Perfect
                  pairing alongside an artisanal single-origin pour-over."
                </p>
                <div className="flex flex-col text-[11px]">
                  <strong className="text-white">Vikram M.</strong>
                  <span className="text-[#706E66]">Coffee Roaster, Bangalore</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Add-To-Bag Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#0C0C0B]/95 backdrop-blur-xl border-t border-[#242420] py-3.5 px-6 sm:px-12 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={product.image}
                alt=""
                className="w-10 h-10 rounded-xl bg-[#121210] border border-[#282824] object-contain p-1"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <strong className="font-display text-sm font-semibold text-white">
                  {product.name}
                </strong>
                <span className="text-[11px] text-[#706E66]">{selectedWeight} pouch</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <strong className="font-display text-lg font-semibold text-[#D4AF37]">
                {inr.format(currentPrice)}
              </strong>
              <Button
                size="sm"
                className="rounded-full px-6 bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                onClick={handleAddToCart}
              >
                Add to Bag
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

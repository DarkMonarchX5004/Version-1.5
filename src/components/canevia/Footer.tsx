import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, Phone, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { brandAssets, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { playTactileClick } from "@/lib/sound-effects";

export function Footer() {
  const { setB2BOpen } = useCart();

  return (
    <footer className="bg-[#060605] text-[#FAF7F0] pt-24 pb-12 px-6 sm:px-12 border-t border-[#1F1F1B] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#1C1C18]">
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
          <Link
            to="/"
            className="flex items-center gap-3 mb-6 focus:outline-none"
            onClick={() => playTactileClick()}
            aria-label="CANEVIA Home"
          >
            <img
              src={brandAssets.mark}
              alt="CANEVIA"
              className="w-8 h-9 object-contain brightness-125"
            />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg tracking-[0.16em] text-white">
                CANEVIA
              </span>
              <span className="text-[7px] tracking-[0.24em] text-[#D4AF37] font-semibold uppercase">
                Sovereign Sugarcane Reserve
              </span>
            </div>
          </Link>

          <p className="text-xs text-[#A8A49A] leading-relaxed max-w-sm mb-6">
            Single-origin heirloom sugarcane harvested from the riverbanks of Maharashtra, clarified
            with wild okra extract, and simmered in woodfired iron vats. Pure unrefined,
            unbleached jaggery.
          </p>

          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0E0E0C] border border-[#22221E] text-[11px] text-[#A8A49A] max-w-sm">
            <img
              src={brandAssets.kothuleMark}
              alt="Kothule Industries"
              className="w-7 h-10 object-contain opacity-80"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-medium">Crafted by Kothule Industries</span>
              <span className="text-[10px] text-[#706E66]">
                Estate Mill & Office, Pune, MH
              </span>
            </div>
          </div>
        </div>

        {/* The Reserve Navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
            Shop
          </span>
          <ul className="flex flex-col gap-2.5 text-xs text-[#A8A49A]">
            {Object.values(products).map((product) => (
              <li key={product.id}>
                <Link
                  to="/product/$id"
                  params={{ id: product.id }}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                  onClick={() => playTactileClick()}
                >
                  <span>{product.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/collection"
                className="hover:text-white transition-colors"
                onClick={() => playTactileClick()}
              >
                All Varieties
              </Link>
            </li>
            <li>
              <a
                href="/#packaging"
                className="hover:text-white transition-colors"
                onClick={() => playTactileClick()}
              >
                Packaging Details
              </a>
            </li>
          </ul>
        </div>

        {/* Purity Standards */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
            Our Standards
          </span>
          <ul className="flex flex-col gap-2.5 text-xs text-[#A8A49A]">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Clarified with Wild Okra</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>No Sulphur or Bleach</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Woodfired Iron Vats</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Single-Origin Maharashtra</span>
            </li>
            <li className="pt-2 text-[11px] text-[#706E66]">
              FSSAI Lic. No. <strong className="text-[#FAF7F0]">10022022000543</strong>
            </li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
            Direct Contact
          </span>
          <div className="flex flex-col gap-3 text-xs text-[#A8A49A]">
            <a
              href="https://wa.me/919922341509"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              onClick={() => playTactileClick()}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>WhatsApp (+91 99223 41509)</span>
            </a>
            <a
              href="tel:+919922341509"
              className="flex items-center gap-2 hover:text-white transition-colors"
              onClick={() => playTactileClick()}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 99223 41509</span>
            </a>
            <a
              href="mailto:princegojo5004@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              onClick={() => playTactileClick()}
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>princegojo5004@gmail.com</span>
            </a>
            <button
              type="button"
              onClick={() => {
                playTactileClick();
                setB2BOpen(true);
              }}
              className="mt-2 text-left text-xs text-[#D4AF37] hover:text-[#EAD698] font-medium transition-colors cursor-pointer"
            >
              Wholesale & Bulk Orders (50kg+) →
            </button>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="max-w-[1360px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#706E66]">
        <p>© 2026 Kothule Industries. All rights reserved.</p>
        <p className="flex items-center gap-4">
          <span>Crafted in Maharashtra, India</span>
          <span>•</span>
          <span>Pure Unrefined Jaggery</span>
        </p>
      </div>
    </footer>
  );
}

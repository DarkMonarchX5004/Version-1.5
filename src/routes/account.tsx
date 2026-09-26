import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/canevia/Navbar";
import { Footer } from "@/components/canevia/Footer";
import { useCart } from "@/lib/cart-context";
import { brandAssets } from "@/lib/products";
import { playTactileClick } from "@/lib/sound-effects";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Contact & Support | CANEVIA" },
      { name: "description", content: "Get in touch with Kothule Industries for orders, inquiries, and wholesale." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { setB2BOpen } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-12">
          {/* Header */}
          <div className="pb-8 border-b border-[#20201C] mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                Kothule Industries
              </span>
            </div>
            <h1 className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight">
              Contact & Support
            </h1>
            <p className="text-xs sm:text-sm text-[#A8A49A] mt-2 max-w-xl leading-relaxed">
              Reach our team directly for order updates, general questions, and wholesale requests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Card (7 cols) - Concierge Channels */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-[#11110F] p-6 sm:p-8 rounded-3xl border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#181815] border border-[#282824] flex items-center justify-center text-[#D4AF37]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      Direct Support
                    </h3>
                    <p className="text-xs text-[#706E66]">Available 9:00 AM – 7:00 PM IST · Daily</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-xs">
                  <a
                    href="https://wa.me/919922341509"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#0A0A08] border border-[#242420] hover:border-[#D4AF37] transition-all group cursor-pointer"
                    onClick={() => playTactileClick()}
                  >
                    <div className="flex items-center gap-3.5">
                      <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                      <div>
                        <strong className="text-sm text-white block group-hover:text-[#D4AF37] transition-colors">
                          WhatsApp Us
                        </strong>
                        <span className="text-[#706E66]">
                          +91 99223 41509 (Fastest response)
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#706E66] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href="tel:+919922341509"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#0A0A08] border border-[#242420] hover:border-[#D4AF37] transition-all group cursor-pointer"
                    onClick={() => playTactileClick()}
                  >
                    <div className="flex items-center gap-3.5">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                      <div>
                        <strong className="text-sm text-white block group-hover:text-[#D4AF37] transition-colors">
                          Call Us
                        </strong>
                        <span className="text-[#706E66]">+91 99223 41509</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#706E66] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href="mailto:princegojo5004@gmail.com"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#0A0A08] border border-[#242420] hover:border-[#D4AF37] transition-all group cursor-pointer"
                    onClick={() => playTactileClick()}
                  >
                    <div className="flex items-center gap-3.5">
                      <Mail className="w-5 h-5 text-[#D4AF37]" />
                      <div>
                        <strong className="text-sm text-white block group-hover:text-[#D4AF37] transition-colors">
                          Email Us
                        </strong>
                        <span className="text-[#706E66]">princegojo5004@gmail.com</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#706E66] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Wholesale Portal Trigger */}
              <div className="bg-[#11110F] p-6 sm:p-8 rounded-3xl border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="font-display text-base font-semibold text-white">
                    Wholesale & Bulk Orders
                  </h4>
                </div>
                <p className="text-xs text-[#A8A49A] leading-relaxed">
                  Bulk order tiers (50kg, 100kg, 500kg+) with direct estate pricing for cafes,
                  bakeries, restaurants, and export clients.
                </p>
                <Button
                  className="rounded-full bg-[#D4AF37] hover:bg-[#EAD698] text-[#080807] text-xs font-semibold uppercase tracking-wider h-11 w-full sm:w-auto self-start transition-colors cursor-pointer"
                  onClick={() => {
                    playTactileClick();
                    setB2BOpen(true);
                  }}
                >
                  Request Wholesale Quote <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Card (5 cols) - Estate Guarantee & Licensing */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#11110F] p-6 sm:p-8 rounded-3xl border border-[#242420] shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col gap-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#1C1C18]">
                  <img
                    src={brandAssets.kothuleMark}
                    alt="Kothule Industries Seal"
                    className="w-8 h-11 object-contain brightness-125"
                  />
                  <div>
                    <h4 className="font-display text-base font-semibold text-white">
                      Kothule Industries
                    </h4>
                    <span className="text-[10px] font-mono text-[#706E66] uppercase">
                      Estate Mill & Office, Pune, MH
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-xs text-[#A8A49A]">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">FSSAI Certified</strong>
                      <span className="text-[11px] text-[#706E66] font-mono">
                        License No. 10022022000543
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Single-Origin Guarantee</strong>
                      <span className="text-[11px] text-[#706E66]">
                        Pure sugarcane harvested exclusively in Maharashtra.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Clarified with Wild Okra</strong>
                      <span className="text-[11px] text-[#706E66]">
                        100% natural clarifier with zero chemical sulphur or bleaching agents.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1C18]">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full rounded-full border-[#282824] bg-[#141412] hover:bg-[#1E1E1A] text-white text-xs font-semibold uppercase tracking-wider h-11 cursor-pointer"
                    onClick={() => playTactileClick()}
                  >
                    <Link to="/collection">
                      Explore All Products{" "}
                      <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#D4AF37]" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

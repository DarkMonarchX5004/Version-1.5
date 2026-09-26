import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { PackagingInspector } from "./PackagingInspector";
import { SensoryRadar } from "./SensoryRadar";
import { TerroirTimeline } from "./TerroirTimeline";
import { CollectionSection } from "./CollectionSection";
import { GastronomyPairings } from "./GastronomyPairings";
import { HeritageSection } from "./HeritageSection";
import { WholesaleBand } from "./WholesaleBand";
import { Footer } from "./Footer";

export function Storefront() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-[#080807]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CollectionSection />
        <PackagingInspector />
        <SensoryRadar />
        <TerroirTimeline />
        <GastronomyPairings />
        <HeritageSection />
        <WholesaleBand />
      </main>
      <Footer />
    </div>
  );
}

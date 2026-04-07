import { useEffect } from "react";
import { trackViewContent } from "@/lib/pixel";
import RetentionHero from "@/components/br1/RetentionHero";
import PricingCard from "@/components/br1/PricingCard";
import VideoBlock from "@/components/br1/VideoBlock";
import BenefitsGrid from "@/components/br1/BenefitsGrid";
import PedagogyBlock from "@/components/br1/PedagogyBlock";
import Testimonials from "@/components/br1/Testimonials";
import WhatYouGet from "@/components/br1/WhatYouGet";
import BonusCards from "@/components/br1/BonusCards";
import FinalCTA from "@/components/br1/FinalCTA";
import StickyCTA from "@/components/br1/StickyCTA";

const Oferta = () => {
  useEffect(() => {
    trackViewContent();

    // Back redirect: se o usuário clicar em "voltar", vai para /ultima-chance
    window.history.pushState({ page: "oferta" }, "", window.location.href);

    const handlePopState = () => {
      window.location.href = "/ultima-chance";
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="br1-theme min-h-screen bg-background pb-20 md:pb-0">
      <RetentionHero />
      <PricingCard />
      <VideoBlock />
      <BenefitsGrid />
      <PedagogyBlock />
      <Testimonials />
      <WhatYouGet />
      <BonusCards />
      <FinalCTA />
      <StickyCTA />
    </div>
  );
};

export default Oferta;

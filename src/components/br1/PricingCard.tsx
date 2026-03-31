import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

const CTA_URL = "https://pay.cakto.com.br/34tozsu";

const PricingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-6 p-8 rounded-[2rem] bg-card shadow-elevated relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 bg-accent-gold text-accent-foreground px-4 py-1.5 rounded-bl-2xl font-bold text-xs tracking-wide">
        OFERTA EXCLUSIVA
      </div>

      <div className="flex items-start gap-2 mb-6 mt-1">
        <div className="flex flex-col leading-none mt-2">
          <p className="text-red-500 line-through text-sm">
            De R$ 47,90
          </p>
          <span className="text-sm font-bold text-primary">
            POR APENAS
          </span>
        </div>

        <span
          className="text-5xl font-black text-primary tracking-tight tabular-nums animate-price-glow"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          R$ 34,90
        </span>
      </div>

      <a
        href={CTA_URL}
        className="block w-full py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold text-xl shadow-lg transition-all active:scale-95 hover:scale-[1.02] hover:shadow-elevated text-center"
      >
        QUERO APROVEITAR AGORA →
      </a>

      <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" /> Acesso imediato e vitalício
        </span>
        <span className="flex items-center gap-1">
          <Zap className="w-4 h-4" /> Garantia de 7 dias
        </span>
      </div>
    </motion.div>
  );
};

export default PricingCard;

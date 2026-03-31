import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

const CTA_URL = "https://pay.cakto.com.br/34tozsu";

const FinalCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-6 text-center"
    >
      <h2
        className="text-2xl font-bold text-foreground mb-2"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Ensine seu filho a ler até{" "}
        <span className="text-primary">5x mais rápido</span>
      </h2>
      <p className="mb-6" style={{ color: "hsl(var(--text-soft))" }}>
        Com apenas 10 minutos por dia.
      </p>

      <div className="max-w-md mx-auto">
        <p className="text-muted-foreground line-through text-lg mb-1">De R$ 47,90</p>
        <p
          className="text-4xl font-black text-primary tracking-tighter tabular-nums mb-6 animate-price-glow"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          R$ 34,90
        </p>

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
      </div>
    </motion.section>
  );
};

export default FinalCTA;

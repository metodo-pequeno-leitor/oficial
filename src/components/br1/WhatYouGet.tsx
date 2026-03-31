import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Mais de 100 atividades práticas",
  "Nível 1 — Palavras de 2 sílabas",
  "Nível 2 — Palavras de 3 sílabas",
  "Nível 3 — Palavras de 4 sílabas",
];

const WhatYouGet = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-1"
    >
      <h2
        className="text-2xl font-bold text-foreground text-center mb-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        O que você recebe
      </h2>
      <div className="max-w-md mx-auto space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-card"
          >
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatYouGet;

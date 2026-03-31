import { motion } from "framer-motion";
import { FileText, Puzzle, Smile, Gift } from "lucide-react";

const bonuses = [
  { icon: FileText, title: "Cartões Flash de Leitura", desc: "Acelere a fluência com guias práticos." },
  { icon: Puzzle, title: "Quebra-cabeça Inteligente do Alfabeto", desc: "Aprender brincando é aprender de verdade." },
  { icon: Smile, title: "Alfabeto Visual Interativo", desc: "Associação emocional com as letras." },
];

const BonusCards = () => {
  return (
    <section className="px-6 py-6 bg-warm-bg">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Gift className="w-5 h-5 text-accent-gold" />
        <h2
          className="text-2xl font-bold text-foreground text-center"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Bônus Exclusivos
        </h2>
      </div>
      <div className="space-y-4 max-w-lg mx-auto">
        {bonuses.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-card border-l-4 border-accent-gold"
          >
            <b.icon className="w-8 h-8 text-accent-gold flex-shrink-0" />
            <div>
              <h3
                className="font-semibold text-foreground"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BonusCards;

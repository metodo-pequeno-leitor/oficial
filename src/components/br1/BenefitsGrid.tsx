import { motion } from "framer-motion";
import { Hand, Sparkles, Brain, BookOpen, Heart } from "lucide-react";

const benefits = [
  { icon: Hand, title: "Coordenação Motora", desc: "Atividades que preparam a mão para a escrita." },
  { icon: Sparkles, title: "Atenção e Criatividade", desc: "Foco estimulado através do lúdico e da brincadeira." },
  { icon: Brain, title: "Conexões Cerebrais", desc: "Baseado em neurociência cognitiva infantil." },
  { icon: BookOpen, title: "Interesse por Leitura", desc: "Desperta o prazer natural pela leitura." },
  { icon: Heart, title: "Sem Pressão", desc: "Aprendizado leve, afetuoso e no ritmo da criança." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const BenefitsGrid = () => {
  return (
    <section className="px-6 py-3 bg-warm-bg">
      <h2
        className="text-2xl font-bold text-foreground text-center mb-8"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Por que o Método Pequeno Leitor funciona?
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-4 max-w-lg mx-auto"
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={item}
            className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-card"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
              <b.icon className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h3
                className="font-semibold text-foreground"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BenefitsGrid;

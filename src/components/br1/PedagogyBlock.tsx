import { motion } from "framer-motion";

const PedagogyBlock = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-5"
    >
      <h2
        className="text-2xl font-bold text-foreground text-center mb-4"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Aprendizado natural e sem pressão
      </h2>
      <div
        className="max-w-lg mx-auto space-y-4 leading-relaxed text-pretty"
        style={{ color: "hsl(var(--text-soft))" }}
      >
        <p>
          O Método Pequeno Leitor trabalha com <strong className="text-foreground">consciência fonológica</strong> — a
          habilidade de reconhecer e manipular sons da fala — combinada com atividades de{" "}
          <strong className="text-foreground">grafismo</strong> que preparam a coordenação motora para a escrita.
        </p>
        <p>
          Tudo acontece de forma lúdica e afetuosa, respeitando o ritmo de cada criança. Sem cobranças, sem choro.{" "}
          <strong className="text-foreground">Apenas conexão e aprendizado natural.</strong>
        </p>
      </div>
    </motion.section>
  );
};

export default PedagogyBlock;

import { motion } from "framer-motion";

const RetentionHero = () => {
  return (
    <section className="bg-background px-6 py-12 text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-bold mb-5 animate-subtle-pulse"
      >
        ESPERE! NÃO VÁ EMBORA AINDA...
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-4 tracking-tight"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Você está prestes a perder a chance de{" "}
        <span className="text-primary">transformar a leitura</span> do seu filho.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg leading-relaxed text-pretty max-w-lg mx-auto"
        style={{ color: "hsl(var(--text-soft))" }}
      >
        Preparamos uma condição única para você não deixar essa oportunidade passar.
      </motion.p>
    </section>
  );
};

export default RetentionHero;

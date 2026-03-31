import { motion } from "framer-motion";

const testimonials = ["/br1-depo1.jpg"];

const Testimonials = () => {
  return (
    <section className="px-6 py-8">
      <h2
        className="text-2xl font-bold text-foreground text-center mb-8"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Com poucos dias de treino, o filho da Ana já conseguiu juntar as sílabas por conta própria!
      </h2>

      <div className="space-y-4 max-w-lg mx-auto">
        {testimonials.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={img}
              alt="Depoimento de cliente"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

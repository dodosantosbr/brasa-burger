import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Lucas Almeida",
    comment: "Melhor smash que já comi! Atendimento rápido e burger perfeito.",
  },
  {
    id: 2,
    name: "Mariana Costa",
    comment: "Cheddar surreal. Pedi uma vez e virei cliente fiel 🔥",
  },
  {
    id: 3,
    name: "Rafael Mendes",
    comment: "Entrega rápida e carne no ponto perfeito. Recomendo demais!",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          ⭐ Avaliações dos Clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-background p-6 rounded-xl2 shadow-card hover:shadow-glow transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-cheddar fill-cheddar"
                  />
                ))}
              </div>

              <p className="text-textSecondary mb-4">
                "{item.comment}"
              </p>

              <span className="font-semibold text-textPrimary">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
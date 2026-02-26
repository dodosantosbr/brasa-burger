import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative bg-background py-28 overflow-hidden">
      {/* Glow background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cheddar opacity-10 blur-[120px] rounded-full" />

      <div className="container relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          O Smash mais{" "}
          <span className="text-primary">insano</span> da cidade 🔥
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-textSecondary mt-6 max-w-xl mx-auto"
        >
          Blend artesanal, cheddar duplo e molho secreto.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-primary hover:bg-primaryDark px-8 py-4 rounded-xl2 shadow-glow font-semibold"
        >
          Ver Cardápio
        </motion.button>
      </div>
    </section>
  );
};
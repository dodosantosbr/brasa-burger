import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-gradient-to-b from-background to-black">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="images/logo.png"
                alt="Brasa Burguer Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  BRASA
                </span>{" "}
                <span className="text-textPrimary">BURGER</span>
              </h1>
            </div>

            <p className="mt-4 text-textSecondary text-sm leading-relaxed max-w-sm">
              Smash artesanal, ingredientes selecionados e experiência digital
              de outro nível.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-textSecondary mb-4">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm">
              {["Início", "Cardápio", "Promoções", "Contato"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="cursor-pointer text-textSecondary hover:text-primary transition"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-textSecondary mb-4">
              Conecte-se
            </h3>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, color: "hover:bg-pink-500/20" },
                { Icon: Facebook, color: "hover:bg-blue-500/20" },
              ].map(({ Icon, color }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-surface ${color} cursor-pointer transition shadow-card`}
                >
                  <Icon size={18} />
                </motion.div>
              ))}

              {/* WhatsApp separado */}
              <motion.a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-surface hover:bg-green-500/20 cursor-pointer transition shadow-card"
              >
                <FaWhatsapp size={18} className="text-green-500" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textSecondary">
          <p>
            © {new Date().getFullYear()} BRASA BURGER. Todos os direitos
            reservados.
          </p>

          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-primary cursor-pointer"
          >
            Feito com paixão e fogo 🔥
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

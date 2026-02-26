import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const FloatingCartButton = () => {
  const { cart, setIsOpen } = useCart();
  const [animateBadge, setAnimateBadge] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Anima quando quantidade muda
  useEffect(() => {
    if (totalItems > 0) {
      setAnimateBadge(true);
      const timeout = setTimeout(() => setAnimateBadge(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  if (totalItems === 0) return null;

  return (
    <motion.button
      id="floating-cart-button" // NECESSÁRIO para animação voar funcionar
      onClick={() => setIsOpen(true)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primaryDark text-white p-4 rounded-full shadow-2xl z-50"
    >
      <div className="relative">
        <ShoppingCart size={24} />

        {/* Badge quantidade */}
        <AnimatePresence>
          <motion.span
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: animateBadge ? 1.3 : 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="absolute -top-2 -right-2 bg-cheddar text-black text-xs font-bold px-2 py-0.5 rounded-full"
          >
            {totalItems}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
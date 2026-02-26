import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { Plus, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="product-card group bg-surface rounded-xl2 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
    >
      {/* Imagem */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900 h-56 flex items-center justify-center">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay escuro suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition duration-300" />

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-glow backdrop-blur-sm">
          🔥 Destaque
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col gap-4">
        <div className="space-y-3">
          <h2 className="text-lg font-bold tracking-wide">
            {product.name}
          </h2>

          {/* ⭐ Avaliação */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.round(product.rating)
                    ? "text-cheddar fill-cheddar"
                    : "text-gray-600"
                }
              />
            ))}

            <span className="text-sm text-textSecondary ml-2">
              {product.rating.toFixed(1)} • 124 avaliações
            </span>
          </div>

          <p className="text-textSecondary text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-cheddar font-bold text-xl">
            R$ {product.price.toFixed(2)}
          </span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleAdd}
            className="flex items-center gap-2 bg-primary hover:bg-primaryDark px-5 py-2.5 rounded-xl2 text-sm font-semibold shadow-glow transition"
          >
            <Plus size={16} />
            Adicionar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
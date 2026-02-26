import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { span } from "framer-motion/client";

export const Home = () => {
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "Todos" || product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      {/* ================= HERO ================= */}
      <section id="inicio" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
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

          <p className="text-textSecondary text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Encontre seu smash perfeito.
          </p>
        </div>
      </section>

      {/* ================= CARDÁPIO ================= */}
      <section id="cardapio" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          {/* BUSCA */}
          <div className="relative max-w-xl mx-auto mb-8 sm:mb-10">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar hambúrguer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface pl-12 pr-4 py-3 rounded-full text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          {/* FILTRO DE CATEGORIAS */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-10 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-glow scale-105"
                      : "bg-surface hover:bg-primary/20"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUTOS POR CATEGORIA (ESTILO IFOOD) */}
          {loading ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            categories
              .filter((category) => category !== "Todos")
              .map((category) => {
                const categoryProducts = filteredProducts.filter(
                  (product) => product.category === category,
                );

                if (categoryProducts.length === 0) return null;

                return (
                  <div key={category} className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">{category}</h2>

                    <motion.div
                      layout
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {categoryProducts.map((product) => (
                        <motion.div layout key={product.id}>
                          <ProductCard product={product} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                );
              })
          )}
        </div>
      </section>
    </div>
  );
};

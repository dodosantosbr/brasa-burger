import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
  const { setIsOpen, cart } = useCart();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="images/logo.png"
            alt="Brasa Burguer Logo"
            className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 object-contain"
          />
          <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              BRASA
            </span>{" "}
            <span className="text-textPrimary">BURGER</span>
          </h1>
        </div>

        {/* Carrinho */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2 bg-primary hover:bg-primaryDark px-4 py-2 rounded-xl2 shadow-glow"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Carrinho</span>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-cheddar text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

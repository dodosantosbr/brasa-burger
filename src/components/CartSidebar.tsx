import { useCart } from "../context/CartContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";

export const CartSidebar = () => {
  const {
    cart,
    total,
    decreaseQuantity,
    removeItem,
    addToCart,
    clearCart,
    isOpen,
    setIsOpen,
  } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const message = cart
      .map((item) => `${item.name} x${item.quantity}`)
      .join("\n");

    const whatsappUrl =
      `https://wa.me/5599999999999?text=` +
      encodeURIComponent(
        `🔥 Novo Pedido BRASA BURGER\n\n${message}\n\nTotal: R$ ${total.toFixed(
          2
        )}`
      );

    window.open(whatsappUrl, "_blank");

    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-smooth ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Seu Carrinho</h2>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-surfaceLight transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 && (
              <p className="text-textSecondary text-center mt-10">
                Seu carrinho está vazio 🍔
              </p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-surfaceLight p-4 rounded-xl2"
              >
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-textSecondary">
                    R$ {item.price.toFixed(2)}
                  </p>

                  {/* Botão remover tudo */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1 text-xs text-red-400 hover:text-red-500 mt-1"
                  >
                    <Trash2 size={14} />
                    Remover
                  </button>
                </div>

                {/* Controle quantidade */}
                <div className="flex items-center gap-3 ml-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-1 rounded-md hover:bg-background transition"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-bold w-5 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="p-1 rounded-md hover:bg-background transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-white/5">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span className="text-cheddar">
                R$ {total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="w-full bg-primary hover:bg-primaryDark disabled:opacity-50 py-3 rounded-xl2 font-semibold shadow-glow transition"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
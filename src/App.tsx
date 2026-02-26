import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { CartSidebar } from "./components/CartSidebar";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-textPrimary">
        <Navbar />

        <main>
          <>
            <Home />
            <Footer />
          </>
        </main>

        <CartSidebar />
        <FloatingCartButton />
      </div>
    </CartProvider>
  );
}

export default App;

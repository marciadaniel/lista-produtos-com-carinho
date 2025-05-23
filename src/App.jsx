import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Products from "./components/Products";
import Cart from "./components/Cart";
import products from "./data.json";
import OrderConfirmed from "./components/OrderConfirmed";
function App() {
  const [count, setCount] = useState(0);
  const [quantities, setQuantities] = useState(() => {
    const savedQuantities = localStorage.getItem("quantities");
    return savedQuantities ? JSON.parse(savedQuantities) : {};
  });
  const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

  useEffect(() => {
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [quantities]);

  return (
    <div className="p-4 md:p-28 grid grid-cols-1 md:grid-cols-5 gap-8 bg-slate-100">
      <div className="md:col-span-3">
        <Title>Desserts</Title>
        <Products
          products={products}
          quantities={quantities}
          setQuantities={setQuantities}
        />
      </div>
      <div className="md:col-span-2 bg-white">
        <Cart
          products={products}
          quantities={quantities}
          setQuantities={setQuantities}
          setShowOrderConfirmed={setShowOrderConfirmed}
          showOrderConfirmed={showOrderConfirmed}
        />
      
      </div>
       {showOrderConfirmed && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <OrderConfirmed 
        products={products}
          quantities={quantities}
        onClose={() => setShowOrderConfirmed(false)} />
      </div>
    )}
    </div>

  );
}

export default App;

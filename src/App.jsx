import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Products from "./components/Products";
import Cart from "./components/Cart";
import products from "./data.json";
function App() {
  const [count, setCount] = useState(0);
   const [quantities, setQuantities] = useState(() => {
  const savedQuantities = localStorage.getItem("quantities");
  return savedQuantities ? JSON.parse(savedQuantities) : {};
});

   useEffect(() => {
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [quantities]);

  return (
    <div className="p-10 grid grid-flow-col">
      <div className="">
        <Title>Desserts</Title>
        <Products products={products} quantities={quantities} setQuantities={setQuantities}></Products>
      </div>

        <Cart products={products} quantities={setQuantities}></Cart>
 
    </div>
  );
}

export default App;

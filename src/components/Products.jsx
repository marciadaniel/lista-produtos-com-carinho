import Button from "./Button";
import ButtonText from "./ButtonText";
import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";

function Products({ products, quantities, setQuantities}) {
  const [active, setActive] = useState(null);
  const MAX_QUANTITY = 10;
  const [hovered, setHovered] = useState(null);
  const buttonContent = (isActive, id) => {
 
    if (isActive) {
      return (
        <>
          <Plus
            color="white"
            className="text-left"
            onClick={(e) => {
              e.stopPropagation(); // Impede que o evento continue a propagação
              setQuantities((prev) => {
                return (prev[id] || 1) < MAX_QUANTITY
                  ? { ...prev, [id]: (prev[id] || 1) + 1 }
                  : prev; // Retorna o novo estado ou o estado atual
              });
            }}
          />
          <span className="text-center text-white">{quantities[id] || 1}</span>
          <Minus
            color="white"
            className="text-right"
            onClick={(e) => {
              e.stopPropagation();
              setQuantities((prev) => {
                const current = prev[id] || 1;
                if (current > 1) {
                  return { ...prev, [id]: current - 1 };
                } else {
                  const { [id]: _, ...rest } = prev;
                  return rest;
                }
              });
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <ShoppingCart color="orange" />
          <ButtonText>Add to cart</ButtonText>
        </>
      );
    }
  };

  const handleClick = (id) => {
    if (active == id) setActive(null);
    else setActive(id);
  };

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
      {products.map((product) => (
        <li key={product.id}>
          <div className="overflow-hidden m-[10px] h-[400px]">
            <div className=" relative">
            <img
              className={`h-[200px] rounded-lg w-full object-cover ${ active === product.id ? "border-2 border-orange-500" : ""}`}
              src={new URL(product.image.desktop, import.meta.url).href}
              alt=""
            />
            <Button
              className={`absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 ${
                hovered === product.id ? "text-orange-500 border-orange-500" : ""
              }`}
              context="AddProductToCard"
              id={product.id}
              active={active}
              onClick={() => handleClick(product.id)}
              onMouseOver={() => setHovered(product.id)}
              onMouseOut={() => setHovered(null)}
            >
              {buttonContent(active === product.id, product.id)}
            </Button>
            </div>
            <p className="text-gray-400 font-bold mt-8">{product.category}</p>
            <p className="text-base font-semibold">{product.name}</p>
            <p>{product.price}</p>
           
           </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;

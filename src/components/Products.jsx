import Button from "./Button";
import ButtonText from "./ButtonText";
import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";

function Products({ products, quantities, setQuantities }) {
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
                  setActive(null);
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
    if (active == id && !quantities[id]) setActive(null);
    else setActive(id);
  };

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <li key={product.id}>
          <div className="overflow-hidden m-2 h-[300px] bg-white rounded-lg shadow max-w-[240px] mx-auto">
            <div className="relative">
              <img
                className={`h-44 rounded-lg w-full object-cover ${
                  active === product.id ? "border-2 border-orange-500" : ""
                }`}
                src={new URL(product.image.desktop, import.meta.url).href}
                alt=""
              />
              <Button
                className={`absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 ${
                  hovered === product.id
                    ? "text-orange-500 border-orange-500"
                    : ""
                }`}
                context="AddProductToCard"
                id={product.id}
                active={active}
                onClick={() => {
                  // Se não estiver ativo, adiciona ou aumenta a quantidade direto
                  if (active !== product.id && !quantities[product.id]) {
                    setQuantities((prev) => ({
                      ...prev,
                      [product.id]: (prev[product.id] || 0) + 1,
                    }));
                  }
                  handleClick(product.id);
                }}
                onMouseOver={() => setHovered(product.id)}
                onMouseOut={() => setHovered(null)}
              >
                {buttonContent(active === product.id, product.id)}
              </Button>
            </div>
            <div className="px-3 pt-8 pb-2">
              <p className="text-sm text-gray-400 font-bold">
                {product.category}
              </p>
              <p className="text-base font-semibold truncate">{product.name}</p>
              <p className="text-base font-bold text-orange-500">
                R$ {product.price}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;

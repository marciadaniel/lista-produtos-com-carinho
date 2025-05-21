import { BadgeX } from "lucide-react";

function CartItem({ product, quantity }) {
  return (
    <div className="relative">
      <p>{product.name}</p>
      <div className="flex justify-start gap-4">
        <p>{"@$" + product.price}</p>
        <p>{quantity}</p>
        <p>{product.price * quantity}</p>
        <BadgeX className="absolute" />
      </div>
    </div> // Correção aqui
  );
}

export default CartItem;

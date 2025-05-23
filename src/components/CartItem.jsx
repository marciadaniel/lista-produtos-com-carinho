import { BadgeX } from "lucide-react";

function CartItem({ product, quantity,onRemove,context }) {
  return (
    <div className="relative mb-5">
      <p className="font-semibold">{product.name}</p>
      <div className="flex justify-start gap-8 mt-1">
         <p className="text-orange-500 font-semibold">{quantity}x</p>
        <p className="text-gray-400">@ ${product.price}</p>
       
        <p
  className={`text-gray-600 font-semibold${context === "order" ? " mr-0" : ""}`}
>
  ${product.price * quantity}
</p>
          {context === "cart" && (
    <BadgeX
      className="absolute right-0 bottom-3 text-gray-400"
      onClick={onRemove}
    />
  )}
      
      </div>
    </div> 
  );
}

export default CartItem;

import CartItem from "./CartItem";
import Button from "./Button";
import { BadgeCheck } from "lucide-react";
function OrderConfirmed({ products, quantities }) {
  return (
    <div className="p-10 bg-white ">
      <BadgeCheck color="green" className="pb-2 w-14 h-14" />
      <h1 className="bold  font-bold text-2xl ">Order Confirmed</h1>
      <p className="text-gray-400 font-semibold text-[11px] mb-5">
        We hope you enjoy your food
      </p>

      <div className="bg-slate-100 p-5">
        <ul>
          {products
            .filter((product) => quantities[product.id] > 0)
            .map((product) => (
              <li key={product.id}>
                <div className="flex justify-start gap-4 mb-4">
                  <img
                    src={new URL(product.image.thumbnail, import.meta.url).href}
                    alt=""
                  />
                  <CartItem
                    product={product}
                    quantity={quantities[product.id]}
                    context="orderConfirmed"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex justify-between mt-10 relative">
        <p className="text-base">Order Total</p>
        <span className="font-bold text-2xl">
          $
          {products
            .reduce(
              (total, product) =>
                total +
                (quantities[product.id]
                  ? product.price * quantities[product.id]
                  : 0),
              0
            )
            .toFixed(2)}
        </span>
      </div>

      <Button className="text-white w-full mt-4 pt-2 pb-2 hover:bg-orange-700">
        Start new order
      </Button>
    </div>
  );
}
export default OrderConfirmed;

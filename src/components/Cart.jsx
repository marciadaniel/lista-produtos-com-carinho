import CartItem from "./CartItem";
function Cart({ products, quantities }) {
  return (
    <div className="">
      <h1 className="text-orange-500 bold">Your cart</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <CartItem product={product} quantity={
                () => {
               return quantities[product.id]
                }
            }></CartItem>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

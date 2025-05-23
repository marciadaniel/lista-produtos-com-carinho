import CartItem from "./CartItem";
import Button from "./Button";
function Cart({ products, quantities,setQuantities, setShowOrderConfirmed, showOrderConfirmed }) {

  const cartContent = (empty) => {
    if (empty) {
      return (
       
        <div className="relative mb-5 flex flex-col items-center justify-center">
     
          <img src="assets/images/illustration-empty-cart.svg" alt="" />
                <p className="text-slate-400 font-semibold">Your added items wil appear here</p>
        </div>
      );
    }
    else{
      return (
        <>
        <ul>
  {products
    .filter((product) => quantities[product.id] > 0)
    .map((product) => (
      <li key={product.id}>
        <CartItem
          product={product}
          quantity={quantities[product.id]}
           onRemove={() => {

    const { [product.id]: _, ...rest } = quantities;
          setQuantities(rest);
  }} context="cart"
        />
      </li>
    ))}
</ul>
      <div className="flex justify-between mt-10 relative">
        <p className="text-base">Order Total</p>
       <span className="font-bold text-3xl">
    $
    {products
      .reduce(
        (total, product) =>
          total + (quantities[product.id] ? product.price * quantities[product.id] : 0),
        0
      )
      .toFixed(2)}
  </span>

      </div>
    
      <div className="text-center mt-4 ">
        <p className="bg-slate-100">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
        <Button className="text-white w-[300px] mt-20 h-auto pt-3 pb-3 hover:bg-orange-700"
        onClick={() => setShowOrderConfirmed(true)}
        
        >Confirm order</Button>
      </div>
      </>
      );
    }
  }
  return (
    <div className="p-10 " >
      <h1 className="text-orange-500 bold mb-5 font-bold text-3xl ">
       Your cart (
    {Object.values(quantities).reduce((acc, curr) => acc + curr, 0)}
  )
        </h1>

        {cartContent(
      !products.some((product) => quantities[product.id] > 0)
    )}
      
      
    </div>
  );
}

export default Cart;

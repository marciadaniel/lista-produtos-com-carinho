
function CartItem( { product, quantity}){


    return (
        <>
            <p>{product.name}</p>
            <div className="">
                <p>{product.price}</p>
                <p>{quantity}</p>
                <p>{product.price * quantity}</p>
            </div>
        </>
    )
}
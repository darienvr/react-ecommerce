import { useCartContext } from "../cart__context"


const CartTotal = () => {

    const { total_amount, shipping_fee } = useCartContext()

    const total = total_amount.toFixed(2)
    const order_total = (shipping_fee + total_amount).toFixed(2)

    return(
        <div className="cart-total-container">
            <p className="text-total">Subtotal : <span>${total}</span></p>
            <p className="text-total">Shipping Fee : <span>${shipping_fee}</span></p>
            <div className="separation"></div>
            <h3 className="text-total">Order Total : <span>${order_total}</span> </h3>
        </div>
    )
}

export default CartTotal;
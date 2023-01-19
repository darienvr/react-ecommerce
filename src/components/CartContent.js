import { useCartContext } from "../cart__context";
import CartItem from "../components/CartItem";
import CartTotal from "./CartTotal";
import { Link } from 'react-router-dom'

const CartContent = () => {

    const { cart, clearCart, totalItems } = useCartContext()

    return (
        <>
        {
            totalItems > 0  ? <div>
                <div className='cart-container'>
                    <div>
                        {cart.map((item)=>{
                            return <CartItem key={item.id} {...item}/>
                        })}
                    </div>
                </div>
                <hr className="separation"/>
                <div className="btn-cart-content">
                    <Link className="btn-back" to='/products'>Continue Shopping</Link>
                    <button onClick={clearCart} className="btn-clear-shopping">Clear Shopping Cart</button>
                </div>
                <CartTotal />
            </div>
            :   <div className="cart-empty">
                    <h2>Your cart is empty</h2>
                    <Link className="btn-back" to='/products'>Continue Shopping</Link>
                </div>
        }
        </>
    )
}

export default CartContent;
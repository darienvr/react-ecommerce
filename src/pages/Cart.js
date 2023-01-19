import CartContent from "../components/CartContent";
import '../styles/cart.css';

const Cart = () => {
    return (
        <div className="cart">
            <div className='cart-container'>
                <CartContent />
            </div>
        </div>
    )
}

export default Cart;
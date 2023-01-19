import React from 'react'
import { useCartContext } from "../cart__context";
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'

const CartItem = ( {id, name, image, price, amount}) => {

    const { removeItem, toggleAmount } = useCartContext()

    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }

    const subtotal = (price*amount).toFixed(2)  

    return(
        <div className='cart-item'>
            <article className='list-cart'>
                <div className="title">
                    <img className='image' src={image} alt={name}></img>
                    <div className='info'>
                        <h5>{name}</h5>
                        <p>${price}</p>
                    </div>
                </div>
                <AmountButtons 
                    increase={increase}
                    decrease={decrease}
                    amount={amount}
                />
                <div className='subtotal'>
                    <p>${subtotal}</p>
                </div>
                <FaTrash onClick={()=>removeItem(id)} className="btn-delete" />
            </article>
        </div>
    )
}

export default CartItem;
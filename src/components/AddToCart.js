import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../cart__context'
import AmountButtons from './AmountButtons'

const AddToCart = ( {product}) => {

    const { addToCart } = useCartContext()

    const { id } = product
    const [amount, setCount] = useState(1)

    const increment = () => {
        let newCount = amount + 1;
        if(amount >= 10){
            return newCount = 10;
        }
        setCount(newCount)
    }

    const decrement = () => {
        let newCount = amount - 1;
        if(amount <= 1){
            return newCount = 1;
        }
        setCount(newCount)
    }

    return(
        <div className='wrapper'>
            <AmountButtons 
                increase={increment}
                decrease={decrement}
                amount={amount}
            />
            <Link to='/cart' onClick={() => addToCart(id, amount, product)} className='btn-single-product'>Add To Cart</Link>
        </div>
    )
}

export default AddToCart
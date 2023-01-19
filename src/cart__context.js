import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducers/cart_reducer'

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return[]
    }
}

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  total_amount: 0,
  shipping_fee: 20,
}

const CartContext = React.createContext();

const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount, product }})
  } 

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const toggleAmount = (id, value) => {
    dispatch({type: 'TOGGLE_CART_ITEM_AMOUNT', payload: {id, value,},})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: 'COUNT_CART_TOTALS' })
  }, [state.cart])
  
  return (
    <CartContext.Provider
      value={{
        ...state, addToCart, removeItem,toggleAmount, clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
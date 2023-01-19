
const cart_reducer = (state, action) => {
    if(action.type === 'ADD_TO_CART'){
        const { id, amount, product } = action.payload
        const tempItem = state.cart.find((i) => i.id === id)
        if(tempItem){
            const tempCart = state.cart.map((cartItem)=>{
                if(cartItem.id === id){
                    let newAmount = cartItem.amount + amount
                    if (newAmount > 10) {
                        newAmount = 10
                      }
                    return { ...cartItem, amount: newAmount}
                }else{
                    return cartItem
                }
            })
            return { ...state, cart: tempCart}
        }else{
            const newItem = {
                id: id,
                name: product.name,
                price: product.price,
                image: product.image,
                amount,
            }
            return {...state, cart: [...state.cart, newItem]}
       }
    }

    if(action.type === 'REMOVE_ITEM'){
        //const { id } = action.payload
        const tempCart = state.cart.filter((item)=>item.id !== action.payload)
        return {...state, cart: tempCart}
    }

    if(action.type === 'TOGGLE_CART_ITEM_AMOUNT'){
        const { id, value } = action.payload
        const tempCart = state.cart.map((item) => {
            if(item.id === id){
                if(value === 'inc'){
                    let newAmount = item.amount + 1
                    if (newAmount > 10) {
                        newAmount = 10
                    }
                    return {...item, amount: newAmount}  
                }
                if(value === 'dec'){
                    let newAmount = item.amount - 1
                    if (newAmount < 1) {
                        newAmount = 1
                    }
                    return { ...item, amount: newAmount }
                }
            }
            return item
        })
        return { ...state, cart: tempCart}
    }

    if(action.type === 'COUNT_CART_TOTALS'){
        const { totalItems, total_amount } = state.cart.reduce(
            (total,cartItem)=>{
                const { amount, price } = cartItem
                total.totalItems += amount
                total.total_amount += price * amount
                return total
            },
            { totalItems: 0, total_amount: 0}
        )
        return { ...state, totalItems, total_amount}
    }

    if(action.type === 'CLEAR_CART'){
        return { ...state, cart:[]}
    }
}

export default cart_reducer
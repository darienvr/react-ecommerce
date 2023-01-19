
const reducer = (state, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return {
          ...state,
          all_products: [...action.payload],
          filtered_products: [...action.payload],
        }
      }

    if (action.type === 'UPDATE_FILTERS') {
        const { name, value } = action.payload
        return { ...state, filters: { ...state.filters, [name]: value } }
      }

    if (action.type === 'FILTER_PRODUCTS') {
        
        const { all_products } = state
        const { text, category, company } = state.filters
        let tempProducts = [...all_products]
        if (text) {
           tempProducts = tempProducts.filter((product) =>
            product.name.toLowerCase().startsWith(text)
          )
        }
        if(category !== 'All'){
          tempProducts = tempProducts.filter(
            (product) => product.category === category
          )
        }
        if(company !== 'All'){
          tempProducts = tempProducts.filter(
            (product) => product.company === company
          )
        }
        return { ...state, filtered_products: tempProducts }
      }

    if (action.type === 'UPDATE_SORT') {
      return { ...state, sort: action.payload }
    }

    if (action.type === 'SORT_PRODUCTS') {
      const { sort, filtered_products } = state
      let tempProducts = []
      if (sort === 'price-lowest') {
        tempProducts = filtered_products.sort((a, b) => {
          return a.price - b.price
        })
      }
      if (sort === 'price-highest') {
        tempProducts = filtered_products.sort((a, b) => {
          return b.price - a.price
        })
      }
      if (sort === 'name-a') {
        tempProducts = filtered_products.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = filtered_products.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
  
      return { ...state, filtered_products: tempProducts }
    }

    if(action.type === 'CLEAR_FILTERS'){
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'All',
          category: 'All',
        },
      }
    }
    throw new Error(`No Matching "${action.type}" - action type`) 
}


export default reducer;
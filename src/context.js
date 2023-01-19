import React, { useState, useContext, useEffect, useReducer } from 'react';
import items from "./data"
import reducer from './reducers/product_reducer'
const AppContext = React.createContext();

const allCategories = ['All', ...new Set(items.map((item) => item.category))]; 

const allCompanies = ['All', ...new Set(items.map((item)=> item.company))];

const initialState = {
  sort: 'price-lowest',
  filtered_products: [], 
  all_products:[], 
  filters:{
    text: '',
    company: 'All',
    category: 'All',
  },
}

const AppProvider = ({ children }) => {
  const product = items;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState(allCategories);
  const [companies, setCompanies] = useState(allCompanies);


  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: product })
  }, [product])

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' })
    dispatch({ type: 'SORT_PRODUCTS' })
  }, [state.filters, state.sort])

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if(name === 'category'){
      value = e.target.textContent
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } })
  }

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: 'UPDATE_SORT', payload: value })
  }

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const clearFilters = () => {
    dispatch({type: 'CLEAR_FILTERS'})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        product,
        categories,
        companies,
        setCategories,
        setCompanies,
        updateFilters,
        updateSort,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


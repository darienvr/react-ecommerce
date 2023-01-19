import React, { useState } from 'react';
import Product from "../components/Product"
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useGlobalContext } from "../context";

const ListProducts = () => {

    const { filtered_products: product, sort, updateSort } = useGlobalContext(); 
    const [ list, setList] = useState(false);

    const gridOpen = () => {
        setList(false);
    }

    const listOpen = () => {
        setList(true);
    }

    return(
        <div className='list-products'>
            <div className="order-container">
                <div className='container-length'>
                    <div className='btn-order-container'>
                        <BsFillGridFill onClick={gridOpen} className="btn-order"></BsFillGridFill>
                        <AiOutlineUnorderedList onClick={listOpen} className="btn-order"></AiOutlineUnorderedList>
                    </div>
                    <p className='products-found'> {product.length} Products Found </p>
                </div>
                <div className='sort-by'>
                    <p className='products-sort'>Sort By</p>
                    <select
                        name='sort'
                        id='sort'
                        value={sort}
                        onChange={updateSort}
                        className='sort-input'>
                            <option value='price-lowest'>Price (Lowest)</option>
                            <option value='price-highest'>Price (Highest)</option>
                            <option value='name-a'>Name (A-Z)</option>
                            <option value='name-z'>Name (Z-A)</option>
                    </select>
                </div>
            </div>
            { product.length < 1 ? <h5> Sorry, no products matched your search. </h5> : 
            <div className={`${list ? 'order-list' : 'list-products-container' }`}>
                {product.map((item)=>{
                    return <Product key={item.id} {...item}/>
                })
                }
            </div>}
        </div>
    )
}

export default ListProducts;
import { useGlobalContext } from '../context'
import Filters from "../components/Filters";
import ListProducts from "../components/ListProducts";
import '../styles/products.css'

const Products = () => {


    const { categories, companies, filterItems, selectChange } = useGlobalContext(); 

    return (
        <div className='products'>
            <div className="products-container">
                <Filters categories={categories} filterItems={filterItems} companies={companies} handleChange={selectChange} />
                <ListProducts />
            </div>
        </div>
    );
}

export default Products;
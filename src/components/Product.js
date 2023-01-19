
import { Link } from 'react-router-dom'

const Products = ( {id, image, name, price, description}) => {
    return(
        <article key={id} className='product-container'>
                        <Link to={`/products/${id}`} className='btn-img-product'><img alt='#'className='img-product' src={image}></img></Link>
                        <div className='list-product-info'>
                            <div className='header-product'>
                                <h2 className='name-product'>
                                    {name}
                                </h2>
                                <p className='price-product'> ${price}</p>
                                <p className='text-product'> {description.substring(0, 150)}... </p>
                                <Link to={`/products/${id}`} className='btn-details-product'>Details</Link>
                            </div>
                            
                        </div>
        </article>
    )
}

export default Products;
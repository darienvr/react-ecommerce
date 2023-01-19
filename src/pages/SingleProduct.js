import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import data from '../data'
import AddToCart from '../components/AddToCart';
import '../styles/singleProduct.css'
//import { useGlobalContext } from '../context'


const SingleProduct = () =>{

    const { id } = useParams();
    //const { product } = useGlobalContext();
    const [ product, setProduct ] = React.useState()

    /*
    useEffect(()=>{
        product()
    },[id]);
    */
    
    useEffect(() => {
        function getProduct(){
            if(data){
                const {
                    image,
                    name,
                    price,
                    company,
                    description,
                } = data[id-1]
    
                const newProduct = {
                    id,
                    image,
                    name,
                    price,
                    company,
                    description,
                }
                setProduct(newProduct)
            } else {
                setProduct(null)
            }  
        }getProduct()
    }, [id])
    

    if(!product){
        return <h2>No product to display</h2>
    }else{
        const { image, name, price, company, description } = product;
        return (
            <>
                <section className='section-single-product'>
                    <img className='img-single-product' src={image} alt={name}></img>
                    <div className='info-single'>
                        <h2 className='name-single-product'>{name}</h2>
                        <p>
                            <span className='drink-data'>Price :</span> {price}
                        </p>
                        <p>
                            <span className='drink-data'>Company :</span> {company}
                        </p>
                        <p>
                            {description}
                        </p>
                        {<AddToCart product={product}/>}
                    </div>
                </section>
                <div className='section-back'>
                    <Link className='btn-back-product' to='/products'>Back products</Link>
                </div>
            </>
        )
    }

}

export default SingleProduct;
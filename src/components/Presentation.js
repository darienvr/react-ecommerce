import home_img from '../img/home_img.png'
import home_img2 from '../img/home_img2.jpg'
import { Link } from 'react-router-dom'

const Presentation = () =>{
    return(
        <section className='body-container'>
                <div className='info-body'>
                        <h3 className='title-info'>Organic and Natural market </h3>
                        <p className='text-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <Link className='btn-shop' to='/products'>Products</Link>
                </div>    
                <div className='img-body-contenedor'>
                        <img  className='img-body' src={home_img} alt='imagen principal'/>
                        <img  className="img-body2" src={home_img2} alt='imagen principal 2'/>
                </div>
        </section>
    )
}

export default Presentation;
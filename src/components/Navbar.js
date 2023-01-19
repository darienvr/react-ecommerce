import React from 'react'
import { useGlobalContext } from "../context";
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { useCartContext } from '../cart__context';


const Navbar = () => {

    const { openSidebar } = useGlobalContext();
    const { totalItems } = useCartContext();
 
    return (
        <nav className='navbar'>
            <div className='contenedor-logo'>DV</div>
            <div className='links-container'>
                <ul className='links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>  
                    <li>
                        <Link to='/about'>About</Link>
                    </li>  
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>                      
                </ul> 
            </div> 
            <div className='links-login-container'>
                <ul className='login'>
                    <div className='contenedor-cart-icon'>
                        <li>
                            <Link to='/cart'> <div className='circle-count'>{totalItems}</div> <AiOutlineShoppingCart className='carrito'/> </Link>
                        </li>  
                    </div>
                    <li>
                        <Link to='/'> <BiUserCircle /> </Link>
                    </li>                  
                </ul> 
            </div> 
            <div className='bars-container'>
                <button onClick={openSidebar} className='btn-sidebar-open'>III</button>
            </div>  
        </nav>
    )
}

export default Navbar;
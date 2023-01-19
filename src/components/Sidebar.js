
import { useGlobalContext } from "../context";
import { useCartContext } from '../cart__context';
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Sidebar = () => {

    const {isSidebarOpen, closeSidebar} = useGlobalContext(); 
    const { totalItems } = useCartContext();
    
    return (
        <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-logo'>DV</div>
            <ul className='links-sidebar'>
                    <li>
                        <Link className="link-sidebar" to='/' onClick={closeSidebar} >Home</Link>
                    </li>  
                    <li>
                        <Link className="link-sidebar" to='/about' onClick={closeSidebar}>About</Link>
                    </li>  
                    <li>
                        <Link className="link-sidebar" to='/products' onClick={closeSidebar}>Products</Link>
                    </li>                      
            </ul>
            <div className='cart-login-sidebar'>
                <ul className='login'>
                    <div className='contenedor-cart-icon'>
                        <li>
                            <Link to='/cart' onClick={closeSidebar}> <div className='circle-count' >{totalItems}</div> <AiOutlineShoppingCart /> </Link>
                        </li>  
                    </div>
                    <li>
                        <Link className="login-sidebar" to='/' onClick={closeSidebar}> <BiUserCircle /> </Link>
                    </li>                  
                </ul> 
            </div>  
            <button onClick={closeSidebar} className='btn-close-sidebar'>X</button>
        </div>
        
    )
}

export default Sidebar;


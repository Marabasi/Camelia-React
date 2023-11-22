// import CartWidget from "../CartWidget/CartWidget"

// const  NavBar = () => {
//     return (
//         <nav>
//             <h3>Camelia</h3>
//             <div>
//                 <button>Aceites</button>
//                 <button>Inciensos</button>
//                 <button>Velas</button>
//                 <button>Adornos</button>
//             </div>
//             <CartWidget></CartWidget>
//         </nav>
//     )
// }

// export default NavBar

import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to ='/'>
                <h3>Camelia</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/aceites`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Aceites</NavLink>
                <NavLink to={`/category/inciensos`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Inciensos</NavLink>
                <NavLink to={`/category/velas`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Velas</NavLink>
                <NavLink to={`/category/adornos`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Adornos</NavLink>
            </div>
            <CartWidget></CartWidget>
        
        </nav>

    );
};

export default NavBar;
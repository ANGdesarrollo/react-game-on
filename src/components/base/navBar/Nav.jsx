import {Link} from "react-router-dom";

export default function Nav({setClass, toggleClassSubNavBar, hiddeNavBar}) {
    return (
        <nav className={setClass}>
            <ul>
                <Link onClick={hiddeNavBar} to='/'><li>HOME</li></Link>
                <a href='#' className='nav-products-header'><li onClick={toggleClassSubNavBar} className='nav-products-header'>PRODUCTS</li></a>
                <Link onClick={hiddeNavBar} to='/return-policy'><li>RETURN POLICY</li></Link>
                <Link onClick={hiddeNavBar} to='/contact'><li>CONTACT</li></Link>
            </ul>
        </nav>
    );
};

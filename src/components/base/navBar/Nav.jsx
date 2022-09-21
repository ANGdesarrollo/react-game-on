import {Link} from "react-router-dom";

export default function Nav({setClass, toggleClassSubNavBar}) {
    return (
        <nav className={setClass}>
            <ul>
                <Link to='/'><li>HOME</li></Link>
                <a><li onClick={toggleClassSubNavBar} className='nav-products-header'>PRODUCTS</li></a>
                <Link to='/return-policy'><li>RETURN POLICY</li></Link>
                <Link to='/contact'><li>CONTACT</li></Link>
            </ul>
        </nav>
    );
};

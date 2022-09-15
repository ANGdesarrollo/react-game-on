import {Link} from "react-router-dom";

export default function Nav({setClass, toggleClassSubNavBar}) {
    return (
        <nav className={setClass}>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li onClick={toggleClassSubNavBar} className='nav-products-header'>PRODUCTS</li>
                <li>RETURN POLICY</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    );
};

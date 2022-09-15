import {Link} from "react-router-dom";

export default function SubNav({setClass, toggleClassSubNavBar}) {
    return (
        <ul className={`sub-nav-header ${setClass}`}>
            <li onClick={toggleClassSubNavBar} className='return-header'>RETURN</li>
            <li><Link to='/products/allProducts'>SEE ALL</Link></li>
            <li><Link to='/products/keyboard'>KEYBOARD</Link></li>
            <li><Link to='/products/headset'>HEADSET</Link></li>
            <li><Link to='/products/mouse'>MOUSE</Link></li>
            <li><Link to='/products/notebook'>NOTEBOOK</Link></li>
        </ul>
    );
};

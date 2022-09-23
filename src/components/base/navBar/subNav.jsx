import {Link} from "react-router-dom";
import {context} from "../../context/CartContext";
import {useContext} from "react";
export default function SubNav({setClass, toggleClassSubNavBar, openLogin, hiddeNavBar}) {
    const con = useContext(context);

    function isLogged(){
        setTimeout(() => {
            if(!con.userLogged) {
                openLogin(true)
            }
        }, 1500)

    }
    return (
        <ul className={`sub-nav-header ${setClass}`}>
            <li onClick={toggleClassSubNavBar} className='return-header'>RETURN</li>
            <li onClick={() => {isLogged(); hiddeNavBar()}}><Link to='/products/allProducts'>SEE ALL</Link></li>
            <li onClick={() => {isLogged(); hiddeNavBar()}}><Link to='/products/keyboard'>KEYBOARD</Link></li>
            <li onClick={() => {isLogged(); hiddeNavBar()}}><Link to='/products/headset'>HEADSET</Link></li>
            <li onClick={() => {isLogged(); hiddeNavBar()}}><Link to='/products/mouse'>MOUSE</Link></li>
            <li onClick={() => {isLogged(); hiddeNavBar()}}><Link to='/products/notebook'>NOTEBOOK</Link></li>
        </ul>
    );
};

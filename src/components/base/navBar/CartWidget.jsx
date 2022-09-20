import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import CountWidget from "./CountWidget";
import {context} from "../../context/CartContext";

export default function CartWidget() {
    const con = useContext(context);
    const divStyle = {
        cursor: 'pointer'
    }

    return (
        <Link className='container-cart-widget' to='/cart'>
            <img style={divStyle} src="https://i.ibb.co/KWtB8rs/shopping-cart.png" alt="Shopping ItemCartContainer icon"/>
            {con.itemAdded.length !== 0 && <CountWidget count={con.qty}/>}
        </Link>
    );
}


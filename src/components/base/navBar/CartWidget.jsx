import React from 'react';
import {Link} from "react-router-dom";
import CountWidget from "./CountWidget";

export default function CartWidget({arrayLength}) {
    const divStyle = {
        cursor: 'pointer'
    }
    return (
        <Link className='container-cart-widget' to='/cart'>
            <img style={divStyle} src="https://i.ibb.co/KWtB8rs/shopping-cart.png" alt="Shopping ItemCartContainer icon"/>
            {arrayLength.length !== 0 && <CountWidget count={arrayLength.length}/>}
        </Link>
    );
}


import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import CountWidget from "./CountWidget";

export default function CartWidget({arrayQty}) {
    const divStyle = {
        cursor: 'pointer'
    }

    useEffect(() => {
        console.log(arrayQty())
    }, []);

    return (
        <Link className='container-cart-widget' to='/cart'>
            <img style={divStyle} src="https://i.ibb.co/KWtB8rs/shopping-cart.png" alt="Shopping ItemCartContainer icon"/>
            {arrayQty() !== 0 && <CountWidget count={arrayQty()}/>}
        </Link>
    );
}


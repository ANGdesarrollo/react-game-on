import React, {useState, useEffect, useContext} from 'react';
import {context} from "./CartContext";
import ItemCountCart from "./ItemCountCart";

export default function Cart() {
    const [count, setCount] = useState(1)
    let contextImported = useContext(context)
    let array = contextImported.itemAdded


    function onAdd(qty) {
        setCount(qty)
    }

    console.log(count)


    return (
        <div className='cart-product-container'>
            {array.map(el => {

                return (
                    <div key={el.id} className='cart-product'>
                        <div className='cart-product__img' key={el.id}>
                            <img src={el.imgPath} alt=""/>
                        </div>
                        <div className='cart-product__name'><h2>{el.name}</h2></div>
                        <div className='cart-product__price'><h2>${el.price}</h2></div>
                        <div className='cart-product__qty'><ItemCountCart stock={el.stock} initial={el.qty} onAdd={onAdd}/></div>
                        <div className='cart-product__total'><h2>{`$${el.price * el.qty}`}</h2></div>

                    </div>

                )
            })}
            

        </div>
    );
};

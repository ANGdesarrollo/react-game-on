import React, {useState, useEffect, useContext} from 'react';
import ItemCountCart from "./ItemCountCart";
import {context} from "../../context/CartContext";

export default function ItemCartLayout({onAdd, controlStock}) {
    let con = useContext(context)
    useEffect(() => {
        con.totalToPay()
    }, [onAdd]);

    return (
        <div className='cart-product-container'>
            {con.itemAdded.map(el => {
                controlStock(el)
                return (
                    <div key={el.id} className='cart-product'>
                        <div className='cart-product__img' key={el.id}>
                            <img src={el.imgPath} alt="product bought"/>
                        </div>
                        <div className='cart-product__name'><h2>{el.name}</h2></div>
                        <div className='cart-product__price'><h2>PRICE: ${el.price}</h2></div>
                        <div className='cart-product__qty'><ItemCountCart stock={el.stock} initial={el.qty} updateQty={con.updateQtyCart} onAdd={onAdd} el={el}/></div>
                        <div className='cart-product__total'><h2>{`TOTAL: $${el.price * el.qty}`}</h2></div>
                        <div className='cart-product__delete'><img onClick={()=> {con.deleteItem(el.id)}} src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958505/react-js-game-on/icons/delete_h4swr7.png" alt=""/></div>
                    </div>
                )
            })}
            <div className='total-to-pay'>
                <div><h2>SUBTOTAL: ${con.totalToPay()} </h2></div>
                <div><h2><span>TAX 21%: </span>${con.totalToPay() * 0.21}</h2></div>
                <div><h2>TOTAL: ${con.totalToPay() + con.totalToPay() * 0.21}</h2></div>
            </div>
        </div>
    );
};

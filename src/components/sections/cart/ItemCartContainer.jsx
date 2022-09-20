import React, {useState, useEffect, useContext} from 'react';
import {context} from "../../context/CartContext";
import EmptyCartLayout from "./EmptyCartLayout";
import ItemCartLayout from "./ItemCartLayout";


export default function ItemCartContainer() {
    const [count, setCount] = useState(0)
    const [emptyCart, setEmptyCart] = useState(true)
    let contextImported = useContext(context)
    let array = contextImported.itemAdded

    function onAdd(qty) {
        setCount(qty)
    }

    useEffect(() => {
        array.length !== 0 ? setEmptyCart(false) : setEmptyCart(true)
    }, [array]);

    function controlStock(el) {
        if(el.qty > el.stock) {
            el.qty = el.stock
        }
    }
    return (
       emptyCart ? <EmptyCartLayout/> : <ItemCartLayout onAdd={onAdd} controlStock={controlStock}/>
    );
};

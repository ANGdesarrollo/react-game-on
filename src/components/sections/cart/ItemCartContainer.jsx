import React, {useState, useEffect, useContext} from 'react';
import {context} from "../../context/CartContext";
import EmptyCartLayout from "./EmptyCartLayout";
import ItemCartLayout from "./ItemCartLayout";


export default function ItemCartContainer() {
    const [count, setCount] = useState(0)
    const [emptyCart, setEmptyCart] = useState(true)
    let contextImported = useContext(context)
    //ARRAY DEL CARRITO
    let array = contextImported.itemAdded

    //SETEO DE QTY PARA CONTADOR DE CART
    function onAdd(qty) {
        setCount(qty)
    }

    // LOGICA PARA QUE SI NO HAY NADA EN EL CARRITO SE RENDERICE EL COMPONENTE DE EMPTYCART
    useEffect(() => {
        array.length !== 0 ? setEmptyCart(false) : setEmptyCart(true)
    }, [array]);

    //SI BIEN EL CONTADOR LIMITA LA CANTIDAD DE PRODUCTOS QUE COMPRO EN DETAIL, SI ME VUELVO AL MENU Y COMPRO MAS, ME COMPRA MAS DE LO Q HAY EN STOCK
    // CON ESTO SETEO AL MAXIMO DE STOCK SI EL USUARIO SALE DEL CARRITO Y COMPRA MAS.
    function controlStock(el) {
        if(el.qty > el.stock) {
            el.qty = el.stock
        }
    }
    return (
       emptyCart ? <EmptyCartLayout/> : <ItemCartLayout onAdd={onAdd} controlStock={controlStock}/>
    );
};

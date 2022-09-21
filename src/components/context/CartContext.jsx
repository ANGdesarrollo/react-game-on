import {createContext, useEffect, useState} from "react";
import {fireApp} from "../../index"
import {sweetAlert} from "../reUsable/SweetAlert";

export const context = createContext(CartContext)

export default function CartContext({children}) {
    const [userLogged, setUserLogged] = useState(false)
    const [itemAdded, setItemAdded] = useState([])
    const [qty, setQty] = useState(1)
    console.log(userLogged)

    // SETEA EN TRUE AL USUARIO LOGUEADO AL INICIAR LA APP SI ES QUE YA SE REGISTRO Y LOGUEO (LOS DATOS SE GUARDAN EN LA CACHE AUTOMATICAMENTE POR FIREBASE)
    useEffect(() => {
       fireApp.auth().onAuthStateChanged((firebaseUser) => {
           if(firebaseUser !== null) {
               setUserLogged(true)
           }
       })
    }, []);

    // MAPEA Y CUENTA LA CANTIDAD DE PRODUCTOS QUE HAY COMPRADOS
    function countQty() {
        let initialQty = 0;
        itemAdded.map(el => initialQty +=  el.qty)
        setQty(initialQty)
        return initialQty
    }

    // RECORRE Y PERMITE SABER EL SUBTOTAL A PAGAR SIN IMPUESTOS
    function subTotalToPay() {
        let subTotalToPay = 0;
        itemAdded.forEach(el => {
            subTotalToPay = subTotalToPay + el.qty * el.price
        })
        return subTotalToPay
    }

    // VACIAR CARRITO
    function emptyCart() {
        setItemAdded([])
    }

    // ACTUALIZA EL QTY EN EL ARRAY DEL CARRITO PRINCIPAL
    function updateQtyCart(item, qty) {
        itemAdded.forEach(el => {
            if (el.id === item.id) {
                el.qty = qty
                item.qty = qty
            }})
    }

    //AGREGA ITEMS AL CARRITO
    function addItem(item, qty) {
        let exist = false;
        itemAdded.forEach(el => {
            if (el.name === item.name) {
                el.qty = el.qty + qty
                exist = true;
                countQty()
            }
        })
        //FILTRO PARA NO REPETIR PRODUCTOS EN EL ARRAY Y SUMAR LA CANTIDAD
        if (exist === false) {
            let itemToAdd = {
                ...item, qty
            }
            setItemAdded([...itemAdded, itemToAdd])
        }
        sweetAlert('Product added!', 'success')

    }
    // FUNCION PARA BORRAR ITEMS INDIVIDUALES EN EL CARRITO
    function deleteItem(id) {
        let newArray = itemAdded.filter(el => el.id !== id)
        setItemAdded(newArray)

    }

    return (
        <context.Provider value={{addItem, itemAdded, updateQtyCart, deleteItem, subTotalToPay, emptyCart, qty, countQty, setUserLogged, userLogged}}>
            {children}
        </context.Provider>
    );
};

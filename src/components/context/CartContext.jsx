import {createContext, useState} from "react";
import Swal from 'sweetalert2'

export const context = createContext()

export default function CartContext({children}) {
    const [itemAdded, setItemAdded] = useState([])
    const [qty, setQty] = useState(1)

    function countQty() {
        let initialQty = 0;
        itemAdded.map(el => {initialQty +=  el.qty})
        setQty(initialQty)
    }

    function subTotalToPay() {
        let subTotalToPay = 0;
        itemAdded.forEach(el => {
            subTotalToPay = subTotalToPay + el.qty * el.price
        })
        return subTotalToPay
    }

    function emptyCart() {
        setItemAdded([])
    }

    function updateQtyCart(item, qty) {
        itemAdded.forEach(el => {
            if (el.id === item.id) {
                el.qty = qty
                item.qty = qty
            }})
    }

    function addItem(item, qty) {
        let exist = false;
        itemAdded.forEach(el => {
            if (el.name === item.name) {
                el.qty = el.qty + qty
                exist = true;
                countQty()
            }
        })





        if (exist === false) {
            let itemToAdd = {
                ...item, qty
            }
            setItemAdded([...itemAdded, itemToAdd])
        }
        Swal.fire({
            background: "hsl(193, 80%, 58%)",
            width: "17rem",
            customClass: "swal-height",
            toast: true,
            showConfirmButton: false,
            iconColor: '#fff',
            color: '#fff',
            position: 'top-right',
            icon: 'success',
            title: 'Product added!',
            timer: 2500
        })
    }

    function deleteItem(id) {
        let newArray = itemAdded.filter(el => el.id !== id)
        setItemAdded(newArray)
        Swal.fire({
            background: "hsl(193, 80%, 58%)",
            width: "17rem",
            customClass: "swal-height",
            toast: true,
            showConfirmButton: false,
            iconColor: '#fff',
            color: '#fff',
            position: 'top-right',
            icon: 'success',
            title: 'Product deleted!',
            timer: 2500
        })
    }

    return (
        <context.Provider value={{addItem, itemAdded, updateQtyCart, deleteItem, subTotalToPay, emptyCart, qty, countQty}}>
            {children}
        </context.Provider>
    );
};

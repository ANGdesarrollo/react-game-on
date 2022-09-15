import {createContext, useState} from "react";
import Swal from 'sweetalert2'


export const context = createContext()

export default function CartContext({children}) {
    const Swal = require('sweetalert2')
    const [itemAdded, setItemAdded] = useState([])

    function updateQty(item, qty) {
        itemAdded.map(el => {
            if(item.id === el.id) {
                item.qty = qty
                el.qty = qty
            }
        })
    }

    function addItem(item, qty) {

        let exist = false;
        itemAdded.forEach(el => {
            if(el.name === item.name) {
                el.qty = el.qty + qty
                exist = true;
            }
        })

        if(exist === false) {
            let itemToAdd = {
                ...item, qty
            }
            setItemAdded([...itemAdded, itemToAdd])
        }
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
        <context.Provider value={{addItem, itemAdded, updateQty, deleteItem}}>
            {children}
        </context.Provider>
    );
};

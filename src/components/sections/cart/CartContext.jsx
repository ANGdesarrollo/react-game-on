import {createContext, useState} from "react";

export const context = createContext()

export default function CartContext({children}) {
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
    return (
        <context.Provider value={{addItem, itemAdded, updateQty}}>
            {children}
        </context.Provider>
    );
};

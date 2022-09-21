import React, {useState,  useContext} from 'react';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {context} from "../../context/CartContext";

export default function Buy() {
    const con = useContext(context)
    const [idBuy, setIdBuy] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function finishBuy() {
        let order = {
            buyer: {name: name, phone: phone, email: email},
            itemAdded: con.itemAdded,
            total: con.subTotalToPay() * 1.21
        };
        const db = getFirestore()
        const miColleccion = collection(db, 'orders')

        addDoc(miColleccion, order).then(({id}) => {
            setIdBuy(id)
        })
    }

    return (
        <div className='final-buy-container'>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='nombre' type="text"/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone' type="text"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
            <button onClick={finishBuy}>SEND ORDER</button>
        </div>
    );
};

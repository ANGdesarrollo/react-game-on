import React, {useState, useContext} from 'react';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {context} from "../../context/CartContext";
import {CSSTransition} from "react-transition-group";
import {sweetAlert} from "../../reUsable/SweetAlert";
import IdOrder from "../cart/idOrder";

export default function Buy() {
    const con = useContext(context)
    const [idBuy, setIdBuy] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function finishBuy() {
        console.log(name, phone, email)

        if(!name) {return sweetAlert('Complete the name field!', 'error');}
        if(!phone) {return sweetAlert('Complete the email field', 'error')}
        if(!email) {return sweetAlert('Complete the phone number field!', 'error');}


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

        con.emptyCart()
    }

    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
            <div className="main-final">
                {idBuy === '' ?
                    <div className="form-final">
                        <div className="form-final__form-part">
                            <div className="points-form">
                                <span id="span-point-a"></span>
                                <span id="span-point-b"></span>
                                <span id="span-point-c"></span>
                            </div>
                            <div className="title-form">
                                <span>SEND</span>
                                <span id="subline-form">ORDER</span>
                            </div>
                            <form className="inputs-form">
                                <div className="container-form-group">
                                    <div className="app-form-group">
                                        <label htmlFor="name">Name</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} id="name"
                                               className="app-form-control"
                                               placeholder="Ej: Alexis Graff" name="name"
                                               required/>
                                    </div>
                                    <div className="app-form-group">
                                        <label htmlFor="email">Email</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="email"
                                               className="app-form-control"
                                               placeholder="Ej: gameon@gmail.com"
                                               name="email" required></input>
                                    </div>
                                    <div className="app-form-group">
                                        <label htmlFor="contact">Phone Number</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} id="contact"
                                               className="app-form-control" placeholder="Ej: +54 (291) 5343707"
                                               name="contact"></input>
                                    </div>
                                    <div className="buttons">
                                        <button type="submit" className="app-form-button">CANCEL</button>
                                        <button onClick={(e) => {e.preventDefault(); finishBuy()}} id="js-send" type="submit"
                                                className="app-form-button">SEND
                                        </button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                    : <IdOrder idBuy={idBuy}/>
                }
            </div>
        </CSSTransition>
    );
};

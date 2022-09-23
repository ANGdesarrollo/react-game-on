import React, {useContext} from 'react';
import ItemCountCart from "./ItemCountCart";
import {context} from "../../context/CartContext";
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

export default function ItemCartLayout({onAdd, controlStock}) {
    let con = useContext(context)
    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
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
                            <div className='cart-product__qty'><ItemCountCart qtyNav={con.countQty}
                                                                              navQty={con.countQty}
                                                                              stock={el.stock} initial={el.qty}
                                                                              updateQty={con.updateQtyCart}
                                                                              onAdd={onAdd}
                                                                              el={el}/></div>
                            <div className='cart-product__total'><h2>{`TOTAL: $${(el.price * el.qty)}`}</h2></div>
                            <div className='cart-product__stock'><h2>{`STOCK: ${el.stock}`}</h2></div>
                            <div className='cart-product__delete'><img onClick={() => {
                                con.deleteItem(el.id);
                            }}
                                                                       src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958505/react-js-game-on/icons/delete_h4swr7.png"
                                                                       alt=""/></div>
                        </div>
                    )
                })}
                <div className='total-to-pay'>
                    <div className='total-to-pay__subtotal'>
                        <div>
                            <div className='subtotal'><h2 className='h2-subtotal-final'>SUBTOTAL:</h2>
                                <span>USD ${con.subTotalToPay()}</span></div>
                            <div className='task-final'><h2>TAX 21%: ${(con.subTotalToPay() * 0.21).toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='total-to-pay__total-to-pay'>
                        <h2><span>TOTAL: </span>USD$ {(con.subTotalToPay() + con.subTotalToPay() * 0.21).toFixed(2)}
                        </h2>
                        <div className='buttons-itemCart'>
                            <button className='css-button-shadow-border-sliding--rose'><Link to='/order'>SEND
                                ORDER</Link></button>
                            <div>
                                <button className='css-button-shadow-border-sliding--rose'
                                        onClick={() => con.emptyCart()}>EMPTY CART
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </CSSTransition>
    );
};

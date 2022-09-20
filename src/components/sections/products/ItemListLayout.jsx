import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function ItemListLayout({item, addToCartDirectly}) {
    return (
        <div className="container-products-dinamyc">
            {
                item.map((product, index) => {
                    return (
                        <div key={index} className="card-container">
                            <div className="card-container__image-product"><img src={product.imgPath} alt="Headset"/></div>
                            <div className="card-container__name-product">
                                <h2>{product.category.toUpperCase()}</h2>
                                <h4>{product.name}</h4>
                                <span id='line-span'></span>
                            </div>
                            <div className='card-container__detail-product'><Link to={`/products/${product.category.toLowerCase()}/${product.id}`}>detail</Link></div>
                            <div className="card-container__price-product">
                                <h2>${product.price}</h2>
                                <img onClick={() => {
                                    addToCartDirectly(product, 1)
                                }} className={product.id} src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958795/react-js-game-on/icons/shopping-cart_ounlnp.png" alt="Shopping icon"/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

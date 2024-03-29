import './scss/app.scss';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import NavBarContainer from "./components/base/navBar/NavBarContainer";
import HomeContainer from "./components/sections/home/HomeContainer";
import Footer from "./components/base/footer/Footer";
import ItemListContainer from "./components/sections/products/ItemListContainer";
import ItemDetailContainer from "./components/sections/itemDetail/ItemDetailContainer";
import CartContext from "./components/context/CartContext";
import ItemCartContainer from "./components/sections/cart/ItemCartContainer";
import ReturnPolicy from "./components/sections/returnPolicy/ReturnPolicy";
import Contact from "./components/sections/contact/Contact";
import Success from "./components/sections/contact/Success";
import Buy from "./components/sections/finalBuy/buy";
import React from "react";

function App() {
    return (
        <CartContext>
            <BrowserRouter>
                <div className='container-general'>
                    <NavBarContainer/>
                    <Routes>
                        <Route path='/' element={<HomeContainer/>}></Route>
                        <Route path='/products/:category' element={<ItemListContainer/>}></Route>
                        <Route path='/products/:category/:id' element={<ItemDetailContainer/>}></Route>
                        <Route path='/cart' element={<ItemCartContainer/>}></Route>
                        <Route path='/order' element={<Buy/>}></Route>
                        <Route path='/return-policy' element={<ReturnPolicy/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                        <Route path='/success' element={<Success/>}></Route>
                        <Route path="*" element={<HomeContainer/>} />
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </CartContext>
    );
}

export default App;

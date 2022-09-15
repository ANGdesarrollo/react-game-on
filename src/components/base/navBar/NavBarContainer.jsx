import React from 'react';
import {useState} from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import Nav from "./Nav";
import User from "./User";
import SubNav from "./subNav";
import MenuDesplegable from "./MenuDesplegable";


export default function NavBarContainer() {
    const [toggleClassNavBar, setToggleClassNavBar ] = useState(false)
    const [toggleClassSubNavBar, setToggleClassSubNavBar] = useState(false);
    let setClassNavBar = toggleClassNavBar ? 'nav-dropdown-active' : null;
    let setClassSubNavBar = toggleClassSubNavBar ? 'sub-nav-header-active ' : null;
    function changeClassNavBar() {
        setToggleClassNavBar(!toggleClassNavBar)
        setToggleClassSubNavBar(false)
        toggleClassSubNavBar && setToggleClassNavBar(false)
        if(toggleClassSubNavBar || toggleClassNavBar) {
            document.body.style.overflowY = "inherit";
        } else {
            document.body.style.overflowY = "hidden";
        }
    }
    function changeClassSubNavBar() {
        setToggleClassSubNavBar(!toggleClassSubNavBar)
        setToggleClassNavBar(!toggleClassNavBar)
    }
    return (
        <>
            <header className='general-container-header'>
                <Logo/>
                <Nav setClass={setClassNavBar} toggleClassSubNavBar={changeClassSubNavBar}/>
                <div className='data-header'>
                    <User/>
                    <CartWidget/>
                </div>
                <SubNav setClass={setClassSubNavBar} toggleClassSubNavBar={changeClassSubNavBar}/>
                <MenuDesplegable setClass={changeClassNavBar}/>

            </header>
        </>
    );
}



import React, {useEffect} from 'react';
import {useState} from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import Nav from "./Nav";
import User from "./User";
import SubNav from "./subNav";
import MenuDesplegable from "./MenuDesplegable";
import LogIn from "../LogIn-Register/LogIn";


export default function NavBarContainer() {
    const [login, setLogin] = useState(false)
    const [toggleClassNavBar, setToggleClassNavBar ] = useState(false)
    const [toggleClassSubNavBar, setToggleClassSubNavBar] = useState(false);
    let setClassNavBar = toggleClassNavBar ? 'nav-dropdown-active' : null;
    let setClassSubNavBar = toggleClassSubNavBar ? 'sub-nav-header-active ' : null;

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 992) {
                document.body.style.overflowY = "inherit";
            }
            if(window.innerWidth < 992 && (toggleClassNavBar === true || toggleClassSubNavBar === true)) {
                console.log('funciono')
                document.body.style.overflowY = "hidden";
            }
        })
    }, [])

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
                {login && <LogIn/>}
                <Logo/>
                <Nav setClass={setClassNavBar} toggleClassSubNavBar={changeClassSubNavBar}/>
                <div className='data-header'>
                    <User logIn={setLogin}/>
                    <CartWidget/>
                </div>
                <SubNav setClass={setClassSubNavBar} toggleClassSubNavBar={changeClassSubNavBar}/>
                <MenuDesplegable setClass={changeClassNavBar}/>

            </header>
        </>
    );
}



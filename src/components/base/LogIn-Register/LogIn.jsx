import React, {useContext, useState} from 'react';
import {fireApp} from "../../../index";
import {context} from "../../context/CartContext";
import {sweetAlert} from "../../reUsable/SweetAlert";

export default function LogIn({close}) {
    const con = useContext(context)
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState(false)

    const register = async (e) => {
        e.preventDefault()
        if (password === '' || user === '' || repeatPassword === '') {
            return sweetAlert('You must complete all fields', 'error')
        }
        if (password !== repeatPassword) {
            return sweetAlert("Password don't match", "error")
        }
        if (password.length < 6) {
            return sweetAlert('You must have at least 6 characters', 'error')
        }

        !login && await fireApp.auth().createUserWithEmailAndPassword(user, password)
            .then((firebaseUser) => {
                sweetAlert('You have successfully registered, please log in', 'success')
            })
            .catch(err => {
                setError(true)
            })
            .finally(() => setLogin(true))

        if (error) {
            return sweetAlert('Invalid Email', 'error')
        }
    }

    const loginUser = (user, password) => {
        fireApp
            .auth()
            .signInWithEmailAndPassword(user, password)
            .then((firebaseUser) => {
                con.setUserLogged(true)
                close(false)
                sweetAlert('You have successfully logged in', 'success')
            })
            .catch(err => {
                setError(true);
                sweetAlert('Wrong user', 'error')
            })
    }

    //TITLE CONDITIONAL
    let spanTitle = login ? 'LOG' : 'SIGN'
    let spanTitle1 = login ? 'IN' : 'UP'
    //PLACEHOLDER CONDITIONAL
    let placeHolderUser = login ? 'email' : 'enter your e-mail'

    function repeatPw() {
        if (!login) {
            return (
                <div className='complete-data'>
                    <label htmlFor="repeat-password">PASSWORD</label>
                    <input value={repeatPassword} onChange={(e) => {
                        setRepeatPassword(e.target.value)
                    }} placeholder='repeat-password' type="password" id='repeat-password'/>
                </div>
            )
        }
    }

    return (
        <div className='login-container-general'>
            <div className='container-log-in'>
                <div className='upper-container'>
                    <span id='js-span-a'></span>
                    <span id='js-span-b'></span>
                    <span id='js-span-c'></span>
                    <img onClick={() => close(false)}
                         src="https://res.cloudinary.com/dwz16rstr/image/upload/v1663725378/react-js-game-on/icons/close_n5hida.png"
                         alt="exit"/>
                </div>
                <form className='form-container-user'>
                    <div className='title-user'>
                        <span>{spanTitle}</span>
                        <span id='span-left-title-user'>{spanTitle1}</span>
                    </div>
                    <div className='user-container-data'>
                        <div className='complete-data'>
                            <label htmlFor="name-user">USER</label>
                            <input value={user} onChange={(e) => {
                                setUser(e.target.value);
                            }} placeholder={placeHolderUser} type="text" id='name-user'/>
                        </div>
                        <div className='complete-data'>
                            <label htmlFor="password-user">PASSWORD</label>
                            <input value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} placeholder='password' type="password" id='password-user'/>
                        </div>

                        {repeatPw()}
                    </div>
                    <div className='register-user'>
                        {login && <button onClick={(e) => {
                            loginUser(user, password);
                            e.preventDefault()
                        }}>Log In</button>}
                        {login ? <button onClick={(e) => {
                            e.preventDefault();
                            setLogin(false)
                        }}>Register</button> : <button onClick={register}>Submit</button>}
                        {login && <button onClick={() => {
                            close(false);
                            sweetAlert('Welcome', 'success');
                            con.setUserLogged(true)
                        }}>Guest</button>}
                    </div>
                </form>

            </div>
        </div>

    );
};

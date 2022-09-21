import React, {useState} from 'react';

export default function LogIn() {
    const [login, setLogin] = useState(true)

    //TITLE CONDITIONAL
    let spanTitle = login ? 'LOG' : 'SIGN'
    let spanTitle1 = login ? 'IN' : 'UP'
    //PLACEHOLDER CONDITIONAL
    let placeHolderUser = login ? 'user' : 'enter your e-mail'

    function repeatPw() {
        if(!login) {
            return (
                <div className='complete-data'>
                    <label htmlFor="repeat-password">PASSWORD</label>
                    <input placeholder='repeat-password' type="password" id='repeat-password'/>
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
                    <img src="https://res.cloudinary.com/dwz16rstr/image/upload/v1663725378/react-js-game-on/icons/close_n5hida.png" alt="exit"/>
                </div>
                <form className='form-container-user'>
                    <div className='title-user'>
                        <span>{spanTitle}</span>
                        <span id='span-left-title-user'>{spanTitle1}</span>
                    </div>
                    <div className='user-container-data'>
                        <div className='complete-data'>
                            <label htmlFor="name-user">USER</label>
                            <input placeholder={placeHolderUser} type="text" id='name-user'/>
                        </div>
                        <div className='complete-data'>
                            <label htmlFor="password-user">PASSWORD</label>
                            <input placeholder='password' type="password" id='password-user'/>
                        </div>

                        {repeatPw()}
                    </div>
                    <div className='register-user'>
                        {login && <button>Log In</button>}
                        {login ? <button onClick={(e) => {e.preventDefault(); setLogin(false)}}>Register</button> : <button>Submit</button>}
                    </div>
                </form>

            </div>
        </div>
    );
};

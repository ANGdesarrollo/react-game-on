import LocationIcon from "../../reUsable/LocationIcon";
import InstagramIcon from "../../reUsable/InstagramIcon";
import FacebookIcon from "../../reUsable/FacebookIcon";
import WhatsAppIcon from "../../reUsable/WhatsAppIcon";
import {useState} from "react";
import emailjs from '@emailjs/browser'
import {sweetAlert} from "../../reUsable/SweetAlert";
import {CSSTransition} from "react-transition-group";

export default function Contact() {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')


    function sendEmail(e) {
        e.preventDefault()
        if (name === '' || mail === '' || phone === '' || message === '') {
            sweetAlert('You must complete all fields!', 'error')
        } else {
            let tempParams = {
                from_name: name,
                from_mail: mail,
                phone_number: phone,
                message: message,
            }

            emailjs.send('service_2wdmhbd', 'template_wq8wnrm', tempParams, 'x3bA9gysX1X8daoxp')
                .then(function (res) {
                    console.log("success", res.status);
                })
                .then(setTimeout(function () {
                    window.location.replace('/success')
                }, 3000));
        }
    }

    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
            <div className="main">
                <div className="form">
                    <div className="form__icons">
                        <ul>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=542915343707"><WhatsAppIcon/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com"><FacebookIcon/></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com"><InstagramIcon/></a>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/LArbc5hoxP28NNdk9"><LocationIcon/></a>
                            </li>
                        </ul>
                    </div>

                    <div className="form__form-part">

                        <div className="points-form">
                            <span id="span-point-a"></span>
                            <span id="span-point-b"></span>
                            <span id="span-point-c"></span>
                        </div>
                        <div className="title-form">
                            <span>CONTACT</span>
                            <span id="subline-form">US</span>
                        </div>

                        <form action="" method="POST" className="inputs-form">
                            <div className="container-form-group">
                                <div className="app-form-group">
                                    <label htmlFor="name">Name</label>
                                    <input onChange={(e) => setName(e.target.value)} id="name"
                                           className="app-form-control"
                                           placeholder="Ej: Alexis Graff" name="name"
                                           required/>
                                </div>
                                <div className="app-form-group">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={(e) => setMail(e.target.value)} id="email"
                                           className="app-form-control"
                                           placeholder="Ej: gameon@gmail.com"
                                           name="email" required></input>
                                </div>
                                <div className="app-form-group">
                                    <label htmlFor="contact">Phone Number</label>
                                    <input onChange={(e) => setPhone(e.target.value)} id="contact"
                                           className="app-form-control" placeholder="Ej: +54 (291) 5343707"
                                           name="contact"></input>
                                </div>
                                <div className="app-form-group message">
                                    <label htmlFor="message">Message</label>
                                    <input onChange={(e) => setMessage(e.target.value)} id="message"
                                           className="app-form-control" placeholder="Write Here"
                                           name="message"></input>
                                </div>
                                <div className="buttons">
                                    <button type="submit" className="app-form-button">CANCEL</button>
                                    <button onClick={sendEmail} id="js-send" type="submit"
                                            className="app-form-button">SEND
                                    </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

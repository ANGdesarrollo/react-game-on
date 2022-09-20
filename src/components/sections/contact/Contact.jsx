import LocationIcon from "../../reUsable/LocationIcon";
import InstagramIcon from "../../reUsable/InstagramIcon";
import FacebookIcon from "../../reUsable/FacebookIcon";
import WhatsAppIcon from "../../reUsable/WhatsAppIcon";

export default function Contact() {
    return (
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
                                <input id="name" className="app-form-control" placeholder="Ej: Alexis Graff" name="name"
                                       required/>
                            </div>
                            <div className="app-form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" className="app-form-control" placeholder="Ej: gameon@gmail.com"
                                       name="email" required></input>
                            </div>
                            <div className="app-form-group">
                                <label htmlFor="contact">Phone Number</label>
                                <input id="contact" className="app-form-control" placeholder="Ej: +54 (291) 5343707"
                                       name="contact"></input>
                            </div>
                            <div className="app-form-group message">
                                <label htmlFor="message">Message</label>
                                <input id="message" className="app-form-control" placeholder="Write Here"
                                       name="message"></input>
                            </div>
                            <div className="buttons">
                                <button type="submit" className="app-form-button">CANCEL</button>
                                <button id="js-send" type="submit" className="app-form-button">SEND</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

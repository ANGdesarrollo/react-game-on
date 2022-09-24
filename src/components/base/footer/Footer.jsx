import React from 'react';
import LocationIcon from '../../reUsable/LocationIcon';
import WhatsAppIcon from '../../reUsable/WhatsAppIcon';
import EmailIcon from '../../reUsable/EmailIcon';
import FacebookIcon from '../../reUsable/FacebookIcon';
import InstagramIcon from '../../reUsable/InstagramIcon';

export default function Footer() {
    return(
        <footer>
            <div className="footer-abc">
                <div className="footer-a">
                    <h3>EVERYTHING YOU ARE LOOKING FOR.</h3>
                    <img src="https://i.ibb.co/D8Bsyw2/joystick-footer.webp" alt="Logo of a joystick"/>
                </div>
                <div className="footer-b">
                    <img id="logo-razer" src="https://i.ibb.co/7kh48TW/razer-logo-footer.webp" alt="Logo of Razer"/>
                    <img id="logo-corsair" src="https://i.ibb.co/QJyZY3R/corsair-logo-footer.webp"
                         alt="Logo of Corsair"/>
                    <img id="logo-logitech" src="https://i.ibb.co/YWVy1fW/logitech-logo-footer.webp"
                         alt="Logo of Logitech"/>
                </div>
                <div className="footer-c">
                    <ul>
                        <li>
                            <a href="https://goo.gl/maps/LArbc5hoxP28NNdk9" target='_blank'><LocationIcon/></a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=542915343707" target='_blank'><WhatsAppIcon/></a>
                        </li>
                        <li>
                            <a href="contact.html" target='_blank'><EmailIcon/></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-d">
                <ul className="footer-d-a">
                    <li>
                        <a className="img-footer-fb" href="https://www.facebook.com/" target='_blank'><FacebookIcon/></a>
                    </li>
                    <li>
                        <a className="img-footer-ig" href="https://www.instagram.com/" target='_blank'><InstagramIcon/></a>
                    </li>
                </ul>

                <div className="footer-d-b">
                    <img src="https://i.ibb.co/WH0V1Kx/cellphone-footer.webp"
                         alt="logo of the page"/>
                </div>
            </div>
        </footer>
    )
}

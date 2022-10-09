import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export default function HomeLayout() {
    return (
        <div className='home-container'>
            <div className='home-a'>
                <h2>
                    <span>WE ARE THE LARGEST</span>
                    <span>DISTRIBUTORS</span>
                </h2>
                <h4>OF GAMER PRODUCTS</h4>
            </div>
            <div className='home-b'>
                <Carousel className='w-100'>
                    <Carousel.Item interval={25000}>
                        <video className="w-100 d-block" autoPlay muted loop controls
                               src="https://res.cloudinary.com/dwz16rstr/video/upload/v1662958720/react-js-game-on/home-videos-carousel/publicidad-razer_fmzetx.mp4"></video>
                    </Carousel.Item>
                    <Carousel.Item interval={63000}>
                        <video className="w-100 d-block" autoPlay muted loop controls
                               src="https://res.cloudinary.com/dwz16rstr/video/upload/v1662958720/react-js-game-on/home-videos-carousel/publicidad-corsair_uz6wbg.mp4"></video>
                    </Carousel.Item>
                    <Carousel.Item interval={72000}>
                        <video className="w-100 d-block" autoPlay muted loop controls
                               src="https://res.cloudinary.com/dwz16rstr/video/upload/v1662958728/react-js-game-on/home-videos-carousel/publicidad-steelseries_l0xggm.mp4"></video>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home-c'>
                <div className="main-c-card">
                    <div>
                        <img className="img-card-main-c"
                             src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958399/react-js-game-on/products/Mouse_2_z3ex6a.webp"
                             alt="Viper Ultimate"/>
                    </div>
                    <div className="cart-widget-main-c">
                        <Link to='/products/mouse'>
                            <img
                                src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958795/react-js-game-on/icons/shopping-cart_ounlnp.png"
                                alt="Shopping icon"/>
                        </Link>
                    </div>
                    <div>
                        <h3>
                            <span>Viper Ultimate</span>
                            <span>Black</span>
                        </h3>
                    </div>
                </div>
                <div className="main-c-card">
                    <div>
                        <img className="img-card-main-c"
                             src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958399/react-js-game-on/products/Notebook_3_fm5ymo.webp"
                             alt="Notebook Razer"/>
                    </div>
                    <div className="cart-widget-main-c">
                        <Link to='/products/notebook'>
                            <img
                                src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958795/react-js-game-on/icons/shopping-cart_ounlnp.png"
                                alt="Shopping icon"/>
                        </Link>
                    </div>
                    <div>
                        <h3>
                            <span>Book</span>
                            <span>UHD Touch 60Hz</span>
                        </h3>

                    </div>
                </div>
                <div className="main-c-card">
                    <div>
                        <img className="img-card-main-c"
                             src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Keyboard_0_u8dqc9.webp"
                             alt="Huntsman V2"/>
                    </div>
                    <div className="cart-widget-main-c">
                        <Link to='/products/keyboard'>
                            <img
                                src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958795/react-js-game-on/icons/shopping-cart_ounlnp.png"
                                alt="Shopping icon"/>
                        </Link>
                    </div>
                    <div>
                        <h3>
                            <span>Huntsman V2</span>
                            <span>Analog</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="home-d">
                <div>
                    <h2>GLORIOUS MODEL</h2>
                    <h4>THE ULTIMATE GAMING MOUSE</h4>
                </div>

            </div>

        </div>

    );
};

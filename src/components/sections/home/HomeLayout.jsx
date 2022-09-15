import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconCart from "../../reUsable/IconCart";

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
                        <img className="img-card-main-c" src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958770/react-js-game-on/home-images/home-razer-image_llay6r.webp"
                             alt="razer controller"/>
                    </div>
                    <div className="cart-widget-main-c">
                        <IconCart/>
                    </div>
                    <div>
                        <h3>
                            <span>Captain America</span>
                            <span>Controller</span>
                        </h3>
                    </div>
                </div>
                <div className="main-c-card">
                    <div>
                        <img className="img-card-main-c" src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958770/react-js-game-on/home-images/home-steelseries-image_phhn98.webp"
                             alt="steelseries pad"/>
                    </div>
                    <div className="cart-widget-main-c">
                        <IconCart/>
                    </div>
                    <div>
                        <h3>
                            <span>Qck Large PUBG</span>
                            <span>SoulSeller Edition</span>
                        </h3>

                    </div>
                </div>
                <div className="main-c-card">
                    <div>
                        <img className="img-card-main-c" src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958770/react-js-game-on/home-images/home-corsair-image_d1b6u1.webp"
                             alt="corsair headset"/>
                    </div>
                    <div className="cart-widget-main-c">
                        <IconCart/>
                    </div>
                    <div>
                        <h3>
                            <span>Corsair HS60 PRO</span>
                            <span>SURROUND</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="home-d">
                <div>
                    <h2>GLORIUOS MODEL</h2>
                    <h4>THE ULTIMATE GAMING MOUSE</h4>
                </div>

            </div>

        </div>

    );
};

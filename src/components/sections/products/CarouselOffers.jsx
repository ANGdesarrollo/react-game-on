import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarouselOffers() {
    return (
        <div className='carousel-offers'>
            <Carousel className='w-100'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dwz16rstr/image/upload/v1663029899/react-js-game-on/offers/offers_hdaewp.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dwz16rstr/image/upload/v1663029899/react-js-game-on/offers/offers_a_witsfl.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

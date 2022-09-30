import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarouselOffers() {
    return (
        <div className='carousel-offers'>
            <Carousel className='w-100'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dwz16rstr/image/upload/v1664560667/react-js-game-on/offers/2_ybnvh4.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dwz16rstr/image/upload/v1664560667/react-js-game-on/offers/1_lmegm8.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

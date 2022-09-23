import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

export default function EmptyCartLayout() {
    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
            <div className='cart-empty'>
                <div>
                    <h2>CART EMPTY</h2>
                    <h4><Link to='/products/allProducts'>SEE MORE PRODUCTS</Link></h4>
                </div>

            </div>
        </CSSTransition>
    );
};

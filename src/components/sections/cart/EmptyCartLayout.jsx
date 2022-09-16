import {Link} from "react-router-dom";

export default function EmptyCartLayout() {
    return (
        <div className='cart-empty'>
            <div>
                <h2>CART EMPTY</h2>
                <h4><Link to='/products/allProducts'>SEE MORE PRODUCTS</Link></h4>
            </div>

        </div>
    );
};

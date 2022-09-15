import {Link} from "react-router-dom";

export default function CheckOut() {
    return (
        <div className='detail-item-count'>
        <Link to='/cart'><button className='css-button-shadow-border-sliding--rose'>CHECKOUT</button></Link>
        </div>
    );
};

import {Link} from "react-router-dom";

export default function Success() {
    setTimeout(function() {
        window.location.replace('/')}, 3000);

    return (
        <div className="success-container">
            <div className="container-confirmation">
                <div className="img-success">
                    <img src="https://res.cloudinary.com/dwz16rstr/image/upload/v1663718401/react-js-game-on/icons/checked_i6dpa4.png" alt="Checked icon"></img>
                </div>
                <div className="awesome">
                    <h1>Awesome!</h1>
                </div>
                <div className="description-success">
                    <h3>Your message was sent.</h3>
                </div>
                <div className="button-ok">
                    <Link to='/'>RETURN</Link>
                </div>
            </div>
        </div>
    );
};

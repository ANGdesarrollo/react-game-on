import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <div className='logo-header'>
            <Link to='/'><img src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958808/react-js-game-on/icons/logo-header_cibi2m.webp" alt="Logo Header"/></Link>
        </div>
    );
};

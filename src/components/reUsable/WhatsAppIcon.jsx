import React from 'react';

export default function WhatsAppIcon({classNameIcon}) {
    const divStyle = {
        cursor: 'pointer'
    }
    return (
        <img style={divStyle} className={classNameIcon} src="https://res.cloudinary.com/dwz16rstr/image/upload/v1663013684/react-js-game-on/icons/whatsapp-footer_exqj67.webp" alt="WhatsApp icon"/>
    );
}

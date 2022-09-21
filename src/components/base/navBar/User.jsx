export default function User({logIn}) {
    return (
        <img onClick={() => logIn(true)} src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958808/react-js-game-on/icons/header-user-a_mv3fko.webp" alt="User Icon"/>
    );
};

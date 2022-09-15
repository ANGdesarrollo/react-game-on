export default function MenuDesplegable({setClass}) {
    return (
        <div onClick={setClass} className='menu-hamburguesa-header'>
            <img src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958801/react-js-game-on/icons/hamburguesa_gw5hps.png" alt="Menu desplegable icon"/>
        </div>
    );
};

import React from "react";
import {CSSTransition} from "react-transition-group";

export default function IdOrder({idBuy}) {
    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
            <div className='final-buy-congrats'>
                <span>Congratulations</span>
                <span>ID order: {idBuy}</span>
            </div>
        </CSSTransition>
    );
};

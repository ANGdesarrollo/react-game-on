import HomeLayout from "./HomeLayout";
import {CSSTransition} from "react-transition-group";

export default function HomeContainer() {
    return (
        <>
            <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
                <HomeLayout/>
            </CSSTransition>
        </>
    );
};

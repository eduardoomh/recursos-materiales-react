import { animateScroll as scroll } from "react-scroll";

//funcion que genera scroll hacia la  parte mas alta de la pagina.
export const scrollTop = () => {

    scroll.scrollToTop({
        smooth: true,
        duration: 600,
        delay: 50,
    });

}

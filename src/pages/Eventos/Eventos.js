import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./Eventos.scss";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";

export default function Eventos(){
    scroll.scrollToTop();

    return(
        <div className="eventos">
            <Banner titulo="Solicitudes de Eventos" />

            <SolicitudGrid />

        </div>
    )
}


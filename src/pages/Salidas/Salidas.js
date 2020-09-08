import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./Salidas.scss";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";

export default function Salidas(){
    scroll.scrollToTop();
    return(
        <div className="salidas">
            <Banner titulo="Solicitudes de Salidas" />
            <SolicitudGrid />
        </div>
    )
}
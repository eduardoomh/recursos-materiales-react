import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./Mantenimientos.scss";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";

export default function Mantenimientos(){
    scroll.scrollToTop();
    return(
        <div className="mantenimientos">
            <Banner titulo="Solicitudes de Mantenimientos" />
            <SolicitudGrid />
        </div>
    )
}
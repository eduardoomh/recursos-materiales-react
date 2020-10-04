import React from "react";
import Buscador from "../Buscador/Buscador";
import "./BannerSolicitud.scss";

export default function BannerSolicitud(props){
    const { titulo, tipo, query } = props;

    return(
        <div className="banner-solicitud">
            <h1>{titulo}</h1>
            <div className="buscador-banner">
                <Buscador  tipo={tipo} query={query} />
            </div>
            
        </div>
    );
}
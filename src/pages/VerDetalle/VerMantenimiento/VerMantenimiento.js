import React from "react";
import "./VerMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function VerMantenimiento(){
    return(
        <div className="ver-mantenimiento">
                <Banner titulo="Titulo de la solicitud" />
                <Titulo titulo="fecha de la solicitud" />    
            <div>
                <p>contenido de la solicitud</p>
            </div>
        </div>
    )
}
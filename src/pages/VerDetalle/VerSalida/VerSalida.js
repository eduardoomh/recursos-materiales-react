import React from "react";
import "./VerSalida.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function VerSalida(){
    return(
        <div className="ver-salida">
            <Banner titulo="Titulo de la Solicitud" />
            <Titulo titulo="fecha de la solicitud" />
            <div>
                <p>contenido de la solicitud</p>
            </div>
        </div>
    )
}
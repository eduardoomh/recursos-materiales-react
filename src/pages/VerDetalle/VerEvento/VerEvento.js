import React from "react";
import "./VerEvento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function VerEvento(){
    return(
        <div className="ver-evento">
            <Banner titulo="Titulo de la solicitud" />
            <Titulo titulo="fecha de la solicitud" />

        </div>
    )
}
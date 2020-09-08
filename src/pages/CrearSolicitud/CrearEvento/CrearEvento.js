import React from "react";
import "./CrearEvento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function CrearEvento(){
    return(
        <div className="crear-evento">
            <Banner titulo="Crear nuevo Evento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
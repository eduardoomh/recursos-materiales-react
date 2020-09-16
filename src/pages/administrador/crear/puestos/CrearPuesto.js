import React from "react";
import "./CrearPuesto.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";

export default function CrearPuesto(){
    return(
        <div className="crear-puesto">
            <Banner titulo="Crear nuevo Puesto" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
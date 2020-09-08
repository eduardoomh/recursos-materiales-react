import React from "react";
import "./CrearMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function CrearMantenimiento(){
    return(
        <div className="crear-mantenimiento">
            <Banner titulo="Crear nuevo Mantenimiento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
       
    )
}
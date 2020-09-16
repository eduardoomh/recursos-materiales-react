import React from "react";
import "./CrearUbicacion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";

export default function CrearUbicacion(){
    return(
        <div className="crear-ubicacion">
            <Banner titulo="Crear nueva Ubicacion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
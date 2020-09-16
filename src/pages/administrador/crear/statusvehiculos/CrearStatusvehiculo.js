import React from "react";
import "./CrearStatusvehiculo.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";

export default function CrearStatusvehiculo(){
    return(
        <div className="crear-statusvehiculo">
            <Banner titulo="Crear nuevo Estado de vehiculos" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
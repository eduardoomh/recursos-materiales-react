import React from "react";
import "./CrearSubdireccion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";

export default function CrearSubdireccion(){
    return(
        <div className="crear-cargo">
            <Banner titulo="Crear nueva Subdireccion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
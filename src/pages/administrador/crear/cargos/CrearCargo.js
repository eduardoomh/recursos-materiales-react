import React from "react";
import "./CrearCargo.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";

export default function CrearCargo(){
    return(
        <div className="crear-cargo">
            <Banner titulo="Crear nuevo Cargo" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
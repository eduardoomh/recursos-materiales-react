import React from "react";
import "./CrearDepartamento.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";

export default function CrearDepartamento(){
    return(
        <div className="crear-departamento">
            <Banner titulo="Crear nuevo Departamento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
        </div>
    )
}
import React from "react";
import "./CrearEdificio.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormEdificio from "../../../../components/admin/crear/edificios/FormEdificio";

export default function CrearEdificio(){
    return(
        <div className="crear-edificio">
            <Banner titulo="Crear nuevo Edificio" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormEdificio />
        </div>
    )
}
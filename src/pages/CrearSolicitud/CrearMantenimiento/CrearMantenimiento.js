import React from "react";
import "./CrearMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioMantenimiento from "../../../components/Formularios/FormularioMantenimiento/FormularioMantenimiento";

export default function CrearMantenimiento(){
    return(
        <div className="crear-mantenimiento">
            <Banner titulo="Crear nuevo Mantenimiento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormularioMantenimiento />
        </div>
       
    )
}
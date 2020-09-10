import React from "react";
import "./CrearSalida";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioSalida from "../../../components/Formularios/FormularioSalida/FormularioSalida";

export default function CrearSalida(){
    return(
        <div className="crear-salida">
            <Banner titulo="Crear nueva Salida" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormularioSalida />

        </div>
    )
}
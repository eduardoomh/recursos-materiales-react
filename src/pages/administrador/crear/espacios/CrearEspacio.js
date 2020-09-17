import React from "react";
import "./CrearEspacio.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormEspacio from "../../../../components/admin/crear/espacios/FormEspacio";

export default function CrearEspacio(){
    return(
        <div className="crear-espacio">
            <Banner titulo="Crear nueva Locacion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormEspacio />
        </div>
    )
}
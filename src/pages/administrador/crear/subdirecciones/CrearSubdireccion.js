import React from "react";
import "./CrearSubdireccion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormSubdireccion from "../../../../components/admin/crear/subdirecciones/FormSubdireccion";

export default function CrearSubdireccion(){
    return(
        <div className="crear-cargo">
            <Banner titulo="Crear nueva Subdireccion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormSubdireccion />
        </div>
    )
}
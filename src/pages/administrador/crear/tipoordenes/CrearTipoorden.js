import React from "react";
import "./CrearTipoorden.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormTipoorden from "../../../../components/admin/crear/tipoordenes/FormTipoorden";

export default function CrearTipoorden(){
    return(
        <div className="crear-tipoorden">
            <Banner titulo="Crear nuevo Tipo de Orden" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormTipoorden />
        </div>
    )
}
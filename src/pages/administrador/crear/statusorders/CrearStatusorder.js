import React from "react";
import "./CrearStatusorder.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormStatusorder from "../../../../components/admin/crear/statusorders/FormStatusorder";

export default function CrearStatusorder(){
    return(
        <div className="crear-statusorder">
            <Banner titulo="Crear nuevo Estado de Mantenimiento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormStatusorder />
        </div>
    )
}
import React from "react";
import "./CrearStatusvehiculo.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormStatusvehiculo from "../../../../components/admin/crear/statusvehiculos/FormStatusvehiculo";

export default function CrearStatusvehiculo(){
    return(
        <div className="crear-statusvehiculo">
            <Banner titulo="Crear nuevo Estado de vehiculos" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormStatusvehiculo />
        </div>
    )
}
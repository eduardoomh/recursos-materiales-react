import React from "react";
import "./CrearVehiculo.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormVehiculo from "../../../../components/admin/crear/vehiculos/FormVehiculo";

export default function CrearVehiculo(){
    return(
        <div className="crear-vehiculo">
            <Banner titulo="Crear nuevo Vehiculo" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormVehiculo />
        </div>
    )
}
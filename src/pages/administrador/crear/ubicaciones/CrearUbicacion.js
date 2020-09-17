import React from "react";
import "./CrearUbicacion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormUbicacion from "../../../../components/admin/crear/ubicaciones/FormUbicacion";

export default function CrearUbicacion(){
    return(
        <div className="crear-ubicacion">
            <Banner titulo="Crear nueva Ubicacion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormUbicacion />
        </div>
    )
}
import React from "react";
import "./CrearOrganizacion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormOrganizacion from "../../../../components/admin/crear/organizaciones/FormOrganizacion";

export default function CrearOrganizacion(){
    return(
        <div className="crear-organizacion">
            <Banner titulo="Crear nueva Organizacion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            <FormOrganizacion />
        </div>
    )
}
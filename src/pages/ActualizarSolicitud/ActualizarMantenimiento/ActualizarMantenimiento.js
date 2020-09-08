import React from "react";
import "./ActualizarMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function ActualizarMantenimiento(){
    return(
        <div className="actualizar-mantenimiento">
            <Banner titulo="Actualizar Mantenimiento" />
            <Titulo titulo="Modifique los datos que requieran ser actualizados." />
        </div>
    )
}
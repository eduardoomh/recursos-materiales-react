import React from "react";
import "./ActualizarSalida.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function ActualizarSalida(){
    return(
        <div className="actualizar-salida">
            <Banner titulo="Actualizar Salida" />
            <Titulo titulo="Modifique los datos que requieran ser actualizados." />
        </div>
    )
}
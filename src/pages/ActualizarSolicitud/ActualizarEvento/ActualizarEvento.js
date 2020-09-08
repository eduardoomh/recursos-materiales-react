import React from "react";
import "./ActualizarEvento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";

export default function ActualizarEvento(){
    return(
        <div className="actualizar-evento">
            <Banner titulo="Actualizar Evento" />
            <Titulo titulo="Modifique los datos que requieran ser actualizados." />
        </div>
    )
}
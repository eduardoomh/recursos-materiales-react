import React from "react";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import "./MisSolicitudes.scss";

export default function MisSolicitudes(){
    return(
        <div className="mis-solicitudes">
            <Banner titulo="Sus Solicitudes" />
            <Titulo titulo="Aqui encontrara todas las solicitudes que ha creado usted." />
        </div>
    )
}
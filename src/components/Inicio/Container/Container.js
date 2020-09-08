import React from "react";
import "./Container.scss";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";

export default function Container(){
    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>
                <CardCarrousel titulo="Eventos" />

                <CardCarrousel titulo="Mantenimientos" />

                <CardCarrousel titulo="Salidas" />

            </div>
        </div>
    )
}
import React from "react";
import "./Container.scss";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";

export default function Container(){
    return(
        <div className="container">
            <h2>Solicitudes Mas Recientes</h2>
            <div>
                <CardCarrousel />

                <CardCarrousel />

                <CardCarrousel />

            </div>
        </div>
    )
}
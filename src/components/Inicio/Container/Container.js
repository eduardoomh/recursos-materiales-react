import React from "react";
import "./Container.scss";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";
import { eventosRecientes, mantenimientosRecientes, salidasRecientes } from "../../../api/data";

export default function Container(){
    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>
                <CardCarrousel titulo="Eventos" data={eventosRecientes} />

                <CardCarrousel titulo="Mantenimientos" data={mantenimientosRecientes} />

                <CardCarrousel titulo="Salidas" data={salidasRecientes} />

            </div>
        </div>
    )
}
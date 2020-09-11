import React from "react";
import "./Container.scss";
import { getStorage } from "../../../servicios/reutilizables/localStorage";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";

export default function Container(){

    const arraySolicitud = (arr) => {
        return [arr[0], arr[1], arr[2], arr[3], arr[4]];
    }

    const eventos = getStorage("eventos");
    const ultimosEventos = arraySolicitud(eventos);


    const mantenimientos = getStorage("mantenimientos");
    const ultimosMantenimientos = arraySolicitud(mantenimientos);

    const salidas = getStorage("salidas");
    const ultimaSalidas = arraySolicitud(salidas);
    
    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>
                <CardCarrousel titulo="Eventos" data={ultimosEventos} />

                <CardCarrousel titulo="Mantenimientos" data={ultimosMantenimientos} />

                <CardCarrousel titulo="Salidas" data={ultimaSalidas} />

            </div>
        </div>
    )
}
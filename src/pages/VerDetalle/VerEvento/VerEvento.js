import React from "react";
import "./VerEvento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionEvento from "../../../components/VerSolicitudes/VerEvento/InformacionEvento";
import { eventosRecientes } from "../../../api/data";

export default function VerEvento(){
    return(
        <div className="ver-evento">
            <Banner titulo="Titulo de la solicitud" />
            <Titulo titulo="fecha de la solicitud" />
            <InformacionEvento />
            <CardCarrousel titulo="Eventos" data={eventosRecientes} />

        </div>
    )
}
import React from "react";
import "./VerSalida.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionSalida from "../../../components/VerSolicitudes/VerSalida/InformacionSalida";
import { salidasRecientes } from "../../../api/data";

export default function VerSalida(){
    return(
        <div className="ver-salida">
            <Banner titulo="Titulo de la Solicitud" />
            <Titulo titulo="fecha de la solicitud" />
            <InformacionSalida />
            <CardCarrousel titulo="Salidas" data={salidasRecientes} />
        </div>
    )
}
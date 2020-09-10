import React from "react";
import "./VerMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionMantenimiento from "../../../components/VerSolicitudes/VerMantenimiento/InformacionMantenimiento";
import { mantenimientosRecientes } from "../../../api/data";


export default function VerMantenimiento(){
    return(
        <div className="ver-mantenimiento">
                <Banner titulo="Titulo de la solicitud" />
                <Titulo titulo="fecha de la solicitud" />    
                <InformacionMantenimiento />
            <CardCarrousel titulo="Mantenimientos" data={mantenimientosRecientes} />
        </div>
    )
}
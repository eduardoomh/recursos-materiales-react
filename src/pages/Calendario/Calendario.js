import React from "react";
import Banner from "../../components/reutilizables/Banner/Banner";
import Titulo from "../../components/reutilizables/Titulo/Titulo";
import Container from "../../components/calendario/Container/Container";
import "./Calendario.scss";

export default function Calendario(){
    return(
        <div className="calendario">
            <Banner titulo="Calendario de actividades" />
            <Titulo titulo="Consulte solicitudes y fechas" />
            <Container />
        </div>
    )
}
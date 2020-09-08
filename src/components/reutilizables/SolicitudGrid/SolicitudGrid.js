import React, { useState } from "react";
import "./SolicitudGrid.scss";
import Titulo from "../Titulo/Titulo";
import Grid from "../Grid/Grid";
import Filtrado from "../Filtrado/Filtrado";
import Paginacion from "../Paginacion/Paginacion";

export default function SolicitudGrid(){
    const [titulo, setTitulo] = useState("Solicitudes Mas Recientes");

    return(
        <div className="contenedor-grid">
            <Titulo titulo={titulo} />
            <Filtrado setTitulo={setTitulo} />
            <Grid />
            <Paginacion />

        </div>
    )
}
import React, { useState } from "react";
import "./SolicitudGrid.scss";
import Titulo from "../Titulo/Titulo";
import Grid from "../Grid/Grid";
import Filtrado from "../Filtrado/Filtrado";
import Paginacion from "../Paginacion/Paginacion";

export default function SolicitudGrid(props){
    const {data, tipo} = props;
    const { data: datos } = data;

    const [titulo, setTitulo] = useState("Solicitudes Mas Recientes");

    
    return(
        <div className="contenedor-grid">
            <Titulo titulo={titulo} />
            <Filtrado setTitulo={setTitulo} />
            <Grid data={datos} tipo={tipo} />
            <Paginacion 
                currentPage={data.current_page}
                from={data.from}
                to={data.to}
                lastPage={data.last_page}

            />

        </div>
    )
}
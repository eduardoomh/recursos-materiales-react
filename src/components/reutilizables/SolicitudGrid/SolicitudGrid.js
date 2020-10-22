import React, { useState } from "react";
import "./SolicitudGrid.scss";
import Titulo from "../Titulo/Titulo";
import Grid from "../Grid/Grid";

export default function SolicitudGrid(props) {
    const { data, tipo, pagina, setPagina, cantidad, loading, setLoading } = props;
    const textTitulo = "Datos de administrador"

    const [titulo ] = useState(textTitulo);


    return (
        <div className="solicitud-grid">
            <Titulo titulo={titulo} />
            <Grid 
                data={data} 
                tipo={tipo}
                pagina={pagina} 
                setPagina={setPagina} 
                cantidad={cantidad} 
                loading={loading}
                setLoading={setLoading} 
            />
        </div> 
    )
}
import React, { useState, useEffect } from "react";
import "./SolicitudGrid.scss";
import Titulo from "../Titulo/Titulo";
import Filtrado from "../Filtrado/Filtrado";
import Grid from "../Grid/Grid";

export default function SolicitudGrid(props) {
    const { data, tipo, pagina, setPagina, cantidad, loading, setLoading } = props;
    const textTitulo = "Datos de administrador"

    const [titulo, setTitulo] = useState(textTitulo);
    const [filtro, setFiltro] = useState(false);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titulo]);

    return (
        <div className="solicitud-grid">
            <Titulo titulo={titulo} />
            <Filtrado setTitulo={setTitulo} filtro={filtro} setFiltro={setFiltro} />
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
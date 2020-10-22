import React, { useState, useEffect } from "react";
import "./SolicitudList.scss";
import Titulo from "../Titulo/Titulo";
import Filtrado from "../Filtrado/Filtrado";
import Lista from "../List/List";

export default function SolicitudList(props) {
    const { data, tipo, pagina, setPagina, cantidad, loading, setLoading, query} = props;
    const textTitulo = "Solicitudes Mas Recientes"

    const [titulo, setTitulo] = useState(textTitulo);
    const [filtro, setFiltro] = useState(false);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titulo]);

    return (
        <div className="solicitud-list">
            <Titulo titulo={titulo} />
            <Filtrado setTitulo={setTitulo} filtro={filtro} setFiltro={setFiltro} tipo={tipo} query={query}/>
            <Lista 
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
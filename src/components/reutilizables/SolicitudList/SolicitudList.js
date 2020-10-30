import React, { useState, useEffect } from "react";
import "./SolicitudList.scss";
import Titulo from "../Titulo/Titulo";
import Filtrado from "../Filtrado/Filtrado";
import Lista from "../List/List";

export default function SolicitudList(props) {
    const { data, tipo, pagina, setPagina, cantidad, loading, setLoading, query, orden, filtro, refrescar} = props;
    const textTitulo = "Próximas a realizarse"

    const [titulo, setTitulo] = useState(textTitulo);

    useEffect(() => {
        if(titulo !== textTitulo){
            setPagina(1);
            refrescar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titulo]);

    return (
        <div className="solicitud-list">
            <Titulo titulo={titulo} />
            <Filtrado 
                setTitulo={setTitulo} 
                tipo={tipo} 
                query={query} 
                orden={orden} 
                filtro={filtro}
            />
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
import React, { useState, useEffect } from "react";
import "./SolicitudGrid.scss";
import Titulo from "../Titulo/Titulo";
import Grid from "../Grid/Grid";
import Filtrado from "../Filtrado/Filtrado";
import Paginacion from "../Paginacion/Paginacion";
import { getPorFiltrado } from "../../../servicios/filtrado";

export default function SolicitudGrid(props) {
    const { data, setData, tipo, setLoading, paginate = true, admin } = props;

    
    const textTitulo = tipo === "eventos" || "mantenimientos" || "salidas" ? "Solicitudes Mas Recientes" : "Mas Recientes";

    const [titulo, setTitulo] = useState(textTitulo);
    const [filtro, setFiltro] = useState(false);

    useEffect(() => {
 
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getPorFiltrado(tipo, titulo);
                if (response.status === "success") {
                    setData(response.elementos);
                    setFiltro(false);
                }

                setData(() => {
                    if (response.status === "success") return response.elementos
                });

                setFiltro(() => {
                    if (response.status === "success") return false
                });

                setLoading(() => {
                    if (response.status === "success") return false
                });

            }

            catch (err) {
                console.log(err);
            }
        }


        if (filtro === true) {
            fetchData();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titulo]);

    return (
        <div className="contenedor-grid">
            <Titulo titulo={titulo} />
            {
                paginate !== false ? 
                    <Filtrado setTitulo={setTitulo} setFiltro={setFiltro} />
                    :
                    <p></p>
            }
            
            <Grid data={paginate !== false ? data : data} tipo={tipo} admin={admin} paginate={paginate} />
            {
                paginate !== false && (
                    <Paginacion
                        currentPage={data.current_page}
                        lastPage={data.last_page}
                        prevUrl={data.prev_page_url}
                        nextUrl={data.next_page_url}
                        setData={setData}
                        setLoading={setLoading}
                    />

                )
            }

        </div>
    )
}
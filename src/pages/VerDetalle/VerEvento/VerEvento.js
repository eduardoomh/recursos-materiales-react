import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerEvento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTO } from "../../../gql/evento";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import InformacionEvento from "../../../components/VerSolicitudes/VerEvento/InformacionEvento";
import Cargando from "../../../components/reutilizables/Cargando/Cargando";

export default function VerEvento() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();


    const { data: evento, loading: loadingEvento, refetch } = useQuery(OBTENER_EVENTO, {
        variables: {
            id: id
        }
    })


    useEffect(() => {

        if (evento) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);



    return (
        <div className="ver-evento">
            {
                evento && !loadingEvento ? (
                    <>
                        <Banner titulo={evento.obtenerEvento.nombre} />
                        <Titulo titulo={transformarFecha(evento.obtenerEvento.fecha)} />
                        <InformacionEvento data={evento.obtenerEvento} loading={loading} setLoading={setLoading} />
                    </>
                )
                : <Cargando />
            }

        </div>
    )
}
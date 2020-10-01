import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerSalida.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SALIDA } from "../../../gql/salida";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import InformacionSalida from "../../../components/VerSolicitudes/VerSalida/InformacionSalida";

export default function VerSalida(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const { data: salida, loading: loadingSalida, refetch } = useQuery(OBTENER_SALIDA, {
        variables: {
            id: id
        }
    })

    useEffect(() => {
        if (salida) {
            refetch();
        }

        return () => {

        }
    }, [id]);

    return(
        <div className="ver-salida">
            {
                salida && !loadingSalida ? (
                    <>
                        <Banner titulo={salida.obtenerSalida.destino} />
                        <Titulo titulo={transformarFecha(salida.obtenerSalida.fecha)} />
                        <InformacionSalida data={salida.obtenerSalida} loading={loading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }
        </div>
    )
}
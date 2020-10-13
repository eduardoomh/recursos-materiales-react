import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VerSalida.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SALIDA } from "../../../gql/salida";
import { OBTENER_EVIDENCIAS } from "../../../gql/evidencia";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import Cargando from "../../../components/reutilizables/Cargando/Cargando";
import InformacionSalida from "../../../components/VerSolicitudes/VerSalida/InformacionSalida";

export default function VerSalida(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const { data: salida, loading: loadingSalida, refetch } = useQuery(OBTENER_SALIDA, {
        variables: {
            id: id
        }
    })

    const { data: evidencias, loading: loadingEvidencias, refetch: refrescarEvidencias } = useQuery(OBTENER_EVIDENCIAS, {
        variables: {
            input:{
                id: id,
                tipo: "salidas"
            }
        }
    })

    useEffect(() => {
        if (salida) {
            refetch();
        }

        return () => {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return(
        <div className="ver-salida">
            {
                salida && !loadingSalida ? (
                    <>
                        <Banner titulo={salida.obtenerSalida.destino} />
                        <Titulo titulo={transformarFecha(salida.obtenerSalida.fecha)} />
                        <InformacionSalida 
                            data={salida.obtenerSalida} 
                            loading={loading} 
                            setLoading={setLoading} 
                            evidencias={evidencias.obtenerEvidencias}
                            refrescarEvidencias={refrescarEvidencias}
                        />
                    </>
                )
                : <Cargando />
            }
        </div>
    )
}
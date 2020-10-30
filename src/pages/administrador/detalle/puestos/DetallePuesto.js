import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetallePuesto.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTO } from "../../../../gql/puesto";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoPuesto from "../../../../components/admin/detalle/puestos/InfoPuesto";

export default function DetallePuesto() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: puesto, loading: loadingPuesto, refetch } = useQuery(OBTENER_PUESTO, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (puesto) {
            refetch();
        }
        return () => {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return (
        <div className="ver-puesto">
            <Banner titulo="Información del puesto" />
            <Titulo titulo="puede editar la informacion si lo requiere" />
            {
                puesto && !loadingPuesto ? (
                    <>
                        <InfoPuesto 
                            data={puesto.obtenerPuesto} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="puesto"
                            plural="puestos"
                        />
                    </>
                )
                    : <Loader active inline='centered' size='massive' />
            }
        </div>
    )
}
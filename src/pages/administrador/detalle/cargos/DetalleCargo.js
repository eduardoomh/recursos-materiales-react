import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleCargo.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTO } from "../../../../gql/puesto";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoCargo from "../../../../components/admin/detalle/cargos/InfoCargo";

export default function DetalleCargo() {
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
        <div className="ver-cargo">
            <Banner titulo="Informacion del puesto" />
            <Titulo titulo="puede editar la informacion si lo requiere" />
            {
                puesto && !loadingPuesto ? (
                    <>
                        <InfoCargo data={puesto.obtenerPuesto} loading={loading} setLoading={setLoading} />
                    </>
                )
                    : <Loader active inline='centered' size='massive' />
            }
        </div>
    )
}
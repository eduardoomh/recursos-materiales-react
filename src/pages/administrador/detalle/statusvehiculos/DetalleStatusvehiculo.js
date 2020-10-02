import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleStatusvehiculo.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLA } from "../../../../gql/acomodosilla";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoStatusvehiculo from "../../../../components/admin/detalle/statusvehiculos/InfoStatusvehiculo";

export default function DetalleStatusvehiculo(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: acomodosilla, loading: loadingAcomodosilla, refetch } = useQuery(OBTENER_ACOMODOSILLA, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (acomodosilla) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);



    return(
        <div className="ver-statusvehiculo">
            <Banner titulo="Detalle del estado de Vehiculos" />
            <Titulo titulo="Informacion sobre el Estado de Vehiculo seleccionado" />
            {
                acomodosilla && !loadingAcomodosilla ? (
                    <>
                        <InfoStatusvehiculo data={acomodosilla.obtenerAcomodosilla} loading={loading} setLoading={setLoading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
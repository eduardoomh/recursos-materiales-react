import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleOrganizacion.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLA } from "../../../../gql/acomodosilla";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoOrganizacion from "../../../../components/admin/detalle/organizaciones/InfoOrganizacion";

export default function DetalleOrganizacion(){
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
    console.log(acomodosilla)



    return(
        <div className="ver-organizacion">
            <Banner titulo="Detalle de la organizacion de eventos" />
            <Titulo titulo="Informacion sobre la organizacion seleccionada" />
            {
                acomodosilla && !loadingAcomodosilla ? (
                    <>
                        <InfoOrganizacion 
                            data={acomodosilla.obtenerAcomodosilla} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="organizacion"
                            plural="organizaciones"
                        />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
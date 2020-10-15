import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLAS } from "../../../../gql/acomodosilla";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Organizaciones() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: acomodosillas, loading: loadingAcomodosillas, refetch: refrescarAcomodosillas} = useQuery(OBTENER_ACOMODOSILLAS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarAcomodosillas();
        }
    },[]);



    return (
        <>
            <div className="organizaciones">
                <Banner titulo="Organizacion de Eventos" />
                {
                    !loadingAcomodosillas ?

                        <SolicitudGrid
                            data={acomodosillas.obtenerAcomodosillas}
                            tipo="organizacion"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

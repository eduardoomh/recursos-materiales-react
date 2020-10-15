import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SITIOS } from "../../../../gql/sitio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";


export default function Sitios() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: sitios, loading: loadingSitios, refetch: refrescarSitios} = useQuery(OBTENER_SITIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarSitios();
        }
    },[]);

    return (
        <>
            <div className="sitios">
                <Banner titulo="Sitios" />
                {
                    !loadingSitios ?

                        <SolicitudGrid
                            data={sitios.obtenerSitios}
                            tipo="sitio"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>

        </>
    )
}

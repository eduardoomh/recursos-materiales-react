import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SITIOS } from "../../../../gql/sitio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";


export default function Espacios() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: sitios, loading: loadingSitios} = useQuery(OBTENER_SITIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    return (
        <>
            <div className="espacios">
                <Banner titulo="Locaciones" />
                {
                    !loadingSitios ?

                        <SolicitudGrid
                            data={sitios.obtenerSitios}
                            tipo="espacios"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>

        </>
    )
}

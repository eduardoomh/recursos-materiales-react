import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCIONES } from "../../../../gql/subdireccion";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: subdirecciones, loading: loadingSubdirecciones} = useQuery(OBTENER_SUBDIRECCIONES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })


    return (
        <>
            <div className="subdirecciones">
                <Banner titulo="Subdirecciones" />
                {
                    !loadingSubdirecciones ?

                        <SolicitudGrid
                            data={subdirecciones.obtenerSubdirecciones}
                            tipo="subdirecciones"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

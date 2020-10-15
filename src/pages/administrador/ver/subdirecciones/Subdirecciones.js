import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCIONES } from "../../../../gql/subdireccion";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: subdirecciones, loading: loadingSubdirecciones, refetch: refrescarSubdirecciones} = useQuery(OBTENER_SUBDIRECCIONES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarSubdirecciones();
        }
    },[]);


    return (
        <>
            <div className="subdirecciones">
                <Banner titulo="Subdirecciones" />
                {
                    !loadingSubdirecciones ?

                        <SolicitudGrid
                            data={subdirecciones.obtenerSubdirecciones}
                            tipo="subdireccion"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_PERMISOS } from "../../../../gql/permiso";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Permisos() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();
    
        const {data: permisos, loading: loadingPermisos, refetch: refrescarPermisos} = useQuery(OBTENER_PERMISOS, {
            variables: {
                input: {
                    cantidad: 15,
                    pagina: 1
                }
            }
        })

        useEffect(() => {
            if(refresh){
                refrescarPermisos();
            }
        },[]);
    

    return (
        <>
            <div className="permisos">
                <Banner titulo="Permisos" />
                {
                    !loadingPermisos ?

                        <SolicitudGrid
                            data={permisos.obtenerPermisos}
                            tipo="permiso"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_PERMISOS } from "../../../../gql/permiso";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Puestos() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();
    
        const {data: permisos, loading: loadingPermisos} = useQuery(OBTENER_PERMISOS, {
            variables: {
                input: {
                    cantidad: 15,
                    pagina: 1
                }
            }
        })
    

    return (
        <>
            <div className="puestos">
                <Banner titulo="Puestos" />
                {
                    !loadingPermisos ?

                        <SolicitudGrid
                            data={permisos.obtenerPermisos}
                            tipo="puestos"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

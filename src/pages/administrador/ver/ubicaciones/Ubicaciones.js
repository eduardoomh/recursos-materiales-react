import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: edificios, loading: loadingEdificios} = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })


    return (
        <>
            <div className="ubicaciones">
                <Banner titulo="Ubicaciones" />
                {
                    !loadingEdificios ?

                        <SolicitudGrid
                            data={edificios.obtenerEdificios}
                            tipo="ubicaciones"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

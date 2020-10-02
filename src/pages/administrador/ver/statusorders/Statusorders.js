import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDERS } from "../../../../gql/tipoorder";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Statusorders() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: tipoorders, loading: loadingTipoorders} = useQuery(OBTENER_TIPOORDERS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    return (
        <>
            <div className="statusorders">
                <Banner titulo="Estados de mantenimiento" />
                {
                    !loadingTipoorders ?

                        <SolicitudGrid
                            data={tipoorders.obtenerTipoorders}
                            tipo="statusorders"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

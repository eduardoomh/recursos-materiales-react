import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDERS } from "../../../../gql/tipoorder";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Tipoordenes() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: tipoorders, loading: loadingTipoorders, refetch: refrescarTipoorders} = useQuery(OBTENER_TIPOORDERS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarTipoorders();
        }
    },[]);

    return (
        <>
            <div className="tipoordenes">
                <Banner titulo="Tipo de Ordenes" />
                {
                    !loadingTipoorders ?

                        <SolicitudGrid
                            data={tipoorders.obtenerTipoorders}
                            tipo="tipoorden"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

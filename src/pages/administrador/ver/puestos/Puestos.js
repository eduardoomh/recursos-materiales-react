import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTOS } from "../../../../gql/puesto";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Puestos() {
    const [loading, setLoading] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const { data: puestos, loading: loadingPuestos, refetch: refrescarCargos } = useQuery(OBTENER_PUESTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        } 
    })

    useEffect(() => {
        if(refresh){
            refrescarCargos();
        }
    },[]);

    return (
        <>
            <div className="puestos">
                <Banner titulo="Puestos" />
                {
                    !loadingPuestos ?

                        <SolicitudGrid
                            data={puestos.obtenerPuestos}
                            tipo="puesto"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Edificios() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: edificios, loading: loadingEdificios, refetch: refrescarEdificios} = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarEdificios();
        }
    },[]);



    return (
        <>
            <div className="edificios">
                <Banner titulo="Edificios" />
                {
                    !loadingEdificios ?

                        <SolicitudGrid
                            data={edificios.obtenerEdificios}
                            tipo="edificio"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

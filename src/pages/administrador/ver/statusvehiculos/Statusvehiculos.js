import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLAS } from "../../../../gql/acomodosilla";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: acomodosillas, loading: loadingAcomodosillas} = useQuery(OBTENER_ACOMODOSILLAS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })



    return (
        <>
            <div className="statusvehiculos">
                <Banner titulo="Estados de vehiculos" />
                {
                    !loadingAcomodosillas ?

                        <SolicitudGrid
                            data={acomodosillas.obtenerAcomodosillas}
                            tipo="statusvehiculos"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }


            </div>
        </>
    )
}

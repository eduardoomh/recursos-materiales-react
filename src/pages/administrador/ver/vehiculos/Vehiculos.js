import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import {  OBTENER_VEHICULOS } from "../../../../gql/vehiculo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Vehiculos() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: vehiculos, loading: loadingVehiculos} = useQuery(OBTENER_VEHICULOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })



    return (
        <>
            <div className="vehiculos">
                <Banner titulo="Vehiculos" />
                {
                    !loadingVehiculos ?

                        <SolicitudGrid
                            data={vehiculos.obtenerVehiculos}
                            tipo="vehiculos"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

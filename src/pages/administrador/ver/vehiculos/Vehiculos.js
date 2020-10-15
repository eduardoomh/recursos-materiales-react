import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import {  OBTENER_VEHICULOS } from "../../../../gql/vehiculo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Vehiculos() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: vehiculos, loading: loadingVehiculos, refetch: refrescarVehiculos} = useQuery(OBTENER_VEHICULOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarVehiculos();
        }
    },[]);


    return (
        <>
            <div className="vehiculos">
                <Banner titulo="Vehiculos" />
                {
                    !loadingVehiculos ?

                        <SolicitudGrid
                            data={vehiculos.obtenerVehiculos}
                            tipo="vehiculo"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

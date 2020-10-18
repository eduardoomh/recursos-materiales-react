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
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: vehiculos, loading: loadingVehiculos, refetch: refrescarVehiculos} = useQuery(OBTENER_VEHICULOS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!vehiculos){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarVehiculos();
        }
    },[]);

    useEffect(() => {
        if(vehiculos){
            refrescarVehiculos();
        }
    },[pagina]);

    useEffect(() => {
        if(vehiculos){
            setSolicitudesArray(vehiculos.obtenerVehiculos);
            setLoading(false);
        }
    },[vehiculos]);

    return (
        <>
            <div className="vehiculos">
                <Banner titulo="Vehiculos" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="vehiculo"
                            loading={loading}
                            setLoading={setLoading}
                            pagina={pagina}
                            setPagina={setPagina}
                            cantidad={cantidad}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

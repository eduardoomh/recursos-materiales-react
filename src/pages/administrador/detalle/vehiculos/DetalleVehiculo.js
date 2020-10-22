import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleVehiculo.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_VEHICULO } from "../../../../gql/vehiculo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoVehiculo from "../../../../components/admin/detalle/vehiculos/InfoVehiculo";

export default function DetalleVehiculo(){
    const [loading ] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: vehiculo, loading: loadingVehiculo, refetch } = useQuery(OBTENER_VEHICULO, {
        variables: {
            id: id
        }
    });

    useEffect(() => {

        if (vehiculo) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return(
        <div className="ver-vehiculo">
            <Banner titulo="Detalle del Vehiculo" />
            <Titulo titulo="Informacion sobre el vehiculo seleccionado" />
            {
                vehiculo && !loadingVehiculo ? (
                    <>
                    
                        <InfoVehiculo data={vehiculo.obtenerVehiculo} loading={loading} tipo="vehiculo" plural="vehiculos" />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleUbicacion.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIO } from "../../../../gql/edificio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoUbicacion from "../../../../components/admin/detalle/ubicaciones/InfoUbicacion";

export default function DetalleUbicacion(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: edificio, loading: loadingEdificio, refetch } = useQuery(OBTENER_EDIFICIO, {
        variables: {
            id: id
        }
    });

    useEffect(() => {

        if (edificio) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return(
        <div className="ver-ubicacion">
            <Banner titulo="Detalle de la Ubicacion" />
            <Titulo titulo="Informacion sobre la Ubicacion seleccionada" />
            {
                edificio && !loadingEdificio ? (
                    <>
                        <InfoUbicacion data={edificio.obtenerEdificio} loading={loading} setLoading={setLoading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
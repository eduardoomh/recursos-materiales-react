import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleEspacio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SITIO } from "../../../../gql/sitio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoEspacio from "../../../../components/admin/detalle/espacios/InfoEspacio";

export default function DetalleEspacio(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: sitio, loading: loadingSitio, refetch } = useQuery(OBTENER_SITIO, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (sitio) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return(
        <div className="ver-espacio">
            <Banner titulo="Detalle de la Locacion" />
            <Titulo titulo="Informacion sobre la locacion seleccionado" />
            {
                sitio && !loadingSitio ? (
                    <>
                        <InfoEspacio data={sitio.obtenerSitio} loading={loading} setLoading={setLoading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
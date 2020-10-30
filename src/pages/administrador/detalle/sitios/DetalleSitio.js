import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleSitio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SITIO } from "../../../../gql/sitio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoSitio from "../../../../components/admin/detalle/sitios/InfoSitio";

export default function DetalleSitio(){
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
        <div className="ver-sitio">
            <Banner titulo="Detalle del Sitio" />
            <Titulo titulo="Información sobre el Sitio seleccionado" />
            {
                sitio && !loadingSitio ? (
                    <>
                        <InfoSitio 
                            data={sitio.obtenerSitio} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="sitio"
                            plural="sitios"
                        />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
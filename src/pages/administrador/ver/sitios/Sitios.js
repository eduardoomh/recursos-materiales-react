import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SITIOS } from "../../../../gql/sitio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";


export default function Sitios() {
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: sitios, refetch: refrescarSitios} = useQuery(OBTENER_SITIOS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!sitios){
            scrollTop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(refresh){
            scrollTop();
            refrescarSitios();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(sitios){
            refrescarSitios();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina]);

    useEffect(() => {
        if(sitios){
            setSolicitudesArray(sitios.obtenerSitios);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sitios]);

    return (
        <>
            <div className="sitios">
                <Banner titulo="Sitios" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="sitio"
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

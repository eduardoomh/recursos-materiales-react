import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCIONES } from "../../../../gql/subdireccion";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: subdirecciones, loading: loadingSubdirecciones, refetch: refrescarSubdirecciones} = useQuery(OBTENER_SUBDIRECCIONES, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })

    useEffect(() => {
        if(!subdirecciones){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarSubdirecciones();
        }
    },[]);

    useEffect(() => {
        if(subdirecciones){
            refrescarSubdirecciones();
        }
    },[pagina]);

    useEffect(() => {
        if(subdirecciones){
            setSolicitudesArray(subdirecciones.obtenerSubdirecciones);
            setLoading(false);
        }
    },[subdirecciones]);


    return (
        <>
            <div className="subdirecciones">
                <Banner titulo="Subdirecciones" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="subdireccion"
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

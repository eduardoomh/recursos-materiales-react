import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLAS } from "../../../../gql/acomodosilla";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Organizaciones() {
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: acomodosillas, loading: loadingAcomodosillas, refetch: refrescarAcomodosillas} = useQuery(OBTENER_ACOMODOSILLAS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!acomodosillas){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarAcomodosillas();
        }
    },[]);

    useEffect(() => {
        if(acomodosillas){
            refrescarAcomodosillas();
        }
    },[pagina]);

    useEffect(() => {
        if(acomodosillas){
            setSolicitudesArray(acomodosillas.obtenerAcomodosillas);
            setLoading(false);
        }
    },[acomodosillas]);



    return (
        <>
            <div className="organizaciones">
                <Banner titulo="Organizacion de Eventos" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="organizacion"
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

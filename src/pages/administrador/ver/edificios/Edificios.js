import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Edificios() {
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: edificios, loading: loadingEdificios, refetch: refrescarEdificios} = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!edificios){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarEdificios();
        }
    },[]);

    useEffect(() => {
        if(edificios){
            refrescarEdificios();
        }
    },[pagina]);

    useEffect(() => {
        if(edificios){
            setSolicitudesArray(edificios.obtenerEdificios);
            setLoading(false);
        }
    },[edificios]);



    return (
        <>
            <div className="edificios">
                <Banner titulo="Edificios" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="edificio"
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDERS } from "../../../../gql/tipoorder";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Tipoordenes() {
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: tipoorders, loading: loadingTipoorders, refetch: refrescarTipoorders} = useQuery(OBTENER_TIPOORDERS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!tipoorders){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarTipoorders();
        }
    },[]);

    useEffect(() => {
        if(tipoorders){
            refrescarTipoorders();
        }
    },[pagina]);

    useEffect(() => {
        if(tipoorders){
            setSolicitudesArray(tipoorders.obtenerTipoorders);
            setLoading(false);
        }
    },[tipoorders]);

    return (
        <>
            <div className="tipoordenes">
                <Banner titulo="Tipo de Ordenes" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="tipoorden"
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

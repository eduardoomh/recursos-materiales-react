import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTOS } from "../../../../gql/puesto";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Puestos() {
    const [loading, setLoading] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const { data: puestos, refetch: refrescarCargos } = useQuery(OBTENER_PUESTOS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        } 
    })


    useEffect(() => {
        if(!puestos){
            scrollTop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(refresh){
            scrollTop();
            refrescarCargos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(puestos){
            refrescarCargos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina]);

    useEffect(() => {
        if(puestos){
            setSolicitudesArray(puestos.obtenerPuestos);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[puestos]);

    return (
        <>
            <div className="puestos">
                <Banner titulo="Puestos" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="puesto"
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

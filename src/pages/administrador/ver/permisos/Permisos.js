import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_PERMISOS } from "../../../../gql/permiso";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Permisos() {
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();
    
        const {data: permisos, refetch: refrescarPermisos} = useQuery(OBTENER_PERMISOS, {
            variables: {
                input: {
                    cantidad: cantidad,
                    pagina: pagina
                }
            }
        })

        useEffect(() => {
            if(!permisos){
                scrollTop();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);
    
        useEffect(() => {
            if(refresh){
                scrollTop();
                refrescarPermisos();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);
    
        useEffect(() => {
            if(permisos){
                refrescarPermisos();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[pagina]);
    
        useEffect(() => {
            if(permisos){
                setSolicitudesArray(permisos.obtenerPermisos);
                setLoading(false);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[permisos]);
    

    return (
        <>
            <div className="permisos">
                <Banner titulo="Permisos" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="permiso"
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

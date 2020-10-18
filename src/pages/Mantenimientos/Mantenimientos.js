import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Mantenimientos.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_REPARACIONES, BUSCAR_MANTENIMIENTO } from "../../gql/mantenimiento";
import { scrollTop } from "../../utils/reutilizables/scroll";
import BannerSolicitud from "../../components/reutilizables/BannerSolicitud/BannerSolicitud";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";

export default function Mantenimientos(){
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();
    
    
    const { data: reparaciones, loading: loadingReparaciones, refetch: refrescarMantenimientos} = useQuery(OBTENER_REPARACIONES, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })  

    useEffect(() => {
        if(!reparaciones){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarMantenimientos();
        }
    },[]);

    useEffect(() => {
        if(reparaciones){
            refrescarMantenimientos();
        }
    },[pagina]);

    useEffect(() => {
        if(reparaciones){
            setSolicitudesArray(reparaciones.obtenerReparaciones);
            setLoading(false);
        }
    },[reparaciones]);


    return(
        <div className="mantenimientos">
            <BannerSolicitud 
                titulo="Solicitudes de Mantenimientos" 
                query={BUSCAR_MANTENIMIENTO} 
                tipo="mantenimiento"
            />
            {
                solicitudesArray ?

                <SolicitudList
                    data={solicitudesArray}
                    tipo="mantenimiento"
                    loading={loading}
                    setLoading={setLoading}
                    pagina={pagina}
                    setPagina={setPagina}
                    cantidad={cantidad}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
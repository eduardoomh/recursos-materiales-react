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
    const [ orden, setOrden ] = useState({fecha: -1});
    const [ filtro, setFiltro ] = useState("");
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();
    
    
    const { data: reparaciones,  refetch: refrescarMantenimientos} = useQuery(OBTENER_REPARACIONES, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            },
            orden: orden,
            filtro: filtro
        }
        
    })  

    useEffect(() => {
        if(!reparaciones){
            scrollTop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarMantenimientos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(reparaciones){
            refrescarMantenimientos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina]);

    useEffect(() => {
        if(reparaciones){
            setSolicitudesArray(reparaciones.obtenerReparaciones);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[reparaciones]);


    return(
        <div className="mantenimientos">
            <BannerSolicitud 
                titulo="Solicitudes de Mantenimientos" 
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
                    query={BUSCAR_MANTENIMIENTO}
                    orden={setOrden}
                    filtro={setFiltro}
                    refrescar={refrescarMantenimientos}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
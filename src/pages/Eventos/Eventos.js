import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Eventos.scss";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTOS } from "../../gql/evento";
import { BUSCAR_EVENTO } from "../../gql/evento";
import { scrollTop } from "../../utils/reutilizables/scroll";
import BannerSolicitud from "../../components/reutilizables/BannerSolicitud/BannerSolicitud";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";


export default function Eventos() {
    const [loading, setLoading] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const { data: eventos, refetch: refrescarEventos} = useQuery(OBTENER_EVENTOS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!eventos){
            scrollTop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(refresh){
            scrollTop();
            refrescarEventos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if(eventos){
            refrescarEventos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pagina]);

    useEffect(() => {
        if(eventos){
            setSolicitudesArray(eventos.obtenerEventos);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[eventos]);

 
    return (
        <div className="eventos">
            <BannerSolicitud 
                titulo="Solicitudes de Eventos" 
            />
            
            {
                solicitudesArray ?

                <SolicitudList
                    data={solicitudesArray}
                    tipo="evento"
                    loading={loading}
                    setLoading={setLoading}
                    pagina={pagina}
                    setPagina={setPagina}
                    cantidad={cantidad}
                    query={BUSCAR_EVENTO} 
                />
                : <Loader active inline='centered' size='massive' />


            }

        </div>
    )
}


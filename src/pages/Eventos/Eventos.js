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
    const { refresh } = useParams();
    scrollTop();

    const { data: eventos, loading: loadingEventos, refetch: refrescarEventos} = useQuery(OBTENER_EVENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarEventos();
        }
    },[]);

 
    return (
        <div className="eventos">
            <BannerSolicitud 
                titulo="Solicitudes de Eventos" 
                query={BUSCAR_EVENTO} 
                tipo="evento"
            />
            
            {
                !loadingEventos ?

                <SolicitudList
                    data={eventos.obtenerEventos}
                    tipo="evento"
                    loading={loading}
                    setLoading={setLoading}
                />
                : <Loader active inline='centered' size='massive' />


            }

        </div>
    )
}


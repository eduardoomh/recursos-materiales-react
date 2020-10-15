import React, { useState } from "react";
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
    scrollTop();

    const { data: eventos, loading: loadingEventos } = useQuery(OBTENER_EVENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

 
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


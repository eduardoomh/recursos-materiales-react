import React, { useState, useEffect } from "react";
import "./Eventos.scss";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTOS } from "../../gql/evento";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../utils/reutilizables/scroll";

export default function Eventos() {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

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
            <Banner titulo="Solicitudes de Eventos" />
            
            {
                !loadingEventos ?

                <SolicitudList
                    data={eventos.obtenerEventos}
                    tipo="eventos"
                    loading={loading}
                    setLoading={setLoading}
                />
                : <Loader active inline='centered' size='massive' />


            }

        </div>
    )
}


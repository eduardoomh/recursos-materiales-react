import React, { useState, useEffect } from "react";
import "./Eventos.scss";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTOS } from "../../gql/evento";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
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

    const fetchData = async () => {
        try {
            setContent(() => {
                if (eventos) return eventos.obtenerEventos
            });

            setLoading(() => {
                if (eventos) return false
            });

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        scrollTop();
        fetchData();

        return () => {
            setContent("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div className="eventos">
            <Banner titulo="Solicitudes de Eventos" />
            {
                !loadingEventos &&

                <SolicitudGrid
                    data={content}
                    setData={setContent}
                    tipo="eventos"
                    loading={loading}
                    setLoading={setLoading}
                    paginate={false}
                />

            }

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}


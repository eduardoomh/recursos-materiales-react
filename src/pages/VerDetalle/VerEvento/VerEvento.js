import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./VerEvento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTO } from "../../../gql/evento";
import { OBTENER_PERMISO_USUARIO } from "../../../gql/permiso";
import { OBTENER_EVIDENCIAS } from "../../../gql/evidencia";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import useIdentity from "../../../utils/hooks/useIdentity";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import InformacionEvento from "../../../components/VerSolicitudes/VerEvento/InformacionEvento";
import Cargando from "../../../components/reutilizables/Cargando/Cargando";

export default function VerEvento() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const { identity } = useIdentity();


    const { data: evento, loading: loadingEvento, refetch } = useQuery(OBTENER_EVENTO, {
        variables: {
            id: id
        }
    })

    const { data: permiso, loading: loadingPermiso } = useQuery(OBTENER_PERMISO_USUARIO, {
        variables: {
            id: identity.id
        }
    })

    const { data: evidencias, loading: loadingEvidencias, refetch: refrescarEvidencias } = useQuery(OBTENER_EVIDENCIAS, {
        variables: {
            input:{
                id: id,
                tipo: "eventos"
            }
        }
    })

    return (
        <div className="ver-evento">
            {
                evento && permiso && evidencias && !loadingEvento && !loadingPermiso && !loadingEvidencias ? (
                    <>
                        <Banner titulo={evento.obtenerEvento.nombre} />
                        <Titulo titulo={transformarFecha(evento.obtenerEvento.fecha)} />
                        <InformacionEvento 
                            data={evento.obtenerEvento} 
                            loading={loading} 
                            setLoading={setLoading} 
                            refetch={refetch} 
                            permiso={permiso.obtenerPermisoUsuario} 
                            evidencias={evidencias.obtenerEvidencias}
                            refrescarEvidencias={refrescarEvidencias}
                        />
                    </>
                )
                : <Cargando />
            }

        </div>
    )
}
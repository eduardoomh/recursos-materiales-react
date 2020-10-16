import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./VerMantenimiento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_MANTENIMIENTO } from "../../../gql/mantenimiento";
import { OBTENER_PERMISO_USUARIO } from "../../../gql/permiso";
import { OBTENER_EVIDENCIAS } from "../../../gql/evidencia";
import { OBTENER_USUARIOS } from "../../../gql/usuario";
import useIdentity from "../../../utils/hooks/useIdentity";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import Cargando from "../../../components/reutilizables/Cargando/Cargando";
import InformacionMantenimiento from "../../../components/VerSolicitudes/VerMantenimiento/InformacionMantenimiento";

export default function VerMantenimiento(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const { identity } = useIdentity();

    const { data: mantenimiento, loading: loadingMantenimiento, refetch } = useQuery(OBTENER_MANTENIMIENTO, {
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
                tipo: "mantenimientos"
            }
        }
    })

    const { data: administrador, loading: loadingAdministrador} = useQuery(OBTENER_USUARIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            },
            filtro: {
                propiedad: "estatus",
                atributo: "administrador"
            }
        }
    })


    return(
        <div className="ver-mantenimiento">
            {
                mantenimiento && permiso && evidencias && administrador && !loadingMantenimiento && !loadingPermiso && !loadingEvidencias && !loadingAdministrador ? (
                    <>
                        <Banner titulo={mantenimiento.obtenerMantenimiento.nombre} />
                        <Titulo titulo={transformarFecha(mantenimiento.obtenerMantenimiento.fecha)} />
                        <InformacionMantenimiento 
                            data={mantenimiento.obtenerMantenimiento} 
                            loading={loading} 
                            setLoading={setLoading}
                            refetch={refetch}
                            permiso={permiso.obtenerPermisoUsuario}  
                            evidencias={evidencias.obtenerEvidencias}
                            refrescarEvidencias={refrescarEvidencias} 
                            administrador={`${administrador.obtenerUsuarios[0].nombre} ${administrador.obtenerUsuarios[0].apellidos}`}
                        />
                    </>
                )
                : <Cargando />
            }
        </div>
    )
}
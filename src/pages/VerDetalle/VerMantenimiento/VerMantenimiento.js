import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VerMantenimiento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_MANTENIMIENTO } from "../../../gql/mantenimiento";
import { OBTENER_PERMISO_USUARIO } from "../../../gql/permiso";
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


    return(
        <div className="ver-mantenimiento">
            {
                mantenimiento && permiso && !loadingMantenimiento && !loadingPermiso ? (
                    <>
                        <Banner titulo={mantenimiento.obtenerMantenimiento.nombre} />
                        <Titulo titulo={transformarFecha(mantenimiento.obtenerMantenimiento.fecha)} />
                        <InformacionMantenimiento 
                            data={mantenimiento.obtenerMantenimiento} 
                            loading={loading} 
                            setLoading={setLoading}
                            refetch={refetch}
                            permiso={permiso.obtenerPermisoUsuario}   
                        />
                    </>
                )
                : <Cargando />
            }
        </div>
    )
}
import React from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_USUARIOS_APROBADOS, OBTENER_USUARIOS_PENDIENTES } from "../../../gql/usuario";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import UsuarioList from "../../../components/usuario/UsuarioList/UsuarioList";
import "./Usuarios.scss";

export default function Usuarios() {
    const { data: usuariosAprobados, loading: loadingAprobados, refetch: refetchAprobados } = useQuery(OBTENER_USUARIOS_APROBADOS, {
        variables: {
            input: {
                pagina: 1,
                cantidad: 15
            }

        }
    });

    const { data: usuariosPendientes, loading: loadingPendientes, refetch: refetchPendientes } = useQuery(OBTENER_USUARIOS_PENDIENTES,{
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });
    return (
        <div className="usuarios">
            <Banner titulo="Usuarios" />
            <Titulo titulo="Gestione los usuarios que pueden acceder al sistema" />
            {
                !loadingAprobados && !loadingPendientes && (
                    <UsuarioList 
                        aprobados={usuariosAprobados.obtenerUsuarios} 
                        pendientes={usuariosPendientes.obtenerUsuariosPendientes} 
                        refetchAprobados={refetchAprobados}
                        refetchPendientes={refetchPendientes}
                    />
                )
            }
            
        </div>

    )
}
import React from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_USUARIOS } from "../../../gql/usuario";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import UsuarioList from "../../../components/usuario/UsuarioList/UsuarioList";
import { Loader } from  "semantic-ui-react";
import "./Usuarios.scss";

export default function Usuarios() {
    const { data: usuariosAprobados, loading: loadingAprobados, refetch: refetchAprobados } = useQuery(OBTENER_USUARIOS, {
        variables: {
            input: {
                pagina: 1,
                cantidad: 15
            },
            filtro: {
                propiedad: "estatus",
                atributo: "aprobado"
            }

        }
    });

    const { data: usuariosPendientes, loading: loadingPendientes, refetch: refetchPendientes } = useQuery(OBTENER_USUARIOS,{
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            },
            filtro: {
                propiedad: "estatus",
                atributo: "pendiente"
            }
        }
    });

    const { data: usuariosInactivos, loading: loadingInactivos, refetch: refetchInactivos } = useQuery(OBTENER_USUARIOS,{
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            },
            filtro: {
                propiedad: "estatus",
                atributo: "inactivo"
            }
        }
    });

    return (
        <div className="usuarios">
            <Banner titulo="Usuarios" />
            <Titulo titulo="Gestione los usuarios que pueden acceder al sistema" />
            {
                !loadingAprobados && !loadingPendientes && !loadingInactivos ? (
                    <UsuarioList 
                        aprobados={usuariosAprobados.obtenerUsuarios} 
                        pendientes={usuariosPendientes.obtenerUsuarios} 
                        inactivos={usuariosInactivos.obtenerUsuarios}
                        refetchAprobados={refetchAprobados}
                        refetchPendientes={refetchPendientes}
                        refetchInactivos={refetchInactivos}
                    />
                ):(
                    <Loader active inline='centered' size='massive' />
                )
            }
            
        </div>

    )
}
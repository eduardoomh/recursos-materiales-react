import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_USUARIOS } from "../../../gql/usuario";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import UsuarioList from "../../../components/usuario/UsuarioList/UsuarioList";
import { Loader } from  "semantic-ui-react";
import "./Usuarios.scss";

export default function Usuarios() {
    const [ aprobadosArray, setAprobadosArray] = useState(false);
    const [ pendientesArray, setPendientesArray] = useState(false);
    const [ inactivosArray, setInactivosArray] = useState(false);

    const [ paginaAprobados, setPaginaAprobados] = useState(1);
    const [ paginaPendientes, setPaginaPendientes] = useState(1);
    const [ paginaInactivos, setPaginaInactivos] = useState(1);
    const [ cantidad ] = useState(6);

    const { data: usuariosAprobados, refetch: refetchAprobados } = useQuery(OBTENER_USUARIOS, {
        variables: {
            input: {
                pagina: paginaAprobados,
                cantidad: cantidad
            },
            filtro: {
                propiedad: "estatus",
                atributo: "aprobado"
            }

        }
    });

    const { data: usuariosPendientes, refetch: refetchPendientes } = useQuery(OBTENER_USUARIOS,{
        variables: {
            input: {
                cantidad: cantidad,
                pagina: paginaPendientes
            },
            filtro: {
                propiedad: "estatus",
                atributo: "pendiente"
            }
        }
    });

    const { data: usuariosInactivos, refetch: refetchInactivos } = useQuery(OBTENER_USUARIOS,{
        variables: {
            input: {
                cantidad: cantidad,
                pagina: paginaInactivos
            },
            filtro: {
                propiedad: "estatus",
                atributo: "inactivo"
            }
        }
    });

    useEffect(() => {
        if(usuariosAprobados){
            refetchAprobados();
        }
       
        // eslint-disable-next-line
    },[paginaAprobados]);

    useEffect(() => {
        if(usuariosPendientes){
            refetchPendientes();
        }
        // eslint-disable-next-line
    },[paginaPendientes]);

    useEffect(() => {
        if(usuariosInactivos){
            refetchInactivos();
        }
        // eslint-disable-next-line
    },[paginaInactivos]);

    useEffect(() => {
        if(usuariosAprobados){
            setAprobadosArray(usuariosAprobados.obtenerUsuarios);
        }
        // eslint-disable-next-line
    },[usuariosAprobados]);

    useEffect(() => {
        if(usuariosPendientes){
            setPendientesArray(usuariosPendientes.obtenerUsuarios);
        }
        // eslint-disable-next-line
    },[usuariosPendientes]);

    useEffect(() => {
        if(usuariosInactivos){
            setInactivosArray(usuariosInactivos.obtenerUsuarios);
        }
        // eslint-disable-next-line
    },[usuariosInactivos]);


    return (
        <div className="usuarios">
            <Banner titulo="Usuarios" />
            <Titulo titulo="Gestione los usuarios que pueden acceder al sistema" />
            {
                aprobadosArray && pendientesArray && inactivosArray ? (
                    <UsuarioList 
                        aprobados={aprobadosArray} 
                        pendientes={pendientesArray} 
                        inactivos={inactivosArray}
                        refetchAprobados={refetchAprobados}
                        refetchPendientes={refetchPendientes}
                        refetchInactivos={refetchInactivos}
                        paginaAprobados={paginaAprobados}
                        paginaPendientes={paginaPendientes}
                        paginaInactivos={paginaInactivos}
                        setPaginaAprobados={setPaginaAprobados}
                        setPaginaPendientes={setPaginaPendientes}
                        setPaginaInactivos={setPaginaInactivos}
                        cantidad={cantidad}
                    />
                ):(
                    <Loader active inline='centered' size='massive' />
                )
            }
            
        </div>

    )
}
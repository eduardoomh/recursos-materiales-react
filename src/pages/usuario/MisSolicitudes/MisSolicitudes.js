import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTOS_FILTRO} from "../../../gql/evento";
import { OBTENER_MANTENIMIENTOS_FILTRO} from "../../../gql/mantenimiento";
import { OBTENER_SALIDAS_FILTRO} from "../../../gql/salida";
import useIdentity from "../../../utils/hooks/useIdentity";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import SolicitudesUsuario from "../../../components/usuario/SolicitudesUsuario/SolicitudesUsuario";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { Loader } from "semantic-ui-react";
import "./MisSolicitudes.scss";

export default function MisSolicitudes(){
    const { identity } = useIdentity();
    const [paginaEvento, setPaginaEvento] = useState(1);
    const [paginaMantenimiento, setPaginaMantenimiento] = useState(1);
    const [paginaSalida, setPaginaSalida] = useState(1);
    const [cantidad] = useState(6);
    const [ eventosArray, setEventosArray] = useState(false);
    const [ mantenimientosArray, setMantenimientosArray] = useState(false);
    const [ salidasArray, setSalidasArray] = useState(false);

    const {data: eventos, refetch: refrescarEventos} = useQuery(OBTENER_EVENTOS_FILTRO, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: paginaEvento
            },
            filtro: {
                propiedad: "usuario",
                atributo: identity.id
            }
        }
    })

    const {data: mantenimientos, refetch: refrescarMantenimientos} = useQuery(OBTENER_MANTENIMIENTOS_FILTRO, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: paginaMantenimiento
            },
            filtro: {
                propiedad: "usuario",
                atributo: identity.id
            }
        }
    })

    const {data: salidas, refetch: refrescarSalidas} = useQuery(OBTENER_SALIDAS_FILTRO, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: paginaSalida
            },
            filtro: {
                propiedad: "usuario",
                atributo: identity.id
            }
        }
    })

    
    useEffect(() => {
        if(!eventos || !mantenimientos || !salidas){
            scrollTop();
        }
    },[]);


    useEffect(() => {
        if(eventos){
            refrescarEventos();
        }
    },[paginaEvento]);

    useEffect(() => {
        if(mantenimientos){
            refrescarMantenimientos();
        }
    },[paginaMantenimiento]);

    useEffect(() => {
        if(salidas){
            refrescarSalidas();
        }
    },[paginaSalida]);

    useEffect(() => {
        if(eventos){
            setEventosArray(eventos.obtenerEventosFiltro);
        }
    },[eventos]);

    useEffect(() => {
        if(mantenimientos){
            setMantenimientosArray(mantenimientos.obtenerMantenimientosFiltro);
        }
    },[mantenimientos]);

    useEffect(() => {
        if(salidas){
            setSalidasArray(salidas.obtenerSalidasFiltro);
        }
    },[salidas]);

    return(
        <div className="mis-solicitudes">
            <Banner titulo="Sus Solicitudes" />
            <Titulo titulo="Aqui encontrara todas las solicitudes que ha creado usted." />
            {
                eventosArray && mantenimientosArray && salidasArray ? (
                    <SolicitudesUsuario                     
                        eventos={eventosArray}
                        mantenimientos={mantenimientosArray}
                        salidas={salidasArray}
                        paginaEvento={paginaEvento}
                        paginaMantenimiento={paginaMantenimiento}
                        paginaSalida={paginaSalida}
                        setPaginaEvento={setPaginaEvento}
                        setPaginaMantenimiento={setPaginaMantenimiento}
                        setPaginaSalida={setPaginaSalida}
                        cantidad={cantidad}
                    />
                )
                : <Loader active inline='centered' size='massive' />
            }
            
        </div>
    )
}
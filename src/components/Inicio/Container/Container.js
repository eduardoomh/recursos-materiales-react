import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_EVENTOS } from "../../../gql/evento";
import { OBTENER_REPARACIONES, OBTENER_SERVICIOS, OBTENER_TRANSPORTES } from "../../../gql/mantenimiento";
import { OBTENER_SALIDAS } from "../../../gql/salida";
import useIdentity from "../../../utils/hooks/useIdentity";
import { saveStorage, getStorage } from "../../../servicios/reutilizables/localStorage";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";
import { eventosRecientes, mantenimientosRecientes, salidasRecientes } from "../../../api/data";
import "./Container.scss";

export default function Container(props){
    const { loading, setLoading } = props;
    const [arrayEventos, setArrayEventos] = useState(false);
    const [arrayTransportes, setArrayTransportes] = useState(false);
    const [arrayServicios, setArrayServicios] = useState(false);
    const [arrayReparaciones, setArrayReparaciones] = useState(false);

    const { data: eventos, loading: loadingEventos } = useQuery(OBTENER_EVENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });
    const { data: reparaciones, loading: loadingReparaciones } = useQuery(OBTENER_REPARACIONES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });
    const { data: servicios, loading: loadingServicios } = useQuery(OBTENER_SERVICIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    const { data: transportes, loading: loadingTransportes } = useQuery(OBTENER_TRANSPORTES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });


    useEffect( () => {
        if(eventos && !loadingEventos){
            saveStorage("eventos", eventos.obtenerEventos);   
            setArrayEventos(eventos.obtenerEventos); 
        }
        
        return () => {
            setArrayEventos(eventosRecientes);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventos])


    useEffect( () => {
        if(reparaciones && !loadingReparaciones){
            saveStorage("reparaciones", reparaciones.obtenerReparaciones);   
            setArrayReparaciones(reparaciones.obtenerReparaciones); 
        }
        
        
        return () => {
            setArrayReparaciones(mantenimientosRecientes);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reparaciones])


    useEffect( () => {
        if(servicios && !loadingServicios){
            saveStorage("servicios", servicios.obtenerServicios);   
            setArrayServicios(servicios.obtenerServicios); 
        }
        
        
        return () => {
            setArrayServicios(salidasRecientes);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [servicios])

    useEffect( () => {
        if(transportes && !loadingTransportes){
            saveStorage("transportes", transportes.obtenerTransportes);   
            setArrayTransportes(transportes.obtenerTransportes); 
        }
        
        
        return () => {
            setArrayTransportes(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transportes])

    if(!arrayEventos || !arrayReparaciones || !arrayServicios || !arrayTransportes) return null;

    setLoading(() => {
        if(arrayEventos && arrayReparaciones && arrayServicios && arrayTransportes) return false
    })

    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>

                        <>
                        {
                           arrayEventos.length > 0 
                           ? <CardCarrousel titulo="Eventos" data={arrayEventos} /> 
                           : <CardCarrousel titulo="Eventos" data={arrayEventos} vacio={true} /> 
                        }

                        {
                            arrayReparaciones.length > 0 
                            ? <CardCarrousel titulo="Reparaciones" data={arrayReparaciones}  /> 
                            : <CardCarrousel titulo="Reparaciones" data={arrayReparaciones} vacio={true} /> 
                        }

                        {
                           arrayServicios.length > 0 
                           ? <CardCarrousel titulo="Servicios" data={arrayServicios}  /> 
                           : <CardCarrousel titulo="Servicios" data={arrayServicios} vacio={true} /> 
                        }

                        {
                           arrayTransportes.length > 0 
                           ? <CardCarrousel titulo="Transportes" data={arrayTransportes}  /> 
                           : <CardCarrousel titulo="Transportes" data={arrayTransportes} vacio={true} /> 
                        }
                            
                        </>           
                

            </div>
        </div>
    )
}
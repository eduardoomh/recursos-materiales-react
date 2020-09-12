import React, { useState, useEffect } from "react";
import "./Container.scss";
import { getEventos } from "../../../servicios/evento";
import { getMantenimientos } from "../../../servicios/mantenimiento";
import { getSalidas } from "../../../servicios/salida";
import { saveStorage } from "../../../servicios/reutilizables/localStorage";
import CardCarrousel from "../../reutilizables/CardCarrousel/CardCarrousel";
import Titulo from "../../reutilizables/Titulo/Titulo";
import { eventosRecientes, mantenimientosRecientes, salidasRecientes } from "../../../api/data";

export default function Container(props){
    const { loading, setLoading } = props;

    const [arrayEventos, setArrayEventos] = useState(eventosRecientes);
    const [arrayMantenimientos, setArrayMantenimientos] = useState(mantenimientosRecientes);
    const [arraySalidas, setArraySalidas] = useState(salidasRecientes);

    const fetchData = async () => {
        try {
            const eventos = await getEventos()
            const mantenimientos = await getMantenimientos();
            const salidas = await getSalidas();

            if(eventos.status === "success"){
                await saveStorage("eventos", eventos.elementos.data);   
                setArrayEventos(eventos.elementos.data);        
            }

            if(mantenimientos.status === "success"){
                await saveStorage("mantenimientos", mantenimientos.elementos.data);
                setArrayMantenimientos(mantenimientos.elementos.data);            
            }

            if(salidas.status === "success"){
                await saveStorage("salidas", salidas.elementos.data);
                setArraySalidas(salidas.elementos.data);             
            }
            
            setLoading(false);

        }
        catch (err) {
            console.log(err);
        }
    }
    
    useEffect( () => {

        fetchData();

        return () => {
            setArrayEventos(eventosRecientes);
            setArrayMantenimientos(mantenimientosRecientes);
            setArraySalidas(salidasRecientes);
        }
    }, [])

     
    return(
        <div className="container">
            <Titulo titulo="Solicitudes Mas Recientes" />
            <div>
                {
                    loading === false  ? 
                    (
                        <>
                            <CardCarrousel titulo="Eventos" data={arrayEventos} />

                            <CardCarrousel titulo="Mantenimientos" data={arrayMantenimientos} />
                    
                            <CardCarrousel titulo="Salidas" data={arraySalidas} />
                        </>           
                    )
                    :
                    (
                        <p>Gargando datos...</p>
                    )

                }

            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import "./Inicio.scss";
import { Dimmer, Loader} from "semantic-ui-react";
import { getEventos } from "../../servicios/evento";
import { getMantenimientos } from "../../servicios/mantenimiento";
import { getSalidas } from "../../servicios/salida";
import { saveStorage } from "../../servicios/reutilizables/localStorage";
import Banner from "../../components/Inicio/Banner/Banner";
import Container from "../../components/Inicio/Container/Container";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";


export default function Inicio(){
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try{
            const eventos = await getEventos();
            if(eventos.status === "success"){
                console.log(eventos.elementos);
                saveStorage("eventos", eventos.elementos.data);
            }

            const mantenimientos = await getMantenimientos();
            if(mantenimientos.status === "success"){
                console.log(mantenimientos.elementos);
                saveStorage("mantenimientos", mantenimientos.elementos.data);
            }
            const salidas = await getSalidas();
            if(salidas.status === "success"){
                console.log(salidas.elementos);
                saveStorage("salidas", salidas.elementos.data);
            }

            setLoading(false);

        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect( () => {
        fetchData();
     
    },[]);

    if(loading) return (
        <ModalBasic show={true}>
            <Loader active={loading} size="big">Cargando Pagina...</Loader>
        </ModalBasic>
    );
    
    return(
        <>
            <Banner />
            <Container />

        </>
        
    )
}
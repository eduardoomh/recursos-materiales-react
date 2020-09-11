import React, { useState, useEffect } from "react";
import "./Eventos.scss";
import { Loader} from "semantic-ui-react";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getEventos } from "../../servicios/evento";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";

export default function Eventos(){
    const [ content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try{
            const eventos = await getEventos();
            if(eventos.status === "success"){
                console.log(eventos.elementos);
                setContent(eventos.elementos);
                setLoading(false);
            }

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
            <Loader active={true} size="big">Cargando Pagina...</Loader>
        </ModalBasic>
    );


    return(
        <div className="eventos">
            <Banner titulo="Solicitudes de Eventos" />

            <SolicitudGrid data={content} tipo="eventos" />

        </div>
    )
}


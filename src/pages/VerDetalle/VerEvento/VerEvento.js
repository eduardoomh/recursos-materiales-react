import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerEvento.scss";
import { transformarFecha } from "../../../utils/reutilizables/fecha"
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionEvento from "../../../components/VerSolicitudes/VerEvento/InformacionEvento";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getEvento } from "../../../servicios/evento";
import { getStorage } from "../../../servicios/reutilizables/localStorage";
import ModalBasic from "../../../components/reutilizables/ModalBasic/ModalBasic";

export default function VerEvento(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const eventos = getStorage("eventos");


    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const evento = await getEvento(id);
                evento.elemento.fecha = transformarFecha(evento.elemento.fecha);
                
                setContent( () => {
                    if(evento.status === "success"){
                        return evento.elemento
                    }
                });
                setLoading(false);
                
    
            }
            catch(err){
                console.log(err);
            }
        }
        
        scrollTop();
        fetchData();

        return () => {
            setContent("");
        }
    },[id]);



    return(
        <div className="ver-evento">
            <Banner titulo={content.evento || "cargando"} />
            <Titulo titulo={ content.fecha || "cargando"} />
            <InformacionEvento data={content || "cargando"} loading={loading} />
            <CardCarrousel titulo="Eventos" data={eventos} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
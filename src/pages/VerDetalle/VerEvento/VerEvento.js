import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VerEvento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionEvento from "../../../components/VerSolicitudes/VerEvento/InformacionEvento";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getEvento } from "../../../servicios/evento";
import { getStorage } from "../../../servicios/reutilizables/localStorage";

export default function VerEvento(){
    const [content, setContent] = useState("cargando ....");
    const { id } = useParams();

    const eventos = getStorage("eventos");
    const fetchData = async () => {
        try{
            const evento = await getEvento(id);
            
            setContent( () => {
                if(evento.status === "success"){
                    return evento.elemento
                }
            });
            

        }
        catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
        scrollTop();
        fetchData();

        return () => {
            setContent("");
        }
    },[id]);



    return(
        <div className="ver-evento">
            <Banner titulo={content.evento || "cargando"} />
            <Titulo titulo={content.fecha || "cargando"} />
            <InformacionEvento data={content || "cargando..."} />
            <CardCarrousel titulo="Eventos" data={eventos} />

        </div>
    )
}
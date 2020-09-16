import React, { useState, useEffect } from "react";
import "./Eventos.scss";
import { Loader} from "semantic-ui-react";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getEventos } from "../../servicios/evento";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../utils/reutilizables/scroll";

export default function Eventos(){
    const [ content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    

    const fetchData = async () => {
        try{
            const eventos = await getEventos();
            setContent(() => {
                if(eventos.status === "success") return eventos.elementos
            })  

            setLoading(() => {
                if(eventos.status === "success") return false
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
    },[]);



    return(
        <div className="eventos">
            <Banner titulo="Solicitudes de Eventos" />
            <SolicitudGrid 
                data={content} 
                setData={setContent} 
                tipo="eventos" 
                loading={loading} 
                setLoading={setLoading} 
                paginate={true}
            />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}


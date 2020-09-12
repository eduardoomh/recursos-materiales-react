import React, { useState, useEffect } from "react";
import "./Mantenimientos.scss";
import { Loader} from "semantic-ui-react";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getMantenimientos } from "../../servicios/mantenimiento";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../utils/reutilizables/scroll";

export default function Mantenimientos(){
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);
    
    const fetchData = async () => {
        try{
            const mantenimientos = await getMantenimientos();

            setContent(() => {
                if(mantenimientos.status === "success") return mantenimientos.elementos
            
            });
            setLoading(() => {
                if(mantenimientos.status === "success") return false
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
        <div className="mantenimientos">
            <Banner titulo="Solicitudes de Mantenimientos" />
            <SolicitudGrid 
                data={content} 
                setData={setContent} 
                loading={loading} 
                tipo="mantenimientos"  
                setLoading={setLoading}
            />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </div>
    )
}
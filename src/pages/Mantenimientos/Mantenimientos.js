import React, { useState, useEffect } from "react";
import "./Mantenimientos.scss";
import { Loader} from "semantic-ui-react";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getMantenimientos } from "../../servicios/mantenimiento";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";

export default function Mantenimientos(){
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    
    const fetchData = async () => {
        try{
            const mantenimientos = await getMantenimientos();
            if(mantenimientos.status === "success"){
                console.log(mantenimientos.elementos);
                setContent(mantenimientos.elementos);
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
        <div className="mantenimientos">
            <Banner titulo="Solicitudes de Mantenimientos" />
            <SolicitudGrid  data={content} tipo="mantenimientos"  />
        </div>
    )
}
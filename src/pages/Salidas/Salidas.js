import React, { useState, useEffect } from "react";
import "./Salidas.scss";
import { Loader} from "semantic-ui-react";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getSalidas } from "../../servicios/salida";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";

export default function Salidas(){
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    
    const fetchData = async () => {
        try{
            const salidas = await getSalidas();
            if(salidas.status === "success"){
                console.log(salidas.elementos);
                setContent(salidas.elementos);
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
        <div className="salidas">
            <Banner titulo="Solicitudes de Salidas" />
            <SolicitudGrid data={content} tipo="salidas" />
        </div>
    )
}
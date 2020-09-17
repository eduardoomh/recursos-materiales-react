import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleEspacio.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getEspacio } from "../../../../servicios/espacio";
import InfoEspacio from "../../../../components/admin/detalle/espacios/InfoEspacio";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function DetalleEspacio(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const espacio = await getEspacio(id);
                
                setContent( () => {
                    if(espacio.status === "success"){
                        return espacio.cargo
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
        <div className="ver-espacio">
            <Banner titulo="Detalle de la Locacion" />
            <Titulo titulo="Informacion sobre la locacion seleccionado" />
            <InfoEspacio data={content} loading={loading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
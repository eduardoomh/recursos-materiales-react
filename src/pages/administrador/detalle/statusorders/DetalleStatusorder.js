import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleStatusorder.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getStatusorder } from "../../../../servicios/statusorder";
import InfoStatusorder from "../../../../components/admin/detalle/statusorders/InfoStatusorder";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function DetalleStatusorder(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const statusorder = await getStatusorder(id);
                
                setContent( () => {
                    if(statusorder.status === "success"){
                        return statusorder.cargo
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
        <div className="ver-statusorder">
            <Banner titulo="Detalle del estado de Mantenimiento" />
            <Titulo titulo="Informacion sobre el Estado de mantenimiento seleccionado" />
            <InfoStatusorder data={content} loading={loading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
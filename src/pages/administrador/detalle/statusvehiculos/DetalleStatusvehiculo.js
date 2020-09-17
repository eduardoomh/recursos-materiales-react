import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleStatusvehiculo.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getStatusvehiculo } from "../../../../servicios/statusvehiculo";
import InfoStatusvehiculo from "../../../../components/admin/detalle/statusvehiculos/InfoStatusvehiculo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function DetalleStatusvehiculo(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const statusvehiculo = await getStatusvehiculo(id);
                
                setContent( () => {
                    if(statusvehiculo.status === "success"){
                        return statusvehiculo.cargo
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
        <div className="ver-statusvehiculo">
            <Banner titulo="Detalle del estado de Vehiculos" />
            <Titulo titulo="Informacion sobre el Estado de Vehiculo seleccionado" />
            <InfoStatusvehiculo data={content} loading={loading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
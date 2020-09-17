import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleUbicacion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getUbicacion } from "../../../../servicios/ubicacion";
import InfoUbicacion from "../../../../components/admin/detalle/ubicaciones/InfoUbicacion";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function DetalleUbicacion(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const ubicacion = await getUbicacion(id);
                
                setContent( () => {
                    if(ubicacion.status === "success"){
                        return ubicacion.cargo
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
        <div className="ver-ubicacion">
            <Banner titulo="Detalle de la Ubicacion" />
            <Titulo titulo="Informacion sobre la Ubicacion seleccionada" />
            <InfoUbicacion data={content} loading={loading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
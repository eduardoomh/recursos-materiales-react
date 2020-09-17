import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleSubdireccion.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getSubdireccion } from "../../../../servicios/subdireccion";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import InfoSubdireccion from "../../../../components/admin/detalle/subdirecciones/InfoSubdireccion";

export default function DetalleSubdireccion(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const subdireccion = await getSubdireccion(id);
                
                setContent( () => {
                    if(subdireccion.status === "success"){
                        return subdireccion.cargo
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
        <div className="ver-subdireccion">
            <Banner titulo="Detalle de la Subdireccion" />
            <Titulo titulo="Informacion sobre la subdireccion seleccionado" />
            <InfoSubdireccion data={content} loading={loading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
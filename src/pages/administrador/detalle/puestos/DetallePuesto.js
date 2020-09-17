import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetallePuesto.scss";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getPuesto } from "../../../../servicios/puesto";
import InfoPuesto from "../../../../components/admin/detalle/puestos/InfoPuesto";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function DetallePuesto(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const puesto = await getPuesto(id);
                
                setContent( () => {
                    if(puesto.status === "success"){
                        return puesto.elementos
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
        <div className="ver-puesto">
            <Banner titulo="Detalle del Puesto" />
            <Titulo titulo="Informacion sobre el puesto seleccionado seleccionado" />
            <InfoPuesto data={content} loading={loading}/>

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </div>
    )
}
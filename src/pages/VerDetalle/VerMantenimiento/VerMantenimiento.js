import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionMantenimiento from "../../../components/VerSolicitudes/VerMantenimiento/InformacionMantenimiento";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getMantenimiento } from "../../../servicios/mantenimiento";
import { getStorage } from "../../../servicios/reutilizables/localStorage";
import ModalBasic from "../../../components/reutilizables/ModalBasic/ModalBasic";


export default function VerMantenimiento(){
    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const mantenimientos = getStorage("mantenimientos");

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const mantenimiento = await getMantenimiento(id);
                
                setContent( () => {
                    if(mantenimiento.status === "success"){
                        return mantenimiento.elemento
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
        <div className="ver-mantenimiento">
                <Banner titulo={content.trabajo_realizado || "cargando"}  />
                <Titulo titulo={content.fecha || "cargando"} />    
                <InformacionMantenimiento data={content || "cargando..."} loading={loading} />
            <CardCarrousel titulo="Mantenimientos" data={mantenimientos}  />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </div>
    )
}
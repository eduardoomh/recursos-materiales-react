import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VerMantenimiento.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionMantenimiento from "../../../components/VerSolicitudes/VerMantenimiento/InformacionMantenimiento";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getMantenimiento } from "../../../servicios/mantenimiento";
import { getStorage } from "../../../servicios/reutilizables/localStorage";


export default function VerMantenimiento(){
    const [content, setContent] = useState("cargando ....");
    const { id } = useParams();

    const mantenimientos = getStorage("mantenimientos");
    const fetchData = async () => {
        try{
            const mantenimiento = await getMantenimiento(id);
            
            setContent( () => {
                if(mantenimiento.status === "success"){
                    return mantenimiento.elemento
                }
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
    },[id]);


    return(
        <div className="ver-mantenimiento">
                <Banner titulo={content.trabajo_realizado || "cargando"}  />
                <Titulo titulo={content.fecha || "cargando"} />    
                <InformacionMantenimiento data={content || "cargando..."} />
            <CardCarrousel titulo="Mantenimientos" data={mantenimientos} />
        </div>
    )
}
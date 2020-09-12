import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./VerSalida.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionSalida from "../../../components/VerSolicitudes/VerSalida/InformacionSalida";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getSalida } from "../../../servicios/salida";
import { getStorage } from "../../../servicios/reutilizables/localStorage";

export default function VerSalida(){

    const [content, setContent] = useState("cargando ....");
    const { id } = useParams();

    const salidas = getStorage("salidas");
    const fetchData = async () => {
        try{
            const salida = await getSalida(id);
            
            setContent( () => {
                if(salida.status === "success"){
                    return salida.elemento
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
        <div className="ver-salida">
            <Banner titulo={content.destino || "cargando"} />
            <Titulo titulo={content.fecha || "cargando"} />
            <InformacionSalida data={content || "cargando..."} />
            <CardCarrousel titulo="Salidas" data={salidas} />
        </div>
    )
}
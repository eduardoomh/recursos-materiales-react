import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerSalida.scss";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import CardCarrousel from "../../../components/reutilizables/CardCarrousel/CardCarrousel";
import InformacionSalida from "../../../components/VerSolicitudes/VerSalida/InformacionSalida";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getSalida } from "../../../servicios/salida";
import { getStorage } from "../../../servicios/reutilizables/localStorage";
import ModalBasic from "../../../components/reutilizables/ModalBasic/ModalBasic";

export default function VerSalida(){

    const [content, setContent] = useState("cargando ....");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const salidas = getStorage("salidas");

    useEffect( () => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const salida = await getSalida(id);
                
                setContent( () => {
                    if(salida.status === "success"){
                        return salida.elemento
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
        <div className="ver-salida">
            <Banner titulo={content.destino || "cargando"} />
            <Titulo titulo={content.fecha || "cargando"} />
            <InformacionSalida data={content || "cargando..."} loading={loading} />
            <CardCarrousel titulo="Salidas" data={salidas} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </div>
    )
}
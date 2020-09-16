import React, { useState, useEffect } from "react";
import "./Salidas.scss";
import { Loader} from "semantic-ui-react";
import Banner from "../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getSalidas } from "../../servicios/salida";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../utils/reutilizables/scroll";

export default function Salidas(){
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);
    
    const fetchData = async () => {
        try{
            const salidas = await getSalidas();

            setContent(() => {
                if(salidas.status === "success") return salidas.elementos
            });

            setLoading(() => {
                if(salidas.status === "success") return false
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
    },[]);


    return(
        <div className="salidas">
            <Banner titulo="Solicitudes de Salidas" />
            <SolicitudGrid 
                data={content} 
                setData={setContent} 
                tipo="salidas"
                loading={loading}
                setLoading={setLoading} 
                paginate={true}
            />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </div>
    )
}
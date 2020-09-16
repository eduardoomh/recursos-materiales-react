import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getPuestos } from "../../../../servicios/puesto";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
        try{
            const puestos = await getPuestos();

            setContent(() => {
                if(puestos.status === "success") return puestos.elementos
            });

            setLoading(() => {
                if(puestos.status === "success") return false
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

    return (
        <>
            <div className="puestos">
                <Banner titulo="Puestos" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="puestos"
                    loading={loading} 
                    setLoading={setLoading}
                    admin={true}
                />

            </div>

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}

import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getDepartamentos } from "../../../../servicios/departamento";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Departamentos() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
        try{
            const departamentos = await getDepartamentos();

            setContent(() => {
                if(departamentos.status === "success") return departamentos.elementos
            });

            setLoading(() => {
                if(departamentos.status === "success") return false
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
            <div className="departamentos">
                <Banner titulo="Departamentos" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="departamentos"
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

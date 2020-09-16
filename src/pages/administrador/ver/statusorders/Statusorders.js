import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getStatusorders } from "../../../../servicios/statusorder";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Statusorders() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
        try{
            const statusorders = await getStatusorders();

            setContent(() => {
                if(statusorders.status === "success") return statusorders.elementos
            });

            setLoading(() => {
                if(statusorders.status === "success") return false
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
            <div className="statusorders">
                <Banner titulo="Estados de mantenimiento" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="statusorders"
                    loading={loading} 
                    setLoading={setLoading}
                    admin={true}
                    paginate={false}
                />

            </div>

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}

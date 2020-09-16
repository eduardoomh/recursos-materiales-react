import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getStatusvehiculos } from "../../../../servicios/statusvehiculo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
        try{
            const statusvehiculos = await getStatusvehiculos();

            setContent(() => {
                if(statusvehiculos.status === "success") return statusvehiculos.elementos
            });

            setLoading(() => {
                if(statusvehiculos.status === "success") return false
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
            <div className="statusvehiculos">
                <Banner titulo="Estados de vehiculos" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="statusvehiculos"
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

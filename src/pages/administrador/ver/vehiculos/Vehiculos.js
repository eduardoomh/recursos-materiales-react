import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getVehiculos } from "../../../../servicios/vehiculo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Vehiculos() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
        try{
            const vehiculos = await getVehiculos();

            setContent(() => {
                if(vehiculos.status === "success") return vehiculos.elementos
            });

            setLoading(() => {
                if(vehiculos.status === "success") return false
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
            <div className="vehiculos">
                <Banner titulo="Vehiculos" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="vehiculos"
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

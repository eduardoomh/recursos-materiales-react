import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import {  OBTENER_VEHICULOS } from "../../../../gql/vehiculo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Vehiculos() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const {data: vehiculos} = useQuery(OBTENER_VEHICULOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    const fetchData = async () => {
        try{
            setContent(() => {
                if(vehiculos) return vehiculos.obtenerVehiculos
            });

            setLoading(() => {
                if(vehiculos) return false
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

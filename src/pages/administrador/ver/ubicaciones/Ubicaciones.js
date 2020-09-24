import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getUbicaciones } from "../../../../servicios/ubicacion";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const {data: edificios} = useQuery(OBTENER_EDIFICIOS, {
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
                if(edificios) return edificios.obtenerEdificios
            });

            setLoading(() => {
                if(edificios) return false
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
    },[edificios]);

    return (
        <>
            <div className="ubicaciones">
                <Banner titulo="Ubicaciones" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="ubicaciones"
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

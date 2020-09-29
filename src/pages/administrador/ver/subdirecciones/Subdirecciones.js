import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCIONES } from "../../../../gql/subdireccion";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const {data: subdirecciones} = useQuery(OBTENER_SUBDIRECCIONES, {
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
                if(subdirecciones) return subdirecciones.obtenerSubdirecciones
            });

            setLoading(() => {
                if(subdirecciones) return false
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
    },[subdirecciones]);

    return (
        <>
            <div className="subdirecciones">
                <Banner titulo="Subdirecciones" />
                <SolicitudGrid 
                    data={content} 
                    setData={setContent}
                    tipo="subdirecciones"
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

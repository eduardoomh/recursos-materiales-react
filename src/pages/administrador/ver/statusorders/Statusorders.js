import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDERS } from "../../../../gql/tipoorder";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { getStatusorders } from "../../../../servicios/statusorder";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Statusorders() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const {data: tipoorders} = useQuery(OBTENER_TIPOORDERS, {
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
                if(tipoorders) return tipoorders.obtenerTipoorders
            });

            setLoading(() => {
                if(tipoorders) return false
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
    },[tipoorders]);

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

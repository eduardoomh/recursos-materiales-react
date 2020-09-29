import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLAS } from "../../../../gql/acomodosilla";
import { Loader } from "semantic-ui-react";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [content, setContent ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const {data: acomodosillas} = useQuery(OBTENER_ACOMODOSILLAS, {
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
                if(acomodosillas) return acomodosillas.obtenerAcomodosillas
            });

            setLoading(() => {
                if(acomodosillas) return false
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
    },[acomodosillas]);

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

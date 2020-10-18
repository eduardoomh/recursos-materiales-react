import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Salidas.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SALIDAS, BUSCAR_SALIDA } from "../../gql/salida";
import { scrollTop } from "../../utils/reutilizables/scroll";
import BannerSolicitud from "../../components/reutilizables/BannerSolicitud/BannerSolicitud";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";

export default function Salidas(){ 
    const [ loading, setLoading ] = useState(true);
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();
    

    const { data: salidas, loading: loadingSalidas, refetch: refrescarSalidas} = useQuery(OBTENER_SALIDAS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })


    useEffect(() => {
        if(!salidas){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarSalidas();
        }
    },[]);

    useEffect(() => {
        if(salidas){
            refrescarSalidas();
        }
    },[pagina]);

    useEffect(() => {
        if(salidas){
            setSolicitudesArray(salidas.obtenerSalidas);
            setLoading(false);
        }
    },[salidas]);


    return(
        <div className="salidas">
            <BannerSolicitud 
                titulo="Solicitudes de Salidas" 
                query={BUSCAR_SALIDA} 
                tipo="salida"
            />
            {
                solicitudesArray ?

                <SolicitudList
                    data={solicitudesArray}
                    tipo="salida"
                    loading={loading}
                    setLoading={setLoading}
                    pagina={pagina}
                    setPagina={setPagina}
                    cantidad={cantidad}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
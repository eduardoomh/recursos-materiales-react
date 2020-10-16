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
    const { refresh } = useParams();
    scrollTop();
    
    const { data: salidas, loading: loadingSalidas, refetch: refrescarSalidas} = useQuery(OBTENER_SALIDAS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarSalidas();
        }
    },[]);


    return(
        <div className="salidas">
            <BannerSolicitud 
                titulo="Solicitudes de Salidas" 
                query={BUSCAR_SALIDA} 
                tipo="salida"
            />
            {
                !loadingSalidas ?

                <SolicitudList
                    data={salidas.obtenerSalidas}
                    tipo="salida"
                    loading={loading}
                    setLoading={setLoading}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Mantenimientos.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_REPARACIONES, BUSCAR_MANTENIMIENTO } from "../../gql/mantenimiento";
import { scrollTop } from "../../utils/reutilizables/scroll";
import BannerSolicitud from "../../components/reutilizables/BannerSolicitud/BannerSolicitud";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";

export default function Mantenimientos(){
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();
    
    const { data: reparaciones, loading: loadingReparaciones, refetch: refrescarMantenimientos} = useQuery(OBTENER_REPARACIONES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarMantenimientos();
        }
    },[]);


    return(
        <div className="mantenimientos">
            <BannerSolicitud 
                titulo="Solicitudes de Mantenimientos" 
                query={BUSCAR_MANTENIMIENTO} 
                tipo="mantenimiento"
            />
            {
                !loadingReparaciones ?

                <SolicitudList
                    data={reparaciones.obtenerReparaciones}
                    tipo="mantenimiento"
                    loading={loading}
                    setLoading={setLoading}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
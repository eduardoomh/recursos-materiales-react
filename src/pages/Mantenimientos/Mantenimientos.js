import React, { useState } from "react";
import "./Mantenimientos.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_REPARACIONES, BUSCAR_MANTENIMIENTO } from "../../gql/mantenimiento";
import { scrollTop } from "../../utils/reutilizables/scroll";
import BannerSolicitud from "../../components/reutilizables/BannerSolicitud/BannerSolicitud";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";

export default function Mantenimientos(){
    const [ loading, setLoading ] = useState(true);
    scrollTop();
    
    const { data: reparaciones, loading: loadingReparaciones} = useQuery(OBTENER_REPARACIONES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    return(
        <div className="mantenimientos">
            <BannerSolicitud 
                titulo="Solicitudes de Mantenimientos" 
                query={BUSCAR_MANTENIMIENTO} 
                tipo="mantenimientos"
            />
            {
                !loadingReparaciones ?

                <SolicitudList
                    data={reparaciones.obtenerReparaciones}
                    tipo="mantenimientos"
                    loading={loading}
                    setLoading={setLoading}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
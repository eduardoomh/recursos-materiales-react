import React, { useState } from "react";
import "./Salidas.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SALIDAS, BUSCAR_SALIDA } from "../../gql/salida";
import { scrollTop } from "../../utils/reutilizables/scroll";
import BannerSolicitud from "../../components/reutilizables/BannerSolicitud/BannerSolicitud";
import SolicitudList from "../../components/reutilizables/SolicitudList/SolicitudList";

export default function Salidas(){ 
    const [ loading, setLoading ] = useState(true);
    scrollTop();
    
    const { data: salidas, loading: loadingSalidas} = useQuery(OBTENER_SALIDAS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })


    return(
        <div className="salidas">
            <BannerSolicitud 
                titulo="Solicitudes de Salidas" 
                query={BUSCAR_SALIDA} 
                tipo="salidas"
            />
            {
                !loadingSalidas ?

                <SolicitudList
                    data={salidas.obtenerSalidas}
                    tipo="salidas"
                    loading={loading}
                    setLoading={setLoading}
                />
                : <Loader active inline='centered' size='massive' />


            }
        </div>
    )
}
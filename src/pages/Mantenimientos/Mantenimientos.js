import React, { useState } from "react";
import "./Mantenimientos.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_REPARACIONES } from "../../gql/mantenimiento";
import { scrollTop } from "../../utils/reutilizables/scroll";
import Banner from "../../components/reutilizables/Banner/Banner";
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
            <Banner titulo="Solicitudes de Mantenimientos" />
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
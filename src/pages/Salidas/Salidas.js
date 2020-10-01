import React, { useState, useEffect } from "react";
import "./Salidas.scss";
import { Loader} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_SALIDAS } from "../../gql/salida";
import { scrollTop } from "../../utils/reutilizables/scroll";
import Banner from "../../components/reutilizables/Banner/Banner";
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
            <Banner titulo="Solicitudes de Salidas" />
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
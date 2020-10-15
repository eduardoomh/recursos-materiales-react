import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_DEPARTAMENTOS } from "../../../../gql/departamento";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Departamentos() {
    const [ loading, setLoading ] = useState(true);
    const { refresh } = useParams();
    scrollTop();

    const {data: departamentos, loading: loadingDepartamentos, refetch: refrescarDepartamentos} = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    useEffect(() => {
        if(refresh){
            refrescarDepartamentos();
        }
    },[]);

    return (
        <>
            <div className="departamentos">
                <Banner titulo="Departamentos" />
                {
                    !loadingDepartamentos ?

                        <SolicitudGrid
                            data={departamentos.obtenerDepartamentos}
                            tipo="departamento"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_DEPARTAMENTOS } from "../../../../gql/departamento";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Departamentos() {
    const [ loading, setLoading ] = useState(true);
    scrollTop();

    const {data: departamentos, loading: loadingDepartamentos} = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    return (
        <>
            <div className="departamentos">
                <Banner titulo="Departamentos" />
                {
                    !loadingDepartamentos ?

                        <SolicitudGrid
                            data={departamentos.obtenerDepartamentos}
                            tipo="departamentos"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

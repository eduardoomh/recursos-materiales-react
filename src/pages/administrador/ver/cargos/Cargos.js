import React, { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTOS } from "../../../../gql/puesto";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import SolicitudGrid from "../../../../components/reutilizables/SolicitudGrid/SolicitudGrid";
import { scrollTop } from "../../../../utils/reutilizables/scroll";

export default function Espacios() {
    const [loading, setLoading] = useState(true);
    scrollTop();

    const { data: puestos, loading: loadingPuestos } = useQuery(OBTENER_PUESTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    return (
        <>
            <div className="cargos">
                <Banner titulo="Cargos" />
                {
                    !loadingPuestos ?

                        <SolicitudGrid
                            data={puestos.obtenerPuestos}
                            tipo="cargos"
                            loading={loading}
                            setLoading={setLoading}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

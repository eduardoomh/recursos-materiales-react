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
    const [ solicitudesArray, setSolicitudesArray] = useState(false);
    const [ pagina, setPagina] = useState(1);
    const [ cantidad ] = useState(6);
    const { refresh } = useParams();

    const {data: departamentos, loading: loadingDepartamentos, refetch: refrescarDepartamentos} = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: cantidad,
                pagina: pagina
            }
        }
    })

    useEffect(() => {
        if(!departamentos){
            scrollTop();
        }
    },[]);

    useEffect(() => {
        if(refresh){
            refrescarDepartamentos();
        }
    },[]);

    useEffect(() => {
        if(departamentos){
            refrescarDepartamentos();
        }
    },[pagina]);

    useEffect(() => {
        if(departamentos){
            setSolicitudesArray(departamentos.obtenerDepartamentos);
            setLoading(false);
        }
    },[departamentos]);

    return (
        <>
            <div className="departamentos">
                <Banner titulo="Departamentos" />
                {
                    solicitudesArray ?

                        <SolicitudGrid
                            data={solicitudesArray}
                            tipo="departamento"
                            loading={loading}
                            setLoading={setLoading}
                            pagina={pagina}
                            setPagina={setPagina}
                            cantidad={cantidad}
                        />
                        : <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}

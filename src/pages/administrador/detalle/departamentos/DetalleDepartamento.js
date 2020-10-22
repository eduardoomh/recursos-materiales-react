import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleDepartamento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_DEPARTAMENTO } from "../../../../gql/departamento";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoDepartamento from "../../../../components/admin/detalle/departamentos/InfoDepartamento";

export default function DetalleDepartamento(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: departamento, loading: loadingDepartamento, refetch } = useQuery(OBTENER_DEPARTAMENTO, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (departamento) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);



    return(
        <div className="ver-departamento">
            <Banner titulo="Detalle del Departamento" />
            <Titulo titulo="Informacion sobre el Departamento seleccionado" />
            {
                departamento && !loadingDepartamento ? (
                    <>
                        <InfoDepartamento 
                            data={departamento.obtenerDepartamento} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="departamento"
                            plural="departamentos"
                        />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
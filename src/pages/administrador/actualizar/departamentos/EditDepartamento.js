import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditDepartamento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_DEPARTAMENTO } from "../../../../gql/departamento";
import { OBTENER_SUBDIRECCIONES } from "../../../../gql/subdireccion";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormDepartamento from "../../../../components/admin/actualizar/departamentos/FormDepartamento";

export default function EditDepartamento() {
    const { id } = useParams();
    scrollTop();

    const { data: departamento, loading: loadingDepartamento } = useQuery(OBTENER_DEPARTAMENTO, {
        variables: {
            id: id
        }
    });

    const { data: subdirecciones, loading: loadingSubdirecciones } = useQuery(OBTENER_SUBDIRECCIONES, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });


    return (
        <>
            <div className="actualizar-departamento">
                <Banner titulo="Actualizar Departamento" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />             
                {
                    !loadingDepartamento && !loadingSubdirecciones ?
                        <FormDepartamento
                            solicitud={departamento.obtenerDepartamento}
                            subdirecciones={subdirecciones.obtenerSubdirecciones}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }                
            </div>
        </>
    )
}
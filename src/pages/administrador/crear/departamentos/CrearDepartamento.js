import React from "react";
import "./CrearDepartamento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCIONES } from "../../../../gql/subdireccion"
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormDepartamento from "../../../../components/admin/crear/departamentos/FormDepartamento";

export default function CrearDepartamento(){
    
const { data: subdirecciones, loading: loadingSubdirections } = useQuery(OBTENER_SUBDIRECCIONES, {
    variables: {
        input: {
            cantidad: 15,
            pagina: 1
        }
    }
});


    return(
        <div className="crear-departamento">
            <Banner titulo="Crear nuevo Departamento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingSubdirections && (
                    <FormDepartamento subdirecciones={subdirecciones.obtenerSubdirecciones} />
                )
            }
            
        </div>
    )
}
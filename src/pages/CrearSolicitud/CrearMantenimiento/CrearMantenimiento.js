import React from "react";
import { Loader } from "semantic-ui-react";
import "./CrearMantenimiento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDERS} from "../../../gql/tipoorder";
import { OBTENER_DEPARTAMENTOS } from "../../../gql/departamento";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioMantenimiento from "../../../components/Formularios/FormularioMantenimiento/FormularioMantenimiento";

export default function CrearMantenimiento(){
        const { data: tipoorders, loading: loadingTipoorders} = useQuery(OBTENER_TIPOORDERS, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });

    const { data: departamentos, loading: loadingDepartamentos} = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });

    return(
        <div className="crear-mantenimiento">
            <Banner titulo="Crear nuevo Mantenimiento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingTipoorders && !loadingDepartamentos ? 
                <FormularioMantenimiento
                    tipoorders={tipoorders.obtenerTipoorders} 
                    departamentos={departamentos.obtenerDepartamentos}
                /> 
                :
                <Loader active inline='centered' size='massive' />
            }
        </div>
       
    )
}
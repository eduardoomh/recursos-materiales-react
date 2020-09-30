import React from "react";
import { Loader } from "semantic-ui-react";
import "./CrearSalida";
import { useQuery } from "@apollo/client";
import { OBTENER_VEHICULOS } from "../../../gql/vehiculo";
import { OBTENER_DEPARTAMENTOS } from "../../../gql/departamento";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioSalida from "../../../components/Formularios/FormularioSalida/FormularioSalida";

export default function CrearSalida(){
    const { data: vehiculos, loading: loadingVehiculos} = useQuery(OBTENER_VEHICULOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    const { data: departamentos, loading: loadingDepartamentos} = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    return(
        <div className="crear-salida">
            <Banner titulo="Crear nueva Salida" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingVehiculos && !loadingDepartamentos ?
                <FormularioSalida
                    vehiculos={vehiculos.obtenerVehiculos} 
                    departamentos={departamentos.obtenerDepartamentos}
                /> 
                :
                <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
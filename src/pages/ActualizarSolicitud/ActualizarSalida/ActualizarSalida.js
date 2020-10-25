import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_VEHICULOS } from "../../../gql/vehiculo";
import { OBTENER_DEPARTAMENTOS } from "../../../gql/departamento";
import { OBTENER_SALIDA } from "../../../gql/salida";
import "./ActualizarSalida.scss";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioActualizar from "../../../components/Formularios/ActualizarSalida/FormularioActualizar";

export default function ActualizarSalida() {
    const { id } = useParams();
    scrollTop();

    const { data: vehiculos, loading: loadingVehiculos } = useQuery(OBTENER_VEHICULOS, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });

    const { data: departamentos, loading: loadingDepartamentos } = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });

    const { data: salida, loading: loadingSalida } = useQuery(OBTENER_SALIDA, {
        variables: {
            id: id
        }
    });

    return (
        <>
            <div className="actualizar-salida">
                <Banner titulo="Actualizar Salida" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingVehiculos && !loadingDepartamentos && !loadingSalida ?
                        <FormularioActualizar
                            vehiculos={vehiculos.obtenerVehiculos}
                            departamentos={departamentos.obtenerDepartamentos}
                            solicitud={salida.obtenerSalida}
                        />
                        :
                        <Loader active inline='centered' size='massive' />
                }
            </div>
        </>
    )
}
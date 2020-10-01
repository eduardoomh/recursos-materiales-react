import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDERS } from "../../../gql/tipoorder";
import { OBTENER_DEPARTAMENTOS } from "../../../gql/departamento";
import { OBTENER_MANTENIMIENTO } from "../../../gql/mantenimiento";
import "./ActualizarMantenimiento.scss";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioActualizar from "../../../components/Formularios/ActualizarMantenimiento/FormularioActualizar";

export default function ActualizarMantenimiento() {
    const { id } = useParams();
    scrollTop();

    const { data: tipoorders, loading: loadingTipoorders } = useQuery(OBTENER_TIPOORDERS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    const { data: departamentos, loading: loadingDepartamentos } = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    const { data: mantenimiento, loading: loadingMantenimiento } = useQuery(OBTENER_MANTENIMIENTO, {
        variables: {
            id: id
        }
    });


    return (
        <>
            <div className="actualizar-mantenimiento">
                <Banner titulo="Actualizar Mantenimiento" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingTipoorders && !loadingDepartamentos && !loadingMantenimiento ?
                        <FormularioActualizar
                            tipoorders={tipoorders.obtenerTipoorders}
                            departamentos={departamentos.obtenerDepartamentos}
                            solicitud={mantenimiento.obtenerMantenimiento}
                        />
                        :
                        <Loader active inline='centered' size='massive' />
                }
            </div>
        </>
    )
}
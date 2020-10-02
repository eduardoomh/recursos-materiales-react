import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditPuesto.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PERMISO } from "../../../../gql/permiso";
import { OBTENER_USUARIOS } from "../../../../gql/usuario";
import { OBTENER_DEPARTAMENTOS } from "../../../../gql/departamento";
import { OBTENER_PUESTOS } from "../../../../gql/puesto";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormPuesto from "../../../../components/admin/actualizar/puestos/FormPuesto";

export default function EditPuesto() {
    const { id } = useParams();
    scrollTop();

    const { data: permiso, loading: loadingPermiso } = useQuery(OBTENER_PERMISO, {
        variables: {
            id: id
        }
    });

    const { data: usuarios, loading: loadingUsuarios } = useQuery(OBTENER_USUARIOS, {
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

    const { data: puestos, loading: loadingPuestos } = useQuery(OBTENER_PUESTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });


    return (
        <>
            <div className="actualizar-puesto">
                <Banner titulo="Actualizar Puesto" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingPermiso && !loadingDepartamentos && !loadingPuestos && !loadingUsuarios ?
                        <FormPuesto
                            solicitud={permiso.obtenerPermiso}
                            departamentos={departamentos.obtenerDepartamentos}
                            usuarios={usuarios.obtenerUsuarios}
                            puestos={puestos.obtenerPuestos}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }   

            </div>
        </>
    )
}
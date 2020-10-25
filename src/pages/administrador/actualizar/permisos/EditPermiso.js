import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditPermiso.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PERMISO } from "../../../../gql/permiso";
import { OBTENER_USUARIOS_FORM } from "../../../../gql/usuario";
import { OBTENER_DEPARTAMENTOS } from "../../../../gql/departamento";
import { OBTENER_PUESTOS } from "../../../../gql/puesto";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormPermiso from "../../../../components/admin/actualizar/permisos/FormPermiso";

export default function EditPermiso() {
    const { id } = useParams();
    scrollTop();

    const { data: permiso, loading: loadingPermiso } = useQuery(OBTENER_PERMISO, {
        variables: {
            id: id
        }
    });

    const { data: usuarios, loading: loadingUsuarios } = useQuery(OBTENER_USUARIOS_FORM, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            },
            filtro: {
                propiedad: "estatus",
                atributo: "aprobado"
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

    const { data: puestos, loading: loadingPuestos } = useQuery(OBTENER_PUESTOS, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });


    return (
        <>
            <div className="actualizar-permiso">
                <Banner titulo="Actualizar Permiso" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingPermiso && !loadingDepartamentos && !loadingPuestos && !loadingUsuarios ?
                        <FormPermiso
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
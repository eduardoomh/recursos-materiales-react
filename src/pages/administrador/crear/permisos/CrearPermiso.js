import React from "react";
import "./CrearPermiso.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_USUARIOS } from "../../../../gql/usuario"
import { OBTENER_PUESTOS} from "../../../../gql/puesto"
import { OBTENER_DEPARTAMENTOS} from "../../../../gql/departamento"
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormPermiso from "../../../../components/admin/crear/permisos/FormPermiso";

export default function CrearPermiso(){

    const { data: puestos, loading: loadingPuestos } = useQuery(OBTENER_PUESTOS, {
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

    const { data: usuarios, loading: loadingUsuarios } = useQuery(OBTENER_USUARIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    return(
        <div className="crear-permiso">
            <Banner titulo="Crear nuevo Permiso" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingPuestos && !loadingDepartamentos && !loadingUsuarios && (
                    <FormPermiso 
                        puestos={puestos.obtenerPuestos} 
                        departamentos={departamentos.obtenerDepartamentos}
                        usuarios={usuarios.obtenerUsuarios}
                    />
                )
            }
        </div>
    )
} 
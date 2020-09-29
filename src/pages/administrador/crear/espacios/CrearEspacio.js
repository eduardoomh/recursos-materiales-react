import React from "react";
import "./CrearEspacio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio"
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormEspacio from "../../../../components/admin/crear/espacios/FormEspacio";

export default function CrearEspacio(){

    const { data: edificios, loading: loadingEdificios } = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    return(
        <div className="crear-espacio">
            <Banner titulo="Crear nueva Locacion" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingEdificios && (
                    <FormEspacio edificios={edificios.obtenerEdificios} />
                )
            }
        </div>
    )
}
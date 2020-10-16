import React from "react";
import "./CrearSitio.scss";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio"
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormSitio from "../../../../components/admin/crear/sitios/FormSitio";

export default function CrearSitio(){

    const { data: edificios, loading: loadingEdificios } = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    return(
        <div className="crear-sitio">
            <Banner titulo="Crear nuevo Sitio" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingEdificios ? (
                    <FormSitio edificios={edificios.obtenerEdificios} />
                ):(
                    <Loader active inline='centered' size='massive' />
                )
            }
        </div>
    )
}
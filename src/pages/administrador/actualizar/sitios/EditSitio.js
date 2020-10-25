import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditSitio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SITIO } from "../../../../gql/sitio";
import { OBTENER_EDIFICIOS } from "../../../../gql/edificio";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormSitio from "../../../../components/admin/actualizar/sitios/FormSitio";

export default function EditSitio() {
    const { id } = useParams();
    scrollTop();

    const { data: sitio, loading: loadingSitio } = useQuery(OBTENER_SITIO, {
        variables: {
            id: id
        }
    });

    const { data: edificios, loading: loadingEdificios } = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: 500,
                pagina: 1
            }
        }
    });



    return (
        <>
            <div className="actualizar-sitio">
                <Banner titulo="Actualizar Sitio" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
 
                {
                    !loadingSitio && !loadingEdificios ?
                        <FormSitio
                            solicitud={sitio.obtenerSitio}
                            edificios={edificios.obtenerEdificios}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }               

            </div>
        </>
    )
}
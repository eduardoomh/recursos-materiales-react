import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditOrganizacion.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLA } from "../../../../gql/acomodosilla";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormOrganizacion from "../../../../components/admin/actualizar/organizaciones/FormOrganizacion";

export default function EditOrganizacion() {
    const { id } = useParams();
    scrollTop();

    const { data: acomodosilla, loading: loadingAcomodosilla } = useQuery(OBTENER_ACOMODOSILLA, {
        variables: {
            id: id
        }
    });

    return (
        <>
            <div className="actualizar-organizacion">
                <Banner titulo="Actualizar Organizacion" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                
                 {
                    !loadingAcomodosilla ?
                        <FormOrganizacion
                            solicitud={acomodosilla.obtenerAcomodosilla}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }                    

            </div>
        </>
    )
}
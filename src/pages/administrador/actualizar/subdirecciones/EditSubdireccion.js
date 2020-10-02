import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditSubdireccion.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCION } from "../../../../gql/subdireccion";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormSubdireccion from "../../../../components/admin/actualizar/subdirecciones/FormSubdireccion";

export default function EditSubdireccion() {
    const { id } = useParams();
    scrollTop();

    const { data: subdireccion, loading: loadingSubdireccion } = useQuery(OBTENER_SUBDIRECCION, {
        variables: {
            id: id
        }
    });


    return (
        <>
            <div className="actualizar-subdireccion">
                <Banner titulo="Actualizar Subdireccion" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                
                 {
                    !loadingSubdireccion ?
                        <FormSubdireccion
                            solicitud={subdireccion.obtenerSubdireccion}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                } 

            </div>
        </>
    )
}
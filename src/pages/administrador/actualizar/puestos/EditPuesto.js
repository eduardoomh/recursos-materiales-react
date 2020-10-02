import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditPuesto.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTO } from "../../../../gql/puesto";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormPuesto from "../../../../components/admin/actualizar/puestos/FormPuesto";

export default function EditPuesto() {
    const { id } = useParams();
    scrollTop();

    const { data: puesto, loading: loadingPuesto } = useQuery(OBTENER_PUESTO, {
        variables: {
            id: id
        }
    });


    return (
        <>
            <div className="actualizar-puesto">
                <Banner titulo="Actualizar Puesto" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingPuesto  ?
                        <FormPuesto
                            solicitud={puesto.obtenerPuesto}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }   

            </div>
        </>
    )
}
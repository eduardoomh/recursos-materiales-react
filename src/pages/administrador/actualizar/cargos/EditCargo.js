import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditCargo.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PUESTO } from "../../../../gql/puesto";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormCargo from "../../../../components/admin/actualizar/cargos/FormCargo";

export default function EditCargo() {
    const { id } = useParams();
    scrollTop();

    const { data: puesto, loading: loadingPuesto } = useQuery(OBTENER_PUESTO, {
        variables: {
            id: id
        }
    });


    return (
        <>
            <div className="actualizar-cargo">
                <Banner titulo="Actualizar Cargo" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingPuesto ?
                        <FormCargo
                            solicitud={puesto.obtenerPuesto}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }

            </div>
        </>
    )
}
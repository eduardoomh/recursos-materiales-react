import React  from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditTipoorden.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDER } from "../../../../gql/tipoorder";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormTipoorden from "../../../../components/admin/actualizar/tipoordenes/FormTipoorden";

export default function EditTipoorden() {
    const { id } = useParams();
    scrollTop();

    const { data: tipoorder, loading: loadingTipoorder } = useQuery(OBTENER_TIPOORDER, {
        variables: {
            id: id
        }
    });



    return (
        <>
            <div className="actualizar-tipoorden">
                <Banner titulo="Actualizar Tipo de Orden" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingTipoorder ?
                        <FormTipoorden
                            solicitud={tipoorder.obtenerTipoorder}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }               

            </div>
        </>
    )
}
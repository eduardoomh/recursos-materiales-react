import React  from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditStatusorder.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDER } from "../../../../gql/tipoorder";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormStatusorder from "../../../../components/admin/actualizar/statusorders/FormStatusorder";

export default function EditStatusorder() {
    const { id } = useParams();
    scrollTop();

    const { data: tipoorder, loading: loadingTipoorder } = useQuery(OBTENER_TIPOORDER, {
        variables: {
            id: id
        }
    });



    return (
        <>
            <div className="actualizar-statusorder">
                <Banner titulo="Actualizar Estados de Mantenimiento" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingTipoorder ?
                        <FormStatusorder
                            solicitud={tipoorder.obtenerTipoorder}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }               

            </div>
        </>
    )
}
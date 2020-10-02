import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleStatusorder.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDER } from "../../../../gql/tipoorder";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoStatusorder from "../../../../components/admin/detalle/statusorders/InfoStatusorder";

export default function DetalleStatusorder(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();


    const { data: tipoorder, loading: loadingTipoorder, refetch } = useQuery(OBTENER_TIPOORDER, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (tipoorder) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);



    return(
        <div className="ver-statusorder">
            <Banner titulo="Detalle del estado de Mantenimiento" />
            <Titulo titulo="Informacion sobre el Estado de mantenimiento seleccionado" />
            {
                tipoorder && !loadingTipoorder ? (
                    <>
                        <InfoStatusorder data={tipoorder.obtenerTipoorder} loading={loading} setLoading={setLoading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
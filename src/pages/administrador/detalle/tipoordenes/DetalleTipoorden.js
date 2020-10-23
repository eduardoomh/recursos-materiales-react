import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleTipoorden.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_TIPOORDER } from "../../../../gql/tipoorder";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoTipoorden from "../../../../components/admin/detalle/tipoordenes/InfoTipoorden";

export default function DetalleTipoorden(){
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
        <div className="ver-tipoorden">
            <Banner titulo="Detalle del tipo de orden" />
            <Titulo titulo="Informacion sobre el Tipo de orden seleccionado" />
            {
                tipoorder && !loadingTipoorder ? (
                    <>
                        <InfoTipoorden 
                            data={tipoorder.obtenerTipoorder} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="tipoorden"
                            plural="tipoordenes"
                        />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
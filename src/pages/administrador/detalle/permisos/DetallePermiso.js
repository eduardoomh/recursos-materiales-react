import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetallePermiso.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_PERMISO } from "../../../../gql/permiso";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoPermiso from "../../../../components/admin/detalle/permisos/InfoPermiso";

export default function DetallePermiso(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: permiso, loading: loadingPermiso, refetch } = useQuery(OBTENER_PERMISO, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (permiso) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return(
        <div className="ver-permiso">
            <Banner titulo="Detalle del Permiso" />
            <Titulo titulo="Informacion sobre el permiso seleccionado" />
            {
                permiso && !loadingPermiso ? (
                    <>
                        <InfoPermiso data={permiso.obtenerPermiso} loading={loading} setLoading={setLoading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }
        </div>
    )
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleSubdireccion.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCION } from "../../../../gql/subdireccion";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoSubdireccion from "../../../../components/admin/detalle/subdirecciones/InfoSubdireccion";

export default function DetalleSubdireccion(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: subdireccion, loading: loadingSubdireccion, refetch } = useQuery(OBTENER_SUBDIRECCION, {
        variables: {
            id: id
        }
    });

    useEffect(() => {

        if (subdireccion) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return(
        <div className="ver-subdireccion">
            <Banner titulo="Detalle de la Subdireccion" />
            <Titulo titulo="Informacion sobre la subdireccion seleccionado" />
            {
                subdireccion && !loadingSubdireccion ? (
                    <>
                        <InfoSubdireccion 
                            data={subdireccion.obtenerSubdireccion} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="subdireccion"
                            plural="subdirecciones"
                        />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }
        </div>
    )
}
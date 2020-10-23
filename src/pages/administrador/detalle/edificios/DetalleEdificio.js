import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./DetalleEdificio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIO } from "../../../../gql/edificio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import InfoEdificio from "../../../../components/admin/detalle/edificios/InfoEdificio";

export default function DetalleEdificio(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    scrollTop();

    const { data: edificio, loading: loadingEdificio, refetch } = useQuery(OBTENER_EDIFICIO, {
        variables: {
            id: id
        }
    });

    useEffect(() => {

        if (edificio) {
            refetch();
        }
        return () => {
 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return(
        <div className="ver-edificio">
            <Banner titulo="Detalle del Edificio" />
            <Titulo titulo="Informacion sobre el Edificio seleccionado" />
            {
                edificio && !loadingEdificio ? (
                    <>
                        <InfoEdificio 
                            data={edificio.obtenerEdificio} 
                            loading={loading} 
                            setLoading={setLoading} 
                            tipo="edificio"
                            plural="edificios"
                        />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }

        </div>
    )
}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerMantenimiento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_MANTENIMIENTO } from "../../../gql/mantenimiento";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import InformacionMantenimiento from "../../../components/VerSolicitudes/VerMantenimiento/InformacionMantenimiento";

export default function VerMantenimiento(){
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const { data: mantenimiento, loading: loadingMantenimiento, refetch } = useQuery(OBTENER_MANTENIMIENTO, {
        variables: {
            id: id
        }
    })

    useEffect(() => {

        if (mantenimiento) {
            refetch();
        }


        return () => {

        }
    }, [id]);


    return(
        <div className="ver-mantenimiento">
            {
                mantenimiento && !loadingMantenimiento ? (
                    <>
                        <Banner titulo={mantenimiento.obtenerMantenimiento.nombre} />
                        <Titulo titulo={mantenimiento.obtenerMantenimiento.fecha} />
                        <InformacionMantenimiento data={mantenimiento.obtenerMantenimiento} loading={loading} />
                    </>
                )
                : <Loader active inline='centered' size='massive' />
            }
        </div>
    )
}
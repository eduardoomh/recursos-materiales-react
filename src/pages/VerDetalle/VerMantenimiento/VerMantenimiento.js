import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./VerMantenimiento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_MANTENIMIENTO } from "../../../gql/mantenimiento";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import Cargando from "../../../components/reutilizables/Cargando/Cargando";
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return(
        <div className="ver-mantenimiento">
            {
                mantenimiento && !loadingMantenimiento ? (
                    <>
                        <Banner titulo={mantenimiento.obtenerMantenimiento.nombre} />
                        <Titulo titulo={transformarFecha(mantenimiento.obtenerMantenimiento.fecha)} />
                        <InformacionMantenimiento data={mantenimiento.obtenerMantenimiento} loading={loading} setLoading={setLoading}  />
                    </>
                )
                : <Cargando />
            }
        </div>
    )
}
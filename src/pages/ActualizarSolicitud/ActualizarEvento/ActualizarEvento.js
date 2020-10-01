import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLAS } from "../../../gql/acomodosilla";
import { OBTENER_DEPARTAMENTOS } from "../../../gql/departamento";
import { OBTENER_SITIOS } from "../../../gql/sitio";
import { OBTENER_EVENTO } from "../../../gql/evento"; 
import "./ActualizarEvento.scss";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioActualizar from "../../../components/Formularios/ActualizarEvento/FormularioActualizar";

export default function ActualizarEvento() {
    const { id } = useParams();
    scrollTop();

    const { data: acomodosillas, loading: loadingAcomodosillas} = useQuery(OBTENER_ACOMODOSILLAS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    }); 
 
    const { data: departamentos, loading: loadingDepartamentos} = useQuery(OBTENER_DEPARTAMENTOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    const { data: sitios, loading: loadingSitios} = useQuery(OBTENER_SITIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    const { data: evento, loading: loadingEvento} = useQuery(OBTENER_EVENTO, {
        variables: {
            id: id
        }
    }); 

    return (
        <>
            <div className="actualizar-evento">
                <Banner titulo="Actualizar Evento" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                !loadingAcomodosillas && !loadingDepartamentos && !loadingSitios && !loadingEvento ?
                <FormularioActualizar
                    acomodosillas={acomodosillas.obtenerAcomodosillas} 
                    departamentos={departamentos.obtenerDepartamentos}
                    sitios={sitios.obtenerSitios}
                    solicitud={evento.obtenerEvento}
                /> 
                :
                <Loader active inline='centered' size='massive' />
            }

            </div>
        </>
    )
}
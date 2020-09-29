import React from "react";
import "./CrearEvento.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_ACOMODOSILLAS } from "../../../gql/acomodosilla";
import { OBTENER_DEPARTAMENTOS } from "../../../gql/departamento";
import { OBTENER_SITIOS } from "../../../gql/sitio";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioEvento from "../../../components/Formularios/FormularioEvento/FormularioEvento";

export default function CrearEvento(){
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

    return(
        <div className="crear-evento">
            <Banner titulo="Crear nuevo Evento" />
            <Titulo titulo="Rellene el formulario con los datos que se le indiquen." />
            {
                !loadingAcomodosillas && !loadingDepartamentos && !loadingSitios && 
                <FormularioEvento 
                    acomodosillas={acomodosillas.obtenerAcomodosillas} 
                    departamentos={departamentos.obtenerDepartamentos}
                    sitios={sitios.obtenerSitios}
                /> 
            }
            
        </div>
    )
}
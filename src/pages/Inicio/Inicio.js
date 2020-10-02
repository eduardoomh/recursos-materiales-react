import React, { useEffect } from "react";
import "./Inicio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_SUBDIRECCIONES } from "../../gql/subdireccion";
import { OBTENER_EDIFICIOS } from "../../gql/edificio";
import { OBTENER_TIPOORDERS } from "../../gql/tipoorder";
import Banner from "../../components/Inicio/Banner/Banner";
import Container from "../../components/Inicio/Container/Container";
import { saveStorage } from "../../servicios/reutilizables/localStorage";
import { scrollTop } from "../../utils/reutilizables/scroll";


export default function Inicio() {
    const { data: subdirecciones} = useQuery(OBTENER_SUBDIRECCIONES, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    const { data: edificios} = useQuery(OBTENER_EDIFICIOS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    const { data: tipoorders} = useQuery(OBTENER_TIPOORDERS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    })

    if(subdirecciones) saveStorage("subdirecciones", subdirecciones.obtenerSubdirecciones); 
    if(edificios) saveStorage("edificios", edificios.obtenerEdificios); 
    if(tipoorders) saveStorage("tipoorders", tipoorders.obtenerTipoorders); 

    useEffect(() => {
        scrollTop();

    }, []);

    return (
        <>
            <Banner />
            <Container/>
        </>

    )
}
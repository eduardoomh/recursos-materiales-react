import React, { useState, useEffect } from "react";
import "./Inicio.scss";
import { useQuery } from "@apollo/client";
import { SOLICITUDES_HOY } from "../../gql/general";
import Banner from "../../components/Inicio/Banner/Banner";
import Container from "../../components/Inicio/Container/Container";
import { scrollTop } from "../../utils/reutilizables/scroll";
import { format } from "date-fns";


export default function Inicio() {
    const [count, setCount] = useState(0);
    const { data: solicitudesHoy, refetch} = useQuery(SOLICITUDES_HOY, {
        variables: {
            input: format(new Date(), "yyyy-MM-dd")
        }
    })


    useEffect(() => {
        scrollTop();
        refetch();

        if(solicitudesHoy){
            setCount(solicitudesHoy.solicitudesHoy);
        }
        
    }, [solicitudesHoy]);

    return (
        <>
            <Banner count={count} />
            <Container/>
        </>

    )
}
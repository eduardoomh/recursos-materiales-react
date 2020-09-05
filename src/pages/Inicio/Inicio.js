import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./Inicio.scss";
import Banner from "../../components/Inicio/Banner/Banner";
import Container from "../../components/Inicio/Container/Container";

export default function Inicio(){
    return(
        <>
            <Banner />
            <Container />

        </>
        
    )
}
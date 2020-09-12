import React, { useState, useEffect } from "react";
import "./Inicio.scss";
import { Loader } from "semantic-ui-react";
import Banner from "../../components/Inicio/Banner/Banner";
import Container from "../../components/Inicio/Container/Container";
import ModalBasic from "../../components/reutilizables/ModalBasic/ModalBasic";
import { scrollTop } from "../../utils/reutilizables/scroll";


export default function Inicio() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        scrollTop();

    }, []);

    return (
        <>
            <Banner />
            <Container loading={loading} setLoading={setLoading} />

            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>

        </>

    )
}
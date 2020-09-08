import React from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./CardCarrousel.scss";
import Card from "../Card/Card";

export default function CardCarousel(props) {
    const { titulo} = props;
    const history = useHistory();

    const carrouselRoute = () => {
        history.push(`/${titulo.toLowerCase()}`);
    }

    return (
        <article className="card-carrousel">
            <p className="titulo"><span>{titulo}</span></p>
            <div>
                <Card fecha="02 de agosto" contenido="Reunion de comite" status="pendiente"/>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Icon name="angle right" size="big"  onClick={() => carrouselRoute() }/>

        </article>
    )
}
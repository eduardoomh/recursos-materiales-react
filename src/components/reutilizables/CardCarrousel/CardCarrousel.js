import React from "react";
import { Icon } from "semantic-ui-react";
import "./CardCarrousel.scss";
import Card from "../Card/Card";

export default function CardCarousel() {
    return (
        <article className="card-carrousel">
            <p className="titulo"><span>Mantenimiento</span></p>
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Icon name="angle right" size="big" />

        </article>
    )
}
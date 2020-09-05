import React from "react";
import { Icon } from "semantic-ui-react";
import "./Card.scss";

export default function Card(){
    return(
        <article className="card">
            <p className="fecha">fecha</p>
            <p className="contenido">contenido</p>
            <p className="status">
                <Icon name="check"/>
            </p>
        </article>
    )
}
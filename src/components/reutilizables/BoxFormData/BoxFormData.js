import React from "react";
import "./BoxFormData.scss";

export default function BoxFormData(props) {
    const { titulo, data } = props;
    return (
        <article>
            <p>{titulo}</p>
            <p>{data || "cargando"}</p>
        </article>
    )
}
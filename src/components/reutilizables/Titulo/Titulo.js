import React from "react";
import "./Titulo.scss";

export default function Titulo(props){
    const {titulo = "Titulo"} = props;

    return(
        <h2>
            {titulo}
        </h2>
    )
}
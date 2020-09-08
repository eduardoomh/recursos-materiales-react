import React from "react";
import "./Banner.scss";

export default function Banner(props){
    const { titulo } = props;

    return(
        <div className="banner-titulo">
            <h1>{titulo}</h1>
        </div>
    );
}
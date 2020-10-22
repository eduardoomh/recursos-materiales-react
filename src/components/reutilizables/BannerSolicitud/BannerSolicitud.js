import React from "react";
import "./BannerSolicitud.scss";

export default function BannerSolicitud(props){
    const { titulo } = props;

    return(
        <div className="banner-solicitud">
            <h1>{titulo}</h1>
        </div>
    );
}
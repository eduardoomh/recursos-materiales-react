import React from "react";
import {Link} from "react-router-dom";
import {Image} from "semantic-ui-react";
import ErrorImage from "../../../assets/img/error.jpg";
import "./Error404.scss";

export default function Error404(){
    return(
        <div className="error-404">
            <h1>Pagina No Encontrada, <p><Link to="/">Volver al Inicio</Link></p></h1>
            <Image src={ErrorImage} />
        </div>
    )
}
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Image, Divider } from "semantic-ui-react";
import calendar from "../../../assets/img/pngwave.png";
import "./Banner.scss";

export default function Banner() {
    const history = useHistory();

    const gotoPage = (ruta) => {
        history.push(ruta);
    }

    return (
        <div className="banner">
            <div className="banner-box">
                <Image src={calendar} />
            </div>
            
            <div className="banner-info">
                <h1>Consulte todas las solicitudes para Eventos, Manteminientos, Transportes y salidas de vehiculos.</h1>
                <p className="boton-box">
                    <Button onClick={() => gotoPage("/calendario")}>Ver Calendario</Button>
                    <Button onClick={() => gotoPage("/usuario/perfil")}>Ver perfil</Button>
                </p>

            </div>
        </div>
    )
}
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import "./Banner.scss";

export default function Banner() {
    const history = useHistory();

    const gotoPage = (ruta) => {
        history.push(ruta);
    }

    return (
        <div className="banner">
            <div className="banner-info">
                <h1>Consulte todas las solicitudes para Eventos, Manteminientos, Transportes y salidas de vehiculos.</h1>
                <p className="boton-box">
                    <Button className="boton-dorado" onClick={() => gotoPage("/calendario")} icon labelPosition='left'>
                        Ver Calendario
                        <Icon name='calendar outline' />
                    </Button>
                    <Button className="boton-dorado" onClick={() => gotoPage("/usuario/perfil")} icon labelPosition='right'>
                        Ver perfil
                        <Icon name='user' />
                    </Button>
                </p>


            </div>

        </div>
    )
}
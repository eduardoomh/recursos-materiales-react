import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import "./Banner.scss";
import Card from "../../reutilizables/Card/Card";

export default function Banner(){
    const history = useHistory();
    const gotoCalendar = () => {
        
        history.push("/calendario");
    }

    return(
        <div className="banner">
            <h1>Sistema de Gestión para el Departamento de Recursos Materiales y Servicios.</h1>
            <div className="banner-box">
                <article className="banner-box-cards">
                    <p className="text">Solicitudes pendientes para hoy:</p>
                    <div className="cards">
                        <Card />
                    </div>
                </article>
                <div>
                    <p>Busque mas solicitudes <Icon name="calendar" size="big" /></p>
                    <Button onClick={() => gotoCalendar()}>Ver Calendario</Button>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./Container.scss";

export default function Container() {
    return (
        <div className="container-calendar">

            <div id="calendario">
                <div className="header-calendar">
                    <Button><Icon name="angle left" size="big" /></Button>
                    <p>Mes de Octubre</p>
                    <Button><Icon name="angle right" size="big" /></Button>
                </div >
                <div class="box-calendar">
                    <span>
                        <span className="number">dfg</span>
                        <span className="event">Evento</span>
                        <span className="mante"> Mantenim.</span>
                        <span  className="sal"> Salida</span>
                    </span>
                </div>

            </div>
    </div>
    )
}
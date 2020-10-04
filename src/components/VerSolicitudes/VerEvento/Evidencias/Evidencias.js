import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Evidencias.scss";

export default function Evidencias() {
    return (
        <div className="evidencias">
            <p>No hay evidencias por el momento, suba evidencias.</p>
            <div>
                <Button className="boton-guindo" icon labelPosition='right'>
                    Subir evidencia
                    <Icon name='folder open outline' />
                </Button>
            </div>
        </div>
    )
}
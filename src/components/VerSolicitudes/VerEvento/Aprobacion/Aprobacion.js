import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Aprobacion.scss";

export default function Aprobacion(){
    return(
        <div className="aprobacion">
            <p>La solicitud necesita revisarse y verificarse por el departamento.</p>
            <div>
                <Button icon labelPosition='right' className="boton-guindo" >
                    Verificar Solicitud
                    <Icon name='check' />
                </Button>
            </div>
        </div>
    )
}
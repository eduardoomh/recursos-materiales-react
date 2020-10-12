import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import SubirEvidencia from "./SubirEvidencia/SubirEvidencia";
import "./Evidencias.scss";

export default function Evidencias(props) {
    const { id } = props;
    const [abrir, setAbrir] = useState(false);

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }

    return (
        <div className="evidencias">
            <p>No hay evidencias por el momento, suba evidencias.</p>
            <div>
                <Button className="boton-guindo" icon labelPosition='right' onClick={abrirModal}>
                    Subir evidencia
                    <Icon name='folder open outline' />
                </Button>
            </div>
            <SubirEvidencia abrir={abrir} cerrarModal={cerrarModal} id={id} />
        </div>
    )
}
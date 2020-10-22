import React, { useState } from "react";
import { Button, Icon, Image } from "semantic-ui-react";
import SubirEvidencia from "./SubirEvidencia/SubirEvidencia";
import ModalEvidencias from "../../reutilizables/ModalEvidencias/ModalEvidencias";
import ilustracion from "../../../assets/img/ilustraciones.jpg";
import "./Evidencias.scss";

export default function Evidencias(props) {
    const { id, evidencias, refrescarEvidencias, tipo } = props;
    const [abrir, setAbrir] = useState(false);
    const [open, setopen] = useState(false);

    const abrirModal = () => {
        setAbrir(true);
    }

    const openModal = () => {
        setopen(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
        setopen(false);
    }

    return (
        <div className="evidencias">
            <div className="evidencias__image-container">
                <Image src={ilustracion} />
            </div>
            {
                evidencias?.length > 0 ? (
                    <>
                        <div className="evidencias__contenido" onClick={openModal}>

                            <p>
                                Cuenta con <span>{evidencias.length}</span> {evidencias.length > 1 ? "evidencias" : "evidencia"} de esta solicitud, haga clic para ver las imagenes.
                            </p>
                        </div>
                    </>
                ) : (
                        <p>No hay evidencias por el momento, suba evidencias.</p>
                    )
            }

            <div className="evidencias__boton">
                <Button className="boton-guindo" icon labelPosition='right' onClick={abrirModal}>
                    Subir evidencia
                    <Icon name='folder open outline' />
                </Button>
            </div>

            <SubirEvidencia
                abrir={abrir}
                cerrarModal={cerrarModal}
                id={id}
                refrescarEvidencias={refrescarEvidencias}
                tipo={tipo}
            />

            <ModalEvidencias
                abrir={open}
                cerrarModal={cerrarModal}
                evidencias={evidencias}
                tipo={tipo}
                refrescarEvidencias={refrescarEvidencias}
            />
        </div>
    )
}
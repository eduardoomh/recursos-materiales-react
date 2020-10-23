import React from "react";
import { Modal, Button, Image } from "semantic-ui-react";
import success from "../../../assets/img/success.jpg";
import errorSolicitud from "../../../assets/img/error-solicitud.jpg";
import "./ModalMensaje.scss";

export default function ModalMensaje(props) {
    const { open, onClose, titulo, texto, boton, error = false} = props;

    return (
        <div className="modal-mensaje">
            <Modal
                open={open}
                onClose={onClose}
                size="small"
            >
                <Modal.Header>{titulo}</Modal.Header>
                <Modal.Content>
                    <div className="modal-mensaje__contenido">
                        <div>
                           <Image src={error ? errorSolicitud : success} /> 
                        </div>
                        
                        <p>{texto}</p>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={onClose}>{boton}</Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
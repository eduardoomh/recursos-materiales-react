import React from "react";
import { Modal, Button, Image } from "semantic-ui-react";
import success from "../../../assets/img/success.jpg";
import "./ModalMensaje.scss";

export default function ModalMensaje(props) {
    const { centered, open, onClose, titulo, texto, boton } = props;

    return (
        <div className="modal-mensaje">
            <Modal
                centered={centered}
                open={open}
                onClose={onClose}
                size="small"
            >
                <Modal.Header>{titulo}</Modal.Header>
                <Modal.Content>
                    <div className="modal-mensaje__contenido">
                        <div>
                           <Image src={success} /> 
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
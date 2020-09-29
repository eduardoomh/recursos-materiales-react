import React from "react";
import { Modal,  Button} from "semantic-ui-react";

export default function ModalMensaje(props) {
    const { centered, open, onClose, titulo, texto, boton} = props;

    return (
        <Modal
            centered={centered}
            open={open}
            onClose={onClose}
        >
            <Modal.Header>{titulo}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {texto}
      </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={onClose}>{boton}</Button>
            </Modal.Actions>
        </Modal>
    )
}
import React from "react";
import { Modal, Button } from "semantic-ui-react";

export default function ModalConfirmacion(props) {
    const {abrir, cerrarConfirmacion, actualizar, dato} = props;
    return (
        <div>
            <Modal
                size="mini"
                open={abrir}
                onClose={() => cerrarConfirmacion()}
            >
                <Modal.Header>{dato === "aprobado" ? "aprobar" : "Inactivar"} Usuario</Modal.Header>
                <Modal.Content>
                    <p>Esta seguro de querer ejecutar esta accion?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => cerrarConfirmacion()}>
                        No
          </Button>
                    <Button positive onClick={() => actualizar(dato)}>
                        Si
          </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
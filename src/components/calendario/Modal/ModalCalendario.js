import React from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Icon } from "semantic-ui-react";
import "./ModalCalendario.scss";

export default function ModalCalendario(props) {
    const { abrir, cerrarModal, eventos, mantenimientos } = props;
    const history = useHistory();

    const array = [];

    if (eventos) {
        array.push(
            ...eventos
        )
    }
    if (mantenimientos) {
        array.push(
            ...mantenimientos
        )
    }


    const gotoPage = (id, tipo) => {
        if (tipo) {
            history.push(`/mantenimiento/${id}`);
        } else {
            history.push(`/evento/${id}`);
        }

    }

    return (
        <div className="modal-calendario">
            <Modal
                size="small"
                open={abrir}
                onClose={cerrarModal}
            >
                <Modal.Header>Pendiente para éste día</Modal.Header>
                <Modal.Content>
                    {
                        array?.length > 0 ? array.map(arr => (
                            <div key={arr.id} className="modal-calendario__data" onClick={() => gotoPage(arr.id, arr.trabajo_realizado)}>
                                <Icon
                                    color="red"
                                    name={arr.trabajo_realizado ? "cogs" : "address book"}
                                    size="large"
                                />
                                <p>{arr.nombre}</p>
                            </div>
                        )

                        ) : (
                                <div className="modal-solicitudes__empty">
                                    <p>No hay solicitudes programadas para este día</p>
                                </div>
                            )
                    }
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={cerrarModal}>
                        Cerrar
              </Button>
                </Modal.Actions>
            </Modal>

        </div>
    )
}
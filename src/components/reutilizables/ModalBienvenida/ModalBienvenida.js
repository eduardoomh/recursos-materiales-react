import React from "react";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Modal, Button, Image, List, Popup } from "semantic-ui-react";
import defaultUser from "../../../assets/img/default_user.png";
import "./ModalBienvenida.scss"; 

export default function ModalBienvenida(props) {
    const { open, close } = props;
    const { identity } = useIdentity();
    return (
        <div className="modal-bienvenida">
            <Modal
                open={open}
                onClose={close}
                size="small"
            >
                <Modal.Header>Bienvenido(a) al sistema!</Modal.Header>
                <Modal.Content>
                    <div className="modal-bienvenida__imagen">
                        <div>
                            
                            <Popup
                                trigger={<Image src={identity?.avatar || defaultUser} size="small" />}
                                content={`${identity?.nombre} ${identity?.apellidos}`}
                                inverted
                                position='right center'
                            />
                        </div>

                    </div>
                    <p className="modal-bienvenida__parrafo">Acciones que puede realizar dentro del sistema</p>
                    <div className="modal-bienvenida__lista">
                        <List as='ol'>
                            <List.Item as='li' value='-'>
                                Crear Eventos, ordenes de mantenimiento y registrar salidas.
                            </List.Item>
                            <List.Item as='li' value='-'>
                                Consultar Informacion sobre solicitudes.
                            </List.Item>
                            <List.Item as='li' value='-'>
                                Modificar Informacion sobre solicitudes.
                            </List.Item>
                            <List.Item as='li' value='-'>
                                Subir imagenes para evidencia.
                            </List.Item>
                            <List.Item as='li' value='-'>
                                Consultar el calendario
                            </List.Item>
                            <List.Item as='li' value='-'>
                                Generar formato PDF
                            </List.Item>
                        </List>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="boton-guindo" onClick={close}>
                        Entendido
          </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
import React from "react";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Modal, Button, Image, Icon, Popup } from "semantic-ui-react";
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
                <Modal.Content scrolling>
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
                        <ul>
                            <li><Icon name="check" color="green" /> Crear Eventos, ordenes de mantenimiento y registrar salidas.</li>
                            <li><Icon name="check" color="green" /> Consultar Informacion sobre solicitudes.</li>
                            <li><Icon name="check" color="green" /> Modificar Informacion sobre solicitudes.</li>
                            <li><Icon name="check" color="green" /> Subir imagenes para evidencia.</li>
                            <li><Icon name="check" color="green" /> Consultar el calendario</li>
                            <li><Icon name="check" color="green" /> Generar formato PDF</li>
                            <li>
                                <Icon
                                    name={identity?.estatus === "administrador" ? "check" : "remove"}
                                    color={identity?.estatus === "administrador" ? "green" : "red"}
                                />
                                Adminsitrar usuarios </li>
                            <li>
                                <Icon 
                                    name={identity?.estatus === "administrador" ? "check" : "remove" } 
                                    color={identity?.estatus === "administrador" ? "green" : "red"}
                                /> 
                                 Asignar y remover permisos a usuarios</li>
                            <li>
                                                                
                                <Icon
                                    name={identity?.estatus === "administrador" ? "check" : "remove"}
                                    color={identity?.estatus === "administrador" ? "green" : "red"}
                                />  
                             Verificar solicitudes</li>
                            <li>
                                <Icon 
                                    name={identity?.estatus === "administrador" ? "check" : "remove" } 
                                    color={identity?.estatus === "administrador" ? "green" : "red"}
                                /> 
                                 Crear opciones extra de administrador</li>
                        </ul>
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
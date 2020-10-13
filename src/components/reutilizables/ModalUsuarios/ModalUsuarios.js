import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { OBTENER_USUARIO, APROBAR_USUARIO } from "../../../gql/usuario";
import useIdentity from "../../../utils/hooks/useIdentity";
import { formatDate } from "../../../utils/reutilizables/fecha";
import { toast } from "react-toastify";
import { Modal, Button, Icon, Table } from "semantic-ui-react";
import "./ModalUsuarios.scss";

export default function ModalUsuarios(props) {
    const { id, abrir, cerrarModal, refrescarAprobados, refrescarPendientes } = props;
    const [abrirDos, setAbrirDos] = useState(false);
    const { identity } = useIdentity();
    const [aprobarUsuario] = useMutation(APROBAR_USUARIO);

    const { data, loading, refetch } = useQuery(OBTENER_USUARIO, {
        variables: {
            id: id
        }
    });

    const aprobar = async () => {
        try {
            await aprobarUsuario({
                variables: {
                    id: id
                }
            })
            toast.success("El usuario ha sido aprobado");
            refetch();
            refrescarAprobados();
            refrescarPendientes();
            setAbrirDos(false);
            cerrarModal();

        }
        catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const abrirConfirmacion = () => {
        setAbrirDos(true);
    }

    const cerrarConfirmacion = () => {
        setAbrirDos(false);
    }


    return (
        <>
            <Modal
                onClose={cerrarModal}
                open={abrir}
                className="modal-usuario-box"
            >
                <Modal.Header>Informacion del usuario</Modal.Header>
                <Modal.Content scrolling>
                    {
                        data && !loading && (
                            <>
                                <div className="modal-usuario-informacion">
                                
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Datos</Table.HeaderCell>
                                            <Table.HeaderCell></Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Nombre Completo</Table.Cell>
                                            <Table.Cell>{`${data.obtenerUsuario.nombre} ${data.obtenerUsuario.apellidos}`}</Table.Cell>
                                        </Table.Row>
                                    <Table.Row>
                                            <Table.Cell>Correo electronico</Table.Cell>
                                            <Table.Cell>{data.obtenerUsuario.correo}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Numero de control</Table.Cell>
                                            <Table.Cell>{data.obtenerUsuario.numero_control}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>fecha de creacion</Table.Cell>
                                            <Table.Cell>{formatDate(data.obtenerUsuario.createdAt)}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Estatus</Table.Cell>
                                            <Table.Cell>{data.obtenerUsuario.estatus}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                            </>
                        )
                    }
                    {
                        data && !loading && data.obtenerUsuario.estatus === "pendiente" && identity.estatus === "administrador" && (
                            <div className="modal-usuario-boton">
                                <Button onClick={() => abrirConfirmacion()} className="boton-guindo">
                                    Aprobar usuario
                            </Button>
                            </div>

                        )
                    }
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={cerrarModal} primary>
                        Cerrar <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>

            <Modal
                size="mini"
                open={abrirDos}
                onClose={() => cerrarConfirmacion()}
            >
                <Modal.Header>Aprobar usuario</Modal.Header>
                <Modal.Content>
                    <p>Esta seguro de querer aprobar este usuario?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => cerrarConfirmacion()}>
                        No
          </Button>
                    <Button positive onClick={() => aprobar()}>
                        Si
          </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}
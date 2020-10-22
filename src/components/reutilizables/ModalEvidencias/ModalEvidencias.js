import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { BORRAR_EVIDENCIA } from "../../../gql/evidencia";
import { toast } from "react-toastify";
import { Modal, Button, Icon, Image, Popup } from "semantic-ui-react";
import { formatDate } from "../../../utils/reutilizables/fecha";
import "./ModalEvidencias.scss";

export default function ModalEvidencias(props) {
    const { evidencias, abrir, cerrarModal, refrescarEvidencias } = props;
    const [loading, setLoading] = useState(false);
    const [borrarEvidencia] = useMutation(BORRAR_EVIDENCIA);

    const EliminarEvidencia = async (id) => {
        try {
            setLoading(true);
            await borrarEvidencia({
                variables: {
                    id: id
                }
            })
            refrescarEvidencias();
            setLoading(false);
            toast.success("Imagen eliminada");

        }
        catch (error) {
            setLoading(false);
            console.log(error.message);
            toast.error(error.message);
        }

    }

    return (
        <div className="modal-evidencias">
            <Modal
                onClose={cerrarModal}
                open={abrir}
                className="modal-usuario-box"
            >
                <Modal.Header>Evidencias</Modal.Header>
                <Modal.Content scrolling>
                    {
                        evidencias.length > 0 ? (
                            
                                evidencias.map(e => {
                                    return <div className="modal-evidencias__imagenes" key={e.id}>
                                        <div className="modal-evidencias__opciones">
                                            <p>Subida el {formatDate(e.createdAt)}</p>
                                            <p>
                                                <Popup
                                                    trigger={
                                                        <Icon name="trash alternate" fitted link color="red" size="large" />
                                                    }
                                                    content={
                                                        <>
                                                            <p>Esta seguro de querer eliminar la imagen?</p>
                                                            <Button color='red' content='Eliminar' loading={loading} onClick={() => EliminarEvidencia(e.id)} />
                                                        </>
                                                    }
                                                    on='click'
                                                    position='top right'
                                                    inverted
                                                /></p>
                                        </div>

                                        <div className="modal-evidencias__imagen">
                                            <Image src={e.imagen} rounded />
                                        </div>
                                    </div>
                                })
                        )
                        :
                        (
                            <p className="modal-evidencias__mensaje">
                                No hay Imagenes de evidencia en esta solicitud.
                            </p>
                        )
                    }
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={cerrarModal} primary>
                        Cerrar <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
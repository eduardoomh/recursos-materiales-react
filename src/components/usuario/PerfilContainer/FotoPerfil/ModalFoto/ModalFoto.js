import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_AVATAR } from "../../../../../gql/usuario";
import { toast } from "react-toastify";
import useIdentity from "../../../../../utils/hooks/useIdentity";
import { Modal, Button, Icon } from "semantic-ui-react";
import "./ModalFoto.scss";

export default function ModalFoto(props) {
    const { abrir, cerrarModal } = props;
    const [loading, setLoading] = useState(false);
    const [actualizarAvatar] = useMutation(ACTUALIZAR_AVATAR);
    const { identity, updateIdentity } = useIdentity();

    const onDrop = useCallback(async (acceptedFile) => {
        console.log(acceptedFile);
        const file = acceptedFile[0];

        try {
            setLoading(true);
            const result = await actualizarAvatar({ variables: { file } });
            console.log(result);
            const { data } = result;

            if (!data.actualizarAvatar.status) {
                toast.warning("Error al actualizar el avatar");
                setLoading(false);
            } else {
                updateIdentity({
                    id: identity.id,
                    nombre: identity.nombre,
                    apellidos: identity.apellidos,
                    correo: identity.correo,
                    numero_control: identity.numero_control,
                    descripcion: identity.descripcion,
                    avatar: data.actualizarAvatar.urlAvatar,
                    estatus: identity.estatus,
                    telefono: identity.telefono
                });
                setLoading(false);
                toast.success("Foto de perfil actualizada con exito");
                cerrarModal();
            }
        }
        catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }

    }, []);


    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop,

    })

    return (
        <div className="modal-foto">
            <Modal
                size="tiny"
                open={abrir}
                onClose={cerrarModal}
            >
                <Modal.Header>Actualizar tu foto de perfil</Modal.Header>
                <Modal.Content>
                    <div className="modal-foto__contenido">
                        <p>Selecciona una imagen de tu galeria</p>
                        <input {...getInputProps()} />
                        <Button {...getRootProps()} loading={loading} className="boton-guindo" icon>
                            <Icon name="upload" />
                        </Button>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={cerrarModal}>
                        cerrar
          </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
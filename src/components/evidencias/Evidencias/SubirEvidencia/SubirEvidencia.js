import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/client";
import { CREAR_EVIDENCIA } from "../../../../gql/evidencia";
import { toast } from "react-toastify";
import { Icon, Button, Modal } from "semantic-ui-react";
import "./SubirEvidencia.scss";

export default function SubirEvidencia(props) {
    const { abrir, cerrarModal, id, refrescarEvidencias, tipo } = props;
    const [loading, setLoading] = useState(false);
    const [crearEvidencia] = useMutation(CREAR_EVIDENCIA);

    const onDrop = useCallback(async (acceptedFile) => {
        console.log(acceptedFile);
        const file = acceptedFile[0];

        try {
            setLoading(true);
            const result = await crearEvidencia({ variables: { file, input: {solicitud: id, tipo: tipo} } });
            const { data } = result;

            if(data.crearEvidencia === true){
                setLoading(false);
                toast.success("La imagen de evidencia ha sido guardada");
                refrescarEvidencias();
                cerrarModal();
            }else{
                toast.error("La evidencia no ha sido guardada");
            }
            
        }
        catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop,

    })
    

    return (
        <div className="subir-evidencia">
            <Modal
                size="tiny"
                open={abrir}
                onClose={cerrarModal}
            >
                <Modal.Header>Subir una evidencia</Modal.Header>
                <Modal.Content>
                    <div className="subir-evidencia__contenido">
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
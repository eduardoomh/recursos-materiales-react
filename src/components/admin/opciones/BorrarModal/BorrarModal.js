import React from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { BORRAR_SUBDIRECCION } from "../../../../gql/subdireccion";
import { Modal, Button } from "semantic-ui-react";

export default function BorrarModal(props) {
    const { abrir, id, cerrar, tipo, setMensaje } = props;
    const [ borrarSubdireccion ] = useMutation(BORRAR_SUBDIRECCION);

    const eliminarSolicitud = async (id) => {
        try{
            switch(tipo){
                case "subdireccion":
                await borrarSubdireccion({
                    variables: {
                        id: id
                    }
                })
                    break;
                case "mantenimiento":

                    break;
                case "salida":

                    break; 
                default: 
                break;
            }
            setMensaje(true);
            
        }
        catch(error){
            console.log(error);
            toast.error(error.message);
        }

        
    }

    return (
        <Modal
            size="mini"
            open={abrir}
            onClose={() => cerrar()}
        >
            <Modal.Header>Eliminar Solicitud</Modal.Header>
            <Modal.Content>
                <p>Esta seguro de querer ejecutar esta accion?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => cerrar()}>
                    No
        </Button>
                <Button positive onClick={() => eliminarSolicitud(id)}>
                    Si
        </Button>
            </Modal.Actions>
        </Modal>
    )
}
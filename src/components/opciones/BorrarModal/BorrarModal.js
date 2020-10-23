import React from "react";
import { useMutation } from "@apollo/client";
import { BORRAR_EVENTO} from "../../../gql/evento";
import { BORRAR_MANTENIMIENTO} from "../../../gql/mantenimiento";
import { BORRAR_SALIDA } from "../../../gql/salida";
import { Modal, Button } from "semantic-ui-react";

export default function BorrarModal(props) {
    const { abrir, id, cerrar, tipo, cambiarMensaje } = props;
    const [borrarEvento] = useMutation(BORRAR_EVENTO);
    const [borrarMantenimiento] = useMutation(BORRAR_MANTENIMIENTO);
    const [borrarSalida] = useMutation(BORRAR_SALIDA);

    const eliminarSolicitud = async (id) => {
        try{
            switch(tipo){
                case "evento":
                    await borrarEvento({
                    variables: {
                        id: id
                    }
                })
                    break;
                case "mantenimiento":
                    await borrarMantenimiento({
                        variables: {
                            id: id
                        }
                    })
                    break;
                case "salida":
                    await borrarSalida({
                        variables:{
                            id: id
                        }
                    }) 
                    break; 
                default: 
                break;
            }
            cambiarMensaje({
                titulo: "peticion exitosa",
                texto: "La solicitud se ha eliminado exitosamente!",
                 boton: "Entendido",
                 error: false
            });
        }
        catch(error){
            cambiarMensaje({
                titulo: "Solicitud Denegada",
                texto: error.message,
                boton: "Salir",
                error: true
            })
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
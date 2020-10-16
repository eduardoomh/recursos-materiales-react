import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { BORRAR_EVENTO} from "../../../gql/evento";
import { BORRAR_MANTENIMIENTO} from "../../../gql/mantenimiento";
import { BORRAR_SALIDA } from "../../../gql/salida";
import { toast } from "react-toastify";
import { Modal, Button } from "semantic-ui-react";

export default function BorrarModal(props) {
    const { abrir, id, cerrar, tipo } = props;
    const [borrarEvento] = useMutation(BORRAR_EVENTO);
    const [borrarMantenimiento] = useMutation(BORRAR_MANTENIMIENTO);
    const [borrarSalida] = useMutation(BORRAR_SALIDA);
    const history = useHistory();

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
            }
            toast.success("La solicitud ha sido eliminada");
            history.push(`/${tipo}s/borrado`);
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
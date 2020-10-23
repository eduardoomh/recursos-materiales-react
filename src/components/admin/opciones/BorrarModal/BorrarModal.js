import React from "react";
import { useMutation } from "@apollo/client";
import { BORRAR_SUBDIRECCION } from "../../../../gql/subdireccion";
import { BORRAR_EDIFICIO } from "../../../../gql/edificio";
import { BORRAR_SITIO } from "../../../../gql/sitio";
import { BORRAR_ACOMODOSILLA } from "../../../../gql/acomodosilla";
import { BORRAR_PUESTO } from "../../../../gql/puesto";
import { BORRAR_VEHICULO } from "../../../../gql/vehiculo";
import { BORRAR_TIPOORDEN } from "../../../../gql/tipoorder";
import { BORRAR_DEPARTAMENTO } from "../../../../gql/departamento";
import { BORRAR_PERMISO } from "../../../../gql/permiso";
import { Modal, Button } from "semantic-ui-react";

export default function BorrarModal(props) {
    const { abrir, id, cerrar, tipo, cambiarMensaje } = props;

    const [borrarSubdireccion] = useMutation(BORRAR_SUBDIRECCION);
    const [borrarEdificio] = useMutation(BORRAR_EDIFICIO);
    const [borrarSitio] = useMutation(BORRAR_SITIO);
    const [borrarAcomodosilla] = useMutation(BORRAR_ACOMODOSILLA);
    const [borrarPuesto] = useMutation(BORRAR_PUESTO);
    const [borrarVehiculo] = useMutation(BORRAR_VEHICULO);
    const [borrarTipoorder] = useMutation(BORRAR_TIPOORDEN);
    const [borrarDepartamento] = useMutation(BORRAR_DEPARTAMENTO);
    const [borrarPermiso] = useMutation(BORRAR_PERMISO);

    const eliminarSolicitud = async (id) => {
        try {
            switch (tipo) {
                case "subdireccion":
                    await borrarSubdireccion({
                        variables: {
                            id: id
                        }
                    })
                    break;
                case "edificio":
                    await borrarEdificio({
                        variables: {
                            id: id
                        }
                    })

                    break;
                case "sitio":
                    await borrarSitio({
                        variables: {
                            id: id
                        }
                    })
                    break;

                case "organizacion":
                    await borrarAcomodosilla({
                        variables: {
                            id: id
                        }
                    })

                    break;
                case "puesto":
                    await borrarPuesto({
                        variables: {
                            id: id
                        }
                    })

                    break;
                case "vehiculo":
                    await borrarVehiculo({
                        variables: {
                            id: id
                        }
                    })

                    break;
                case "tipoorden":
                    await borrarTipoorder({
                        variables: {
                            id: id
                        }
                    })

                    break;
                case "departamento":
                    await borrarDepartamento({
                        variables: {
                            id: id
                        }
                    })

                    break;
                case "permiso":
                    await borrarPermiso({
                        variables: {
                            id: id
                        }
                    })

                    break;
                default:
                    break;
            }
            cambiarMensaje({
                titulo: "Solicitud Exitosa",
                texto: "El elemento ha sido eliminado exitosamente!",
                boton: "Entendido",
                error: false
            })

        }
        catch (error) {
            cambiarMensaje({
                titulo: "Solicitud rechazada",
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
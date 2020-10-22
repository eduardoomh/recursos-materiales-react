import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon, Image } from "semantic-ui-react";
import BorrarModal from "./BorrarModal/BorrarModal";
import ModalMensaje from "../../reutilizables/ModalMensaje/ModalMensaje";
import documentos from "../../../assets/img/documentos.jpg";
import "./Opciones.scss";

export default function Aprobacion(props) {
    const { id, tipo, plural } = props;
    const [abrir, setAbrir] = useState(false);
    const [mensaje, setMensaje] = useState(false);
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/${tipo}/${id}`);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }

    const cerrarMensaje = () => {
        setMensaje(false);
        history.push(`/admin/${plural}/borrado`);
    }

    return (
        <div className="opciones">
            <div className="opciones__imagen">
                <Image src={documentos} />
            </div>
            <p>Modifique la informacion actual si es requerida.</p>
            <div>
                <Button onClick={() => gotoUpdate(id)} icon labelPosition='right' className="boton-guindo">
                    Actualizar Datos
                    <Icon name='edit' />
                </Button>
                <Button onClick={() => setAbrir(true)} icon labelPosition='right' className="boton-guindo">
                    Eliminar Datos
                    <Icon name='trash' />
                </Button>
            </div>
            <BorrarModal abrir={abrir} id={id} cerrar={cerrarModal} tipo={tipo} setMensaje={setMensaje}/>
            <ModalMensaje 
                open={mensaje} 
                onClose={cerrarMensaje} 
                titulo="Solicitud Eliminada" 
                texto="La solicitud seleccionada ha sido eliminada"
                boton="Entendido"
            />

        </div>
    )
}

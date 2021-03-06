import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button, Image } from "semantic-ui-react";
import ModalContrasena from "../ModalContrasena/ModalContrasena";
import documentos from "../../../../assets/img/documentos.jpg";
import "./Opciones.scss";

export default function Opciones() {
    const [abrir, setAbrir] = useState(false);
    const history = useHistory();

    const gotoEdit = () => {
        history.push("/usuario/perfil/editar");
    }

    const cerrarModal = () => {
        setAbrir(false);
    }

    return (
        <div className="opciones-perfil">
            <div className="opciones__imagen">
                <Image src={documentos} />
            </div>
            <p>Modifique sus datos personales.</p>
            <div>
                <Button onClick={() => gotoEdit()} icon labelPosition='right' className="boton-guindo">
                    Editar Perfil
                    <Icon name='edit' />
                </Button>
                <Button onClick={() => setAbrir(true)} icon labelPosition='right' className="boton-guindo">
                    Cambiar Contrasena
                    <Icon name='lock' />
                </Button>
            </div>
            <ModalContrasena
                abrir={abrir}
                cerrar={cerrarModal}

            />
        </div>
    )
}
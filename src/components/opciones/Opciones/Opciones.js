import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import BorrarModal from "../BorrarModal/BorrarModal";
import "./Opciones.scss";

export default function Aprobacion(props) {
    const { id, tipo } = props;
    const [abrir, setAbrir] = useState(false);
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/actualizar/${tipo}/${id}`);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }

    return (
        <div className="opciones">
            <p>Modifique la solicitud actual si es requerido.</p>
            <div>
                <Button onClick={() => gotoUpdate(id)} icon labelPosition='right' className="boton-guindo">
                    Actualizar Solicitud
                    <Icon name='edit' />
                </Button>
                <Button onClick={() => setAbrir(true)} icon labelPosition='right' className="boton-guindo">
                    Eliminar Solicitud
                    <Icon name='trash' />
                </Button>
            </div>
            <BorrarModal abrir={abrir} id={id} cerrar={cerrarModal} tipo={tipo} />
        </div>
    )
}

import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import "./Opciones.scss";

export default function Opciones() {
    const history = useHistory();

    const gotoEdit = () => {
        history.push("/usuario/perfil/editar");
    }

    return (
        <div className="opciones-perfil">
            <p>Modifique sus datos personales.</p>
            <div>
                <Button onClick={() => gotoEdit()} icon labelPosition='right' className="boton-guindo">
                    Editar Perfil
                    <Icon name='edit' />
                </Button>
            </div>
        </div>
    )
}
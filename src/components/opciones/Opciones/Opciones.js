import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import "./Opciones.scss";

export default function Aprobacion(props){
    const { id, tipo} = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/actualizar/${tipo}/${id}`);
    }
    
    return(
        <div className="opciones">
            <p>Modifique la solicitud actual si es requerido.</p>
            <div>
                <Button onClick={() => gotoUpdate(id)} icon labelPosition='right' className="boton-guindo">
                    Actualizar Solicitud
                    <Icon name='edit' />
                </Button>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";
import ModalUsuario from "../../reutilizables/ModalUsuarios/ModalUsuarios";
import "./CardUser.scss";

export default function CardUser(props){
    const {nombre, permiso, fecha, id, refrescarAprobados, refrescarPendientes } = props;
    const [abrir, setAbrir] = useState(false);

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }



    return(
        <article className="cardUser"> 
            <p className="contenido">{nombre}</p>
            <p className="fecha">{permiso || `Se unio el ${fecha}` }</p>
            <p className="botones">
                <Button onClick={() => abrirModal()} className="boton-guindo" icon labelPosition="right">
                    Ver Usuario
                    <Icon name="angle right" />
                </Button> 
            </p>
            <ModalUsuario 
                id={id} 
                abrir={abrir} 
                cerrar={cerrarModal} 
                refrescarAprobados={refrescarAprobados} 
                refrescarPendientes={refrescarPendientes} 
            />
        </article>
    )
}
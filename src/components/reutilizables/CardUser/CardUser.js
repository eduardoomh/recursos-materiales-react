import React, { useState } from "react";
import { Icon, Image } from "semantic-ui-react";
import ModalUsuarios from "../../reutilizables/ModalUsuarios/ModalUsuarios";
import defaultAvatar from "../../../assets/img/default_user.png";
import "./CardUser.scss";

export default function CardUser(props) {
    const { nombre, permiso, avatar, fecha, id, refrescarAprobados, refrescarPendientes } = props;
    const [abrir, setAbrir] = useState(false);

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }



    return (
        <article className="cardUser" onClick={() => abrirModal()}>
            <div className="cardUser__avatar">
                <div>
                    <Image src={avatar === null ? defaultAvatar : avatar} />
                </div>
                
            </div>
            <p className="contenido">{nombre}</p>
            <p className="fecha">{permiso || `Se unio el ${fecha}`}</p>
            <p className="botones">
                <p>Ver datos</p>
                <Icon name="angle right" size="big" />
            </p>
            <ModalUsuarios
                id={id}
                abrir={abrir}
                cerrarModal={cerrarModal}
                refrescarAprobados={refrescarAprobados}
                refrescarPendientes={refrescarPendientes}
            />
        </article>
    )
}
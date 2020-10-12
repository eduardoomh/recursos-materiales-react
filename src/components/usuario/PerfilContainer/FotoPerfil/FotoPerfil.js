import React, { useState } from "react";
import useIdentity from "../../../../utils/hooks/useIdentity";
import { Icon, Button, Image } from "semantic-ui-react";
import ModalFoto from "./ModalFoto/ModalFoto";
import defaultUser from "../../../../assets/img/default_user.png"
import "./FotoPerfil.scss";

export default function FotoPerfil(){
    const [ abrir, setAbrir ] = useState(false);
    const { identity } = useIdentity();

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }

    return(
        <div className="foto-perfil">
            <div className="foto-perfil__avatar">
                <div>
                    <Image src={identity.avatar === null ? defaultUser : identity.avatar} />
                </div>
                
            </div>
            <div className="foto-perfil__contenido">
                <Button icon labelPosition='right' className="boton-guindo" onClick={abrirModal}>
                    Cambiar Foto
                    <Icon name='cloud upload' />
                </Button>
            </div>
            <ModalFoto abrir={abrir} cerrarModal={cerrarModal} />
        </div>
    )
}
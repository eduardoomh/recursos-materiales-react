import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./FotoPerfil.scss";

export default function FotoPerfil(){
    return(
        <div className="foto-perfil">
            <p>No tiene una foto de perfil.</p>
            <div>
                <Button icon labelPosition='right' className="boton-guindo">
                    Subir Foto
                    <Icon name='cloud upload' />
                </Button>
            </div>
        </div>
    )
}
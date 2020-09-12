import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuUsuario.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuCrear(props){
    const {showSubmenuUsuario, previousMenu} = props;

    return(
        <MenuResponsive conditional={showSubmenuUsuario}>
            <li>Perfil</li>
            <li>Editar perfil</li>
            <li>Solicitudes</li>
            <li>Cerrar Sesion</li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li> 
        </MenuResponsive>
    );
}

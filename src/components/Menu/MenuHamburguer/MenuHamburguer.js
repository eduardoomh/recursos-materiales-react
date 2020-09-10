import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./MenuHamburguer.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function MenuHamburguer(props){
    const { showHamburguer, setShowSubmenu, setShowSubmenuCrear, closeAll } = props;

    return(
        <MenuResponsive conditional={showHamburguer}>
            <li><Link to="/">Inicio <Icon name="angle right" /></Link></li>
            <li onClick={() => setShowSubmenu(true)}>Solicitudes <Icon name="angle right" /></li>
            <li onClick={() => setShowSubmenuCrear(true)}>Nuevo <Icon name="angle right" /></li>
            <li>Usuario <Icon name="angle right" /></li>
            <li className="absolute" onClick={() => closeAll()}><Icon name="x" size="big" /></li>
        </MenuResponsive>
         
    );
}
 
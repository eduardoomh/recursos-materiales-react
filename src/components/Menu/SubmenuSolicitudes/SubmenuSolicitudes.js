import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuSolicitudes.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuSolicitudes(props){
    const {showSubmenu, previousMenu} = props;

    return(
        <MenuResponsive conditional={showSubmenu}>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/mantenimientos">Mantenimientos</Link></li>
            <li><Link to="salidas">Salidas</Link></li>
            <li><Link to="calendario">Calendario</Link></li>
            <li>Opcion 5</li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
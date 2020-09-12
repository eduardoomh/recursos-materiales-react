import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuCrear.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuCrear(props){
    const {showSubmenuCrear, previousMenu} = props;

    return(
        <MenuResponsive conditional={showSubmenuCrear}>
            <li><Link to="/nuevo/evento">Evento</Link></li>
            <li><Link to="/nuevo/mantenimiento">Mantenimiento</Link></li>
            <li><Link to="/nuevo/salida">Salida</Link></li>
            <li>Crear 4</li>
            <li>Crear 5</li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li> 
        </MenuResponsive>
    );
}

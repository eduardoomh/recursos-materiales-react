import React from "react";
import { Icon } from "semantic-ui-react";
import "./SubmenuSolicitudes.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuSolicitudes(props){
    const {showSubmenu, previousMenu} = props;

    return(
        <MenuResponsive conditional={showSubmenu}>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
            <li>Opcion 3</li>
            <li>Opcion 4</li>
            <li>Opcion 5</li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
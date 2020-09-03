import React from "react";
import { Icon } from "semantic-ui-react";
import "./SubmenuCrear.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuCrear(props){
    const {showSubmenuCrear, previousMenu} = props;

    return(
        <MenuResponsive conditional={showSubmenuCrear}>
            <li>Crear 1</li>
            <li>Crear 2</li>
            <li>Crear 3</li>
            <li>Crear 4</li>
            <li>Crear 5</li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li> 
        </MenuResponsive>
    );
}

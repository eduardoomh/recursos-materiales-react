import React from "react";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuCrear.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuCrear(props){
    const {showSubmenuCrear, previousMenu, setShowAdminCrear} = props;
    const { identity } = useIdentity();

    return(
        <MenuResponsive conditional={showSubmenuCrear}>
            <li><Link to="/nuevo/evento">Evento</Link></li>
            <li><Link to="/nuevo/mantenimiento">Mantenimiento</Link></li>
            <li><Link to="/nuevo/salida">Salida</Link></li>
            {
                identity.estatus === "administrador" 
                && 
                <li onClick={() => setShowAdminCrear(true)}>Administrador <Icon name="angle right" /></li>
            }
            
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li> 
        </MenuResponsive>
    );
}

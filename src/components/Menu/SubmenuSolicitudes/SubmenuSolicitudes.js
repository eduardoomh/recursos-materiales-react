import React from "react";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuSolicitudes.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuSolicitudes(props){
    const {showSubmenu, previousMenu, setShowAdminVer } = props;
    const { identity } = useIdentity();

    return(
        <MenuResponsive conditional={showSubmenu}>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/mantenimientos">Mantenimientos</Link></li>
            <li><Link to="/salidas">Salidas</Link></li>
            {
                identity.role === "administrador" 
                && 
                <li onClick={() => setShowAdminVer(true)}>Administrador <Icon name="angle right" /></li>
            }
            <li><Link to="/calendario">Calendario</Link></li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
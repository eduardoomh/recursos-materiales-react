import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import useIdentity from "../../../utils/hooks/useIdentity";
import "./SubmenuUsuario.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuCrear(props){
    const {showSubmenuUsuario, previousMenu} = props;
    const { logout } = useIdentity();

    return(
        <MenuResponsive conditional={showSubmenuUsuario}>
            <li><Link to="/usuario/perfil">Perfil</Link></li>
            <li><Link to="/usuario/perfil/editar">Editar perfil</Link></li>
            <li><Link to="/usuario/solicitudes">Solicitudes</Link></li>
            <li  onClick={() => logout()}>Cerrar Sesion</li>
            <li className="absolute" onClick={() => previousMenu()}><Icon name="angle double left" size="big" /></li> 
        </MenuResponsive>
    );
}

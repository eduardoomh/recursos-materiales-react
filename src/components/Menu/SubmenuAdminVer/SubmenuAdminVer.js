import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuAdminVer.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuAdminVer(props) {
    const { showAdminVer, previousSubmenu } = props;

    return (
        <MenuResponsive conditional={showAdminVer}>
            <li><Link to="/admin/vehiculos">Vehiculos</Link></li>
            <li><Link to="/admin/departamentos">Departamentos</Link></li>
            <li><Link to="/admin/sitios">Sitios</Link></li>
            <li><Link to="/admin/tipoordenes">tipo de ordenes</Link></li>
            <li><Link to="/admin/organizaciones">Organizaciones</Link></li>
            <li><Link to="/admin/edificios">Edificios</Link></li>
            <li><Link to="/admin/subdirecciones">Subdirecciones</Link></li>
            <li><Link to="/admin/puestos">Puestos</Link></li>
            <li><Link to="/admin/permisos">Permisos</Link></li>
            <li className="absolute" onClick={() => previousSubmenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
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
            <li><Link to="/admin/locaciones">Locaciones</Link></li>
            <li><Link to="/admin/statusorders">E.de Mantenimientos</Link></li>
            <li><Link to="/admin/statusvehiculos">E. de vehiculos</Link></li>
            <li><Link to="/admin/ubicaciones">Ubicaciones</Link></li>
            <li><Link to="/admin/subdirecciones">Subdirecciones</Link></li>
            <li><Link to="/admin/cargos">Cargos</Link></li>
            <li><Link to="/admin/puestos">Puestos</Link></li>
            <li className="absolute" onClick={() => previousSubmenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuAdminCrear.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuAdminCrear(props) {
    const { showAdminCrear, previousSubmenu } = props;

    return (
        <MenuResponsive conditional={showAdminCrear}>
            <li><Link to="/admin/crear/departamento">Departamento</Link></li>
            <li><Link to="/admin/crear/vehiculo">Vehiculo</Link></li>
            <li><Link to="/admin/crear/sitio">Sitio</Link></li>
            <li><Link to="/admin/crear/tipoorden">tipo de orden</Link></li>
            <li><Link to="/admin/crear/organizacion">Organizacion</Link></li>
            <li><Link to="/admin/crear/edificio">Edificio</Link></li>
            <li><Link to="/admin/crear/subdireccion">Subdireccion</Link></li>
            <li><Link to="/admin/crear/puesto">Puesto</Link></li>
            <li><Link to="/admin/crear/permiso">Permiso</Link></li>
            <li className="absolute" onClick={() => previousSubmenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
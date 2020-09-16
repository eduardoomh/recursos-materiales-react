import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./SubmenuAdminCrear.scss";
import MenuResponsive from "../MenuResposive/MenuResponsive";

export default function SubmenuAdminCrear(props) {
    const { showAdminCrear, previousSubmenu } = props;

    return (
        <MenuResponsive conditional={showAdminCrear}>
            <li><Link to="/admin/vehiculos">Vehiculo</Link></li>
            <li><Link to="/admin/departamentos">Departamento</Link></li>
            <li><Link to="/admin/locaciones">Locacion</Link></li>
            <li><Link to="/admin/statusorders">E. de Mantenimiento</Link></li>
            <li><Link to="/admin/statusvehiculos">E. de Vehiculo</Link></li>
            <li><Link to="/admin/ubicaciones">Ubicacion</Link></li>
            <li><Link to="/admin/subdirecciones">Subdireccion</Link></li>
            <li><Link to="/admin/cargos">Cargo</Link></li>
            <li><Link to="/admin/puestos">Puesto</Link></li>
            <li className="absolute" onClick={() => previousSubmenu()}><Icon name="angle double left" size="big" /></li>
        </MenuResponsive>
    );
}
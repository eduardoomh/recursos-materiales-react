import React from "react";
import { Link } from "react-router-dom";
import useIdentity from "../../utils/hooks/useIdentity";
import { Icon, Image } from "semantic-ui-react";
import defaultUser from "../../assets/img/default_user.png";
import "./Header.scss";

export default function Header(props) {
    const { show, setShow, setShowSubmenu, setShowSubmenuCrear, setShowSubmenuUsuario, setShowAdminCrear, setShowAdminVer } = props;
    const { logout, identity } = useIdentity();

    const userName = `${identity.nombre} ${identity.apellidos}`;

    const showModal = (show) => {
        if (show === true) {
            setShowSubmenu(false);
            setShowSubmenuCrear(false);
            setShowSubmenuUsuario(false);
            setShowAdminVer(false);
            setShowAdminCrear(false);
            return setShow(!show);
        }

        return setShow(!show);
    }

    return (
        <header className={show ? "move blur" : ""}>

            <ul>
                <li className="burguer" onClick={() => showModal(show)}> <Icon name="bars" size="large" /></li>
                <li><Link to="/">Inicio <Icon name="angle down" /> </Link></li>
                <li>Solicitudes <Icon name="angle down" />
                    <ul className="solicitud-submenu">
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/mantenimientos">Mantenimiento</Link></li>
                        <li><Link to="/salidas">Salidas</Link></li>
                        {
                            identity.estatus === "administrador" && (
                                <li>Administrador
                                    <ul className="solicitud-submenu left">
                                        <li><Link to="/admin/departamentos">Departamentos</Link></li>
                                        <li><Link to="/admin/vehiculos">Vehiculos</Link></li>
                                        <li><Link to="/admin/sitios">Sitios</Link></li>
                                        <li><Link to="/admin/tipoordenes">Tipo de ordenes</Link></li>
                                        <li><Link to="/admin/organizaciones">Organizaciones</Link></li>
                                        <li><Link to="/admin/edificios">Edificios</Link></li>
                                        <li><Link to="/admin/subdirecciones">Subdirecciones</Link></li>
                                        <li><Link to="/admin/puestos">Puestos</Link></li>
                                        <li><Link to="/admin/permisos">Permisos</Link></li>
                                    </ul>
                                </li>
                            )
                        }


                        <li><Link to="/calendario">Calendario</Link></li>
                    </ul>
                </li>
                <li>Nuevo <Icon name="angle down" />
                    <ul className="solicitud-submenu">
                        <li><Link to="/nuevo/evento">Evento</Link></li>
                        <li><Link to="/nuevo/mantenimiento">Mantenimiento</Link></li>
                        <li><Link to="/nuevo/salida">Salida</Link></li>
                        <li>Otros</li>
                        {
                            identity.estatus === "administrador" && (
                                <li>Administrador
                                    <ul className="solicitud-submenu left">
                                        <li><Link to="/admin/crear/departamento">Departamento</Link></li>
                                        <li><Link to="/admin/crear/vehiculo">Vehiculo</Link></li>
                                        <li><Link to="/admin/crear/sitio">Sitio</Link></li>
                                        <li><Link to="/admin/crear/tipoorden">Tipo de orden</Link></li>
                                        <li><Link to="/admin/crear/organizacion">Organizacion</Link></li>
                                        <li><Link to="/admin/crear/edificio">Edificio</Link></li>
                                        <li><Link to="/admin/crear/subdireccion">Subdireccion</Link></li>
                                        <li><Link to="/admin/crear/puesto">Puesto</Link></li>
                                        <li><Link to="/admin/crear/permiso">Permiso</Link></li>
                                    </ul>
                                </li>
                            )
                        }

                    </ul>
                </li>
                <li className="vacio"></li>
            </ul>
            <div>
                <div className="user-name"><span className="avatar-imagen"><Image src={identity.avatar === null ? defaultUser : identity.avatar} /></span> <Icon name="angle down" />
                    <ul className="user-submenu">
                        <li><Link to="/usuario/perfil">Perfil</Link></li>
                        <li><Link to="/usuario/perfil/editar">Editar Perfil</Link></li>
                        <li><Link to="/usuario/solicitudes">Solicitudes</Link></li>
                        {
                            identity.estatus === "administrador" && (
                                <li><Link to="/usuarios">Usuarios</Link></li>
                            )
                        }
                        
                        <li onClick={() => logout()}>Cerrar Sesion</li>
                    </ul>
                </div>
            </div>
        </header>

    );
}
import React from "react";
import { Link } from "react-router-dom";
import useIdentity from "../../utils/hooks/useIdentity";
import { Icon } from "semantic-ui-react";
import "./Header.scss";

export default function Header(props){
    const { show, setShow, setShowSubmenu, setShowSubmenuCrear } = props;
    const { logout, identity } = useIdentity();

    const userName = `${identity.name} ${identity.surname}`;

    const showModal = (show) => {
        if(show === true){
            setShowSubmenu(false);
            setShowSubmenuCrear(false);
            return setShow(!show);
        }
        
        return setShow(!show);
    }

    return(
        <header className={show ? "move blur" : ""}>

            <ul>
                <li className="burguer" onClick={() => showModal(show)}> <Icon name="bars" size="large"  /></li>
                <li><Link to="/">Inicio <Icon name="angle down" /> </Link></li>
                <li>Solicitudes <Icon name="angle down" />
                    <ul className="solicitud-submenu">
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/mantenimientos">Mantenimiento</Link></li>
                        <li><Link to="salidas">Salidas</Link></li>
                        <li>Calendario</li>
                    </ul>
                </li>
                <li>Nuevo <Icon name="angle down" />
                    <ul className="solicitud-submenu">
                            <li><Link to="/eventos/nuevo">Eventos</Link></li>
                            <li><Link to="/mantenimientos/nuevo">Mantenimiento</Link></li>
                            <li><Link to="/salidas/nuevo">Salidas</Link></li>
                            <li>administrador</li>
                        </ul>
                </li>
                <li className="vacio"></li>
            </ul>
            <div>
                <div className="user-name">{userName} <Icon name="angle down" />
                    <ul className="user-submenu">
                            <li>Perfil</li>
                            <li>Editar Perfil</li>
                            <li>Solicitudes</li>
                            <li onClick={() => logout()}>Cerrar Sesion</li>
                        </ul>
                </div>
            </div>
      </header>

    );
}
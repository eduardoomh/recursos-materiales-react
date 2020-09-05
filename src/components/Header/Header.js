import React from "react";
import { Icon } from "semantic-ui-react";
import "./Header.scss";

export default function Header(props){
    const { show, setShow, setShowSubmenu, setShowSubmenuCrear } = props;

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
                <li>Inicio <Icon name="angle down" /> </li>
                <li>Solicitudes <Icon name="angle down" />
                    <ul className="solicitud-submenu">
                        <li>Eventos</li>
                        <li>Mantenimiento</li>
                        <li>Salidas</li>
                        <li>Calendario</li>
                    </ul>
                </li>
                <li>Nuevo <Icon name="angle down" />
                    <ul className="solicitud-submenu">
                            <li>Eventos</li>
                            <li>Mantenimiento</li>
                            <li>Salidas</li>
                            <li>administrador</li>
                        </ul>
                </li>
                <li className="vacio"></li>
            </ul>
            <div>
                <p>Fernando Vazquez <Icon name="angle down" />
                    <ul className="user-submenu">
                            <li>Perfil</li>
                            <li>Editar Perfil</li>
                            <li>Solicitudes</li>
                            <li>Cerrar Sesion</li>
                        </ul>
                </p>
            </div>
      </header>

    );
}
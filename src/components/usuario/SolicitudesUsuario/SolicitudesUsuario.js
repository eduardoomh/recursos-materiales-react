import React from "react";
import { Tab } from "semantic-ui-react";
import Lista from "../../reutilizables/List/List";
import "./SolicitudesUsuario.scss";

export default function SolicitudesUsuario(props) {
    const {
        eventos,
        mantenimientos,
        salidas,
        paginaEvento,
        paginaMantenimiento,
        paginaSalida,
        cantidad,
        setPaginaEvento,
        setPaginaMantenimiento,
        setPaginaSalida
    } = props;

    const panes = [
        {
            menuItem: 'Eventos',
            render: () => <Lista
                data={eventos}
                tipo="evento"
                pagina={paginaEvento}
                setPagina={setPaginaEvento}
                cantidad={cantidad}
            />,
        },
        {
            menuItem: 'Mantenimientos',
            render: () => <Lista
                data={mantenimientos}
                tipo="mantenimiento"
                pagina={paginaMantenimiento}
                setPagina={setPaginaMantenimiento}
                cantidad={cantidad}
            />,
        },
        {
            menuItem: 'Salidas',
            render: () => <Lista
                data={salidas}
                tipo="salida"
                pagina={paginaSalida}
                setPagina={setPaginaSalida}
                cantidad={cantidad}
            />,
        }
    ]

    return (
        <div className="solicitudes-usuario">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
    )
}
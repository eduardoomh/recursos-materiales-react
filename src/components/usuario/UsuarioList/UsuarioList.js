import React from "react";
import { Tab } from "semantic-ui-react";
import ListadoUsuarios from "./ListadoUsuarios/ListadoUsuarios";
import "./UsuarioList.scss";

export default function UsuarioList(props){
    const {aprobados, pendientes, inactivos, refetchAprobados, refetchPendientes, refetchInactivos} = props;

    const panes = [
        {
          menuItem: 'Aprobados',
          render: () => <ListadoUsuarios 
                          data={aprobados} 
                          refrescarAprobados={refetchAprobados} 
                          refrescarPendientes={refetchPendientes}
                          refrescarInactivos={refetchInactivos}
                        />,
        },
        {
          menuItem: 'Pendientes',
          render: () => <ListadoUsuarios 
                          data={pendientes} 
                          refrescarAprobados={refetchAprobados} 
                          refrescarPendientes={refetchPendientes}
                          refrescarInactivos={refetchInactivos}
                        />,
        },
        {
          menuItem: 'Inactivos',
          render: () => <ListadoUsuarios 
                          data={inactivos} 
                          refrescarAprobados={refetchAprobados} 
                          refrescarPendientes={refetchPendientes}
                          refrescarInactivos={refetchInactivos}
                        />,
        }
      ]


    return (
        <div className="usuarios-tab">
            <Tab className="tab-menu" menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}
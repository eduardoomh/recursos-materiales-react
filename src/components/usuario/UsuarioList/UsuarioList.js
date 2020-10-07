import React from "react";
import { Card, Button, Image, Tab} from "semantic-ui-react";
import Aprobados from "./Aprobados/Aprobados";
import Pendientes from "./Pendientes/Pendientes";
import "./UsuarioList.scss";

export default function UsuarioList(props){
    const {aprobados, pendientes, refetchAprobados, refetchPendientes} = props;

    const panes = [
        {
          menuItem: 'Aprobados',
          render: () => <Aprobados 
                          data={aprobados} 
                          refrescarAprobados={refetchAprobados} 
                          refrescarPendientes={refetchPendientes}
                        />,
        },
        {
          menuItem: 'Pendientes',
          render: () => <Pendientes 
                          data={pendientes} 
                          refrescarAprobados={refetchAprobados} 
                          refrescarPendientes={refetchPendientes}
                        />,
        }
      ]


    return (
        <div className="usuarios-tab">
            <Tab className="tab-menu" menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}
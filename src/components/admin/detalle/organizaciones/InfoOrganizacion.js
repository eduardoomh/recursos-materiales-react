import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Informacion from "./Informacion/Informacion";
import Opciones from "../../opciones/Opciones";
import "./InfoOrganizacion.scss";

export default function InfoOrganizacion(props) {
    const { data, loading, tipo, plural } = props;

    scrollTop();
 
    const panes = [
        {
          menuItem: 'Información',
          render: () => <Informacion data={data} loading={loading} />,
        },
        {
          menuItem: 'Opciones',
          render: () => <Opciones id={data.id} tipo={tipo} plural={plural} />,
        },
      ]

    

    return (
        <div className="informacion-organizacion">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}
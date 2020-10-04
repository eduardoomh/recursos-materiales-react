import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Aprobacion from "./Aprobacion/Aprobacion";
import Evidencias from "./Evidencias/Evidencias";
import Opciones from "./Opciones/Opciones";
import Informacion from "./Informacion/Informacion";
import "./InformacionMantenimiento.scss";

export default function InformacionMantenimiento(props) {
    const { data, loading } = props;
    scrollTop();

    const panes = [
        {
          menuItem: 'Informacion',
          render: () => <Informacion data={data} loading={loading} />,
        },
        {
          menuItem: 'Evidencia',
          render: () => <Evidencias />,
        },
        {
          menuItem: 'Aprobacion',
          render: () => <Aprobacion />,
        },
        {
          menuItem: 'Opciones',
          render: () => <Opciones id={data.id} />,
        },
      ]


    return (
        <div className="informacion-mantenimiento">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}







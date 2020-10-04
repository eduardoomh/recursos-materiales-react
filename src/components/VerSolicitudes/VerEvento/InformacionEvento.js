import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Informacion from "./Informacion/informacion";
import Aprobacion from "./Aprobacion/Aprobacion";
import Evidencias from "./Evidencias/Evidencias";
import Opciones from "./Opciones/Opciones";
import "./InformacionEvento.scss";

export default function InformacionEvento(props) {
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
        <div className="informacion-evento">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}
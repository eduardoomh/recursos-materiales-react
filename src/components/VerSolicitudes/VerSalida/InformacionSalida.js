import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Evidencias from "./Evidencias/Evidencias";
import Opciones from "./Opciones/Opciones";
import Informacion from "./Informacion/Informacion";
import "./InformacionSalida.scss";

export default function InformacionSalida(props) {
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
          menuItem: 'Opciones',
          render: () => <Opciones id={data.id} />,
        },
      ]


    return (
        <div className="informacion-salida">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}





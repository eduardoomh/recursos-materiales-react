import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import Evidencias from "../../evidencias/Evidencias/Evidencias";
import Opciones from "../../opciones/Opciones/Opciones";
import Informacion from "./Informacion/Informacion";
import "./InformacionSalida.scss";

export default function InformacionSalida(props) {
    const { data, loading, evidencias, refrescarEvidencias } = props;
    scrollTop();

    const panes = [
        {
          menuItem: 'Información',
          render: () => <Informacion data={data} loading={loading} />,
        },
        {
          menuItem: 'Evidencia',
          render: () => <Evidencias                       
                          id={data.id} 
                          evidencias={evidencias} 
                          refrescarEvidencias={refrescarEvidencias} 
                          tipo="salidas" />,
        },
        {
          menuItem: 'Opciones',
          render: () => <Opciones id={data.id} tipo="salida" />,
        },
      ]


    return (
        <div className="informacion-salida">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}





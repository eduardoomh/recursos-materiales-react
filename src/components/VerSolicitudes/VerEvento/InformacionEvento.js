import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { useMutation } from "@apollo/client";
import { APROBAR_EVENTO } from "../../../gql/evento";
import Informacion from "./Informacion/informacion";
import Aprobacion from "../../aprobacion/Aprobacion/Aprobacion";
import Evidencias from "../../evidencias/Evidencias/Evidencias";
import Opciones from "../../opciones/Opciones/Opciones";
import "./InformacionEvento.scss";

export default function InformacionEvento(props) {
    const { data, loading, refetch, permiso, evidencias, refrescarEvidencias } = props;
    const [ aprobarEvento ] = useMutation(APROBAR_EVENTO);
    
    scrollTop();
 
    const panes = [
        {
          menuItem: 'Informacion',
          render: () => <Informacion data={data} loading={loading} />,
        },
        {
          menuItem: 'Evidencia',
          render: () => <Evidencias 
                          id={data.id} 
                          evidencias={evidencias} 
                          refrescarEvidencias={refrescarEvidencias} 
                          tipo="eventos"
                        />,
        },
        {
          menuItem: 'Aprobacion',
          render: () => <Aprobacion 
                          verificado={data.verificado} 
                          aprobado={data.aprobado} 
                          refetch={refetch} 
                          query={aprobarEvento} 
                          departamento={data.departamento.id}
                          permiso={permiso}
                          tipo="evento"
                          data={data}
                        />,
        },
        {
          menuItem: 'Opciones',
          render: () => <Opciones id={data.id} tipo="evento" />,
        },
      ]


    return (
        <div className="informacion-evento">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}
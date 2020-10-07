import React from "react";
import { Tab } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { useMutation } from "@apollo/client";
import { APROBAR_MANTENIMIENTO } from "../../../gql/mantenimiento";
import Aprobacion from "./Aprobacion/Aprobacion";
import Evidencias from "./Evidencias/Evidencias";
import Opciones from "./Opciones/Opciones";
import Informacion from "./Informacion/Informacion";
import "./InformacionMantenimiento.scss";

export default function InformacionMantenimiento(props) {
  const { data, loading, refetch, permiso } = props;
  const [aprobarMantenimiento] = useMutation(APROBAR_MANTENIMIENTO);
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
      render: () => <Aprobacion
                      verificado={data.verificado}
                      aprobado={data.aprobado}
                      refetch={refetch}
                      query={aprobarMantenimiento}
                      departamento={data.departamento.id}
                      permiso={permiso}
                  />,
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







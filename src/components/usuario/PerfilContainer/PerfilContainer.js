import React from "react";
import useIdentity from "../../../utils/hooks/useIdentity";
import Informacion from "./Informacion/Informacion";
import FotoPerfil from "./FotoPerfil/FotoPerfil";
import Opciones from "./Opciones/Opciones";
import { Tab } from "semantic-ui-react";
import "./PerfilContainer.scss";

export default function PerfilContainer() {
    const { identity } = useIdentity();

    const panes = [
        {
          menuItem: 'Información',
          render: () => <Informacion identity={identity} />,
        },
        {
          menuItem: 'Foto de perfil',
          render: () => <FotoPerfil />,
        },
        {
          menuItem: 'Opciones',
          render: () => <Opciones />,
        },
      ]


    return (
        <div className="perfil-container">
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>

    )
}
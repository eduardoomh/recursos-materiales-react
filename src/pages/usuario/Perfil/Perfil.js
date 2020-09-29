import React from "react";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import useIdentity from "../../../utils/hooks/useIdentity";
import PerfilContainer from "../../../components/usuario/PerfilContainer/PerfilContainer";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import "./Perfil.scss";

export default function Perfil(){
    scrollTop();
    const { identity } = useIdentity();
    return(
        <div className="perfil">
            <Banner titulo={`${identity.nombre} ${identity.apellidos}`} />
            <Titulo titulo="Todos sus datos personales" />
            <PerfilContainer />
        </div>
    )
}
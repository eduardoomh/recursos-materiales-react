import React from "react";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import EditarPerfilContainer from "../../../components/usuario/EditarPerfilContainer/EditarPerfilContainer";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import "./EditarPerfil.scss";

export default function EditarPerfil(){
    scrollTop();
    
    return(
        <div>
            <Banner titulo="Editar perfil" />
            <Titulo titulo="Edite los campos que considere necesario modificar." />
            <EditarPerfilContainer />
        </div>
    )
}  
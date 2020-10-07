import React from "react";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./Informacion.scss";

export default function Informacion(props) {
    const {identity} = props;

    return (
        <div className="info-perfil">
            <div>
                <BoxFormData
                    titulo="Descripcion personal"
                    data={identity.descripcion || "No tienes una descripcion aun."}
                />
                <BoxFormData
                    titulo="Correo electronico"
                    data={identity.correo}
                />
                <BoxFormData
                    titulo="Numero de control"
                    data={identity.numero_control}
                />
                <BoxFormData
                    titulo="Numero telefonico"
                    data={identity.telefono || "No tienes un telefono regitrado aun"}
                />
                <BoxFormData
                    titulo="Permisos"
                    data="Usuario"
                />
            </div>
        </div>

    )
}

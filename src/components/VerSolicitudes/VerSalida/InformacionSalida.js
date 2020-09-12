import React from "react";
import "./InformacionSalida.scss";

export default function InformacionSalida(props){
    const { data } = props;

    return(
        <div className="informacion-salida">

            <div>
                <p>{data.destino || "cargando datos.."}</p>
            </div>
            
        </div>
    )
}
import React from "react";
import "./InformacionMantenimiento.scss";

export default function InformacionMantenimiento(props){
    const { data } = props;

    return(
        <div className="informacion-mantenimiento">

            <div>
                <p>{data.trabajo_realizado || "cargando datos.."}</p>
            </div>
            
        </div>
    )
}
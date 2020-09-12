import React from "react";
import "./InformacionEvento.scss";

export default function InformacionEvento(props){
    const { data } = props;

    return(
        <div className="informacion-evento">

            <div>
                <p>{data.evento || "cargando datos.."}</p>
            </div>
            
        </div>
    )
}
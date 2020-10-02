import React from "react";
import Card from "../Card/Card";
import "./Grid.scss";

export default function Grid(props){
    const { data, tipo} = props;

    return (
        <div className="list-box">
            {
                data.length === 0 ?
                <p className="empty">No existen solicitudes de esta categoria aun.</p>
                :
                data.map(
                    c => 
                    <Card 
                        tipo={tipo}
                        id={c.id}
                        key={c.id}
                        footer="revisar"
                        contenido={c.nombre || `${c.usuario.nombre} ${c.usuario.apellidos}`}
                    /> 
                )
            }
            
        </div>
    )
}
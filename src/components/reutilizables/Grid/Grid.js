import React from "react";
import Card from "../Card/Card";
import "./Grid.scss";

export default function Grid(props){
    const {data, tipo } = props;
    return(
        <div className="grid">
            {   data && data.length !== 0  ?
                data.map(
                    d => 
                    <Card  
                        fecha={d.fecha} 
                        contenido={d.evento || d.destino || d.trabajo_realizado}
                        status={d.status}
                        tipo={tipo}
                        key={d.id}
                        id={d.id}
                    />
                )
                :
                <p className="empty">No existen solicitudes de esta categoria aun.</p>
            }
            
        </div>

    );
}
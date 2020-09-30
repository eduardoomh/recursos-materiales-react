import React from "react";
import CardItem from "../CardItem/CardItem";
import "./List.scss";

export default function Lista(props){
    const { data, tipo} = props;

    return (
        <div className="list-box">
            {
                data.map(
                    c => 
                    <CardItem 
                        tipo={tipo}
                        id={c.id}
                        key={c.id}
                        fecha={c.fecha}
                        status={c.aprobado}
                        contenido={c.nombre || c.destino}
                    /> 
                )
            }
            
        </div>
    )
}
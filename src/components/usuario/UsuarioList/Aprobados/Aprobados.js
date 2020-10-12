import React from "react";
import CardUser from "../../../reutilizables/CardUser/CardUser";
import { formatDate} from "../../../../utils/reutilizables/fecha";
import "./Aprobados.scss";

export default function Aprobados(props) {
    const { data, refrescarAprobados, refrescarPendientes } = props;
    console.log(data);

    return (
        <div>
            { 
                data && data.length > 0 ?
                data.map(d => 
                    <CardUser 
                        key={d.id} 
                        nombre={`${d.nombre} ${d.apellidos}`} 
                        avatar={d.avatar}
                        fecha={formatDate(d.createdAt)} 
                        id={d.id} 
                        refrescarPendientes={refrescarPendientes}
                        refrescarAprobados={refrescarAprobados}
                    />
                )
                : <p>No hay datos</p>
            }
        </div>
    )
    
}
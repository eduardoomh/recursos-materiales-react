import React from "react";
import CardUser from "../../../reutilizables/CardUser/CardUser";
import { formatDate} from "../../../../utils/reutilizables/fecha";
import "./Pendientes.scss";

export default function Pendientes(props){
    const { data, refrescarAprobados, refrescarPendientes } = props;
    console.log(data);

    return(
        <div>
            {
                data && data.length > 0 ?
                data.map(d => 
                    <CardUser 
                        key={d.id} 
                        nombre={`${d.nombre} ${d.apellidos}`} 
                        fecha={formatDate(d.createdAt)} 
                        avatar={d.avatar}
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
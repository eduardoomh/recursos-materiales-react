import React from "react";
import CardUser from "../../../reutilizables/CardUser/CardUser";
import { formatDate} from "../../../../utils/reutilizables/fecha";
import "./ListadoUsuarios.scss";

export default function ListadoUsuarios(props) {
    const { data, refrescarAprobados, refrescarPendientes, refrescarInactivos } = props;
    console.log(data);

    return (
        <div className="listado-usuarios">
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
                        refrescarInactivos={refrescarInactivos}
                    />
                )
                : <p className="listado-usuarios__mensaje">No hay usuarios en esta categoria</p>
            }
        </div>
    )
    
}
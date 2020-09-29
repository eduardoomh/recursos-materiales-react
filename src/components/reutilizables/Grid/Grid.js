import React from "react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Card from "../Card/Card";
import "./Grid.scss";

export default function Grid(props) {
    const { data, tipo, admin = false } = props;
    let firstValue = "ver detalle";

    const values = (d) => {
        switch (tipo) {
            case "cargos":
                firstValue = "Ver Contenido"
                return d.nombre;

            case "puestos":
                firstValue = "Ver contenido";
                return `${d.usuario.nombre} ${d.usuario.apellidos}`;

            case "ubicaciones":
                firstValue = "Ver"
                return d.nombre;

            case "statusvehiculos":
                firstValue = "Ver contenido"
                return d.nombre;

            case "departamentos":
                firstValue = "Ver contenido";
                return d.nombre;

            case "vehiculos":
                firstValue = "Ver contenido";
                return d.nombre;

            case "statusorders":
                firstValue = "Editar"
                return d.nombre;

            case "espacios":
                firstValue = "Ver detalle";
                return d.nombre;

            case "subdirecciones":
                firstValue = "Ver subdireccion"
                return d.nombre;

            default:
                break;
    
        }

    }

    const fechha = (d) => {
        return transformarFecha(d);
    }

    return (
        <div className="grid">
            {   data && data.length !== 0 ?
                data.map(

                    d => (
                        <Card
                            fecha={admin !== true ? fechha(d.fecha) : firstValue}
                            contenido={d.nombre || d.trabajo_realizado || d.destino || values(d)}
                            status={d.aprobado || "aprobado"}
                            tipo={tipo}
                            key={d.id}
                            id={d.id}
                            admin={admin}
                        />
                    )
                )
                :
                <p className="empty">No existen solicitudes de esta categoria aun.</p>
            }

        </div>

    );
}
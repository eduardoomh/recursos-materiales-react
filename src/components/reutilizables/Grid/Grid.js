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
                firstValue = "Editar"
                return d.cargo;

            case "puestos":
                firstValue = d.cargo.cargo;
                return `${d.user.name} ${d.user.surname}`;

            case "ubicaciones":
                firstValue = "Editar"
                return d.nombre;

            case "statusvehiculos":
                firstValue = "Editar"
                return d.status;

            case "departamentos":
                firstValue = `Subdireccion ${d.subdireccion.subdireccion}`;
                return d.departamento;

            case "vehiculos":
                firstValue = d.placas;
                return d.vehiculo;

            case "statusorders":
                firstValue = "Editar"
                return d.nombre;

            case "espacios":
                firstValue = d.status === true ? "disponible" : "No disponible";
                return d.espacio;

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
                            contenido={d.evento || d.trabajo_realizado || d.destino || values(d)}
                            status={d.status || "aprobado"}
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
            {
                data && data.length !== 0 && (
                    <>
                        <Card key={1} />
                        <Card key={2} />
                        <Card key={3} />
                        <Card key={4} />
                    </>

                ) 
            }

        </div>

    );
}
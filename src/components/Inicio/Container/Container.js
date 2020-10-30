import React from "react";
import Titulo from "../../reutilizables/Titulo/Titulo";
import Recordatorio from "../../reutilizables/Recordatorio/Recordatorio";
import mantenimientoImagen from "../../../assets/img/mantenimiento-imagen.jpg";
import vehiculo from "../../../assets/img/vehiculo.jpg";
import eventoGrupo from "../../../assets/img/evento-grupo.jpg";
import "./Container.scss";

export default function Container() {

    return (
        <div className="container">
            <Titulo titulo="Servicios" />
            <div className="box">
                <Recordatorio
                    texto="Organice eventos, el lugar, la fecha, la hora, suba evidencias y genere la solicitud."
                    imagen={eventoGrupo}
                    tipo="Evento"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
                <Recordatorio
                    texto="Organice fechas de reparaciones, servicios o viajes segun los requerimientos de la institucion."
                    imagen={mantenimientoImagen}
                    tipo="Mantenimiento"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
                <Recordatorio
                    texto="Lleve un inventario de todos los vehículos que entran y salen de la institución."
                    imagen={vehiculo}
                    tipo="Salida"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
            </div>
        </div>
    )
}
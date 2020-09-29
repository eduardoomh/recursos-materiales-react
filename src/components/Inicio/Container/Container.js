import React from "react";
import Titulo from "../../reutilizables/Titulo/Titulo";
import Recordatorio from "../../reutilizables/Recordatorio/Recordatorio";
import meeting from "../../../assets/img/meeting.png";
import reparacion from "../../../assets/img/reparacion.png";
import car from "../../../assets/img/car.png";
import bitacora from "../../../assets/img/bitacora.png";
import caja from "../../../assets/img/caja.png";
import silla from "../../../assets/img/silla.png";
import "./Container.scss";

export default function Container(props) {
    const { loading, setLoading } = props;


    return (
        <div className="container">
            <Titulo titulo="Servicios" />
            <div className="box">
                <Recordatorio
                    texto="Organice eventos, el lugar, la fecha, la hora, suba evidencias y genere la solicitud."
                    imagen={silla}
                    tipo="Evento"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
                <Recordatorio
                    texto="Organice fechas de reparaciones dentro de la institucion."
                    imagen={reparacion}
                    tipo="Reparacion"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
                <Recordatorio
                    texto="Organice servicios prestados por el departamento."
                    imagen={caja}
                    tipo="Servicio"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
                <Recordatorio
                    texto="Organice salidas de la institucion en transporte."
                    imagen={car}
                    tipo="Transporte"
                    url1="/eventos"
                    url2="/nuevo/mantenimientos"
                />
                <Recordatorio
                    texto="Lleve un inventario de todos los vehiculos que entran y salen de la institucion."
                    imagen={bitacora}
                    tipo="Salida"
                    url1="/eventos"
                    url2="/nuevo/evento"
                />
            </div>
        </div>
    )
}
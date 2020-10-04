import React from "react";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props) {
    const { data, loading } = props;

    return (
        <div className="info-mantenimiento">
            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>
                            <BoxFormData
                                titulo="Trabajo a realizar"
                                data={data.trabajo_realizado}
                            />

                            <BoxFormData
                                titulo="Tipo de Mantenimiento"
                                data={data.mantenimiento}
                            />
                            <BoxFormData
                                titulo="Asignado a personal"
                                data={data.asignado_a}
                            />
                            <BoxFormData
                                titulo="Pedido por el departamento"
                                data={data.departamento.nombre}
                            />
                            <BoxFormData
                                titulo="Tipo de Servicio"
                                data={data.servicio.nombre}
                            />
                            <BoxFormData
                                titulo="Horario"
                                data={`Empieza a las ${data.hora_inicio} y termina a las ${data.hora_final}`}
                            />
                            <BoxFormData
                                titulo="Solicitud creada por"
                                data={`${data.usuario.nombre} ${data.usuario.apellidos}`}
                            />

                            <BoxFormData
                                titulo="Ultima actualizacion"
                                data={formatDate(data.updatedAt)}
                            />

                            <BoxFormData
                                titulo="Fecha de creacion"
                                data={formatDate(data.createdAt)}
                            />

                        </>
                    )
                        :
                        (
                            "cargando..."
                        )
                }
            </div>
        </div>
    )
}
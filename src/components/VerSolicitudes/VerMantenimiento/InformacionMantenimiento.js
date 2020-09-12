import React from "react";
import "./InformacionMantenimiento.scss";

export default function InformacionMantenimiento(props) {
    const { data, loading } = props;
    const cargando = "cargando";

    return (
        <div className="informacion-mantenimiento">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>
                            <article>
                                <p>Tipo de Mantenimiento </p>
                                <p>{data.tipo || cargando}</p>
                            </article>

                            <article>
                                <p>Asignado a personal </p>
                                <p>{data.asignado_a || cargando}</p>
                            </article>

                            <article>
                                <p>Pedido por el departamento</p>
                                <p>{data.departamento.departamento || cargando}</p>
                            </article>

                            <article>
                                <p>Tipo de Servicio</p>
                                <p>{data.servicio.status || cargando}</p>
                            </article>

                            <article>
                                <p>Equipo de proteccion personal</p>
                                <p>{data.equipo_proteccion || "No aplica"}</p>
                            </article>

                            <article>
                                <p>Horario</p>
                                <p>{`Empieza a las ${data.hora_inicio} y termina a las ${data.hora_final}` || cargando}</p>
                            </article>

                            <article>
                                <p>Solicitud creada por</p>
                                <p>{`${data.user.name} ${data.user.surname}` || cargando}</p>
                            </article>

                            <article>
                                <p>Estado</p>
                                <p>{data.status || cargando}</p>
                            </article>

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









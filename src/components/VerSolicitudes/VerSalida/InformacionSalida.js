import React from "react";
import "./InformacionSalida.scss";

export default function InformacionSalida(props) {
    const { data, loading } = props;
    const cargando = "cargando";

    return (
        <div className="informacion-salida">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>
                            <article>
                                <p>Actividades a realizar </p>
                                <p>{data.descripcion || "No hay ectividades registradas aun."}</p>
                            </article>

                            <article>
                                <p>Pedido por el departamento</p>
                                <p>{data.departamento.departamento || cargando}</p>
                            </article>

                            <article>
                                <p>Vehiculo elegido</p>
                                <p>{data.vehiculo.vehiculo || cargando}</p>
                            </article>

                            <article>
                                <p>Chofer asignado</p>
                                <p>{data.chofer || cargando}</p>
                            </article>

                            <article>
                                <p>Horario</p>
                                <p>{`Empieza a las ${data.hora_salida} y termina a las ${data.hora_llegada}` || cargando}</p>
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







import React from "react";
import { Icon } from "semantic-ui-react";
import "./InformacionEvento.scss";

export default function InformacionEvento(props) {
    const { data, loading } = props;


    const cargando = "cargando";


    return (
        <div className="informacion-evento">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>
                            <article>
                                <p>Actividades Realizadas </p>
                                <p>{data.actividades || cargando}</p>
                            </article>

                            <article>
                                <p>Pedido por el departamento</p>
                                <p>{data.departamento.departamento || cargando}</p>
                            </article>

                            <article>
                                <p>Lugar del evento</p>
                                <p>{data.espacio.espacio || cargando}</p>
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
                                <p>
                                    {data.status || cargando} 
                                    { data.status === "aprobado" ? <Icon name="check"/> : <Icon name={ data.status === "pendiente" ? "exclamation triangle" : "key"} className="pendiente" />}
                                </p>
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
import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import BoxFormData from "../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../utils/reutilizables/fecha";
import "./InformacionMantenimiento.scss";

export default function InformacionMantenimiento(props) {
    const { data, loading } = props;
    scrollTop();
    const history = useHistory();
    const cargando = "cargando";

    const gotoUpdate = (id) => {
        history.push(`/actualizar/mantenimiento/${id}`);
    }

    return (
        <div className="informacion-mantenimiento">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>
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
                                titulo="Trabajo a realizar"
                                data={data.trabajo_realizado}
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
                                titulo="Verificacion"
                                data={data.verificado === false ? "sin verificar" : "verificada"}
                            />

                            <article>
                                <p>Estado de Aprobacion</p>
                                <p>
                                    {data.aprobado === false ? "Esperando aprobacion" : "aprobada"}
                                    {data.aprobado === true ? <Icon name="check" /> : <Icon name={data.verificado === false ? "exclamation triangle" : "key"} className="pendiente" />}
                                </p>
                            </article>

                            <BoxFormData
                                titulo="Ultima actualizacion"
                                data={ formatDate(data.updatedAt)}
                            />


                            <BoxFormData
                                titulo="Fecha de creacion"
                                data={formatDate(data.createdAt)}
                            />

                            <BoxFormData
                                titulo=""
                                data={<Button onClick={() => gotoUpdate(data.id)}>Actualizar solicitud</Button>}
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









import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import BoxFormData from "../../reutilizables/BoxFormData/BoxFormData";
import "./InformacionMantenimiento.scss";

export default function InformacionMantenimiento(props) {
    const { data, loading } = props;
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
                                data={data.tipo}
                            />
                            <BoxFormData
                                titulo="Asignado a personal"
                                data={data.asignado_a}
                            />
                            <BoxFormData
                                titulo="Pedido por el departamento"
                                data={data.departamento.departamento}
                            />
                            <BoxFormData
                                titulo="Tipo de Servicio"
                                data={data.servicio.status}
                            />
                            <BoxFormData
                                titulo="Equipo de proteccion personal"
                                data={data.equipo_proteccion}
                            />
                            <BoxFormData
                                titulo="Horario"
                                data={`Empieza a las ${data.hora_inicio} y termina a las ${data.hora_final}`}
                            />
                            <BoxFormData
                                titulo="Solicitud creada por"
                                data={`${data.user.name} ${data.user.surname}`}
                            />


                            <article>
                                <p>Estado</p>
                                <p>
                                    {data.status || cargando} 
                                    { data.status === "aprobado" ? <Icon name="check"/> : <Icon name={ data.status === "pendiente" ? "exclamation triangle" : "key"} className="pendiente" />}
                                </p>
                            </article>

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









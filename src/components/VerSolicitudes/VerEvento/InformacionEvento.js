import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import BoxFormData from "../../reutilizables/BoxFormData/BoxFormData";
import "./InformacionEvento.scss";

export default function InformacionEvento(props) {
    const { data, loading } = props;
    const history = useHistory();
    const cargando = "cargando";

    const gotoUpdate = (id) => {
        history.push(`/actualizar/evento/${id}`);
    }


    return (
        <div className="informacion-evento">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Actividades Realizadas"
                                data={data.actividades}
                            />

                            <BoxFormData
                                titulo="Pedido por el departamento"
                                data={data.departamento.departamento}
                            />

                            <BoxFormData
                                titulo="Lugar del evento"
                                data={data.espacio.espacio}
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
                                    {data.status === "aprobado" ? <Icon name="check" /> : <Icon name={data.status === "pendiente" ? "exclamation triangle" : "key"} className="pendiente" />}
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
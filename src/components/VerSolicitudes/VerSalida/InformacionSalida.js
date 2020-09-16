import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import BoxFormData from "../../reutilizables/BoxFormData/BoxFormData";
import "./InformacionSalida.scss";

export default function InformacionSalida(props) {
    const { data, loading } = props;
    const history = useHistory();
    const cargando = "cargando";

    const gotoUpdate = (id) => {
        history.push(`/actualizar/salida/${id}`);
    }

    return (
        <div className="informacion-salida">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Actividades a realizar"
                                data={data.descripcion || "No hay ectividades registradas aun."}
                            />
                            <BoxFormData
                                titulo="Pedido por el departamento"
                                data={data.departamento.departamento}
                            />

                            <BoxFormData
                                titulo="Vehiculo elegido"
                                data={data.vehiculo.vehiculo}
                            />

                            <BoxFormData
                                titulo="Chofer asignado"
                                data={data.chofer}
                            />
                            <BoxFormData
                                titulo="Horario"
                                data={`Empieza a las ${data.hora_salida} y termina a las ${data.hora_llegada}`}
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







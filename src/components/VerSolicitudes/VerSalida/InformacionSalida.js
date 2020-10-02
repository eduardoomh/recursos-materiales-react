import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import BoxFormData from "../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../utils/reutilizables/fecha";
import "./InformacionSalida.scss";

export default function InformacionSalida(props) {
    const { data, loading } = props;
    scrollTop();
    const history = useHistory();

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
                                data={data.actividades || "No hay ectividades registradas aun."}
                            />
                            <BoxFormData
                                titulo="Pedido por el departamento"
                                data={data.departamento.nombre}
                            />

                            <BoxFormData
                                titulo="Vehiculo elegido"
                                data={data.vehiculo.nombre}
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







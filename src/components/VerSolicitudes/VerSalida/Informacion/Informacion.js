import React from "react";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props) {
    const { data, loading } = props;

    return (
        <div className="info-salida">
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
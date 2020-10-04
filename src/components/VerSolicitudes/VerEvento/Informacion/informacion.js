import React from "react";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props){
    const { data, loading } = props;

    return(
        <div className="info-evento">
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
                                data={data.departamento.nombre}
                            />

                            <BoxFormData
                                titulo="Lugar del evento"
                                data={data.sitio.nombre}
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
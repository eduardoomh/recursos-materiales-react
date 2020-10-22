import React from "react";
import BoxFormData from "../../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props){
    const { data, loading } = props;

    return (
        <div className="info-departamento">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre del departamento"
                                data={data.nombre}
                            />

                            <BoxFormData
                                titulo="Correo electronico"
                                data={data.correo}
                            />
                            <BoxFormData
                                titulo="Telefono"
                                data={data.telefono}
                            />
                            <BoxFormData
                                titulo="Pertenece a la subdireccion"
                                data={data.subdireccion.nombre}
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
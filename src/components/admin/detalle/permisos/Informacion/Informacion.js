import React from "react";
import BoxFormData from "../../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props){
    const { data, loading } = props;

    return (
        <div className="info-permiso">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Usuario"
                                data={`${data.usuario.nombre} ${data.usuario.apellidos}`}
                            />
                            <BoxFormData
                                titulo="Puesto"
                                data={data.puesto.nombre}
                            />
                            <BoxFormData
                                titulo="Departamento"
                                data={data.departamento.nombre}
                            />

                            <BoxFormData
                                titulo="Ultima actualizacion"
                                data={formatDate(data.updatedAt)}
                            />

                            <BoxFormData
                                titulo="Creado hace"
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
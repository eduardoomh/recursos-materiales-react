import React from "react";
import BoxFormData from "../../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props){
    const { data, loading } = props;

    return (
        <div className="info-subdireccion">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre de la subdireccion"
                                data={data.nombre}
                            />

                            <BoxFormData
                                titulo="Nombre del jefe"
                                data={data.jefe}
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
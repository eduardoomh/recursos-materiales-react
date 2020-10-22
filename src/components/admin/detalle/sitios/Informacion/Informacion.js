import React from "react";
import BoxFormData from "../../../../reutilizables/BoxFormData/BoxFormData";
import { formatDate } from "../../../../../utils/reutilizables/fecha";
import "./Informacion.scss";

export default function Informacion(props){
    const { data, loading } = props;

    return (
        <div className="info-sitio">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre del sitio"
                                data={data.nombre}
                            />

                            <BoxFormData
                                titulo="Pertenece al edificio"
                                data={data.edificio.nombre}
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
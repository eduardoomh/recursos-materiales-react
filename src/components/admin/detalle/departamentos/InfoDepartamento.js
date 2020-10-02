import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoDepartamento.scss";

export default function InfoDepartamento(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/departamento/${id}`);
    }

    return (
        <div className="informacion-departamento">

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

                            <BoxFormData
                                titulo=""
                                data={<Button onClick={() => gotoUpdate(data.id)}>Actualizar Departamento</Button>}
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
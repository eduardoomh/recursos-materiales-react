import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
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
                                data={data.departamento}
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
                                data={data.subdireccion.subdireccion}
                            />
                            <BoxFormData
                                titulo="Ultima actualizacion"
                                data={data.updated_at}
                            />

                            <BoxFormData
                                titulo="Creado hace"
                                data={data.created_at}
                            />

                            <BoxFormData
                                titulo=""
                                data={<Button onClick={() => gotoUpdate(data.id)}>Actualizar Cargo</Button>}
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
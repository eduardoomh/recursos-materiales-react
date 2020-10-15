import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoPermiso.scss";

export default function InfoPermiso(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/permiso/${id}`);
    }

    return (
        <div className="informacion-permiso">

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

                            <BoxFormData
                                titulo=""
                                data={<Button className="boton-guindo" onClick={() => gotoUpdate(data.id)}>Actualizar Permiso</Button>}
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
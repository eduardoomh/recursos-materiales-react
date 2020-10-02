import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoSubdireccion.scss";

export default function InfoSubdireccion(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/subdireccion/${id}`);
    }

    return (
        <div className="informacion-subdireccion">

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

                            <BoxFormData
                                titulo=""
                                data={<Button onClick={() => gotoUpdate(data.id)}>Actualizar Subdireccion</Button>}
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
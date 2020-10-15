import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoOrganizacion.scss";

export default function InfoOrganizacion(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/organizacion/${id}`);
    }

    return (
        <div className="informacion-organizacion">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Usuario"
                                data={data.nombre}
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
                                data={<Button className="boton-guindo" onClick={() => gotoUpdate(data.id)}>Actualizar Acomodo de sillas</Button>}
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
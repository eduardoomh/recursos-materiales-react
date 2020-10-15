import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoEdificio.scss";

export default function InfoEdificio(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/edificio/${id}`);
    }

    return (
        <div className="informacion-edificio">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre de la ubicacion"
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
                                data={<Button className="boton-guindo" onClick={() => gotoUpdate(data.id)}>Actualizar Edificio</Button>}
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
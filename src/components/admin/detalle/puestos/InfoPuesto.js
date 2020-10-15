import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoPuesto.scss";

export default function InfoPuesto(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/puesto/${id}`);
    }
 
    return (
        <div className="informacion-puesto">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre del puesto"
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
                                data={<Button className="boton-guindo" onClick={() => gotoUpdate(data.id)}>Actualizar Puesto</Button>}
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
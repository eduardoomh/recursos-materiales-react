import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoTipoorden.scss";

export default function InfoTipoorden(props) {
    const { data, loading } = props;
    const history = useHistory();
    scrollTop();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/tipoorden/${id}`);
    }

    return (
        <div className="informacion-tipoorden">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Estado"
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
                                data={<Button className="boton-guindo" onClick={() => gotoUpdate(data.id)}>Actualizar Tipo de orden</Button>}
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
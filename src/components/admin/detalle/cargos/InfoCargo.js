import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoCargo.scss";

export default function InfoCargo(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/cargo/${id}`);
    }

    return (
        <div className="informacion-cargo">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre del cargo"
                                data={data.cargo}
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
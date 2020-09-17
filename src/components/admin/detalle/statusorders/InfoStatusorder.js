import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoStatusorder.scss";

export default function InfoStatusorder(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/statusorder/${id}`);
    }

    return (
        <div className="informacion-statusorder">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Estado"
                                data={data.status}
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
import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
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
                                data={data.subdireccion}
                            />

                            <BoxFormData
                                titulo="Nombre del jefe"
                                data={data.subdirector}
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
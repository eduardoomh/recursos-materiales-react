import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoSitio.scss";

export default function InfoSitio(props) {
    const { data, loading } = props;
    const history = useHistory();

    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/sitio/${id}`);
    }

    return (
        <div className="informacion-sitio">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre del sitio"
                                data={data.nombre}
                            />

                            <BoxFormData
                                titulo="Pertenece al edificio"
                                data={data.edificio.nombre}
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
                                data={<Button className="boton-guindo" onClick={() => gotoUpdate(data.id)}>Actualizar Sitio</Button>}
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
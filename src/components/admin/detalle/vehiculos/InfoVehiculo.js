import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoVehiculo.scss";

export default function InfoVehiculo(props) {
    const { data, loading } = props;
    const history = useHistory();
    
    const gotoUpdate = (id) => {
        history.push(`/admin/actualizar/vehiculo/${id}`);
    }

    return (
        <div className="informacion-vehiculo">

            <div>
                {
                    data !== "cargando ...." && loading === false ? (
                        <>

                            <BoxFormData
                                titulo="Nombre del vehiculo"
                                data={data.nombre}
                            />
                            <BoxFormData
                                titulo="Nombre del modelo"
                                data={data.modelo}
                            />                            
                            <BoxFormData
                                titulo="Numero de placas"
                                data={data.placas}
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
                                data={<Button onClick={() => gotoUpdate(data.id)}>Actualizar Vehiculo</Button>}
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
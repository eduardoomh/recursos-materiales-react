import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
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
                                data={data.vehiculo}
                            />
                            <BoxFormData
                                titulo="Nombre del modelo"
                                data={data.marca}
                            />                            
                            <BoxFormData
                                titulo="Numero de placas"
                                data={data.placas}
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
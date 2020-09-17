import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { getStorage } from "../../../../servicios/reutilizables/localStorage";
import BoxFormData from "../../../reutilizables/BoxFormData/BoxFormData";
import "./InfoPuesto.scss";

export default function InfoPuesto(props) {
    const { data, loading } = props;
    const history = useHistory();
    const users = getStorage("users");
    const cargos = getStorage("cargos");
    const departamentos = getStorage("departamentos");

    const userSelected = users.find(user =>  user.id === data.usuario_id);
    const cargoSelected = cargos.find(cargo => cargo.id === data.cargo_id);
    const departamentoSelected = departamentos.find(dep => dep.id === data.departamento_id);

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
                                titulo="Usuario"
                                data={`${userSelected.name} ${userSelected.surname}`}
                            />
                            <BoxFormData
                                titulo="cargo"
                                data={cargoSelected.cargo}
                            />
                            <BoxFormData
                                titulo="departamento"
                                data={departamentoSelected.departamento}
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
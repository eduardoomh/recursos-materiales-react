import React from "react";
import { useHistory } from "react-router-dom";
import useIdentity from "../../../utils/hooks/useIdentity";
import BoxFormData from "../../reutilizables/BoxFormData/BoxFormData";
import { Button } from "semantic-ui-react";
import "./PerfilContainer.scss";

export default function PerfilContainer() {
    const { identity } = useIdentity();
    const history = useHistory();

    const gotoEdit = () => {
        history.push("/usuario/perfil/editar");
    }

    return (
        <div className="perfil-container">
            <div>
                <BoxFormData
                    titulo="Descripcion personal"
                    data={identity.descripcion || "No tienes una descripcion aun."}
                />
                <BoxFormData
                    titulo="Correo electronico"
                    data={identity.correo}
                />
                <BoxFormData
                    titulo="Numero de control"
                    data={identity.numero_control}
                />
                <BoxFormData
                    titulo="Numero telefonico"
                    data={identity.telefono || "No tienes un telefono regitrado aun"}
                />
                <BoxFormData
                    titulo="Permisos"
                    data="Usuario"
                />

                <BoxFormData
                    titulo="Desea actualizar algun dato?"
                    data={<Button className="button" onClick={() => gotoEdit()}>Actualizar Perfil</Button>
                    } />



            </div>
        </div>

    )
}
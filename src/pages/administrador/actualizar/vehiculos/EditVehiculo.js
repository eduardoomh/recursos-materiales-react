import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditVehiculo.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_VEHICULO } from "../../../../gql/vehiculo";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormVehiculo from "../../../../components/admin/actualizar/vehiculos/FormVehiculo";

export default function EditVehiculo() {
    const { id } = useParams();
    scrollTop();

    const { data: vehiculo, loading: loadingVehiculo } = useQuery(OBTENER_VEHICULO, {
        variables: {
            id: id
        }
    });


    return (
        <>
            <div className="actualizar-vehiculo">
                <Banner titulo="Actualizar Vehiculo" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingVehiculo ?
                        <FormVehiculo
                            solicitud={vehiculo.obtenerVehiculo}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }                

            </div>
        </>
    )
}
import React  from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditEdificio.scss";
import { useQuery } from "@apollo/client";
import { OBTENER_EDIFICIO } from "../../../../gql/edificio";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormEdificio from "../../../../components/admin/actualizar/edificios/FormEdificio";

export default function EditEdificio() {
    const { id } = useParams();
    scrollTop();

    const { data: edificio, loading: loadingEdificio } = useQuery(OBTENER_EDIFICIO, {
        variables: {
            id: id
        }
    });


    return (
        <>
            <div className="actualizar-edificio">
                <Banner titulo="Actualizar Edificio" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    !loadingEdificio ?
                        <FormEdificio
                            solicitud={edificio.obtenerEdificio}
                        />
                    :
                    <Loader active inline='centered' size='massive' />
                }               

            </div>
        </>
    )
}
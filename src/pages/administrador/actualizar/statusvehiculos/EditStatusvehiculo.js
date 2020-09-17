import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditStatusvehiculo.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getStatusvehiculo } from "../../../../servicios/statusvehiculo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormStatusvehiculo from "../../../../components/admin/actualizar/statusvehiculos/FormStatusvehiculo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditStatusvehiculo() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getStatusvehiculo(id);

            setSolicitud(() => {
                if (data.status === "success") return data.cargo
            });
            console.log(data.cargo);
            setLoading(false); 
        }

        getData();

        return () => {
            setSolicitud(false);
        }

    }, [id]);

    return (
        <>
            <div className="actualizar-statusvehiculo">
                <Banner titulo="Actualizar Estados de Vehiculos" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                <FormStatusvehiculo data={solicitud} loading={loading} />

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
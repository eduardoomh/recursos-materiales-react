import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditVehiculo.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getVehiculo } from "../../../../servicios/vehiculo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormVehiculo from "../../../../components/admin/actualizar/vehiculos/FormVehiculo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditVehiculo() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getVehiculo(id);

            setSolicitud(() => {
                if (data.status === "success") return data.elementos
            });
            console.log(data.elementos);
            setLoading(false); 
        }

        getData();

        return () => {
            setSolicitud(false);
        }

    }, [id]);

    return (
        <>
            <div className="actualizar-vehiculo">
                <Banner titulo="Actualizar Vehiculo" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                <FormVehiculo data={solicitud} loading={loading} />

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
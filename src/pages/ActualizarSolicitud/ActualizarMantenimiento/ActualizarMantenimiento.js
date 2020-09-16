import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./ActualizarMantenimiento.scss";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { getMantenimiento } from "../../../servicios/mantenimiento";
import Banner from "../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../components/reutilizables/Titulo/Titulo";
import FormularioActualizar from "../../../components/Formularios/ActualizarMantenimiento/FormularioActualizar";
import ModalBasic from "../../../components/reutilizables/ModalBasic/ModalBasic";

export default function ActualizarMantenimiento() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getMantenimiento(id);

            setSolicitud(() => {
                if (data.status === "success") return data.elemento
            });
            console.log(data.elemento);
            setLoading(false);
        }

        getData();

        return () => {
            setSolicitud(false);
        }

    }, [id]);

    return (
        <>
            <div className="actualizar-mantenimiento">
                <Banner titulo="Actualizar Mantenimiento" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
            </div>
            {
                loading === false && (
                    <FormularioActualizar solicitud={solicitud} loading={loading} setLoading={setLoading} />
                )
            }
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditCargo.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getCargo } from "../../../../servicios/cargo";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormCargo from "../../../../components/admin/actualizar/cargos/FormCargo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditCargo() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getCargo(id);

            await setSolicitud(() => {
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
            <div className="actualizar-cargo">
                <Banner titulo="Actualizar Cargo" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                {
                    loading === false && (
                        <FormCargo solicitud={solicitud} setLoading={setLoading} /> 
                    )
                }

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
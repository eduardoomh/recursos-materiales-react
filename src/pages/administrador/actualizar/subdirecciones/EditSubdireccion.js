import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditSubdireccion.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getSubdireccion } from "../../../../servicios/subdireccion";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditSubdireccion() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getSubdireccion(id);

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
            <div className="actualizar-subdireccion">
                <Banner titulo="Actualizar Subdireccion" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
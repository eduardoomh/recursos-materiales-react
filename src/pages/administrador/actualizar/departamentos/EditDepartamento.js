import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditDepartamento.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getDepartamento } from "../../../../servicios/departamento";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormDepartamento from "../../../../components/admin/actualizar/departamentos/FormDepartamento";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditDepartamento() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getDepartamento(id);

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
            <div className="actualizar-departamento">
                <Banner titulo="Actualizar Departamento" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />             
                {
                    loading === false && (
                        <FormDepartamento solicitud={solicitud} setLoading={setLoading} />
                    )
                }
            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
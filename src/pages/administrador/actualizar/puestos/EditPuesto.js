import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditPuesto.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getPuesto } from "../../../../servicios/puesto";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormPuesto from "../../../../components/admin/actualizar/puestos/FormPuesto";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditPuesto() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getPuesto(id);

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
            <div className="actualizar-puesto">
                <Banner titulo="Actualizar Puesto" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                
                {
                    loading === false && (
                     <FormPuesto solicitud={solicitud} setLoading={setLoading} />
                    )
                }

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
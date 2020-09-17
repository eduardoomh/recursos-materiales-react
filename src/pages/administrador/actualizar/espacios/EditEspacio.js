import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./EditEspacio.scss";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { getEspacio } from "../../../../servicios/espacio";
import Banner from "../../../../components/reutilizables/Banner/Banner";
import Titulo from "../../../../components/reutilizables/Titulo/Titulo";
import FormEspacio from "../../../../components/admin/actualizar/espacios/FormEspacio";
import ModalBasic from "../../../../components/reutilizables/ModalBasic/ModalBasic";

export default function EditEspacio() {
    const [solicitud, setSolicitud] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        scrollTop();
        const getData = async () => {
            const data = await getEspacio(id);

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
            <div className="actualizar-espacio">
                <Banner titulo="Actualizar Espacio" />
                <Titulo titulo="Modifique los datos que requieran ser actualizados." />
                
                {
                    loading === false && (
                        <FormEspacio solicitud={solicitud} setLoading={setLoading}/>
                    )
                }

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}
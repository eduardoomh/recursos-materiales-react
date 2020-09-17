import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateEspacio } from "../../../../servicios/espacio";
import { getStorage } from "../../../../servicios/reutilizables/localStorage";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormEspacio.scss";

export default function FormEspacio(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const ubicaciones = getStorage("ubicaciones");

    const formik = useFormik({
        initialValues: {
            espacio: solicitud.espacio,
            ubicacion_id: solicitud.ubicacion_id
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateEspacio(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/espacios/${solicitud.id}`);

                } else {
                    scrollTop();
                    toast.error("Lo sentimos, los datos introducidos han sido incorrectos");
                    setLoading(false);

                }

            }
            catch (err) {
                setLoading(false);
                toast.error("Los datos no han podido ser guardados, intentelo mas tarde");
                console.log(err);
            }
        }
    })



    return (
        <>
            <div className="formulario-admin">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Nombre de la locacion"
                        name="espacio"
                        icon='clipboard outline'
                        value={formik.values.espacio}
                        onChange={formik.handleChange}
                        error={formik.errors.espacio}
                    />

                    <div className="field">
                        <label htmlFor="ubicacion-id">Se ubica en</label>
                        <select
                            className="ui selection"
                            id="ubicacion_id"
                            name="ubicacion_id"
                            value={formik.values.ubicacion_id}
                            onChange={formik.handleChange}
                            error={formik.errors.ubicacion_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                ubicaciones.map(d => <option key={d.id} value={d.id}>{d.ubicacion}</option>)
                            }
                        </select>
                    </div>

                    <Button type="submit">Actualizar Locacion</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}


function validation() {
    return Yup.object({
        espacio: Yup.string().required("Este campo es obligatorio"),
        ubicacion_id: Yup.number().required("Este campo es obligatorio")
    })
}

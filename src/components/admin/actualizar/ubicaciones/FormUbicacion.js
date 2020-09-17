import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateUbicacion } from "../../../../servicios/ubicacion";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormUbicacion.scss";

export default function FormUbicacion(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            ubicacion: solicitud.ubicacion,
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateUbicacion(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/ubicaciones/${solicitud.id}`);

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
                        name="ubicacion"
                        icon='clipboard outline'
                        value={formik.values.ubicacion}
                        onChange={formik.handleChange}
                        error={formik.errors.ubicacion}
                    />
 
                    <Button type="submit">Actualizar Ubicacion</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}


function validation() {
    return Yup.object({
        ubicacion: Yup.string().required("Este campo es obligatorio")
    })
}

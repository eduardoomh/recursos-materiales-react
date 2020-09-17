import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateStatusvehiculo } from "../../../../servicios/statusvehiculo";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormStatusvehiculo.scss";

export default function FormStatusvehiculo(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            status: solicitud.status,
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateStatusvehiculo(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/statusvehiculos/${solicitud.id}`);

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
                        label="Nombre del Estado"
                        name="status"
                        icon='clipboard outline'
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        error={formik.errors.status}
                    />
 
                    <Button type="submit">Actualizar Estado</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}



function validation() {
    return Yup.object({
        status: Yup.string().required("Este campo es obligatorio")
    })
}

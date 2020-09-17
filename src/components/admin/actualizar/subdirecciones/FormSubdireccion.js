import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateSubdireccion } from "../../../../servicios/subdireccion";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormSubdireccion.scss";

export default function FormSubdireccion(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            subdireccion: solicitud.subdireccion,
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateSubdireccion(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/subdirecciones/${solicitud.id}`);

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
                        label="Nombre de la subdireccion"
                        name="subdireccion"
                        icon='clipboard outline'
                        value={formik.values.subdireccion}
                        onChange={formik.handleChange}
                        error={formik.errors.subdireccion}
                    />
 
                    <Button type="submit">Actualizar Subdireccion</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}


function validation() {
    return Yup.object({
        subdireccion: Yup.string().required("Este campo es obligatorio")
    })
}

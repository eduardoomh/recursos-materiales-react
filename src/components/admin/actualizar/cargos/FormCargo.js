import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateCargo } from "../../../../servicios/cargo";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormCargo.scss";

export default function FormCargo(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            cargo: solicitud.cargo,
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateCargo(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/cargos/${solicitud.id}`);

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
                        label="Nombre del cargo"
                        name="cargo"
                        icon='clipboard outline'
                        value={formik.values.cargo}
                        onChange={formik.handleChange}
                        error={formik.errors.cargo}
                    />
 
                    <Button type="submit">Actualizar Cargo</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}

function validation() {
    return Yup.object({
        cargo: Yup.string().required("Este campo es obligatorio")
    })
}

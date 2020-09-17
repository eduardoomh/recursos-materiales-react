import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button, Loader } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { newPuesto } from "../../../../servicios/puesto";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import "./FormPuesto.scss";

export default function FormPuesto() {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const formik = useFormik({
        initialValues: emptyValues(),
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await newPuesto(data);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/puestos/${response.elemento_creado.id}`);

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
                        label="Nombre del puesto"
                        name="puesto"
                        icon='clipboard outline'
                        value={formik.values.puesto}
                        onChange={formik.handleChange}
                        error={formik.errors.puesto}
                    />
 
                    <Button type="submit">Crear Puesto</Button>
                </Form>
                <MessageForm />

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}

function emptyValues() {
    return {
        puesto: "",
    }
}

function validation() {
    return Yup.object({
        puesto: Yup.string().required("Este campo es obligatorio")
    })
}

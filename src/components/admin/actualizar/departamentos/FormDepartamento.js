import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button, Loader } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { newDepartamento } from "../../../../servicios/departamento";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import "./FormDepartamento.scss";

export default function FormDepartamento() {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const formik = useFormik({
        initialValues: emptyValues(),
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await newDepartamento(data);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/departamentos/${response.elemento_creado.id}`);

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
                        name="departamento"
                        icon='clipboard outline'
                        value={formik.values.departamento}
                        onChange={formik.handleChange}
                        error={formik.errors.departamento}
                    />
 
                    <Button type="submit">Crear Departamento</Button>
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
        departamento: "",
    }
}

function validation() {
    return Yup.object({
        departamento: Yup.string().required("Este campo es obligatorio")
    })
}

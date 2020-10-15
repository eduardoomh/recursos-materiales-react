import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_SUBDIRECCION } from "../../../../gql/subdireccion";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormSubdireccion.scss";

export default function FormSubdireccion(props) {
    const { solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarSubdireccion] = useMutation(ACTUALIZAR_SUBDIRECCION);
    const history = useHistory();

    const abrirModal = () => {
        setAbrir(true);

    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push(`/admin/subdireccion/${solicitud.id}`);
    }

    const formik = useFormik({
        initialValues: emptyValues(solicitud),
        validationSchema: validation(),
        onSubmit: async (formData) => {
            try {
                setLoading(true);
                const subdireccion = formData;

                await actualizarSubdireccion({
                    variables: {
                        id: solicitud.id,
                        input: subdireccion
                    }
                });
                setLoading(false);
                abrirModal();

            }
            catch (err) {
                setLoading(false);
                toast.error(err.message);
            }
        }
    })



    return (
        <>
            <div className="formulario-admin">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Nombre de la subdireccion"
                        name="nombre"
                        icon='clipboard outline'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}
                    />

                    <Form.Input
                        label="Nombre del jefe"
                        name="jefe"
                        icon='clipboard outline'
                        value={formik.values.jefe}
                        onChange={formik.handleChange}
                        error={formik.errors.jefe}
                    />

                    <Button type="submit">Actualizar Subdireccion</Button>
                </Form>
                <MessageForm />

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
            <ModalMensaje
                centered={true}
                open={abrir}
                onClose={cerrarModal}
                titulo="Peticion Exitosa"
                texto="La subdirección se ha actualizado con éxito."
                boton="Salir"
            />
        </>
    )
}

function emptyValues(props) {
    return {
        nombre: props.nombre,
        jefe: props.jefe
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        jefe: Yup.string().required("Este campo es obligatorio")
    })
}

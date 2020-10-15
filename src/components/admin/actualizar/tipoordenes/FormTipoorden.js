import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_TIPOORDER } from "../../../../gql/tipoorder";
import { toast } from "react-toastify";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormTipoorden.scss";

export default function FormTipoorden(props) {
    const { solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarTipoorder] = useMutation(ACTUALIZAR_TIPOORDER);
    const history = useHistory();

    const abrirModal = () => {
        setAbrir(true);

    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push(`/admin/tipoorden/${solicitud.id}`);
    }

    const formik = useFormik({
        initialValues: emptyValues(solicitud),
        validationSchema: validation(),
        onSubmit: async (formData) => {
            try {
                setLoading(true);
                const tipoorder = formData;

                await actualizarTipoorder({
                    variables: {
                        id: solicitud.id,
                        input: tipoorder
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
                        label="Nombre del tipo de orden"
                        name="nombre"
                        icon='clipboard outline'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}
                    />
 
                    <Button type="submit">Actualizar Tipo de Orden</Button>
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
                texto="El Tipo de orden se ha actualizado con éxito."
                boton="Salir"
            />
        </>
    )
}

function emptyValues(props) {
    return {
        nombre: props.nombre,
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio")
    })
}

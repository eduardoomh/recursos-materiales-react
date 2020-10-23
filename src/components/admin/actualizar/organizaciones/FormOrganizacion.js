import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_ACOMODOSILLA } from "../../../../gql/acomodosilla";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormOrganizacion.scss";

export default function FormOrganizacion(props) {
    const {solicitud} = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarAcomodosilla] = useMutation(ACTUALIZAR_ACOMODOSILLA);
    const [objetoMensaje, setObjetoMensaje] = useState({
        titulo: "",
        texto: "",
        boton: "",
        error: false
    })
    const history = useHistory();

    const abrirModal = () => {
        setAbrir(true);

    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push(`/admin/organizacion/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }


    const formik = useFormik({
        initialValues: emptyValues(solicitud),
        validationSchema: validation(),
        onSubmit: async (formData) => {
            try {
                setLoading(true);
                const acomodosilla = formData;

                await actualizarAcomodosilla({
                    variables: {
                        input: acomodosilla
                    }
                });
                cambiarMensaje({
                    titulo: "Solicitud Exitosa",
                    texto: "La organizacion se ha actualizado exitosamente!",
                    boton: "Entendido",
                    error: false
                })

            }
            catch (err) {
                cambiarMensaje({
                    titulo: "Solicitud Fallida",
                    texto: err.mesage,
                    boton: "Entendido",
                    error: true
                })
            }
        }
    })



    return (
        <>
            <div className="formulario-admin">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Tipo de acomodo de sillas"
                        name="nombre"
                        icon='clipboard outline'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}
                    />
                    <Form.Input
                        label="Imagen"
                        name="imagen"
                        icon='clipboard outline'
                        value={formik.values.imagen}
                        onChange={formik.handleChange}
                        error={formik.errors.imagen}
                    />

                    <Button type="submit">Actualizar Tipo de Acomodo</Button>
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
                titulo={objetoMensaje.titulo}
                texto={objetoMensaje.texto}
                boton={objetoMensaje.boton}
                error={objetoMensaje.error}
            />
        </>
    )
}

function emptyValues(props) {
    return {
        nombre: props.nombre,
        imagen: props.imagen
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        imagen: Yup.string().required("Este campo es obligatorio")
    })
}

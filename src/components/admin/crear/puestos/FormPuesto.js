import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREAR_PUESTO } from "../../../../gql/puesto";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormPuesto.scss";

export default function FormPuesto() {
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [crearPuesto] = useMutation(CREAR_PUESTO);
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
        history.push("/admin/puestos/ref");
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }

    const formik = useFormik({
        initialValues: emptyValues(),
        validationSchema: validation(),
        onSubmit: async (formData) => {
            try {
                setLoading(true);
                const puesto = formData;

                await crearPuesto({
                    variables: {
                        input: puesto
                    }
                });
                cambiarMensaje({
                    titulo: "Solicitud Exitosa",
                    texto: "El puesto se ha creado exitosamente!",
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
                        label="Nombre del puesto"
                        name="nombre"
                        icon='clipboard outline'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}
                    />

                    <Button type="submit">Crear Puesto</Button>
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

function emptyValues() {
    return {
        nombre: ""
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio")
    })
}

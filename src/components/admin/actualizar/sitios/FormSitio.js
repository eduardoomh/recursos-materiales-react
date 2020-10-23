import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_SITIO } from "../../../../gql/sitio";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormSitio.scss";

export default function FormSitio(props) {
    const { edificios, solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarSitio] = useMutation(ACTUALIZAR_SITIO);
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
        history.push(`/admin/sitio/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }

    const edificiosOptions = edificios.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    return (
        <>
            <Formik
                initialValues={emptyValues(solicitud)}
                validationSchema={validation()}
                onSubmit={async (values, options) => {
                    try {
                        setLoading(true);
                        const sitio = values;

                        await actualizarSitio({
                            variables: {
                                id: solicitud.id,
                                input: sitio
                            }
                        });
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "El sitio se ha actualizado exitosamente!",
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
                }}
            >
                {({ values, handleChange, errors, handleSubmit }) => (
                    <div className="formulario-admin">
                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                label="Nombre del sitio"
                                name="nombre"
                                icon='clipboard outline'
                                value={values.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                            />
                            <SelectFormik
                                name="edificio"
                                options={edificiosOptions}
                                label="Pertenece al edificio"
                            />

                            <Button type="submit">Actualizar Sitio</Button>
                        </Form>
                        <MessageForm />

                    </div>
                )}
            </Formik>
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
    const {edificio} = props;
    return {
        nombre: props.nombre,
        edificio: edificio.id
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        edificio: Yup.string().required("Este campo es obligatorio")
    })
}

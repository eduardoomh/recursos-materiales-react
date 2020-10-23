import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_VEHICULO } from "../../../../gql/vehiculo";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormVehiculo.scss";

export default function FormVehiculo(props) {
    const {solicitud} = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarVehiculo] = useMutation(ACTUALIZAR_VEHICULO);
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
        history.push(`/admin/vehiculo/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }

    return (
        <>
            <Formik
                initialValues={emptyValues(solicitud)}
                validationSchema={validation()}
                onSubmit={async (values, options) => {
                    try {
                        setLoading(true);
                        const vehiculo = values;

                        await actualizarVehiculo({
                            variables: {
                                id: solicitud.id,
                                input: vehiculo
                            }
                        });
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "El vehiculo se ha actualizado exitosamente!",
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
                                label="Nombre del vehículo"
                                name="nombre"
                                icon='clipboard outline'
                                value={values.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                            />

                            <Form.Input
                                label="Modelo del vehículo"
                                name="modelo"
                                icon='clipboard outline'
                                value={values.modelo}
                                onChange={handleChange}
                                error={errors.modelo}
                            />

                            <Form.Input
                                label="Numero de placas"
                                name="placas"
                                icon='clipboard outline'
                                value={values.placas}
                                onChange={handleChange}
                                error={errors.placas}
                            />

                            <Button type="submit">Actualizar Vehiculo</Button>
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
    return {
        nombre: props.nombre,
        modelo: props.modelo,
        placas: props.placas,
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        modelo: Yup.string().required("Este campo es obligatorio"),
        placas: Yup.string().required("Este campo es obligatorio")
    })
}

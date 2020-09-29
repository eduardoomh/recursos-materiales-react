import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREAR_VEHICULO } from "../../../../gql/vehiculo";
import { toast } from "react-toastify";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormVehiculo.scss";

export default function FormVehiculo() {
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [crearVehiculo] = useMutation(CREAR_VEHICULO);
    const history = useHistory();

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push("/admin/vehiculos");
    }



    return (
        <>
            <Formik
                initialValues={emptyValues()}
                validationSchema={validation()}
                onSubmit={async (values, options) => {
                    try {
                        setLoading(true);
                        const vehiculo = values;

                        await crearVehiculo({
                            variables: {
                                input: vehiculo
                            }
                        });
                        setLoading(false);
                        abrirModal();

                    }
                    catch (err) {
                        setLoading(false);
                        toast.error(err.message);
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

                            <Button type="submit">Crear Vehiculo</Button>
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
                titulo="Petición Exitosa"
                texto="El Vehículo se ha creado con éxito."
                boton="Salir"
            />
        </>
    )
}

function emptyValues() {
    return {
        nombre: "",
        modelo: "",
        placas: "",
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        modelo: Yup.string().required("Este campo es obligatorio"),
        placas: Yup.string().required("Este campo es obligatorio")
    })
}

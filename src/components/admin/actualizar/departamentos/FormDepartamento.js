import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_DEPARTAMENTO } from "../../../../gql/departamento";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormDepartamento.scss";

export default function FormDepartamento(props) {
    const { subdirecciones, solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarDepartamento] = useMutation(ACTUALIZAR_DEPARTAMENTO);
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
        history.push(`/admin/departamento/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);
        abrirModal();
    }

    const subdireccionesOptions = subdirecciones.map(d => {
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
                        const departamento = values;

                        await actualizarDepartamento({
                            variables: {
                                id: solicitud.id,
                                input: departamento
                            }
                        });
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "El departamento se ha actualizado exitosamente!",
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
                                label="Nombre del departamento"
                                name="nombre"
                                icon='clipboard outline'
                                value={values.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                            />
                            <Form.Input
                                label="Jefe de departamento"
                                name="jefe"
                                icon='clipboard outline'
                                value={values.jefe}
                                onChange={handleChange}
                                error={errors.jefe}
                            />
                            <Form.Input
                                label="Telefono de contacto"
                                name="telefono"
                                icon='clipboard outline'
                                value={values.telefono}
                                onChange={handleChange}
                                error={errors.telefono}
                            />
                            <Form.Input
                                label="Correo electronico"
                                name="correo"
                                icon='clipboard outline'
                                value={values.correo}
                                onChange={handleChange}
                                error={errors.correo}
                            />
                            <SelectFormik
                                name="subdireccion"
                                options={subdireccionesOptions}
                                label="Pertenece a la subdireccion"
                            />

                            <Button type="submit">Actualizar Departamento</Button>
                        </Form>
                        <div className="formulario-admin__mensaje-form">
                            <MessageForm data="Los datos que ingrese pueden ser modificados en cualquier momento." />
                        </div>


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
    const { subdireccion } = props;

    return {
        nombre: props.nombre,
        subdireccion: subdireccion.id,
        telefono: props.telefono,
        correo: props.correo,
        jefe: props.jefe
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        subdireccion: Yup.string().required("Este campo es obligatorio"),
        telefono: Yup.string().required("Este campo es obligatorio"),
        jefe: Yup.string().required("Este campo es obligatorio"),
        correo: Yup.string().email("Este correo no es valido").required("Este campo es obligatorio")
    })
}

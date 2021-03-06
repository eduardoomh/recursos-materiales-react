import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_EVENTO } from "../../../gql/evento";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../components/reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../components/reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../components/reutilizables/ModalMensaje/ModalMensaje";
import "./FormularioActualizar.scss";

export default function FormularioActualizar(props) {
    const { departamentos, acomodosillas, sitios, solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarEvento] = useMutation(ACTUALIZAR_EVENTO);
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
        history.push(`/evento/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }

    const departamentosOptions = departamentos.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const acomodosillasOptions = acomodosillas.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const sitiosOptions = sitios.map(d => {
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
                        const evento = values;

                        await actualizarEvento({
                            variables: {
                                id: solicitud.id,
                                input: evento
                            }
                        });
                        scrollTop();
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "El evento se ha actualizado exitosamente!",
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
                                label="Nombre del evento"
                                name="nombre"
                                icon='clipboard outline'
                                placeholder='Rellene este campo'
                                value={values.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                            />
                            <Form.TextArea
                                label="Actividades a realizar"
                                name="actividades"
                                placeholder='Rellene este campo'
                                icon='clipboard outline'
                                value={values.actividades}
                                onChange={handleChange}
                                error={errors.actividades}
                            />

                            <SelectFormik
                                name="sitio"
                                options={sitiosOptions}
                                label="Lugar del evento"
                            />

                            <SelectFormik
                                name="departamento"
                                options={departamentosOptions}
                                label="Pedido por el departamento"
                            />

                            <SelectFormik
                                name="acomodo_sillas"
                                options={acomodosillasOptions}
                                label="Forma de acomodar las sillas"
                            />

                            <Form.Input
                                type="date"
                                label="Fecha del evento"
                                name="fecha"
                                icon='clipboard outline'
                                value={values.fecha}
                                onChange={handleChange}
                                error={errors.fecha}
                            />

                            <Form.Input
                                type="date"
                                label="Se extiende hasta le fecha (opcional)"
                                name="fecha_final"
                                icon='clipboard outline'
                                value={values.fecha_final}
                                onChange={handleChange}
                                error={errors.fecha_final}
                            />
                            <Form.Input
                                type="time"
                                label="Hora de comienzo"
                                name="hora_inicio"
                                icon='clipboard outline'
                                value={values.hora_inicio}
                                onChange={handleChange}
                                error={errors.hora_inicio}
                            />

                            <Form.Input
                                type="time"
                                label="Hora de finalizacion"
                                name="hora_final"
                                icon='clipboard outline'
                                value={values.hora_final}
                                onChange={handleChange}
                                error={errors.hora_final}
                            />

                            <Button type="submit">Actualizar Evento</Button>
                        </Form>
                        <div className="formulario-evento__mensaje-form">
                            <MessageForm data="Procure que los datos a actualizar del evento sean correctos." />
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
    const { departamento, acomodo_sillas, sitio } = props;
    return {
        nombre: props.nombre,
        actividades: props.actividades,
        departamento: departamento.id,
        sitio: sitio.id,
        acomodo_sillas: acomodo_sillas.id,
        fecha: props.fecha,
        fecha_final: props.fecha_final || "",
        hora_inicio: props.hora_inicio,
        hora_final: props.hora_final

    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        actividades: Yup.string().required("La fecha es obligatoria"),
        departamento: Yup.string().required("Este campo es obligatorio"),
        sitio: Yup.string().required("Este campo es obligatorio"),
        acomodo_sillas: Yup.string().required("Este campo es obligatorio"),
        fecha: Yup.string().required("Este campo es obligatorio"),
        fecha_final: Yup.string(),
        hora_inicio: Yup.string().required("Este campo es obligatorio"),
        hora_final: Yup.string().required("Este campo es obligatorio")
    })
}


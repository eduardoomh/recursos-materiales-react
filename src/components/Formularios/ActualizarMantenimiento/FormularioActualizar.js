import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_MANTENIMIENTO } from "../../../gql/mantenimiento";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../components/reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../components/reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../components/reutilizables/ModalMensaje/ModalMensaje";
import "./FormularioActualizar.scss";

export default function FormularioMantenimiento(props) {
    const { departamentos, tipoorders, solicitud } = props;
    console.log(solicitud.equipo_proteccion)
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [actualizarMantenimiento] = useMutation(ACTUALIZAR_MANTENIMIENTO);
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
        history.push(`/mantenimiento/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }


    const departamentosOptions = departamentos.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const tipoordersOptions = tipoorders.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const opciones = [
        { key: "interno", text: "interno", value: "interno" },
        { key: "externo", text: "externo", value: "externo" },
    ]


    return (
        <>
            <Formik
                initialValues={emptyValues(solicitud)}
                validationSchema={validation()}
                onSubmit={async (values, options) => {
                    try {
                        setLoading(true);
                        const mantenimiento = values;

                        await actualizarMantenimiento({
                            variables: {
                                id: solicitud.id,
                                input: mantenimiento
                            }
                        });
                        scrollTop();
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "El mantenimiento se ha actualizado exitosamente!",
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
                                label="Nombre del mantenimiento"
                                name="nombre"
                                icon='clipboard outline'
                                value={values.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                            />
                            <SelectFormik
                                name="servicio"
                                options={tipoordersOptions}
                                label="Tipo de servicio"
                            />

                            <SelectFormik
                                name="mantenimiento"
                                options={opciones}
                                label="Mantenimiento de tipo"
                            />

                            <SelectFormik
                                name="asignado_a"
                                options={opciones}
                                label="Asignado a "
                            />

                            <Form.TextArea
                                label="Trabajo a realizar"
                                name="trabajo_realizado"
                                icon='clipboard outline'
                                value={values.trabajo_realizado}
                                onChange={handleChange}
                                error={errors.trabajo_realizado}
                            />

                            <SelectFormik
                                name="departamento"
                                options={departamentosOptions}
                                label="Pedido por el departamento"
                            />

                            <Form.Input
                                type="date"
                                label="Fecha del Mantenimiento"
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

                            <Form.TextArea
                                label="Equipo de proteccion requerido (opcional)"
                                name="equipo_proteccion"
                                placeholder="Rellenar en caso de haber equipo de proteccion requerido"
                                icon='clipboard outline'
                                value={values.equipo_proteccion}
                                onChange={handleChange}
                                error={errors.equipo_proteccion}
                            />

                            <Button type="submit">Actualizar Mantenimiento</Button>
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
    const { departamento, servicio } = props;
    return {
        nombre: props.nombre,
        mantenimiento: props.mantenimiento,
        servicio: servicio.id,
        asignado_a: props.asignado_a,
        departamento: departamento.id,
        fecha: props.fecha,
        fecha_final: props.fecha_final || "",
        hora_inicio: props.hora_inicio,
        hora_final: props.hora_final,
        trabajo_realizado: props.trabajo_realizado,
        equipo_proteccion: props.equipo_proteccion || ""
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio"),
        mantenimiento: Yup.string().required("Este campo es obligatorio"),
        servicio: Yup.string().required("Este campo es obligatorio"),
        asignado_a: Yup.string().required("Este campo es obligatorio"),
        departamento: Yup.string().required("Este campo es obligatorio"),
        fecha: Yup.string().required("Este campo es obligatorio"),
        fecha_final: Yup.string(),
        hora_inicio: Yup.string().required("Este campo es obligatorio"),
        hora_final: Yup.string().required("Este campo es obligatorio"),
        trabajo_realizado: Yup.string().required("Este campo es obligatorio"),
        equipo_proteccion: Yup.string()
    })
}

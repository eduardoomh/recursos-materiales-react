import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREAR_SALIDA } from "../../../gql/salida";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../components/reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../components/reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../components/reutilizables/ModalMensaje/ModalMensaje";
import "./FormularioSalida.scss";

export default function FormularioSalida(props) {
    const { departamentos, vehiculos } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [crearSalida] = useMutation(CREAR_SALIDA);
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
        history.push("/salidas/ref");
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);            
        abrirModal();
    }

    const departamentosOptions = departamentos.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const vehiculosOptions = vehiculos.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })


    return (
        <>
            <Formik
                initialValues={emptyValues()}
                validationSchema={validation()}
                onSubmit={async (values, options) => {
                    try {
                        setLoading(true);
                        const salida = values;

                        await crearSalida({
                            variables: {
                                input: salida
                            }
                        });
                        scrollTop();
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "La salida se ha creado exitosamente!",
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
                                label="Destino del viaje"
                                name="destino"
                                icon='clipboard outline'
                                value={values.destino}
                                onChange={handleChange}
                                error={errors.destino}
                            />
                            <Form.TextArea
                                label="Actividades a realizar"
                                name="actividades"
                                icon='clipboard outline'
                                value={values.actividades}
                                onChange={handleChange}
                                error={errors.actividades}
                            />

                            <SelectFormik
                                name="departamento"
                                options={departamentosOptions}
                                label="Pedido por el departamento"
                            />

                            <SelectFormik
                                name="vehiculo"
                                options={vehiculosOptions}
                                label="Vehiculo escogido"
                            />

                            <Form.Input
                                type="date"
                                label="Fecha de la salida"
                                name="fecha"
                                icon='clipboard outline'
                                value={values.fecha}
                                onChange={handleChange}
                                error={errors.fecha}
                            />

                            <Form.Input
                                type="time"
                                label="Hora de salida"
                                name="hora_salida"
                                icon='clipboard outline'
                                value={values.hora_salida}
                                onChange={handleChange}
                                error={errors.hora_salida}
                            />

                            <Form.Input
                                type="time"
                                label="Hora de llegada"
                                name="hora_llegada"
                                icon='clipboard outline'
                                value={values.hora_llegada}
                                onChange={handleChange}
                                error={errors.hora_llegada}
                            />

                            <Form.Input
                                label="Chofer del viaje"
                                name="chofer"
                                icon='clipboard outline'
                                value={values.chofer}
                                onChange={handleChange}
                                error={errors.chofer}
                            />

                            <Button type="submit">Crear Salida</Button>
                        </Form>
                        <div className="formulario-salida__mensaje-form">
                            <MessageForm data="La salida no necesita verificacion ni aprobacion." />
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
function emptyValues() {
    return {
        destino: "",
        actividades: "",
        departamento: "",
        fecha: "",
        hora_salida: "",
        hora_llegada: "",
        vehiculo: "",
        chofer: "",
    }
}


function validation() {
    return Yup.object({
        destino: Yup.string().required("Este campo es obligatorio"),
        actividades: Yup.string().required("Este campo es obligatorio"),
        departamento: Yup.string().required("Este campo es obligatorio"),
        fecha: Yup.string().required("Este campo es obligatorio"),
        hora_salida: Yup.string().required("Este campo es obligatorio"),
        hora_llegada: Yup.string().required("Este campo es obligatorio"),
        vehiculo: Yup.string().required("Este campo es obligatorio"),
        chofer: Yup.string().required("Este campo es obligatorio")
    })
}

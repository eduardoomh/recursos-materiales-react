import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Form, Button, Loader } from "semantic-ui-react";
import { getStorage, saveStorage } from "../../../servicios/reutilizables/localStorage";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { newEvento, getEventos } from "../../../servicios/evento";
import MessageForm from "../../../components/reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import "./FormularioEvento.scss";

export default function FormularioEvento() {
    const [loading, setLoading] = useState(false);
    const { identity } = useIdentity();
    const history = useHistory();

    let departamentos = getStorage("departamentos");
    let locaciones = getStorage("espacios");

    const formik = useFormik({
        initialValues: emptyValues(identity),
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await newEvento(data);

                if (response.status === "success") {
                    const eventos = await getEventos();
                    if (eventos.status === "success") {
                        saveStorage("eventos", eventos.elementos.data);
                    }
                    scrollTop();
                    setLoading(false);
                    toast.success("Solicitud creada con exito");
                    history.push(`/eventos/${response.elemento_creado.id}`);

                } else {
                    scrollTop();
                    toast.error("Lo sentimos, los datos introducidos han sido incorrectos");
                    setLoading(false);

                }

            }
            catch (err) {
                setLoading(false);
                toast.error("La solicitud no ha podido ser creada, intentelo mas tarde");
                console.log(err);
            }
        }
    })



    return (
        <>
            <div className="formulario-evento">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Nombre del evento"
                        name="evento"
                        icon='clipboard outline'
                        value={formik.values.evento}
                        onChange={formik.handleChange}
                        error={formik.errors.evento}
                    />
                    <Form.TextArea
                        label="Actividades a realizar"
                        name="actividades"
                        value={formik.values.actividades}
                        onChange={formik.handleChange}
                        error={formik.errors.actividades}
                    />

                    <div className="field">
                        <label htmlFor="depto_solicitante">Departamento solicitante</label>
                        <select
                            className="ui selection"
                            id="depto_solicitante"
                            name="depto_solicitante"
                            value={formik.values.depto_solicitante}
                            onChange={formik.handleChange}
                            error={formik.errors.depto_solicitante}
                        >
                            {
                                departamentos.map(d => <option key={d.id} value={d.id}>{d.departamento}</option>)
                            }
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="espacio_id">Locacion elegida</label>
                        <select
                            className="ui selection"
                            id="espacio_id"
                            name="espacio_id"
                            value={formik.values.espacio_id}
                            onChange={formik.handleChange}
                            error={formik.errors.espacio_id}
                        >
                            {
                                locaciones.map(l => <option key={l.id} value={l.id}>{l.espacio}</option>)
                            }
                        </select>
                    </div>

                    <Form.Input
                        label="Fecha de realizacion"
                        type="date"
                        name="fecha"
                        icon='calendar plus outline'
                        value={formik.values.fecha}
                        onChange={formik.handleChange}
                        error={formik.errors.fecha}
                    />

                    <Form.Input
                        label="Hora de comienzo"
                        type="time"
                        name="hora_inicio"
                        icon="clock outline"
                        value={formik.values.hora_inicio}
                        onChange={formik.handleChange}
                        error={formik.errors.hora_inicio}
                    />

                    <Form.Input
                        label="Hora de finalizacion"
                        type="time"
                        name="hora_final"
                        icon="clock"
                        value={formik.values.hora_final}
                        onChange={formik.handleChange}
                        error={formik.errors.hora_final}
                    />

                    <Button type="submit">Crear Evento</Button>
                </Form>
                <MessageForm />

            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
        </>
    )
}

function emptyValues(props) {
    const { id } = props;
    return {
        evento: "",
        depto_solicitante: "",
        espacio_id: "",
        usuario_id: id,
        fecha: "",
        hora_inicio: "",
        hora_final: "",
        actividades: "",

    }
}

function validation() {
    return Yup.object({
        evento: Yup.string().required("Este campo es obligatorio"),
        fecha: Yup.string().required("La fecha es obligatoria"),
        depto_solicitante: Yup.number().required("Este campo es obligatorio"),
        espacio_id: Yup.number().required("Este campo es obligatorio"),
        hora_inicio: Yup.string().required("Este campo es obligatorio"),
        hora_final: Yup.string().required("Este campo es obligatorio"),
        actividades: Yup.string().required("Este campo es obligatorio"),
        usuario_id: Yup.number().required()
    })
}

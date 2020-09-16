import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Form, Button, Loader } from "semantic-ui-react";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { toast } from "react-toastify";
import { getStorage, saveStorage } from "../../../servicios/reutilizables/localStorage";
import { newMantenimiento, getMantenimientos } from "../../../servicios/mantenimiento";
import MessageForm from "../../../components/reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import "./FormularioMantenimiento.scss";

export default function FormularioMantenimiento() {
    const [loading, setLoading] = useState(false);
    const { identity } = useIdentity();
    const history = useHistory();

    let departamentos = getStorage("departamentos");
    let statusorders = getStorage("statusorders");

    const formik = useFormik({
        initialValues: emptyValues(identity),
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await newMantenimiento(data);

                if (response.status === "success") {
                    const mantenimientos = await getMantenimientos();
                    if (mantenimientos.status === "success") {
                        saveStorage("mantenimientos", mantenimientos.elementos.data);
                    }
                    scrollTop();
                    setLoading(false);
                    toast.success("Solicitud creada con exito");
                    history.push(`/mantenimientos/${response.elemento_creado.id}`);

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
            <div className="formulario-mantenimiento">
                <Form onSubmit={formik.handleSubmit}>
                    <div className="field">
                        <label htmlFor="servicio_id">Tipo de servicio</label>
                        <select
                            className="ui selection"
                            id="servicio_id"
                            name="servicio_id"
                            placeholder="Selecciona una opcion"
                            value={formik.values.servicio_id}
                            onChange={formik.handleChange}
                            error={formik.errors.servicio_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                statusorders.map(s => <option key={s.id} value={s.id}>{s.status}</option>)
                            }
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="tipo">Forma de servicio</label>
                        <select
                            className="ui selection"
                            id="tipo"
                            name="tipo"
                            value={formik.values.tipo}
                            onChange={formik.handleChange}
                            error={formik.errors.tipo}
                        >
                            <option>Seleccione una opcion</option>
                            <option key="interno" value="interno">Interna</option>
                            <option key="externo" value="externo">Externa</option>
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="asignado_a">Asignado A</label>
                        <select
                            className="ui selection"
                            id="asignado_a"
                            name="asignado_a"
                            value={formik.values.asignado_a}
                            onChange={formik.handleChange}
                            error={formik.errors.asignado_a}
                        >
                            <option>Seleccione una opcion</option>
                            <option key="Interno" value="interno">Interno</option>
                            <option key="Externo" value="externo">Externo</option>
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="depto_solicitante">Departamento Solicitante</label>
                        <select
                            className="ui selection"
                            id="depto_solicitante"
                            name="depto_solicitante"
                            value={formik.values.depto_solicitante}
                            onChange={formik.handleChange}
                            error={formik.errors.depto_solicitante}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                departamentos.map(d => <option key={d.id} value={d.id}>{d.departamento}</option>)
                            }
                        </select>
                    </div>

                    <Form.TextArea
                        label="Actividades a realizar"
                        name="trabajo_realizado"
                        value={formik.values.trabajo_realizado}
                        onChange={formik.handleChange}
                        error={formik.errors.trabajo_realizado}
                    />
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
                    <Button type="submit">Crear Mantenimiento</Button>
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
        tipo: "",
        servicio_id: "",
        asignado_a: "",
        depto_solicitante: "",
        usuario_id: id,
        fecha: "",
        hora_inicio: "",
        hora_final: "",
        trabajo_realizado: "",
    }
}

function validation() {
    return Yup.object({
        tipo: Yup.string().required("Este campo es obligatorio"),
        servicio_id: Yup.number().required("Este campo es obligatorio"),
        asignado_a: Yup.string().required("Este campo es obligatorio"),
        depto_solicitante: Yup.string().required("Este campo es obligatorio"),
        usuario_id: Yup.number().required("Este campo es obligatorio"),
        fecha: Yup.string().required("Este campo es obligatorio"),
        hora_inicio: Yup.string().required("Este campo es obligatorio"),
        hora_final: Yup.string().required("Este campo es obligatorio"),
        trabajo_realizado: Yup.string().required("Este campo es obligatorio"),
    })
}

import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Form, Button } from "semantic-ui-react";
import { getStorage, saveStorage } from "../../../servicios/reutilizables/localStorage";
import { updateSalida, getSalidas } from "../../../servicios/salida";
import MessageForm from "../../reutilizables/MessageForm/MessageForm";
import "./FormularioActualizar.scss";

export default function FormularioActualizar(props) {
    const { setLoading, solicitud } = props;
    const { identity } = useIdentity();
    const history = useHistory();

    let departamentos = getStorage("departamentos");
    let vehiculos = getStorage("vehiculos");


    const formik = useFormik({
        initialValues: {
            destino: solicitud.destino,
            depto_solicitante: solicitud.depto_solicitante,
            vehiculo_id: solicitud.vehiculo_id,
            usuario_id: identity.id,
            fecha: solicitud.fecha,
            hora_salida: solicitud.hora_salida,
            hora_llegada: solicitud.hora_llegada,
            descripcion: solicitud.descripcion,
            chofer: solicitud.chofer,
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateSalida(data, solicitud.id);

                if (response.status === "success") {
                    const salidas = await getSalidas();
                    if (salidas.status === "success") {
                        saveStorage("salidas", salidas.elementos.data);
                    }
                    scrollTop();
                    setLoading(false);
                    toast.success("Solicitud creada con exito");
                    history.push(`/salidas/${solicitud.id}`);

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
            <div className="formulario-salida">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Destino escogido"
                        icon="university"
                        name="destino"
                        value={formik.values.destino}
                        onChange={formik.handleChange}
                        error={formik.errors.destino}
                    />
                    <Form.TextArea
                        label="Descripcion de las actividades"
                        name="descripcion"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.errors.descripcion}
                    />

                    <div className="field">
                        <label htmlFor="vehiculo_id">Vehiculo escogido</label>
                        <select
                            className="ui selection"
                            id="vehiculo_id"
                            name="vehiculo_id"
                            value={formik.values.vehiculo_id}
                            onChange={formik.handleChange}
                            error={formik.errors.vehiculo_id}
                        >
                            {
                                vehiculos.map(v => <option key={v.id} value={v.id}>{v.vehiculo}</option>)
                            }
                        </select>
                    </div>
                    <Form.Input
                        label="Nombre del chofer"
                        icon='user circle'
                        name="chofer"
                        value={formik.values.chofer}
                        onChange={formik.handleChange}
                        error={formik.errors.chofer}
                    />

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
                            {
                                departamentos.map(d => <option key={d.id} value={d.id}>{d.departamento}</option>)
                            }
                        </select>
                    </div>

                    <Form.Input
                        label="Fecha de realizacion"
                        type="date"
                        icon='calendar plus outline'
                        name="fecha"
                        value={formik.values.fecha}
                        onChange={formik.handleChange}
                        error={formik.errors.fecha}
                    />

                    <Form.Input
                        label="Hora de salida"
                        type="time"
                        icon="clock outline"
                        name="hora_salida"
                        value={formik.values.hora_salida}
                        onChange={formik.handleChange}
                        error={formik.errors.hora_salida}
                    />

                    <Form.Input
                        label="Hora de llegada"
                        type="time"
                        icon="clock"
                        name="hora_llegada"
                        value={formik.values.hora_llegada}
                        onChange={formik.handleChange}
                        error={formik.errors.hora_llegada}
                    />
                    <Button type="submit">Actualizar Salida</Button>
                </Form>
                <MessageForm />

            </div>
    )
}

function validation() {
    return Yup.object({
        destino: Yup.string().required("Este campo es obligatorio"),
        depto_solicitante: Yup.number().required("Este campo es obligatorio"),
        vehiculo_id: Yup.number().required("Este campo es obligatorio"),
        usuario_id: Yup.number().required("Este campo es obligatorio"),
        fecha: Yup.string().required("Este campo es obligatorio"),
        hora_salida: Yup.string().required("Este campo es obligatorio"),
        hora_llegada: Yup.string().required("Este campo es obligatorio"),
        descripcion: Yup.string().required("Este campo es obligatorio"),
        chofer: Yup.string().required("Este campo es obligatorio"),
    })
}
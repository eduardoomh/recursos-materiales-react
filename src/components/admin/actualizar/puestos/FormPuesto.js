import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updatePuesto } from "../../../../servicios/puesto";
import { getStorage } from "../../../../servicios/reutilizables/localStorage";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormPuesto.scss";

export default function FormPuesto(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const users = getStorage("users");
    const departamentos = getStorage("departamentos");
    const cargos = getStorage("cargos");

    const formik = useFormik({
        initialValues: {
            departamento_id: solicitud.departamento_id,
            cargo_id: solicitud.cargo_id,
            usuario_id: solicitud.usuario_id
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updatePuesto(data.solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/puestos/${solicitud.id}`);

                } else {
                    scrollTop();
                    toast.error("Lo sentimos, los datos introducidos han sido incorrectos");
                    setLoading(false);

                }

            }
            catch (err) {
                setLoading(false);
                toast.error("Los datos no han podido ser guardados, intentelo mas tarde");
                console.log(err);
            }
        }
    })



    return (
        <>
            <div className="formulario-admin">
                <Form onSubmit={formik.handleSubmit}>
                <div className="field">
                        <label htmlFor="usuario_id">Usuario elegido</label>
                        <select
                            className="ui selection"
                            id="usuario_id"
                            name="usuario_id"
                            value={formik.values.usuario_id}
                            onChange={formik.handleChange}
                            error={formik.errors.usuario_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                users.map(d => <option key={d.id} value={d.id}>{`${d.name} ${d.surname}`}</option>)
                            }
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="departamento_id">Pertenece al departamento</label>
                        <select
                            className="ui selection"
                            id="departamento_id"
                            name="departamento_id"
                            value={formik.values.departamento_id}
                            onChange={formik.handleChange}
                            error={formik.errors.departamento_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                departamentos.map(d => <option key={d.id} value={d.id}>{d.departamento}</option>)
                            }
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="cargo_id">Cargo asignado</label>
                        <select
                            className="ui selection"
                            id="cargo_id"
                            name="cargo_id"
                            value={formik.values.cargo_id}
                            onChange={formik.handleChange}
                            error={formik.errors.cargo_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                cargos.map(d => <option key={d.id} value={d.id}>{d.cargo}</option>)
                            }
                        </select>
                    </div>
                

                    <Button type="submit">Actualizar Puesto</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}


function validation() {
    return Yup.object({
        departamento_id: Yup.number().required("Este campo es obligatorio"),
        cargo_id: Yup.number().required("Este campo es obligatorio"),
        usuario_id: Yup.number().required("Este campo es obligatorio"),
    })
}

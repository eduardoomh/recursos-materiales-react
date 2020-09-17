import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateDepartamento } from "../../../../servicios/departamento";
import { getStorage } from "../../../../servicios/reutilizables/localStorage";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormDepartamento.scss";

export default function FormDepartamento(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const subdirecciones = getStorage("subdirecciones");

    const formik = useFormik({
        initialValues: {
            departamento: solicitud.departamento,
            subdireccion_id: solicitud.subdireccion_id,
            telefono: solicitud.telefono,
            correo: solicitud.correo
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateDepartamento(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/departamentos/${solicitud.id}`);

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
                    <Form.Input
                        label="Nombre del departamento"
                        name="departamento"
                        icon='clipboard outline'
                        value={formik.values.departamento}
                        onChange={formik.handleChange}
                        error={formik.errors.departamento}
                    />
                    <Form.Input
                        label="Telefono de contacto"
                        name="telefono"
                        icon='clipboard outline'
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        error={formik.errors.telefono}
                    />
                    <Form.Input
                        label="Correo electronico"
                        name="correo"
                        icon='clipboard outline'
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        error={formik.errors.correo}
                    />

                    <div className="field">
                        <label htmlFor="subdireccion_id">Pertenece a la subdireccion</label>
                        <select
                            className="ui selection"
                            id="subdireccion_id"
                            name="subdireccion_id"
                            value={formik.values.subdireccion_id}
                            onChange={formik.handleChange}
                            error={formik.errors.subdireccion_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                subdirecciones.map(d => <option key={d.id} value={d.id}>{d.subdireccion}</option>)
                            }
                        </select>
                    </div>

                    <Button type="submit">Crear Departamento</Button>
                </Form>
                <MessageForm />

            </div>
        </>
    )
}


function validation() {
    return Yup.object({
        departamento: Yup.string().required("Este campo es obligatorio"),
        subdireccion_id: Yup.number().required("Este campo es obligatorio"),
        telefono: Yup.string().required("Este campo es obligatorio"),
        correo: Yup.string().email("Este correo no es valido").required("Este campo es obligatorio")
    })
}

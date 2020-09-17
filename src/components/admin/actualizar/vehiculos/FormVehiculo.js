import React  from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { updateVehiculo } from "../../../../servicios/vehiculo";
import { getStorage } from "../../../../servicios/reutilizables/localStorage";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import "./FormVehiculo.scss";

export default function FormVehiculo(props) {
    const { setLoading, solicitud} = props;
    const history = useHistory();

    const statusvehiculos = getStorage("statusvehiculos");

    const formik = useFormik({
        initialValues:{
            vehiculo: solicitud.vehiculo,
            marca: solicitud.marca,
            placas: solicitud.placas,
            kilometraje: solicitud.kilometraje || "",
            status_id: solicitud.status_id
        },
        validationSchema: validation(),
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const response = await updateVehiculo(data, solicitud.id);

                if (response.status === "success") {
                    scrollTop();
                    setLoading(false);
                    toast.success("Dato creado con exito");
                    history.push(`/admin/vehiculos/${solicitud.id}`);

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
                        label="Nombre del vehiculo"
                        name="vehiculo"
                        icon='clipboard outline'
                        value={formik.values.vehiculo}
                        onChange={formik.handleChange}
                        error={formik.errors.vehiculo}
                    />
                    <Form.Input
                        label="Modelo del vehiculo"
                        name="marca"
                        icon='clipboard outline'
                        value={formik.values.marca}
                        onChange={formik.handleChange}
                        error={formik.errors.marca}
                    />
                    <Form.Input
                        label="Placas del vehiculo"
                        name="placas"
                        icon='clipboard outline'
                        value={formik.values.placas}
                        onChange={formik.handleChange}
                        error={formik.errors.placas}
                    />
                    <Form.Input
                        label="Kilometraje"
                        name="vehiculo"
                        icon='clipboard outline'
                        value={formik.values.kilometraje}
                        onChange={formik.handleChange}
                        error={formik.errors.kilometraje}
                    />

                    <div className="field">
                        <label htmlFor="status_id">Estado del vehiculo</label>
                        <select
                            className="ui selection"
                            id="status_id"
                            name="status_id"
                            value={formik.values.status_id}
                            onChange={formik.handleChange}
                            error={formik.errors.status_id}
                        >
                            <option>Seleccione una opcion</option>
                            {
                                statusvehiculos.map(d => <option key={d.id} value={d.id}>{d.status}</option>)
                            }
                        </select>
                    </div>

                    <Button type="submit">Actualizar Vehiculo</Button>
                </Form>
                <MessageForm />

            </div>

        </>
    )
}


function validation() {
    return Yup.object({
        vehiculo: Yup.string().required("Este campo es obligatorio"),
        marca: Yup.string().required("Este campo es obligatorio"),
        placas: Yup.string().required("Este campo es obligatorio"),
        kilometraje: Yup.string().required("Este campo es obligatorio"),
        status_id: Yup.number().required("Este campo es obligatorio")
    })
}

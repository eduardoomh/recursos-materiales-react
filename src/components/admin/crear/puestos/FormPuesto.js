import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREAR_PERMISO } from "../../../../gql/permiso";
import { toast } from "react-toastify";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormPuesto.scss";

export default function FormPuesto(props) {
    const { usuarios, puestos, departamentos } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const history = useHistory();
    const [crearPermiso] = useMutation(CREAR_PERMISO);

    const departamentosOptions = departamentos.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const usuariosOptions = usuarios.map(d => {
        return { key: d.id, text: `${d.nombre} ${d.apellidos}`, value: d.id }
    })

    const PuestosOptions = puestos.map(d => {
        return { key: d.id, text: d.nombre, value: d.id }
    })

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push("/admin/puestos");
    }


    return (
        <>
            <Formik
                initialValues={emptyValues()}
                validationSchema={validation()}
                onSubmit={async (values, options) => {
                    try {
                        setLoading(true);
                        const permiso = values;

                        await crearPermiso({
                            variables: {
                                input: permiso
                            }
                        });
                        setLoading(false);
                        abrirModal();

                    }
                    catch (err) {
                        setLoading(false);
                        toast.error(err.message);
                    }
                }}
            >
                {({ handleSubmit }) => (
                    <div className="formulario-admin">
                        <Form onSubmit={handleSubmit}>
                            <SelectFormik
                                name="usuario"
                                options={usuariosOptions}
                                label="Nombre del usuario"
                            />
                            <SelectFormik
                                name="departamento"
                                options={departamentosOptions}
                                label="Departamento al que pertenece"
                            />
                            <SelectFormik
                                name="puesto"
                                options={PuestosOptions}
                                label="Puesto a ser asignado"
                            />

                            <Button type="submit">Crear Permiso</Button>
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
                titulo="Petición Exitosa"
                texto="El Permiso se ha creado con éxito."
                boton="Salir"
            />
        </>
    )
}

function emptyValues() {
    return {
        usuario: "",
        departamento: "",
        puesto: ""
    }
}

function validation() {
    return Yup.object({
        usuario: Yup.string().required("Este campo es obligatorio"),
        departamento: Yup.string().required("Este campo es obligatorio"),
        puesto: Yup.string().required("Este campo es obligatorio"),
    })
}

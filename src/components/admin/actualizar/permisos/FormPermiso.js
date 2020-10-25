import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_PERMISO } from "../../../../gql/permiso";
import { Form, Button, Loader } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import SelectFormik from "../../../reutilizables/SelectFormik/SelectFormik";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormPermiso.scss";

export default function FormPermiso(props) {
    const { usuarios, puestos, departamentos, solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const history = useHistory();
    const [actualizarPermiso] = useMutation(ACTUALIZAR_PERMISO);
    const [objetoMensaje, setObjetoMensaje] = useState({
        titulo: "",
        texto: "",
        boton: "",
        error: false
    })

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
        history.push(`/admin/permiso/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);
        abrirModal();
    }


    return (
        <>
            <Formik
                initialValues={emptyValues(solicitud)}
                validationSchema={validation()}
                onSubmit={async (values) => {
                    try {
                        setLoading(true);
                        const permiso = values;

                        await actualizarPermiso({
                            variables: {
                                id: solicitud.id,
                                input: permiso
                            }
                        });
                        cambiarMensaje({
                            titulo: "Solicitud Exitosa",
                            texto: "El permiso se ha actualizado exitosamente!",
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

                            <Button type="submit">Actualizar Permiso</Button>
                        </Form>
                        <div className="formulario-admin__mensaje-form">
                            <MessageForm data="Los datos que ingrese pueden ser modificados en cualquier momento." />
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
    const { usuario, departamento, puesto } = props;
    return {
        usuario: usuario.id,
        departamento: departamento.id,
        puesto: puesto.id
    }
}

function validation() {
    return Yup.object({
        usuario: Yup.string().required("Este campo es obligatorio"),
        departamento: Yup.string().required("Este campo es obligatorio"),
        puesto: Yup.string().required("Este campo es obligatorio"),
    })
}

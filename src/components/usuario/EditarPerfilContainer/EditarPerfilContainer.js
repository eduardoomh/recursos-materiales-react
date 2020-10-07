import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import useIdentity from "../../../utils/hooks/useIdentity";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_USUARIO } from "../../../gql/usuario";
import { Form, Button, Loader } from "semantic-ui-react";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import MessageForm from "../../reutilizables/MessageForm/MessageForm";
import ModalMensaje from "../../reutilizables/ModalMensaje/ModalMensaje";
import "./EditarPerfilContainer.scss";

export default function EditarPerfilContainer() {
    const [loading, setLoading] = useState(false);
    const [ abrir, setAbrir ] = useState(false);
    const { identity, updateIdentity } = useIdentity();
    const [ actualizarUsuario ] = useMutation(ACTUALIZAR_USUARIO);
    const history = useHistory();

    const abrirModal = () => {
        setAbrir(true);
    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push(`/usuario/perfil`);
    }

    const formik = useFormik({
        initialValues: {
            nombre: identity.nombre || "",
            apellidos: identity.apellidos || "",
            correo: identity.correo || "",
            numero_control: identity.numero_control || "",
            descripcion: identity.descripcion || "",
            telefono: identity.telefono || ""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es requerido"),
            apellidos: Yup.string().required("El apellido es requerido"),
            correo: Yup.string().email("El correo introducido no es valido").required("El correo es requerido"),
            numero_control: Yup.string().required("El numero de control es requerido")
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const user = values;

                const {data} = await actualizarUsuario({
                    variables: {
                        input: user
                    }
                });
                updateIdentity(data.actualizarUsuario);
                scrollTop();
                setLoading(false);
                abrirModal();

            }
            catch (err) {
                setLoading(false);
                toast.error(err.message);
            }
        }
    })

    return (
        <>
            <div className="editar-perfil-container">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Nombre(s)"
                        name="nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}

                    />
                    <Form.Input
                        label="Apellidos"
                        name="apellidos"
                        value={formik.values.apellidos}
                        onChange={formik.handleChange}
                        error={formik.errors.apellidos}
                    />
                    <Form.Input
                        label="Correo electronico"
                        name="correo"
                        value={formik.values.correo}
                        onSubmit={formik.handleChange}
                        error={formik.errors.correo}
                    />
                    <Form.Input
                        label="Numero de control"
                        name="numero_control"
                        value={formik.values.numero_control}
                        onChange={formik.handleChange}
                        error={formik.errors.numero_control}
                    />
                    <Form.TextArea
                        label="Una descripcion breve sobre usted"
                        placeholder="Escriba una descripcion breve sobre usted.."
                        name="descripcion"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.errors.descripcion}
                    />
                    <Form.Input
                        label="Telefono personal"
                        placeholder="Escriba un telefono personal de contacto"
                        name="telefono"
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        error={formik.errors.telefono}
                    />

                    <Button type="submit">actualizar</Button>
                </Form>
                <MessageForm 
                    titulo="Actualice sus datos" 
                    data="Procure escribir sus datos correctos, mas tarde podra editarlos de nuevo"
                />
            </div>
            <ModalBasic show={loading}>
                <Loader active={loading} size="big">Cargando Pagina...</Loader>
            </ModalBasic>
            <ModalMensaje
                centered={true}
                open={abrir}
                onClose={cerrarModal}
                titulo="Perfil Actualizado"
                texto="Sus datos se ha actualizado correctamente."
                boton="Salir"
            />
        </>
    )
}
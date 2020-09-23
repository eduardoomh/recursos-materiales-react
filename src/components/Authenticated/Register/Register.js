import React, {useState} from "react";
import { Form, Button, Modal } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { CREAR_USUARIO } from "../../../gql/usuario";
import "./Register.scss";

export default function Register(props) {
    const { setIsLogin } = props;
    const [dataUser, setDataUser] = useState(false);
    const [crearUsuario] = useMutation(CREAR_USUARIO);
    const [abrir, setAbrir] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required("Su nombre es requerido"),
            apellidos: Yup.string()
                .required("Los apellidos son requeridos"),
            correo: Yup.string()
                .email("El correo electrónico no es válido")
                .required("El correo electrónico es requerido"),
            numero_control: Yup.string()
                .required("El número de control es obligatorio"),
            contrasena: Yup.string()
                .required("La contraseña es obligatoria")
                .oneOf([Yup.ref("repetir_contrasena")], "Las contraseñas no son iguales"),
            repetir_contrasena: Yup.string()
                .required("La contraseña es obligatoria")
                .oneOf([Yup.ref("contrasena")], "Las contraseñas no son iguales"),

        }),
        onSubmit: async (formData) => {
            try {
                const nuevoUsuario = formData;
                delete nuevoUsuario.repetir_contrasena;

                const {data} = await crearUsuario({
                    variables: {
                        input: nuevoUsuario
                    }
                });
                toast.success("Usuario registrado correctamente");
                setDataUser(data.crearUsuario.nombre);
                abrirModal();

            }
            catch (err) {
                toast.error(err.message);
            }
        }
    });

    const abrirModal = () => {
        setAbrir(true);
        
    }

    const cerrarModal = () => {
        setAbrir(false);
        setIsLogin(true);

    }

    return (
        <>
            <Form className="register" onSubmit={formik.handleSubmit}>
                <Form.Input
                    type="text"
                    label="Introduzca su nombre"
                    name="nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    error={formik.errors.nombre}
                />
                <Form.Input
                    type="text"
                    label="Introduzca sus apellidos"
                    name="apellidos"
                    value={formik.values.apellidos}
                    onChange={formik.handleChange}
                    error={formik.errors.apellidos}
                />
                <Form.Input
                    type="text"
                    label="Introduzca un correo electrónico"
                    name="correo"
                    value={formik.values.correo}
                    onChange={formik.handleChange}
                    error={formik.errors.correo}
                />
                <Form.Input
                    type="text"
                    label="Escriba su número de control"
                    name="numero_control"
                    value={formik.values.numero_control}
                    onChange={formik.handleChange}
                    error={formik.errors.numero_control}

                />
                <Form.Input
                    type="password"
                    label="Escriba una contraseña"
                    name="contrasena"
                    value={formik.values.contrasena}
                    onChange={formik.handleChange}
                    error={formik.errors.contrasena}
                />
                <Form.Input
                    type="password"
                    label="Repita su contraseña"
                    name="repetir_contrasena"
                    value={formik.values.repetir_contrasena}
                    onChange={formik.handleChange}
                    error={formik.errors.repetir_contrasena}

                />
                <Button type="input">Crear Cuenta</Button>
            </Form>
            <Modal
                centered={true}
                open={abrir}
                onClose={() => cerrarModal()}
            >
                <Modal.Header>Bienvenido(a) {dataUser && `${dataUser}`}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        Su cuenta ha sido creada, espere a que el usuario administrador acepte su solicitud.
              </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => cerrarModal()}>Entendido</Button>
                </Modal.Actions>
            </Modal>
        </>
    )

}

function initialValues() {
    return {
        nombre: "",
        apellidos: "",
        correo: "",
        numero_control: "",
        contrasena: "",
        repetir_contrasena: "",

    };
}

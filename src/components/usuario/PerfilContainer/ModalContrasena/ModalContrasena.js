import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_USUARIO } from "../../../../gql/usuario";
import { scrollTop } from "../../../../utils/reutilizables/scroll";
import { Modal, Button, Form } from "semantic-ui-react";
import "./ModalContrasena.scss";

export default function ModalContrasena(props) {
    const { abrir, cerrar } = props;
    const [loading, setLoading] = useState(false);
    const [actualizarUsuario] = useMutation(ACTUALIZAR_USUARIO);

    return (
        <Modal
            open={abrir}
            onClose={cerrar}
        >
            <Modal.Header>Cambie su contrasena</Modal.Header>
            <Modal.Content>
                <>
                    <Formik
                        initialValues={emptyValues()}
                        validationSchema={validation()}
                        onSubmit={async (values, options) => {
                            try {
                                setLoading(true);

                                await actualizarUsuario({
                                    variables: {
                                        input: {
                                            contrasena_actual: values.contrasena_actual,
                                            contrasena_nueva: values.contrasena_nueva
                                        }
                                    }
                                });
                                scrollTop();
                                setLoading(false);
                                toast.success("Su contrasena se ha actualizado con exito");
                                cerrar();

                            }
                            catch (err) {
                                setLoading(false);
                                toast.error(err.message);
                            }
                        }}
                    >
                        {({ values, handleChange, errors, handleSubmit }) => (
                            <div className="modal-contrasena">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Input
                                        type="password"
                                        label="Contrasena actual"
                                        name="contrasena_actual"
                                        icon='lock'
                                        placeholder='Rellene este campo'
                                        value={values.contrasena_actual}
                                        onChange={handleChange}
                                        error={errors.contrasena_actual}
                                    />

                                    <Form.Input
                                        type="password"
                                        label="Contrasena nueva"
                                        name="contrasena_nueva"
                                        icon='lock'
                                        placeholder='Rellene este campo'
                                        value={values.contrasena_nueva}
                                        onChange={handleChange}
                                        error={errors.contrasena_nueva}
                                    />

                                    <Form.Input
                                        type="password"
                                        label="Repetir contrasena nueva"
                                        name="repetir_contrasena_nueva"
                                        icon='lock'
                                        placeholder='Rellene este campo'
                                        value={values.repetir_contrasena_nueva}
                                        onChange={handleChange}
                                        error={errors.repetir_contrasena_nueva}
                                    />
                                    <div className="modal-contrasena__boton">
                                       <Button type="submit" loading={loading}>Cambiar contrasena</Button> 
                                    </div>
                                    
                                </Form>
                            </div>
                        )}
                    </Formik>
                </>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={cerrar}>Cerrar</Button>
            </Modal.Actions>
        </Modal>
    )
}

function emptyValues() {
    return {
        contrasena_actual: "",
        contrasena_nueva: "",
        repetir_contrasena_nueva: "",
    }
}

function validation() {
    return Yup.object({
        contrasena_actual: Yup.string().required("Este campo es obligatorio"),
        contrasena_nueva: Yup.string().required("Este campo es obligatorio")
            .oneOf([Yup.ref("repetir_contrasena_nueva")], "Las contraseñas no son iguales"),
        repetir_contrasena_nueva: Yup.string().required("Este campo es obligatorio")
            .oneOf([Yup.ref("contrasena_nueva")], "Las contraseñas no son iguales"),
    })
}
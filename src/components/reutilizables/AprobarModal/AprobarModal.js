import React from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { Modal, Button, Header, Form, Icon } from "semantic-ui-react";
import "./AprobarModal.scss";

export default function AprobarModal(props) {
    const { abrir, cerrar, verificado, refetch, query } = props;
    const { id } = useParams();

    return (
        <Modal
            className="aprobar-modal"
            onClose={cerrar}
            open={abrir}
            dimmer="blurring"
        >
            <Modal.Header>{!verificado ? "Verifique" : "Apruebe"} la solicitud</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Introduzca su contrasena actual para confirmar credenciales</Header>
                    <Formik
                        initialValues={valores()}
                        validationSchema={validaciones()}
                        onSubmit={async (values, options) => {
                            console.log(values.contrasena);
                            console.log(id);
                            try {
                                if (!verificado) {
                                    await query({
                                        variables: {
                                            id: id,
                                            input: {
                                                verificado: true
                                            },
                                            contrasena: values.contrasena
                                        }

                                    });
                                } else {
                                    await query({
                                        variables: {
                                            id: id,
                                            input: {
                                                aprobado: true
                                            },
                                            contrasena: values.contrasena
                                        }

                                    });
                                }
                                toast.success(`La solicitud se ha ${!verificado ? "Verificado" : "Aprobado"} con exito`);
                                refetch();
                            }
                            catch (error) {
                                toast.error(error.message);
                                console.log(error);
                            }

                        }}
                    >
                        {({ values, handleChange, errors, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Input
                                    type="password"
                                    name="contrasena"
                                    icon='lock'
                                    value={values.contrasena}
                                    onChange={handleChange}
                                    error={errors.contrasena}
                                />
                                <div className="aprobar-modal__div">
                                    <Button type="submit" className="aprobar-modal__boton" icon labelPosition='right'>
                                        {!verificado ? "Verificar" : "Aprobar"} solicitud
                                    <Icon name='check' />
                                    </Button>
                                </div>



                            </Form>
                        )}
                    </Formik>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Cerrar Modal"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={cerrar}
                />
            </Modal.Actions>
        </Modal>
    )
}

function valores() {
    return {
        contrasena: ""
    }
}

function validaciones() {
    return Yup.object({
        contrasena: Yup.string().required("Este campo es obligatorio")
    })

}

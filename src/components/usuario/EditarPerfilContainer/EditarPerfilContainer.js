import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { scrollTop } from "../../../utils/reutilizables/scroll";
import { updateUser } from "../../../servicios/user";
import useIdentity from "../../../utils/hooks/useIdentity";
import { Form, Button, Loader } from "semantic-ui-react";
import ModalBasic from "../../reutilizables/ModalBasic/ModalBasic";
import MessageForm from "../../reutilizables/MessageForm/MessageForm";
import "./EditarPerfilContainer.scss";

export default function EditarPerfilContainer() {
    const [loading, setLoading] = useState(false);
    const { identity, updateIdentity } = useIdentity();
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: identity.name || "",
            surname: identity.surname || "",
            email: identity.email || "",
            control_number: identity.control_number || "",
            description: identity.description || "",
            phone: identity.phone || ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("El nombre es requerido"),
            surname: Yup.string().required("El apellido es requerido"),
            email: Yup.string().email("El correo introducido no es valido").required("El correo es requerido"),
            control_number: Yup.string().required("El numero de control es requerido")
        }),
        onSubmit: async (data) => {
            try{
                setLoading(true);
                const response = await updateUser(data, identity.id);
                if(response.status === "success"){
                    updateIdentity(data);
                    scrollTop();
                    setLoading(false);
                    toast.success("Su perfil se ha actualizado correctamente");
                    history.push("/usuario/perfil");

                }else{
                    setLoading(false);
                    toast.error("Lo sentimos, los datos no han sido correctos");
                }


            }
            catch(err){
                setLoading(false);
                toast.error("El usuario no ha podido actualizarse, intentelo de nuevo");
                console.log(err);
            }
        }
    })

    return (
        <>
            <div className="editar-perfil-container">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Nombre(s)"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.errors.name}

                    />
                    <Form.Input
                        label="Apellidos"
                        name="surname"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        error={formik.errors.surname}
                    />
                    <Form.Input
                        label="Correo electronico"
                        name="email"
                        value={formik.values.email}
                        onSubmit={formik.handleChange}
                        error={formik.errors.email}
                    />
                    <Form.Input
                        label="Numero de control"
                        name="control_number"
                        value={formik.values.control_number}
                        onChange={formik.handleChange}
                        error={formik.errors.control_number}
                    />
                    <Form.TextArea
                        label="Una descripcion breve sobre usted"
                        placeholder="Escriba una descripcion breve sobre usted.."
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.errors.description}
                    />
                    <Form.Input
                        label="Telefono personal"
                        placeholder="Escriba un telefono personal de contacto"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.errors.phone}
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
        </>
    )
}
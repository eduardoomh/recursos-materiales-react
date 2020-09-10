import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useIdentity from "../../../utils/hooks/useIdentity";
import { loginService } from "../../../servicios/user";
import { saveStorage } from "../../../servicios/reutilizables/localStorage";
import { Form, Button } from "semantic-ui-react";
import "./Login.scss";

export default function Login(){
    const { login } = useIdentity();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("El correo ingresado no es valido.").required("El correo es obligatorio."),
            password: Yup.string().required("La cotrasena es obligatoria.")
        }),
        onSubmit: async (data) => {

            try{       
                const response = await loginService(data);
                console.log(response);

                if(response !== undefined && response.status === "success"){

                    saveStorage("usuario", response.usuario);
                    saveStorage("token", response.acceso.token);
                    login();
                    toast.success("Ha ingresado al sistema correctamente");

                }else{
                    toast.error("Sus datos son incorrectos.");
                }
                 
            }
            catch(err){
                toast.error("Parece que los datos han sido incorrectos");
                console.log(err);
            }
        }
    })

    return(
        <Form className="login" onSubmit={formik.handleSubmit}>
            <Form.Input 
                type="text" 
                label="Ingrese su correo electronico" 
                name="email" 
                onChange={formik.handleChange}
                error={formik.errors.correo}
            />
            <Form.Input 
                type="password" 
                label="Ingrese su contrasena" 
                name="password" 
                onChange={formik.handleChange}
                error={formik.errors.contrasena}
            />
            <Button type="submit">Ingresar</Button>
        </Form>

    )
}
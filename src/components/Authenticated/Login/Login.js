import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useIdentity from "../../../utils/hooks/useIdentity";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../gql/usuario";
import { setToken, decodeToken } from "../../../utils/reutilizables/token";
import { Form, Button, Image } from "semantic-ui-react";
import "./Login.scss";
import logo from "../../../assets/img/logo.png";
 
export default function Login(props){
    const { loading, setLoading } = props;
    const { setLogin } = useIdentity();
    const [login] = useMutation(LOGIN);

    const formik = useFormik({
        initialValues: {
            correo: "",
            contrasena: ""
        },
        validationSchema: Yup.object({
            correo: Yup.string().email("El correo ingresado no es válido.").required("El correo es obligatorio."),
            contrasena: Yup.string().required("La contraseña es obligatoria.")
        }),
        onSubmit: async (formData) => {
            
            try{       
                setLoading(true);
                const {data} = await login({
                    variables: {
                        input: formData
                    }
                })
                const {token} = data.login;
                setToken(token);
                setLogin(decodeToken(token));
                setLoading(false);
                toast.success("Ha ingresado exitosamente al sistema");
                console.log(token);
            }
            catch(err){
                setLoading(false);
                toast.error(err.message);
                console.log(err.message);
            }
        }
    })

    return(
        <Form className="login" onSubmit={formik.handleSubmit}>
            
            <div className="logo">
                <Image src={logo} />
            </div>
            
            <Form.Input 
                type="text" 
                label="Ingrese su correo electrónico" 
                name="correo" 
                onChange={formik.handleChange}
                error={formik.errors.correo}
            />
            <Form.Input 
                type="password" 
                label="Ingrese su contraseña" 
                name="contrasena" 
                onChange={formik.handleChange}
                error={formik.errors.contrasena}
            />
            <Button type="submit" loading={loading}>Ingresar</Button>
        </Form>

    )
}
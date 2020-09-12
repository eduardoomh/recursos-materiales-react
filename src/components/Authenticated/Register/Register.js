import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./Register.scss";

export default function Register(){

    return(
        <Form className="register">
            <Form.Input type="text" label="Introduzca su nombre" />
            <Form.Input type="text" label="Introduzca sus apellidos" />
            <Form.Input type="text" label="Introduzca un correo electronico" />
            <Form.Input type="password" label="Escriba una contrasena" />
            <Form.Input type="password" label="Repita su contrasena" />
            <Button>Crear cuenta</Button>
        </Form>
    )
}
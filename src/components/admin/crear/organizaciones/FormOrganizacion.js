import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREAR_ACOMODOSILLA } from "../../../../gql/acomodosilla";
import { saveStorage, getStorage } from "../../../../servicios/reutilizables/localStorage";
import { Form, Button, Loader, Icon } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormOrganizacion.scss";

export default function FormOrganizacion() {
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [crearAcomodosilla] = useMutation(CREAR_ACOMODOSILLA);
    const [objetoMensaje, setObjetoMensaje] = useState({
        titulo: "",
        texto: "",
        boton: "",
        error: false
    })
    const history = useHistory();
    let value;

    const abrirModal = () => {
        setAbrir(true);

    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push("/admin/organizaciones/ref");
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);
        abrirModal();
    }

    const formik = useFormik({
        initialValues: emptyValues(),
        validationSchema: validation(),
        onSubmit: async (formData) => {
            value = saveStorage("nombreAcomodosilla",formData);
            console.log(value)
        }
    })

    const onDrop = useCallback(async (acceptedFile) => {
        console.log(acceptedFile);
        const file = acceptedFile[0];

        try {
            setLoading(true);
            console.log(formik.values.nombre)
            console.log(value);
            const result = await crearAcomodosilla({ variables: { file, input: getStorage("nombreAcomodosilla") } });
            const { data } = result;

            if(data.crearAcomodosilla === true){
                cambiarMensaje({
                    titulo: "Peticion exitosa",
                    texto: "La organizacion ha sido creada correctamente",
                    boton: "Entendido",
                    error: false
                })
            }else{
                cambiarMensaje({
                    titulo: "Peticion fallida",
                    texto: "La organizacion no se ha creado, ha habido un error",
                    boton: "Entendido",
                    error: true
                })
            }
            
        }
        catch (err) {
            cambiarMensaje({
                titulo: "Peticion fallida",
                texto: err.message,
                boton: "Entendido",
                error: true
            })
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        multiple: false,
        onDrop,

    })
    
 
    return (
        <>
            <div className="formulario-admin">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Input
                        label="Tipo de acomodo de sillas"
                        name="nombre"
                        icon='clipboard outline'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.errors.nombre}
                    />
                    <input {...getInputProps()} />
                    <Button icon disabled={formik.values.nombre === "" ? true : false} {...getRootProps()} loading={loading}>
                        <Icon name="upload" />
                            {
                                " Seleccionar Imagen"
                            }
                    </Button>
                </Form>
                <div className="formulario-admin__mensaje-form">
                    <MessageForm data="Los datos que ingrese pueden ser modificados en cualquier momento." />
                </div>


            </div>
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

function emptyValues() {
    return {
        nombre: ""
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio")
    })
}

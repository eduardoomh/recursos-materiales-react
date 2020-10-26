import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { ACTUALIZAR_ACOMODOSILLA, ACTUALIZAR_ACOMODOSILLA_IMAGEN } from "../../../../gql/acomodosilla";
import { Form, Button, Loader, Image, Icon } from "semantic-ui-react";
import MessageForm from "../../../reutilizables/MessageForm/MessageForm";
import ModalBasic from "../../../reutilizables/ModalBasic/ModalBasic";
import ModalMensaje from "../../../reutilizables/ModalMensaje/ModalMensaje";
import "./FormOrganizacion.scss";

export default function FormOrganizacion(props) {
    const { solicitud } = props;
    const [loading, setLoading] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [cambiarImagen, setCambiarImagen] = useState(true);
    const [actualizarAcomodosilla] = useMutation(ACTUALIZAR_ACOMODOSILLA);
    const [actualizarAcomodosillaImagen] = useMutation(ACTUALIZAR_ACOMODOSILLA_IMAGEN);
    const [objetoMensaje, setObjetoMensaje] = useState({
        titulo: "",
        texto: "",
        boton: "",
        error: false
    })
    const history = useHistory();

    const abrirModal = () => {
        setAbrir(true);

    }

    const cerrarModal = () => {
        setAbrir(false);
        history.push(`/admin/organizacion/${solicitud.id}`);
    }

    const cambiarMensaje = (data) => {
        setObjetoMensaje(data);
        setLoading(false);
        abrirModal();
    }


    const formik = useFormik({
        initialValues: emptyValues(solicitud),
        validationSchema: validation(),
        onSubmit: async (formData) => {
            console.log(cambiarImagen)
            if(cambiarImagen === false){
                try {
                    console.log(formData)
                    setLoading(true);
                    const acomodosilla = formData;
    
                    await actualizarAcomodosilla({
                        variables: {
                            id: solicitud.id,
                            input: acomodosilla
                        }
                    });
                    cambiarMensaje({
                        titulo: "Solicitud Exitosa",
                        texto: "La organizacion se ha actualizado exitosamente!",
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

            }
        }
    })

    const onDrop = useCallback(async (acceptedFile) => {
        console.log(acceptedFile);
        const file = acceptedFile[0];

        try {
            
            setLoading(true);
            const result = await actualizarAcomodosillaImagen({ variables: { id: solicitud.id, file } });
            const { data } = result;

            if(data.actualizarAcomodosillaImagen === true){
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

                    <Button type="submit" onClick={() => setCambiarImagen(false)}>Actualizar Tipo de Acomodo</Button>

                    <div className="field">
                        <label>O actualizar imagen</label>
                    </div>
                    <Image src={solicitud.imagen} />
                    <input {...getInputProps()} />
                    <Button icon {...getRootProps()} loading={loading}>
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

function emptyValues(props) {
    return {
        nombre: props.nombre
    }
}

function validation() {
    return Yup.object({
        nombre: Yup.string().required("Este campo es obligatorio")
    })
}

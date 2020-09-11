import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./FormularioEvento.scss";

export default function FormularioEvento(){

    const departamentos = [
            { key: 'a', text: 'Ciencias de la tierra', value: 'Ciencias de la tierra' },
            { key: 'b', text: 'bioquimica', value: 'Bioquimica' },
            { key: 'c', text: 'electromecanica', value: 'electromecanica' }
        ];
    
    const locaciones = [
            { key: 'a', text: 'Ciencias de la tierra', value: 'Ciencias de la tierra' },
            { key: 'b', text: 'bioquimica', value: 'Bioquimica' },
            { key: 'c', text: 'electromecanica', value: 'electromecanica' }
    ];

    return(
        <div className="formulario-evento">
            <Form>
                <Form.Input label="Nombre del evento" />
                <Form.TextArea label="Actividades a realizar" /> 
                <Form.Select label="Departamento Solicitante" options={departamentos}/>
                <Form.Select label="Locacion Elegida" options={locaciones}/>
                <Form.Input  />
                <Form.Input />
                <p>Esto es un formulario</p>
                <Button>Crear Evento</Button>
            </Form>
            
        </div>
    )
}

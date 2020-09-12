import React from "react";
import { Form } from "semantic-ui-react";
import "./Filtrado.scss";

export default function Filtrado(props){
    const { setTitulo, setFiltro } = props;

    const options = [
        { key: 'a', text: 'Solicitudes mas recientes', value: 'recientes' },
        { key: 'o', text: 'Solicitudes mas antiguas', value: 'antiguos' },
        { key: 'm', text: 'Solicitudes del mes', value: 'mes' },
      ]; 

     const changeTitulo = (e) => {
        setFiltro(true);
        setTitulo(`${e.currentTarget.children[0].textContent}`);
     } 

    return(
        <div className="filtrado">
            <p>Filtrar por</p>
                <Form.Select
                    fluid
                    label={false}
                    options={options}
                    placeholder='selecciona una opcion'
                    onChange={(e) => changeTitulo(e)}
                /> 
        </div>
    )
}
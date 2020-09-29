import React from "react";
import { useHistory } from "react-router-dom";
import { Image, Button } from "semantic-ui-react";
import "./Recordatorio.scss";

export default function Recordatorio(props){
    const {texto, imagen, tipo, url1, url2 } = props;
    const history = useHistory();

    const gotoRoute = (ruta) => {
        history.push(ruta);
    }

    return(
        <div className="recordatorio">
            <div className="box-image">
                <Image src={imagen} />
            </div>
            
            <div className="contenido">
                <h4>{tipo}</h4>
                <p>{texto}</p> 
            </div>

            <div>
                <Button onClick={() => gotoRoute(url1)}>solicitudes de {tipo}</Button>
                <Button onClick={() => gotoRoute(url2)}>crear {tipo}</Button>
            </div>
        </div>
    )
}
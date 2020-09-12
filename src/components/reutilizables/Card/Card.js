import React from "react";
import { useHistory} from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./Card.scss";

export default function Card(props){
    const { fecha = "fecha", contenido = "contenido", status = "aprobada", tipo = "eventos", id} = props;
    const history = useHistory();

    const cardClick = () => {
        history.push(`/${tipo}/${id}`);
    }

    return(
        <article className="card" onClick={() => cardClick()}>
            <p className="fecha">{fecha}</p>
            <p className="contenido">{contenido}</p>
            <p className="status">
                { status === "aprobada" ? <Icon name="check"/> : <Icon name="warning" className="pendiente" />}
                
            </p>
        </article>
    )
}
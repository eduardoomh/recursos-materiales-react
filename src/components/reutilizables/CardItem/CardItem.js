import React from "react";
import { useHistory} from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./CardItem.scss";

export default function CardItem(props){
    const {tipo, id, fecha, contenido, status } = props;
    const history = useHistory();
    const cardClick = () => {

        return history.push(`/${tipo}/${id}`);
    }

    return(
        <article className="cardItem" onClick={() => cardClick()}>
            <p className="fecha">{fecha}</p>
            <p className="status">{status === false ? "No aprobada" : "aprobada"} <Icon name="arrow alternate circle right" /></p>
            <p className="contenido">{contenido}</p>
        </article>
    )
}
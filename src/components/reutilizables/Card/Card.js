import React from "react";
import { useHistory} from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./Card.scss";

export default function Card(props){
    const {tipo, id, footer, contenido } = props;
    const history = useHistory();
    const cardClick = () => {

        return history.push(`/admin/${tipo}/${id}`);
    }

    return(
        <article className="card" onClick={() => cardClick()}>
            <p className="revisar">{footer}<Icon name="arrow alternate circle right" /></p>
            <p className="contenido">{contenido}</p>
        </article>
    )
}
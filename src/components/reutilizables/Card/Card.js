import React from "react";
import { useHistory} from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import "./Card.scss";

export default function Card(props){
    const {tipo, id, contenido } = props;
    const history = useHistory();
    const cardClick = () => {

        return history.push(`/admin/${tipo}/${id}`);
    }

    return(
        <article className="card" onClick={() => cardClick()}> 
            <p className="contenido">{contenido}</p>
            <p className="botones">
                <Icon name="angle right" size="big"  />
            </p>
        </article>
    )
}
import React from "react";
import { useHistory} from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import "./Card.scss";

export default function Card(props){
    const {tipo, id, footer, contenido } = props;
    const history = useHistory();
    const cardClick = () => {

        return history.push(`/admin/${tipo}/${id}`);
    }

    return(
        <article className="card"> 
            <p className="contenido">{contenido}</p>
            <p className="botones">
                <Button onClick={() => cardClick()} className="boton-guindo" icon labelPosition="right">
                    Mas informacion
                    <Icon name="angle right" />
                </Button> 
            </p>
        </article>
    )
}
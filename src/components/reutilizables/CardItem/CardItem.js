import React from "react";
import { useHistory} from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import "./CardItem.scss";

export default function CardItem(props){
    const {tipo, id, fecha, contenido } = props;
    const history = useHistory();
    const cardClick = () => {

        return history.push(`/${tipo}/${id}`);
    }

    return(
        <article className="cardItem"> 
            <p className="contenido">{contenido}</p>
            <p className="fecha">{transformarFecha(fecha)}</p>
            <p className="botones">
                <Button onClick={() => cardClick()} className="boton-guindo" icon labelPosition="right">
                    Ver Solicitud
                    <Icon name="angle right" />
                </Button> 
            </p>
        </article>
    )
}
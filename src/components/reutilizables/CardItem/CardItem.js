import React from "react";
import { useHistory} from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import "./CardItem.scss";

export default function CardItem(props){
    const {tipo, id, fecha, contenido } = props;
    const history = useHistory();
    let icono;

    const cardClick = () => {

        return history.push(`/${tipo}/${id}`);
    }

    switch(tipo){
        case "eventos":
            icono = "address book"
            break;
        case "mantenimientos":
            icono = "cogs"
            break;
        case "salidas":
            icono = "car"
            break;
        default:
            break;
    }

    return(
        <article className="cardItem"> 
            <div className="cardItem__icono">
                <Icon name={icono} size="big" color="red" />
            </div>
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
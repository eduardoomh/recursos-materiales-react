import React from "react";
import { useHistory} from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import "./CardItem.scss";

export default function CardItem(props){
    const {tipo, id, fecha, contenido, aprobado } = props;
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
        <article className="cardItem" onClick={() => cardClick()}> 
            <div className="cardItem__icono">
                <Icon name={icono} size="big" color="red" />
            </div>
            <p className="contenido">{contenido}</p>
            <p className="fecha">{transformarFecha(fecha)}</p>
            <p className="botones">
            <p>{aprobado ? "Aprobado" : "pendiente"}</p>
                <Icon name="angle right" size="big" color="red" />
            </p>
        </article>
    )
}
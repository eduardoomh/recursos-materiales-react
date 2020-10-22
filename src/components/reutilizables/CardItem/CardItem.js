import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Popup } from "semantic-ui-react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import "./CardItem.scss";

export default function CardItem(props) {
    const { tipo, id, fecha, contenido, aprobado } = props;
    const history = useHistory();

    const cardClick = () => {

        return history.push(`/${tipo}/${id}`);
    }

    return (
        <article className="cardItem" onClick={() => cardClick()}>
            <div className="cardItem__icono">
                <Popup
                    trigger={
                    <div>
                        <Icon name="images" size="big" color="grey" />
                    </div>
                    }
                    content='No hay evidencias subidas'
                    inverted
                    position='bottom left'
                />

            </div>
            <p className="contenido">{contenido}</p>
            <p className="fecha"><Icon name="clock" color="grey" />{transformarFecha(fecha)}</p>
            <p className="botones">
                <p>{aprobado ? "Aprobado" : "pendiente"}</p>
                <Icon name="angle right" size="big" color="red" />
            </p>
        </article>
    )
}
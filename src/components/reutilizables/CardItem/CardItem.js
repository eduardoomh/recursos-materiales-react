import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Popup } from "semantic-ui-react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import "./CardItem.scss";

export default function CardItem(props) {
    const { tipo, id, fecha, contenido, aprobado, evidencias } = props;
    const history = useHistory();
    let imagenes = evidencias === 1 ? `Existe ${evidencias} imagen subida` : `Existen ${evidencias} imagenes subidas`;

    const cardClick = () => {

        return history.push(`/${tipo}/${id}`);
    }

    return (
        <article className="cardItem" onClick={() => cardClick()}>
            <div className="cardItem__icono">
                <Popup
                    trigger={
                        <div className={evidencias === 0 ? "" : "color-evidencia"}>
                            <Icon name="images" size="big" color={evidencias === 0 ? "grey" : "black"} />
                        </div>
                    }
                    content={evidencias === 0 ? 'No hay evidencias subidas' : imagenes}
                    inverted
                    position='bottom left'
                />

            </div>
            <p className="contenido">{contenido}</p>
            <p className="fecha"><Icon name="clock" color="grey" />{transformarFecha(fecha)}</p>
            <p className="botones">
                <p>{
                    aprobado ?
                        <Popup
                            trigger={
                                <Icon name="thumbs up" color="teal" className="botones__icon" />
                            }
                            content="Aprobada"
                            inverted
                            position='top left'
                            className="green-icon"
                        />

                        :
                        <Popup
                            trigger={
                                <Icon name="thumbs down" className="botones__icon-pendiente"/>
                            }
                            content="Pendiente"
                            inverted
                            position='top left'
                            
                        />

                }
                </p>
            </p>
        </article>
    )
}
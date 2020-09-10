import React from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./CardCarrousel.scss";
import Card from "../Card/Card";

export default function CardCarrousel(props) {
    const { titulo, data } = props;
    const history = useHistory();


    const carrouselRoute = () => {
        history.push(`/${titulo.toLowerCase()}`);
    }


    return (
        <article className="card-carrousel">
            <p className="titulo">Solicitudes de {titulo}</p>
            <div>
                {
                    data ? 
                    data.map(d => 
                        <Card fecha={d.fecha} contenido={d.contenido} status={d.status} tipo={titulo.toLowerCase()}
                        />
                    ) 
                    : "El contenido se esta cargando.."
                }

            </div>
            <Icon name="angle right" size="big"  onClick={() => carrouselRoute() }/>

        </article>
    )
}
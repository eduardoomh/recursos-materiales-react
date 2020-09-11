import React from "react";
import { useHistory } from "react-router-dom";
import { getStorage } from "../../../servicios/reutilizables/localStorage";
import { Icon } from "semantic-ui-react";
import "./CardCarrousel.scss";
import Card from "../Card/Card";

export default function CardCarrousel(props) {
    const { titulo, data, loading } = props;
    const history = useHistory();


    const carrouselRoute = () => {
        history.push(`/${titulo.toLowerCase()}`);
    }

    if(loading) return null;

    return (
        <article className="card-carrousel">
            <p className="titulo">Solicitudes de {titulo}</p>
            <div>
                {
                    data ? 
                    data.map(d => 
                        <Card key={d.id} fecha={d.fecha} contenido={d.evento || d.trabajo_realizado || d.destino} status={d.status} tipo={titulo.toLowerCase()}
                        />
                    ) 
                    : "El contenido se esta cargando.."
                }

            </div>
            <Icon name="angle right" size="big"  onClick={() => carrouselRoute() }/>

        </article>
    )
}
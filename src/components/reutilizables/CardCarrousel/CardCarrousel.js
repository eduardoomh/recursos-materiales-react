import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./CardCarrousel.scss";
import Card from "../Card/Card";

export default function CardCarrousel(props) {
    const { titulo, data, loading } = props;
    const history = useHistory();


    const carrouselRoute = () => {
        history.push(`/${titulo.toLowerCase()}`);
    }

    const arraySolicitud = (arr) => {
        return [arr[0], arr[1], arr[2], arr[3], arr[4]];
    }

    const elementos = arraySolicitud(data);
    

    if(loading) return null;

    return (
        <article className="card-carrousel">
            <p className="titulo">Solicitudes de {titulo}</p>
            <div>
                {
                    elementos && elementos.length > 0 ? 
                    elementos.map(e => 
                        <Card 
                            key={e.id} 
                            fecha={e.fecha} 
                            contenido={e.evento || e.trabajo_realizado || e.destino} status={e.status} tipo={titulo.toLowerCase()}
                            id={e.id}
                        />
                    ) 
                    : "El contenido se esta cargando.."
                }

            </div>
            <Icon name="angle right" size="big"  onClick={() => carrouselRoute() }/>

        </article>
    )
}
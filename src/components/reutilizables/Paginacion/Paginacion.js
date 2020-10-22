import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import "./Paginacion.scss";


export default function Paginacion(props){
    const { setPagina, pagina, cantidad, longitud } = props;

    const siguiente = () => {
        setPagina(pagina + 1);
    }

    const anterior = () => {
        setPagina(pagina - 1);
    }

    return(
        <div className="lista-paginacion">
            <Popup
                trigger={                            
                    <Icon
                        name="angle left"
                        bordered
                        onClick={() => anterior()}
                        link={pagina === 1 ? false : true}
                        size="large"
                        disabled={pagina === 1 ? true : false}
                    />
            }
                content='Pagina Anterior'
                hideOnScroll
                inverted
            />
            <p>{pagina}</p>

            <Popup
                trigger={
                    <Icon
                        name="angle right"
                        bordered
                        onClick={() => siguiente()}
                        link={longitud === 0 || longitud < cantidad ? false : true}
                        size="large"
                        disabled={longitud === 0 || longitud < cantidad ? true : false}
                    />
                }
                content='Pagina Siguiente'
                hideOnScroll
                inverted
            />
    </div>
    )
}
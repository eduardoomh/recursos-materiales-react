import React from "react";
import Card from "../Card/Card";
import Paginacion from "../Paginacion/Paginacion";
import "./Grid.scss";

export default function Grid(props) {
    const { data, tipo, pagina, setPagina, cantidad,  setLoading } = props;

    return (
        <div className="grid-box">
            {
                data.length === 0 ?
                    <p className="empty">No existen solicitudes de esta categoria aun.</p>
                    :
                    <div className="grid-box__map">
                        {
                            data.map(
                                c =>
                                    <Card
                                        tipo={tipo}
                                        id={c.id}
                                        key={c.id}
                                        footer="revisar"
                                        contenido={c.nombre || `${c.usuario.nombre} ${c.usuario.apellidos}`}
                                    />
                            )
                        }

                    </div>
            }
                        {
                data.length === 0 && pagina === 1 ? (
                    <p></p>
                )
                    :
                    (
                      <Paginacion 
                            setLoading={setLoading}
                            setPagina={setPagina}
                            pagina={pagina}
                            cantidad={cantidad}
                            longitud={data.length}
                       />
                    )
            }

        </div>
    )
}
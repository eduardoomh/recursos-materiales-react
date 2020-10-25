import React from "react";
import { Image } from "semantic-ui-react";
import CardItem from "../CardItem/CardItem";
import Paginacion from "../Paginacion/Paginacion";
import noDatos from "../../../assets/img/no_hay_datos.jpg";
import "./List.scss";

export default function Lista(props) {
    const { data, tipo, pagina, setPagina, cantidad, setLoading } = props;

    return (
        <div className="list-box">

            {
                data.length === 0 ?
                    (
                        <>
                            <div className="list-box__imagen">
                                <Image src={noDatos} />
                            </div>
                            <p className="empty">No hay datos para mostrar.</p>
                        </>
                    )
                    :
                    <div className="list-box__map">
                        {
                            data.map(
                                c =>
                                    <CardItem
                                        tipo={tipo}
                                        id={c.id}
                                        key={c.id}
                                        fecha={c.fecha}
                                        status={c.aprobado}
                                        contenido={c.nombre || c.destino}
                                        aprobado={c.aprobado}
                                        evidencias={c.evidencias}
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
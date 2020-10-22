import React from "react";
import { Image } from "semantic-ui-react";
import CardUser from "../../../reutilizables/CardUser/CardUser";
import Paginacion from "../../../reutilizables/Paginacion/Paginacion";
import { formatDate } from "../../../../utils/reutilizables/fecha";
import noDatos from "../../../../assets/img/no_hay_datos.jpg";
import "./ListadoUsuarios.scss";

export default function ListadoUsuarios(props) {
    const { data, refrescarAprobados, refrescarPendientes, refrescarInactivos, cantidad, pagina, setPagina } = props;
    console.log(data);

    return (
        <div className="listado-usuarios">
            {
                data && data.length > 0 ?
                    <div className="listado-usuarios__map">
                        {
                            data.map(d =>
                                <CardUser
                                    key={d.id}
                                    nombre={`${d.nombre} ${d.apellidos}`}
                                    avatar={d.avatar}
                                    fecha={formatDate(d.createdAt)}
                                    id={d.id}
                                    refrescarPendientes={refrescarPendientes}
                                    refrescarAprobados={refrescarAprobados}
                                    refrescarInactivos={refrescarInactivos}
                                />
                            )
                        }
                    </div>
                    : 
                    <>
                        <div className="listado-usuarios__imagen">
                            <Image src={noDatos} />
                        </div>
                        <p className="listado-usuarios__mensaje">No hay usuarios en esta categoria</p>
                    </>
            }
            {
                data.length === 0 && pagina === 1 ? (
                    <p></p>
                )
                    :
                    (
                        <Paginacion
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
import React from "react";
import { transformarFecha } from "../../../utils/reutilizables/fecha";
import Card from "../Card/Card";
import "./Grid.scss";

export default function Grid(props) {
    const { data, tipo } = props;

    const fechha = (d) => {
        return transformarFecha(d);
    }

    return (
        <div className="grid">
            {   data && data.length !== 0 ?
                data.map(

                    d => (
                        <Card
                            fecha={fechha(d.fecha) || "2020-05-17"}
                            contenido={d.evento || d.destino || d.trabajo_realizado}
                            status={d.status}
                            tipo={tipo}
                            key={d.id}
                            id={d.id}
                        />
                    )
                )
                :
                <p className="empty">No existen solicitudes de esta categoria aun.</p>
            }
            {
                data && data.length !== 0 ? (
                    <>
                        <Card key={1} />
                        <Card key={2} />
                        <Card key={3} />
                        <Card key={4} />
                        <Card key={5} />
                    </>

                ) : (
                        ""
                    )

            }

        </div>

    );
}
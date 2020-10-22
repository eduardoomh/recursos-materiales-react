import React from "react";
import { Link } from "react-router-dom";
import { Icon, Image, Popup } from "semantic-ui-react";
import reservaCalendario from "../../../assets/img/reserva-calendario.jpg"
import "./Banner.scss";

export default function Banner(props) {
    const {count} = props;
    return (
        <div className="banner">
            <div className="banner-info">

                <h1>Consulte todas las solicitudes para Eventos, Mantenimientos y salidas de vehiculos.</h1>


                <div className="boton-box">
                    <Popup
                        content={<p>Ver Calendario <Icon name="angle right" /></p>}
                        position='bottom center'
                        inverted
                        trigger={
                            <Link to="/calendario">
                                <div className="boton-box__calendario-pendientes">
                                    <Image src={reservaCalendario} />
                                    {
                                        count === 0  && (
                                            <p>No Hay solicitudes para hoy</p>
                                        )
                                    }
                                    {
                                         count === 1  && (
                                            <p>Hay {count} solicitud a realizarse hoy</p>
                                        )
                                    }
                                    {
                                        count > 0 && count !== 1 && (
                                            <p>Hay {count} solicitudes a realizarse hoy</p>
                                        )
                                    }
                                    
                                </div>
                            </Link>
                        } />

                </div>


            </div>

        </div>
    )
}
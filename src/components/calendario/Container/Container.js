import React from "react";
import { sub, add } from 'date-fns';
import { format, getDate, getMonth, getYear, getDaysInMonth, endOfMonth, startOfMonth } from "date-fns";
import { es } from 'date-fns/locale'
import { useQuery } from "@apollo/client";
import { EVENTO_FECHAS } from "../../../gql/evento";
import { MANTENIMIENTO_FECHAS } from "../../../gql/mantenimiento";
import ModalCalendario from "../Modal/ModalCalendario";
import { Icon } from "semantic-ui-react";
import { Loader, Popup } from "semantic-ui-react";
import "./Container.scss";

export default function Container(props) {
    const { setLoading, fecha, setFecha, inicio, final, setInicio, setFinal, abrir, abrirModal, cerrarModal, evntArr, mntoArr, setEvntArr, setMntoArr } = props;
    let arrayEventos = [];
    let arrayMantenimientos = [];
    let eventoDia;
    let mantenimientoDia;

    const semanaDias = [
        "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"
    ];

    let diasMes = [];
    let fechaActual = format(new Date(), "MMMM' del 'yyyy", { locale: es });
    let fechaComparacion = format(new Date(fecha), "MMMM' del 'yyyy", { locale: es });
    var currentDay = getDate(new Date(fecha));
    var currentMonth = getMonth(new Date(fecha));
    var currentYear = getYear(new Date(fecha));
    var dateToday = format(new Date(currentYear, currentMonth, currentDay), "MMMM' del 'yyyy", { locale: es });
    var diasDelMes = getDaysInMonth(new Date(currentYear, currentMonth, currentDay));
    var primerDiaMes = format(startOfMonth(new Date(currentYear, currentMonth, currentDay)), "i");
    setInicio(format(startOfMonth(new Date(currentYear, currentMonth, currentDay)), "yyyy-MM-dd"));
    setFinal(format(endOfMonth(new Date(currentYear, currentMonth, currentDay)), "yyyy-MM-dd"));

    for (let i = 1; i < primerDiaMes; i++) {
        diasMes.push(" ")
    }

    for (let i = 1; i < diasDelMes + 1; i++) {
        diasMes.push(i);

    }

    for (let i = 0; i < 42 - diasDelMes - primerDiaMes + 1; i++) {
        diasMes.push(" ")
    }

    const { data: eventos, loading: loadingEventos, refetch: refrescarEventos } = useQuery(EVENTO_FECHAS, {
        variables: {
            input: {
                inicio: `${inicio}`,
                final: `${final}`
            }
        }
    })

    const { data: mantenimientos, loading: loadingMantenimientos, refetch: refrescarMantenimientos } = useQuery(MANTENIMIENTO_FECHAS, {
        variables: {
            input: {
                inicio: `${inicio}`,
                final: `${final}`
            }
        }
    })

    const eventoFecha = (values) => {
        if (values.length > 0) {
            values.map(arr => {
                let dat = parseInt(arr.fecha.substring(arr.fecha.length - 2));
                return arrayEventos.push(dat)
            })
        }

    }

    const mantenimientoFecha = (values) => {
        if (values.length > 0) {
            values.map(arr => {
                let dat = parseInt(arr.fecha.substring(arr.fecha.length - 2));
                return arrayMantenimientos.push(dat)
            })
        }
    }

    const anteriorFecha = () => {
        setLoading(true);
        const result = sub(new Date(fecha), {
            months: 1
        })
        setFecha(result);
        refrescarFechas(result);
        refrescarEventos();
        refrescarMantenimientos();
        setLoading(false);
    }

    const siguienteFecha = () => {
        setLoading(true);
        var result = add(new Date(fecha), {
            months: 1
        })
        setFecha(result);
        refrescarFechas(result);
        refrescarEventos();
        refrescarMantenimientos();
        setLoading(false);
    }

    const eventoDiaEvaluacion = (dia) => {
        eventoDia = arrayEventos.find(arr => arr === dia)
    }

    const mantenimientoDiaEvaluacion = (dia) => {
        mantenimientoDia = arrayMantenimientos.find(arr => arr === dia)
    }

    const modalDatos = async (d, evnt, mnto) => {
        setEvntArr(await evnt.filter(val => parseInt(val.fecha.substring(val.fecha.length - 2)) === d));
        setMntoArr(await mnto.filter(val => parseInt(val.fecha.substring(val.fecha.length - 2)) === d));

        abrirModal();
    }

    const refrescarFechas = (fecha) => {
        fechaComparacion = format(new Date(fecha), "MMMM' del 'yyyy", { locale: es });
        currentDay = getDate(new Date(fecha));
        currentMonth = getMonth(new Date(fecha));
        currentYear = getYear(new Date(fecha));
        dateToday = format(new Date(currentYear, currentMonth, currentDay), "MMMM' del 'yyyy", { locale: es });
        diasDelMes = getDaysInMonth(new Date(currentYear, currentMonth, currentDay));
        primerDiaMes = format(startOfMonth(new Date(currentYear, currentMonth, currentDay)), "i");
        setInicio(format(startOfMonth(new Date(currentYear, currentMonth, currentDay)), "yyyy-MM-dd"));
        setFinal(format(endOfMonth(new Date(currentYear, currentMonth, currentDay)), "yyyy-MM-dd"));

    }
    if (loadingMantenimientos && loadingEventos) return <Loader active />

    return (
        <div className="container-calendar">
            {
                eventos && !loadingEventos && mantenimientos && !loadingMantenimientos && (
                    <div id="calendario">
                        {
                            eventoFecha(eventos.eventoFechas)
                        }
                        {
                            mantenimientoFecha(mantenimientos.mantenimientoFechas)
                        }
                        <div className="header-calendar">
                            <Popup
                                trigger={<Icon name="angle left" onClick={anteriorFecha} link size="big" />}
                                content='Ir al mes anterior'
                                inverted
                                position="left center"
                            />
                            <p>{dateToday}</p>
                            <Popup
                                trigger={<Icon name="angle right" onClick={siguienteFecha} link size="big" />}
                                content='Ir al mes siguiente'
                                inverted
                                position="right center"
                            />
                            
                        </div >
                        <div className="header-dias">
                            {
                                semanaDias.map(sem => <p key={sem}>{sem}</p>)
                            }
                        </div>
                        <div className="box-calendar">
                            {
                                diasMes.map(dia => (
                                    <span key={dia === " " ? Math.random() : dia} className="diaBox">
                                        {
                                            eventoDiaEvaluacion(dia)
                                        }
                                        {
                                            mantenimientoDiaEvaluacion(dia)
                                        }
                                        <span className={dia === currentDay && fechaActual === fechaComparacion ? "number" : ""}>{dia}</span>
                                        <div onClick={() => modalDatos(dia, eventos.eventoFechas, mantenimientos.mantenimientoFechas)} className="diaBox__box">
                                            <span className="iconos">
                                                {
                                                    dia === eventoDia ?
                                                        <Popup
                                                            trigger={<Icon name="address book" size="large" color="red" />}
                                                            content='Evento'
                                                            inverted
                                                        />
                                                        :
                                                        ""
                                                }
                                            </span>
                                            <span className="iconos">
                                                {
                                                    dia === mantenimientoDia ?
                                                        <Popup
                                                            trigger={<Icon name="cogs" size="large" color="red" />}
                                                            content='Mantenimiento'
                                                            inverted
                                                        />
                                                        :
                                                        ""
                                                }</span>
                                        </div>

                                    </span>
                                ))
                            }

                        </div>

                        <ModalCalendario
                            cerrarModal={cerrarModal}
                            abrir={abrir}
                            eventos={evntArr}
                            mantenimientos={mntoArr}
                        />

                    </div>

                )
            }
        </div>
    )
} 
import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import Buscador from "../Buscador/Buscador";
import "./Filtrado.scss";

export default function Filtrado(props) {
    const { setTitulo, setFiltro, tipo, query } = props;
    const [abrir, setAbrir] = useState(false);

    const ordenadoOpciones = [
        { key: 'a', text: 'Fecha de Realizacion', value: 'realizacion' },
        { key: 'b', text: 'Fecha de Creacion', value: 'creacion' }
    ];

    const filtradoOpciones = [
        { key: 'a', text: 'Aprobadas', value: 'aprobadas' },
        { key: 'b', text: 'Pendientes', value: 'pendientes' },
        { key: 'c', text: 'Mes Reciente', value: 'mes' }
    ];

    const filtradoMantenimiento = [
        { key: 'd', text: 'Servicio', value: 'servicio' },
        { key: 'e', text: 'Reparacion', value: 'reparacion' },
        { key: 'f', text: 'Transporte', value: 'transporte' },
    ]

    const changeTitulo = (e) => {
        setFiltro(true);
        setTitulo(`Ordenado por ${e.currentTarget.children[0].textContent}`);
    }

    const cerrarModal = () => {
        setAbrir(false);
    }

    return (
        <div className="filtrado">
            <div className="filtrado-box">
                <p>Ordenar</p>
                <Form.Select
                    fluid
                    label={false}
                    options={ordenadoOpciones}
                    placeholder='selecciona una opcion'
                    onChange={(e) => changeTitulo(e)}
                />
            </div>
            {
                tipo === "mantenimiento" && (
                    <div className="filtrado-box">
                        <p>Tipo</p>
                        <Form.Select
                            fluid
                            label={false}
                            options={filtradoMantenimiento}
                            placeholder='selecciona una opcion'
                            onChange={(e) => changeTitulo(e)}
                        />
                    </div>
                )
            }
            <div className="filtrado-box">
                <p>Filtrar</p>
                <Form.Select
                    fluid
                    label={false}
                    options={filtradoOpciones}
                    placeholder='selecciona una opcion'
                    onChange={(e) => changeTitulo(e)}
                />
            </div>
            <div className="filtrado-box">
                <p>Buscar</p>
                <Icon className="icono-buscar" name="search" bordered link onClick={() => setAbrir(true)} />
            </div>
            <Buscador abrir={abrir} cerrar={cerrarModal} tipo={tipo} query={query}/>
        </div>
    )
}
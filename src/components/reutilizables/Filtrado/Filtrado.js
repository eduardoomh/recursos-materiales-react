import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import Buscador from "../Buscador/Buscador";
import "./Filtrado.scss";

export default function Filtrado(props) {
    const { setTitulo, tipo, query, orden, filtro } = props;
    const [abrir, setAbrir] = useState(false);

    const ordenadoOpciones = [
        { key: 'a', text: 'Realización Ascendente', value: 're_asc' },
        { key: 'b', text: 'Realización Descendente', value: 're_des' },
        { key: 'c', text: 'Creación Ascendente', value: 'cre_as' },
        { key: 'd', text: 'Creación Descendente', value: 'cre_des' }
    ];

    const filtradoOpciones = [
        { key: 'a', text: 'Aprobadas', value: 'aprobadas' },
        { key: 'b', text: 'Pendientes', value: 'pendientes' },
        { key: 'c', text: 'Verificadas', value: 'verificadas' },
        { key: 'd', text: 'Mes Actual', value: 'mes' },
        { key: 'e', text: 'Sin filtro', value: 'ningun' }
    ];

    const filtradoSalida = [
        { key: 'd', text: 'Mes Actual', value: 'mes' },
        { key: 'e', text: 'Sin filtro', value: 'ningun' }
    ];

    const changeOrden = (e) => {
        let val = e.currentTarget.children[0].textContent;

        switch (val) {
            case "Realización Ascendente":
                orden({ fecha: -1 });
                break;
            case "Realización Descendente":
                orden({ fecha: 1 });
                break;
            case "Creación Ascendente":
                orden({ createdAt: -1 });
                break;
            case "Creación Descendente":
                orden({ createdAt: 1 });
                break;
            default:
                break;
        }
        setTitulo(`Ordenado por ${val}`);

    }

    const changeFiltro = (e) => {
        let val = e.currentTarget.children[0].textContent;

        switch (val) {
            case "Aprobadas":
                filtro("aprobados");
                break;
            case "Pendientes":
                filtro("pendientes")
                break;
            case "Verificadas":
                filtro("verificados");
                break;
            case "Mes Actual":
                filtro("mes actual");
                break;
            case "Sin filtro":
                filtro("");
                break;
            default:
                break;
        }
        setTitulo(`Ordenado por ${val}`);
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
                    onChange={(e) => changeOrden(e)}
                />
            </div>
            <div className="filtrado-box">
                <p>Filtrar</p>
                <Form.Select
                    fluid
                    label={false}
                    options={tipo === "salida" ? filtradoSalida : filtradoOpciones}
                    placeholder='selecciona una opcion'
                    onChange={(e) => changeFiltro(e)}
                />
            </div>
            <div className="filtrado-box">
                <p>Buscar</p>
                <Icon className="icono-buscar" name="search" bordered link onClick={() => setAbrir(true)} />
            </div>
            <Buscador abrir={abrir} cerrar={cerrarModal} tipo={tipo} query={query} />
        </div>
    )
}